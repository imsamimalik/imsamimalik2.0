import { useState, useEffect } from "react";

import {
    CreateDiv,
    Form,
    GoogleBtn,
    Alert,
    AdminPopup,
    FormContainer,
} from "./LoginStyles";

import { storage, db, auth, provider } from "../firebase";
import { Icon } from "react-icons-kit";
import { powerOff } from "react-icons-kit/fa/powerOff";
import { Helmet } from "react-helmet";

function Login() {
    const [name, setName] = useState("");
    const [framework, setFramework] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [id, setId] = useState("");
    const [filename, setFilename] = useState("Choose File...");
    const [user, setUser] = useState("");
    const [successToggle, setSuccessToggle] = useState(false);
    const [email] = useState(process.env.REACT_APP_EMAIL);
    const [wrongUser, setWrongUser] = useState(false);
    const [toggleDialogue, setToggleDialogue] = useState(true);

    const [numData, setnumData] = useState([]);

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                setUser(result.user.email);
                if (user !== process.env.REACT_APP_EMAIL) {
                    setToggleDialogue(true);
                }
                setWrongUser(true);
                localStorage.setItem(
                    "imsamimalikSecurityId",
                    JSON.stringify(result.user.uid)
                );

                localStorage.setItem(
                    "adminPhoto",
                    JSON.stringify(result.user.photoURL)
                );
            })
            .catch((err) => alert(err.message));
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    };

    useEffect(() => {
        const unsub = db.collection("all")
            .orderBy("id", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                setnumData(snapshot.docs.map((doc) => doc?.data()));
            });
            return ()=> unsub();
    }, []);

    

    const handleUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshpot) => {
                const progress = Math.round(
                    (snapshpot.bytesTransferred / snapshpot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("all").add({
                            id: +id,
                            title: name,
                            imgUrl: url,
                            framework: framework,
                            link: link,
                            description: description,
                        });
                        setTimeout(() => {
                            setSuccessToggle(true);
                        }, 1);
                        setTimeout(() => {
                            setSuccessToggle(false);
                        }, 1500);
                        setImage("");
                        setName("");
                        setLink("");
                        setFramework("");
                        setDescription("");
                        setId(id);
                        setProgress(0);
                        setFilename("Choose File...");
                    });
            }
        );
    };
    const signOut = () => {
        auth.signOut().then(console.log("signed out."));
        localStorage.removeItem("imsamimalikSecurityId");
        localStorage.removeItem("adminPhoto");
        setUser("");
        setToggleDialogue(false);
    };
    return (
        <>
            <Helmet>
                <title>Login - imsamimalik</title>
            </Helmet>
            <CreateDiv>
                {JSON.parse(localStorage.getItem("imsamimalikSecurityId")) ===
                    process.env.REACT_APP_UID ||
                user === process.env.REACT_APP_EMAIL ? (
                    <>
                        <AdminPopup onClick={signOut}>
                            <Icon icon={powerOff}></Icon>
                        </AdminPopup>
                        <FormContainer>
                            <Form className="form" onSubmit={handleUpload}>
                                <input
                                    onChange={(e) => setId(e.target.value)}
                                    value={id}
                                    type="number"
                                    min="0"
                                    max="1000"
                                    placeholder={`Enter id ${
                                        numData[0]?.id + 1
                                    }`}
                                    required
                                />
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Enter title"
                                    required
                                />
                                <input
                                    onChange={(e) =>
                                        setFramework(e.target.value)
                                    }
                                    value={framework}
                                    type="text"
                                    placeholder="Enter framework"
                                    required
                                />
                                <input
                                    onChange={(e) => setLink(e.target.value)}
                                    value={link}
                                    type="text"
                                    placeholder="Enter link"
                                    required
                                />
                                <label className="file">
                                    <input
                                        onChange={handleChange}
                                        type="file"
                                        required
                                    />
                                    <span className="file-custom">
                                        {filename}
                                    </span>
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    value={description}
                                    type="text"
                                    placeholder="Enter description"
                                    required
                                ></textarea>
                                <progress
                                    className="progress"
                                    value={progress}
                                    max="100"
                                />

                                {successToggle && <Alert>Item added</Alert>}
                                <button
                                    disabled={
                                        !name ||
                                        !framework ||
                                        !id ||
                                        !link ||
                                        !image
                                    }
                                >
                                    Submit
                                </button>
                            </Form>
                        </FormContainer>
                    </>
                ) : (
                    <GoogleBtn onClick={signIn}>
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google logo"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </GoogleBtn>
                )}
                {user !== email && wrongUser && toggleDialogue ? (
                    <h1
                        className="invalidUser"
                        style={{ marginTop: "60px", zIndex: "999999999" }}
                    >
                        You're not authorized to access this page.
                    </h1>
                ) : (
                    ""
                )}
            </CreateDiv>
        </>
    );
}

export default Login;
