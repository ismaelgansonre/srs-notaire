import Head from "next/head";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  FaBars,
  FaSun,
  FaMoon,
  FaPhoneAlt,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaEye,
  FaEnvelope,
  FaGlobe,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { companyLogos } from "../data/logo";
import { clients } from "../data/clients";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { services } from "../data/service";
import ModalVideo from 'react-modal-video'

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const menus = useRef();
  const hideMenu = () => {
    menus.current.classList.remove("show");
  };
  useEffect(() => {
    setTheme("light");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Consultancy Landing Page</title>
        <meta name="description" content="Consultancy Landing page template" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      {/* =================== Menu Section ======================= */}
      <nav
        id="navbar"
        className={`navbar shadow navbar-expand-lg ${scrolled && "fixed-top"}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              height="100"
              width="165"
              id="logo"
              src={theme === "dark" ? "/img/logo1.png" : "/img/logo1.png"}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className={theme === "dark" ? "text-white" : "text-dark"} />
          </button>
          <div
            ref={menus}
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav gap-lg-2 mx-auto mb-2 flex-grow-1 mb-lg-0 justify-content-center">
              <li className="nav-item ">
                <Link onClick={hideMenu} className="nav-link" href="#">

                Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={hideMenu} className="nav-link" href="#about">
                  A propos
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={hideMenu} className="nav-link" href="#service">
                   Nos Service
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={hideMenu} className="nav-link" href="#faq">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label
                  onClick={() => setTheme(inactiveTheme)}
                  htmlFor="checkbox"
                  className="label"
                >
                  <FaSun className="primary" />
                  <FaMoon className="text-white" />
                  <span className="ball"></span>
                </label>
              </li>
              <li className="nav-item d-inline-block">
                <Link
                  onClick={hideMenu}
                  className="nav-link nav-phone text-white d-flex gap-1 align-items-center"
                  href="tel:+15145539043"
                >
                  <FaPhoneAlt />
                  +758 5512 652
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-smooth-scroll="true"
        className="scrollspy-example"
        tabIndex="0"
      >
        {/* Banner Section */}
        <section id="home" className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-120 ">
                <FadeIn>
                  <h1 className="mb-0">
                    Des Solutions <span className="primary">Notariales </span> Sur-Mesure

                    <span className="primary">.</span>
                  </h1>
                  <p>Un accompagnement professionnel pour toutes vos démarches notariales</p>
                  <button className="outline-btn">Planifiez Votre Consultation</button>
                </FadeIn>
              </div>
              <div className="col-lg-6">
                <div className="circle d-none d-lg-block">
                  <img                   
                    src="/img/banner-btn.png"
                    alt="btn"
                    onClick={()=> setOpen(true)}
                  />
                </div>
              </div>
              

              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="x_IF0wHtGJE" onClose={() => setOpen(false)} />

            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="about-section pb-120">
          <div className="container">
            <FadeIn>
              <div
                id="section_counter"
                className="counter-content d-flex  justify-content-between flex-wrap gap-3 gap-md-4 gap-xxl-5 "
              >
                <div className="box d-flex align-items-center gap-3">
                  <img src="/img/icon1.png" alt="icon" />
                  <div className="counter-item">
                    <h4>
                      <span className="counter" data-target="1800">
                        <CountUp end={1800} redraw={false}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </span>
                      <span>+</span>
                    </h4>
                    <h5>Project</h5>
                  </div>
                </div>
                <div className="box d-flex align-items-center gap-3">
                  <img src="/img/icon2.png" alt="icon" />
                  <div className="counter-item">
                    <h4>
                      <CountUp end={2100} redraw={false}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h4>
                    <h5>Customer</h5>
                  </div>
                </div>
                <div className="box d-flex align-items-center gap-3">
                  <img src="/img/icon3.png" alt="icon" />
                  <div className="counter-item">
                    <h4 className="counter">
                      <CountUp end={190} redraw={false}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h4>
                    <h5>Expert Team</h5>
                  </div>
                </div>
                <div className="box d-flex align-items-center gap-3">
                  <img src="/img/icon4.png" alt="icon" />
                  <div className="counter-item">
                    <h4 className="counter">
                      <CountUp end={40} redraw={false}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h4>
                    <h5>Awards</h5>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div className="row d-flex align-items-center gap-5 gap-lg-0">
              <div className="col-lg-6 left ">
                <FadeIn>
                  <img className="img-fluid" src="/img/about.png" alt="" />
                </FadeIn>
              </div>
              <div className="col-lg-6 ">
                <FadeIn>
                  <h4 className="primary mb-3">About Us</h4>
                  <h2 className="mb-3">Votre notaire de confiance</h2>
                  <p>
                    SRS Notaire offre des services complets en droit immobilier, planification personnelle et gestion de successions, avec une approche professionnelle et personnalisée.
                  </p>
                  <div className="box-container d-flex gap-4 pt-3">
                    <div className="about-box1">
                      <div className="top d-flex align-items-center gap-2 mb-2">
                        <img src="/img/plane.png" alt="plane icon" />
                        <h5 className="text-white mb-0">Mission</h5>
                      </div>
                      <p className="text-white mb-0">
                        Integer felis odio, imperdiet id risus eu, posuere
                        iaculis eros.{" "}
                      </p>
                    </div>
                    <div className="about-box2">
                      <div className="top d-flex align-items-center gap-2 mb-2">
                        <img src="/img/globe.png" alt="plane icon" />
                        <h5 className="text-white mb-0">Vission</h5>
                      </div>
                      <p className="text-white mb-0">
                        Integer felis odio, imperdiet id risus eu, posuere
                        iaculis eros.{" "}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section */}
        <section id="service" className="service-section pt-120 pb-120">
          <div className="container">
            <div className="top-content ">
              <FadeIn>
                <h4 className="primary mb-3">Services</h4>
                <h2 className="mb-1">Services juridiques offerts</h2>
                <p>
                {services.map(({ id, title }) => (
                  <div key={id} className="box ">
                    <img src={icon} alt="" />
                    <h4 className="mb-1">{title}</h4>
                  </div>
                ))}
                </p>
              </FadeIn>
            </div>
            <FadeIn>
              <div className="service-box-container">
                {services.map(({ id, title, desc, icon }) => (
                  <div key={id} className="box ">
                    <img src={icon} alt="" />
                    <h4 className="mb-1">{title}</h4>
                    <p className="pb-2">{desc} </p>
                    <a href="#" className="d-flex align-items-center gap-2">
                      Learn More <HiArrowNarrowRight />
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="btn-container">
              <button className="primary-btn">See All</button>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio pt-120 pb-120">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-lg-2 px-0"></div>
              <div className="col-lg-12 col-xl-3 px-xl-0 pt-4 ">
                <FadeIn>
                  <h4 className="primary mb-2">Portfolio</h4>
                  <h2 className="mb-0">Case Studies Of Portfolio</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra rhoncus, sed a fames sit ut morbi amet.
                  </p>
                </FadeIn>
              </div>
              <div className="col-lg-12 col-xl-7">
                <div className="d-flex justify-content-center gap-3 mb-5">
                  <button className="button-prev">
                    <FaArrowLeft />
                  </button>
                  <button className="button-next">
                    <FaArrowRight />
                  </button>
                </div>

                <FadeIn>
                  <Swiper
                    navigation={{
                      nextEl: ".button-next",
                      prevEl: ".button-prev",
                    }}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    slidesPerView="auto"
                    autoplay={true}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 1.6,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1300: {
                        slidesPerView: 2.4,
                        spaceBetween: 24,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <img src="/img/portfolio1.png" alt="portfolio img" />
                      <div className="overlay over1">
                        <h6 className="text-white">Law & Business</h6>
                        <p className="text-white">
                          Law & Business Donec semper ultrices elementum.{" "}
                        </p>
                        <FaEye className="text-white fs-2" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/portfolio2.png" alt="portfolio img" />
                      <div className="overlay over1">
                        <h6 className="text-white">Law & Business</h6>
                        <p className="text-white">
                          Law & Business Donec semper ultrices elementum.{" "}
                        </p>
                        <FaEye className="text-white fs-2" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/portfolio1.png" alt="portfolio img" />
                      <div className="overlay over1">
                        <h6 className="text-white">Law & Business</h6>
                        <p className="text-white">
                          Law & Business Donec semper ultrices elementum.{" "}
                        </p>
                        <FaEye className="text-white fs-2" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        {/* Logo Slider Section */}
        <div className="logoSlider-section">
          <FadeIn>
            <div className="container-fluid inner">
              <div className="swipercont">
                <Swiper
                  slidesPerView="auto"
                  loop={true}
                  autoplay={{
                    delay: 1,
                  }}
                  speed={6000}
                  modules={[Autoplay]}
                  allowTouchMove={false}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                    1200: {
                      slidesPerView: 5,
                      spaceBetween: 24,
                    },
                    1300: {
                      slidesPerView: 6,
                      spaceBetween: 24,
                    },
                  }}
                >

                </Swiper>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Faq Section */}
        <section id="faq" className="faq">
          <div className="container pt-120 pb-120">
            <div className="top-content ">
              <FadeIn>
                <h4 className="primary mb-2">FAQ</h4>
                <h2 className="mb-2">Asked Questions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra rhoncus, sed a fames sit ut morbi amet.
                </p>
              </FadeIn>
            </div>
            <div className="row d-flex align-items-center justify-content-lg-between gap-3 gap-lg-0">
              <div className="col-lg-6 left ">
                <img className="img-fluid" src="/img/faq.png" alt="" />
              </div>
              <div className="col-lg-5 ">
                <FadeIn>
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                      >
                        What do we do?
                      </button>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Et donec integer nulla quis arcu, aliquam
                          vivamus tincidunt. Vulputate non, aliquet aliquet non
                          sed. Cursus sed sed in proin tortor in. Id mi id
                          mattis arcu non, ut.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                      >
                        How do we do it?
                      </button>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Et donec integer nulla quis arcu, aliquam
                          vivamus tincidunt. Vulputate non, aliquet aliquet non
                          sed. Cursus sed sed in proin tortor in. Id mi id
                          mattis arcu non, ut.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                      >
                        What's our expertise?
                      </button>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse "
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Et donec integer nulla quis arcu, aliquam
                          vivamus tincidunt. Vulputate non, aliquet aliquet non
                          sed. Cursus sed sed in proin tortor in. Id mi id
                          mattis arcu non, ut.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        When do we work?
                      </button>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse "
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Et donec integer nulla quis arcu, aliquam
                          vivamus tincidunt. Vulputate non, aliquet aliquet non
                          sed. Cursus sed sed in proin tortor in. Id mi id
                          mattis arcu non, ut.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                      >
                        How competent are our staff?
                      </button>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse "
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Et donec integer nulla quis arcu, aliquam
                          vivamus tincidunt. Vulputate non, aliquet aliquet non
                          sed. Cursus sed sed in proin tortor in. Id mi id
                          mattis arcu non, ut.
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer pt-120">
        <div className="container">
          <div className="consultation-form">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <FadeIn>
                  <h4 className="text-white mb-2 mb-lg-0">
                    Réservez votre consultation dès maintenant !
                  </h4>
                  <p className="text-light">Complétez le formulaire ci-dessous pour fixer un rendez-vous avec nous.</p>
                </FadeIn>
              </div>
              <div className="col-lg-6">
                <FadeIn>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="text"
                          placeholder="Nom complet"
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="email"
                          placeholder="Email"
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="tel"
                          placeholder="Numéro de téléphone"
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="date"
                          placeholder="Date souhaitée"
                          required
                      />
                    </div>
                    <div className="mb-3">
            <textarea
                className="w-100"
                placeholder="Message ou détails supplémentaires"
                rows="3"
            ></textarea>
                    </div>
                    <button className="black-btn w-100">Réserver</button>
                  </form>
                </FadeIn>
              </div>
            </div>
          </div>

          <FadeIn>
            <div className="row footer-content " data-wow-delay="0.3s">
              <div className="col-md-6 col-lg-3">
                <img src="/img/logo1.png" alt="logo"
                     height="100"
                     width="165"
                />
                <p className="text-white mt-3">
                  Aliquam erat volutpat. at name Phasellusalfm sit amet pulvinar
                  mi.{" "}
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mt-4 mt-lg-0">Company</h5>
                <ul className="d-flex flex-column gap-2 pt-2">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#service">Service</a>
                  </li>

                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mt-5 mt-lg-0">Policy</h5>
                <ul className="d-flex flex-column gap-2 pt-2">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Code of Conduct</a>
                  </li>
                  <li>
                    <a href="#">Cancellation</a>
                  </li>
                  <li>
                    <a href="#">Referral Policy</a>
                  </li>
                  <li>
                    <a href="#">Consulting</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-white mt-5 mt-lg-0">Contact</h5>
                <ul className="address d-flex flex-column gap-3">
                  <li>
                    {" "}
                    <a href="mailto:landion@example.com">
                      <FaEnvelope className="fs-4" />
                      ssawadogo@notarius.net
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://srs-notaire.com/">
                      <FaGlobe className="fs-4" />
                      Sarah SAWADOGO
                    </a>{" "}
                  </li>
                  <li className="text-white d-flex align-content-center gap-3">
                    <img
                      height="30"
                      width="30"
                      src="/img/location.png"
                      alt=""
                    />
                    <span> 1111 Bd Dr.-Frederik-Philips
                    Saint-Laurent,Quebec H4M 2X6</span>
                  </li>
                  <li>
                    <a href="tel:+15145539043">
                      <FaMobileAlt className="fs-4" /> (514) 553-9043
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row py-4 gap-4 gap-sm-0 d-flex align-items-center justify-content-center justify-content-lg-between">
              <div className="col-sm-6 px-lg-0">
                <p className="mb-0 text-white">
                  © Created by:{" "}
                  <a
                    href="https://www.templatemonster.com/authors/softivus/"
                    className="text-white"
                  >
                    https://srs-notaire.com/
                  </a>
                </p>
              </div>
              <div className="col-sm-6 px-lg-0">
                <ul className="d-flex gap-3 justify-content-sm-end social">
                  <li>
                    <a href="#">
                      <FaFacebookF className="icon fs-3 fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter className="icon fs-3 fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp className="icon fs-3 fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram className="icon fs-3 fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin className="icon fs-3 fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
