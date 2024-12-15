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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Votre consultation a été soumise avec succès !");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Erreur réseau, veuillez réessayer.");
    }
  };
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
                  +15145539043
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
                        Fournir des services notariaux fiables et accessibles,
                        en offrant un accompagnement personnalisé pour toutes vos démarches
                        juridiques et administratives.
                      </p>
                    </div>
                    <div className="about-box2">
                      <div className="top d-flex align-items-center gap-2 mb-2">
                        <img src="/img/globe.png" alt="plane icon" />
                        <h5 className="text-white mb-0">Vision</h5>
                      </div>
                      <p className="text-white mb-0">
                        Devenir le partenaire de confiance pour tous vos besoins notariaux, en mettant l'accent sur l'excellence, l'intégrité et l'innovation.
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

                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>

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
    <div className="top-content">
      <FadeIn>
        <h4 className="primary mb-2">FAQ</h4>
        <h2 className="mb-2">Questions Fréquentes</h2>
        <p>
          Retrouvez ici les réponses aux questions les plus fréquentes concernant nos services notariaux.
        </p>
      </FadeIn>
    </div>
    <div className="row d-flex align-items-center justify-content-lg-between gap-3 gap-lg-0">
      <div className="col-lg-6 left">
        <img className="img-fluid" src="/img/faq_.png" alt="FAQ" />
      </div>
      <div className="col-lg-5">
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
                Quelles sont les missions principales d’un notaire ?
              </button>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Un notaire est chargé d’authentifier les actes juridiques, de conseiller sur des questions juridiques et fiscales, et d’accompagner dans des démarches telles que les ventes immobilières, les successions, ou la création d’entreprises.
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
                Quels documents dois-je fournir pour un acte notarié ?
              </button>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Cela dépend du type d’acte. Par exemple, pour une vente immobilière, vous aurez besoin du titre de propriété, des diagnostics immobiliers, et de l’identité des parties concernées.
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
                Combien de temps faut-il pour finaliser une transaction immobilière ?
              </button>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  En général, une transaction immobilière prend environ 2 à 3 mois, mais cela peut varier selon la complexité du dossier.
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
              >
                Quel est le coût des services notariés ?
              </button>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Les frais de notaire incluent les droits de mutation (taxes), les débours (frais annexes), et la rémunération du notaire. Ils varient en fonction de la nature de l’acte et de sa valeur.
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
                Est-il obligatoire de passer par un notaire pour une donation ou un testament ?
              </button>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Oui, pour garantir la validité juridique et éviter les litiges, il est recommandé de faire appel à un notaire.
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
                  <p className="text-light">
                    Complétez le formulaire ci-dessous pour fixer un rendez-vous
                    avec nous.
                  </p>
                </FadeIn>
              </div>
              <div className="col-lg-6">
                <FadeIn>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="text"
                          name="fullName"
                          placeholder="Nom complet"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="tel"
                          name="phone"
                          placeholder="Numéro de téléphone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                          className="w-100"
                          type="date"
                          name="date"
                          placeholder="Date souhaitée"
                          value={formData.date}
                          onChange={handleChange}
                          required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                          className="w-100"
                          name="message"
                          placeholder="Message ou détails supplémentaires"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          required
                      ></textarea>
                    </div>
                    <button className="black-btn w-100" type="submit">
                      Réserver
                    </button>
                  </form>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
