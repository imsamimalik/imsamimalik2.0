import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Icon } from "react-icons-kit/";
import { star } from "react-icons-kit/fa/star";
import { SectionTitle } from "../Styles/Pages/HomeStyles";
import { Testimonial, Slides } from "../Styles/Components/SliderStyles";
import TestimonialImgSrc from "../Assets/images/testimonial.jpg";
import PaulharringtonImgSrc from "../Assets/images/paulharrington.jpg";
import AddyPolaniImgSrc from "../Assets/images/addypolani.jpg";
import DragoImgSrc from "../Assets/images/drago_1.jpg";

const Slider = () => {
  return (
    <Slides>
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
                <h4 className="title-h">
                  <span> Recommendations </span>
                </h4>
              </div>
            </SectionTitle>
          </div>
          <Swiper
            className="col-lg-12"
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Testimonial className="testimonial">
                <div className="testimonial-body">
                  <img
                    loading="lazy"
                    className="testimonial-face"
                    src={TestimonialImgSrc}
                    alt="Paul Trueman"
                  />
                  <h5>
                    <span> Alice gallagher </span>
                  </h5>
                  <div className="suptitle mb-15">
                    <span> Customer </span>
                  </div>
                  <div className="mb-15 description">
                    <div>
                      <p>
                        Absolutely brilliant. Very communicative, professional
                        and fast. Did what was asked with no problems at all.
                        Many thanks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="left-side">
                    <ul className="star-rate">
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Testimonial>
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial className="testimonial">
                <div className="testimonial-body">
                  <img
                    loading="lazy"
                    className="testimonial-face"
                    src={PaulharringtonImgSrc}
                    alt="Paul Harrington"
                  />
                  <h5>
                    <span> Paul Harrington </span>
                  </h5>
                  <div className="suptitle mb-15">
                    <span> Customer </span>
                  </div>
                  <div className="mb-15 description">
                    <div>
                      <p>
                        A very hard and diligent worker. Took the effort to make
                        sure i was happy with the work completed. I see repeat
                        collaborations in the future :) 5*
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="left-side">
                    <ul className="star-rate">
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Testimonial>
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial className="testimonial">
                <div className="testimonial-body">
                  <img
                    loading="lazy"
                    className="testimonial-face"
                    src={AddyPolaniImgSrc}
                    alt="Paul Trueman"
                  />
                  <h5>
                    <span> AddyPolani </span>
                  </h5>
                  <div className="suptitle mb-15">
                    <span> Customer </span>
                  </div>
                  <div className="mb-15 description">
                    <div>
                      <p>
                        Outstanding work and delivered the order before time,
                        highly recommended seller, i have more task&apos;s in
                        pending and definitely ill give him for sure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="left-side">
                    <ul className="star-rate">
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Testimonial>
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial className="testimonial">
                <div className="testimonial-body">
                  <img
                    loading="lazy"
                    className="testimonial-face"
                    src={DragoImgSrc}
                    alt="drago_1"
                  />
                  <h5>
                    <span> Drago </span>
                  </h5>
                  <div className="suptitle mb-15">
                    <span> Customer </span>
                  </div>
                  <div className="mb-15 description">
                    <div>
                      <p>
                        I really enjoyed working with Mr. Akhtar on this
                        website. he is very much kind and specially for the
                        amendments I have done.5* for him as services are
                        excellent with expert advices and solutions on Ecommerce
                        options
                      </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="left-side">
                    <ul className="star-rate">
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                      <li>
                        <Icon icon={star} />
                      </li>
                    </ul>
                  </div>
                </div>
              </Testimonial>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Slides>
  );
};

export default Slider;
