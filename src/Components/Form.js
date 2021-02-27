import React from "react";
import { Card, FormField, ResponseOutput, SubmitFrame } from "./FormStyles";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";
import { at } from "react-icons-kit/fa/at";
import { envelope } from "react-icons-kit/fa/envelope";
const Form = () => {
    return (
        <Card>
            <div
                role="form"
                className="contact-form"
                id="contact-01"
                lang="en-US"
                dir="ltr"
            >
                <form method="post" className="form init" data-status="init">
                    <div className="contact-form">
                        <FormField className="form-field">
                            <span className="form-control-wrap your-name">
                                <input
                                    type="text"
                                    name="your-name"
                                    size="40"
                                    className="form-control text validates-as-required input"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Name"
                                    required
                                />
                            </span>
                            <label>
                                <Icon icon={user}></Icon>
                            </label>
                        </FormField>
                        <FormField className="form-field">
                            <span className="form-control-wrap your-email">
                                <input
                                    type="email"
                                    name="your-email"
                                    size="40"
                                    className="form-control text email validates-as-required validates-as-email input"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Email"
                                    required
                                />
                            </span>
                            <label>
                                <Icon icon={at}></Icon>
                            </label>
                        </FormField>
                        <FormField className="form-field">
                            <span className="form-control-wrap your-message">
                                <textarea
                                    name="your-message"
                                    cols="40"
                                    rows="10"
                                    className="form-control textarea validates-as-required input"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </span>
                            <label>
                                <Icon icon={envelope}></Icon>
                            </label>
                        </FormField>
                        <SubmitFrame className="submit-frame">
                            <button className="btn btn-md submit" type="submit">
                                <span>Send message</span>
                            </button>
                        </SubmitFrame>
                    </div>
                    <ResponseOutput
                        className="response-output"
                        aria-hidden="true"
                    ></ResponseOutput>
                </form>
            </div>
        </Card>
    );
};

export default Form;
