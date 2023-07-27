import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Modal = () => {
  const customStyle = {
    zIndex: 11,
    paddingTop: "5px",
    paddingBottom: "30px",
    // Add more style properties here if needed
  };
  return (
    <div>
      <div style={customStyle}>
        <section></section>

        <section>
          <div class="text--02">
            <div class="container container--mid">
              <div class="text--02__box">
                <div class="text--02__content_box text--02__content_box--bottom"></div>
                <div class="text--02__content_box text--02__content_box--top">
                  <div class="text--02__img">
                    <img
                      src="https://dvzvtsvyecfyp.cloudfront.net/static/img/twemoji/1f64c.svg"
                      class=""
                      alt="Hand Stand Up Icon"
                    />
                  </div>
                  <div className="container-left_side">

                  </div>
                  <div className="container-right_side">

                  </div>
                  <div className="container-right_side">

                  </div>
                  <div className="container-left_side">
                    
                  </div>
                  <h1 className="english-text__heading">
                    Hussain, the Martyr of Freedom and Humanity
                  </h1>

                  <div class="content_box ">
                    <div className="urdu-text">
                      <h1> ھیھات منا الذلۃ (حسین ابن علی علیہ السلام)</h1>
                      <p>
                        حسین ابن علیؑ نے دس محرم 61 ہجری کو آمریت ، جبر
                        واستبداد اور انسان کے ہاتھوں انسانوں کی غلامی کے خلاف
                        ایک عظیم شہادت پیش کی ہے ۔ ہم حسین ابن علیؑ اوران کی
                        عظیم قربانی کو اس لئے یاد کرتے ہیں تاکہ ہم انسانوں کو
                        حریت وآزادی کی اہمیت سے آگاہ کرسکیں، اور انہیں دور
                        حاضرکی یزیدی قوتوں کے خلاف حسینی عزم کے ساتھ مقابلہ کرنے
                        کیلئے آمادہ کرسکیں ۔
                      </p>
                    </div>
                    <div className="english-text">
                      <p>
                        We are far from disgrace and humiliation (Hussain Ibn
                        Ali) Hussain Ibn Ali (A.S) gave a great martyrdom on
                        10th of Muharram 61 Hijri against dictatorship, coercion
                        and tyranny, and the slavery of humans by humans. We
                        remember Hussain and his great sacrifice so that we can
                        make people aware of the importance of freedom, and
                        encourage them to fight with Hussain’s determination
                        against the Yazidi forces of today.
                      </p>
                    </div>
                  </div>

                  <div className="buttons-set ">
                    <ul className="buttons-set__list">
                      <li className="buttons-set__item">
                        <a
                          data-stripe-product-id=""
                          data-stripe-mode="payment"
                          data-successful-payment-url=""
                          data-cancel-payment-url=""
                          class="pill-link   pill-link--blue"
                          href="#"
                          target="_self"
                          style={{ marginTop: "15px" }}
                        >
                          <span className="pill-link__pill">New</span>
                          <span className="pill-link__text">
                            Select Language to Readmore
                          </span>
                          <span className="pill-link__icon">
                            <span className="icon">
                              <svg
                                viewBox="0 0 13 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
                                  fill-rule="nonzero"
                                  fill="#00396B"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="button buttons-set__item">
                        <a
                          className="button button--accent-outline "
                          href="/learn-more-in-urdu"
                          target="_self"
                        >
                          <span className="button__text">Urdu</span>
                        </a>
                      </li>
                      <li className="button buttons-set__item">
                        <div>
                          {/* Your other content */}
                          <Link
                            className="button button--accent-outline"
                            to="/learn-more-in-english"
                          >
                            <span className="button__text">English</span>
                          </Link>
                          {/* Other buttons and content */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ;
    </div>
  );
};

export default Modal;
