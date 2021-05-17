import { Link } from "wouter";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Typed from "../Components/Typewriter";
import {
  Banner,
  BannerBack,
  BannerOverlay,
  BannerPhoto,
  BannerTitle,
  CounterFrame,
  OrderNow,
  ServiceBox,
  SectionTitle,
  H6,
  H5,
  H4,
} from "../Styles/Pages/HomeStyles";
import {
  Header,
  Avatar,
  AvatarCurtain,
  AvatarCurtainImg,
  LampLight,
  AvailableLamp,
  Name,
  NameA,
  SmText,
} from "../Styles/Components/SidebarStyles";
import AvatarImgSrc from "../Assets/images/avatar.jpg";
import MeImgSrc from "../Assets/images/me.webp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>imsamimalik - it&apos;s not just a name</title>
      </Helmet>

      <div
        className="container-fluid"
        style={{
          overflow: "hidden",
          padding: "0 30px",
          position: "relative",
        }}
      >
        <div className="row p-30-0 p-lg-30-0 p-md-15-0">
          <div className="col-lg-12">
            <Header className="mobile">
              <Avatar>
                <AvatarCurtain>
                  <AvatarCurtainImg src={AvatarImgSrc} alt="avatar" />
                </AvatarCurtain>
                <LampLight>
                  <AvailableLamp />
                </LampLight>
              </Avatar>
              <Name className="mb-10">
                <NameA rel="noreferrer" href="https://github.com/imsamimalik">
                  Sami Malik
                </NameA>
              </Name>
              <SmText>
                Full Stack Web Developer <br />
                Freelancer
              </SmText>
            </Header>
            <Banner className="banner">
              <BannerBack className="banner-back" />
              <BannerOverlay className="banner-overlay">
                <BannerTitle className="banner-title">
                  <h1 className="mb-15">
                    <span>Hello World, I&apos;m alive!</span>
                  </h1>
                  <div className="lg-text code mb-25">
                    <span className="white">
                      &lt;<i>code</i>&gt;
                    </span>
                    <span className="white">
                      I build <Typed />
                    </span>
                    <span className="white">
                      &lt;/<i>code</i>&gt;
                    </span>
                  </div>
                  <div className="buttons-frame">
                    <Link
                      style={{
                        alignSelf: "center",
                        transition: ".2s ease-in-out",
                        display: "flex",
                      }}
                      href="/portfolio"
                    >
                      <span className="btn btn-md">Explore now</span>
                    </Link>
                  </div>
                </BannerTitle>
                <BannerPhoto
                  loading="lazy"
                  src={MeImgSrc}
                  className="banner-photo"
                  alt="Profile Pic"
                />
              </BannerOverlay>
            </Banner>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={5}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Years Experience </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={30}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Completed Projects </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={20}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Happy Customers </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp redraw duration={1} delay={2} end={1}></CountUp>
              </div>
              <H6>
                <span> Level Seller </span>
              </H6>
            </CounterFrame>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          overflow: "hidden",
          padding: "0 30px",
          position: "relative",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle className="section-title">
              <div className="title-frame">
                <H4 className="title-h">
                  <span> My Services </span>
                </H4>
              </div>
            </SectionTitle>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span> WordPress Websites </span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      On demand websites built using popular themes, custom
                      theming with page builders like Elementor, WPBakery
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span> Custom Web apps </span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      Web apps built using frontend frameworks like ReactJs,
                      VueJs, Gatsby with full on content management systems
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span> Mobile Apps </span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      Android and iOS mobile apps development with Flutter,
                      React Native, Swift and PWA apps with adpative design
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="link color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span> CMS Websites </span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      Fully resposive and adaptive websites built using well
                      known CMS like WordPress, Weebly, Webflow, Squarspace etc.
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="link color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span>Graphics Design</span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      Photo editing, Video editing, logo design, Photoshop,
                      Illustrator, Indesign, Lightroom etc
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="link color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceBox className="service-icon-box">
              <div className="service-ib-content">
                <H5 className="mb-15">
                  <span>Social media Marketing</span>
                </H5>
                <div className="mb-15">
                  <div>
                    <p>
                      Advertisements, audience engagement, Online Business
                      Growth, Products promotion, brand engagement
                    </p>
                  </div>
                </div>
                <div className="buttons-frame">
                  <OrderNow to="/contact" className="link color-link w-chevron">
                    <span> Order now </span>
                    <Icon icon={chevronRight} />
                  </OrderNow>
                </div>
              </div>
            </ServiceBox>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
