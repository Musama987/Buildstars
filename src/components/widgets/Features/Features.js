// import React from "react";
// import styles from "./Features.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { CardButton } from "../../ui";
// import THEME from "../../../state/theme";

// export default ({ data = [] }) => {
//   const featuresList = data
//     .map((item, index) => (
//       <article key={index}>
//         <CardButton
//           to={"/blog/" + item.id}
//           btn_after="&#xf105;"
//           btn_text="Read more"
//           btn_round
//           animation="slide-right"
//           padding
//         >
//           <div className={styles.features}>
//             <img src={item.icon} alt="features_icon" />
//             <h4>{item.title}</h4>
//             <p>{item.text}</p>
//           </div>
//         </CardButton>
//       </article>
//     ))
//     .slice(0, 3);
//   return (
//     <Layout
//       style={{
//         background: "rgb(240,240,240)",
//       }}
//       col="3"
//       padding
//     >
//       <div className="layout-header">
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Key features
//         </span>
//         <h2>Check our strong sides and see how we work.</h2>
//         <p>
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       {featuresList}
//       <div className={["layout-footer", styles.footer].join(" ")}>
//         <span>
//           <b style={{ color: THEME.color }}>Let's start do business.</b>
//         </span>
//         <span>Make arrangement and get discount.</span>
//       </div>
//     </Layout>
//   );
// };




// import React from "react";
// import Slider from "react-slick";
// import styles from "./Features.module.scss";

// const Features = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4, // show 4 cards
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 3 } },
//       { breakpoint: 900, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   const steps = [
//     {
//       title: "Aanvraag indienen",
//       text: [
//         "Vul een eenvoudig formulier in (3 minuten)",
//         "Geef aan hoeveel en welke medewerkers je nodig hebt",
//         "Vermeld de gewenste startdatum van het werk",
//       ],
//     },
//     {
//       title: "Selectie van kandidaten (24-48 uur)",
//       text: [
//         "Wij selecteren geschikte vakmensen uit onze database",
//         "Wij verifiëren kwalificaties en ervaring",
//         "Wij presenteren je de beste kandidaten",
//       ],
//     },
//     {
//       title: "Snelle mobilisatie (3-7 dagen)",
//       text: [
//         "Wij regelen alle formaliteiten",
//         "Wij organiseren transport naar Nederland",
//         "Wij zorgen voor huisvesting in de buurt van de bouwplaats",
//       ],
//     },
//     {
//       title: "Start en ondersteuning",
//       text: [
//         "Medewerkers beginnen op de afgesproken datum",
//         "Wij blijven gedurende het hele project in contact",
//         "Wij reageren op problemen binnen 2-3 dagen",
//       ],
//     },
//   ];

//   return (
//     <section className={styles.features_section}>
//       {/* Header */}
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: "#F57C00" }}>
//           Voor bouwbedrijven
//         </span>
//         <h2>Hoe wij te werk gaan – stap voor stap</h2>
//         <p className="parargraph">
//           Wij begeleiden je in elke fase van het proces: van aanvraag tot start
//           en ondersteuning op de bouwplaats.
//         </p>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {steps.map((step, index) => (
//           <div key={index} className={styles.wrapper}>
//             <div className={styles.card}>
//               <div className={styles.stepNumber}>{index + 1}</div>
//               <h3>{step.title}</h3>
//               <ul>
//                 {step.text.map((line, i) => (
//                   <li key={i}>{line}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Features;






// import React from "react";
// import Slider from "react-slick";
// import styles from "./Features.module.scss";

// // Import slick carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Features = () => {
//   const settings = {
//     dots: false, // ✅ Hidden on desktop (since all 4 fit)
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false, // Optional: Hide default arrows if you don't want them
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           dots: true, // Show dots when we start scrolling
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           dots: true, // ✅ Dots enabled for mobile
//         },
//       },
//     ],
//   };

//   const steps = [
//     {
//       title: "Aanvraag indienen",
//       text: [
//         "Vul een eenvoudig formulier in (3 minuten)",
//         "Geef aan hoeveel en welke medewerkers je nodig hebt",
//         "Vermeld de gewenste startdatum van het werk",
//       ],
//     },
//     {
//       title: "Selectie van kandidaten (24-48 uur)",
//       text: [
//         "Wij selecteren geschikte vakmensen uit onze database",
//         "Wij verifiëren kwalificaties en ervaring",
//         "Wij presenteren je de beste kandidaten",
//       ],
//     },
//     {
//       title: "Snelle mobilisatie (3-7 dagen)",
//       text: [
//         "Wij regelen alle formaliteiten",
//         // "Wij organiseren transport naar Nederland",
//         "Wij zorgen voor huisvesting in de buurt van de bouwplaats",
//       ],
//     },
//     {
//       title: "Start en ondersteuning",
//       text: [
//         "Medewerkers beginnen op de afgesproken datum",
//         "Wij blijven gedurende het hele project in contact",
//         "Wij reageren op problemen binnen 2-3 dagen",
//       ],
//     },
//   ];

//   return (
//     <section className={styles.features_section}>
//       {/* Header */}
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: "#F57C00" }}>
//           Voor bouwbedrijven
//         </span>
//         <h2>Hoe wij te werk gaan – stap voor stap</h2>
//         <p className="parargraph">
//           Wij begeleiden je in elke fase van het proces: van aanvraag tot start
//           en ondersteuning op de bouwplaats.
//         </p>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {steps.map((step, index) => (
//           <div key={index} className={styles.wrapper}>
//             <div className={styles.card}>
//               <div className={styles.stepNumber}>{index + 1}</div>
//               <h3>{step.title}</h3>
//               <ul>
//                 {step.text.map((line, i) => (
//                   <li key={i}>{line}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Features;












import React from "react";
import Slider from "react-slick";
import styles from "./Features.module.scss";
import man from "../../../assets/placeholders/man.jpg";
import man1 from "../../../assets/placeholders/man1.jpeg";
import man2 from "../../../assets/placeholders/man2.jpg";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, dots: true },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, dots: true },
      },
    ],
  };

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const steps = [
    {
      title: "Aanvraag indienen",
      text: [
        "Vul een eenvoudig formulier in (3 minuten)",
        "Geef aan hoeveel en welke medewerkers je nodig hebt",
        "Vermeld de gewenste startdatum van het werk",
      ],
    },
    {
      title: "Selectie van kandidaten",
      text: [
        "Wij selecteren geschikte vakmensen uit onze database",
        "Wij verifiëren kwalificaties en ervaring",
        "Wij presenteren je de beste kandidaten",
      ],
    },
    {
      title: "Snelle mobilisatie",
      text: [
        "Wij regelen alle formaliteiten",
        "Wij zorgen voor huisvesting in de buurt van de bouwplaats",
        "Transport wordt volledig geregeld",
      ],
    },
    {
      title: "Start en ondersteuning",
      text: [
        "Medewerkers beginnen op de afgesproken datum",
        "Wij blijven gedurende het hele project in contact",
        "Wij reageren op problemen binnen 2-3 dagen",
      ],
    },
  ];

  const reviews = [
    {
      avatar: man,
      name: "Robbert Vliet",
      badge: "• 1st",
      role: "Directeur at Dry Coating Company",
      meta: "6 july 2025, Robbert was klant van Eryk",
      paragraphs: [
        "De samenwerking met Ararat Bouw verliep prettig en soepel. Ze communiceren duidelijk, schakelen snel en komen afspraken na. Ik heb het contact als prettig ervaren en zou in de toekomst zeker opnieuw met hen samenwerken.",
      ],
    },
    {
      avatar: man1,
      name: "Rick Schraven",
      badge: "• 1st",
      role: "Mogelijkmaker van circulariteit in de techniek Project-en procesbegeleiding STEKERBAAS",
      meta: "23 january 2026, Eryk was klant van Rick",
      paragraphs: [
        "Wat een fijne partij en persoon om mee samen te werken! Eryk schakelt snel mee als de situatie daar om vraagt. Contact verloopt soepel en het werk wordt professioneel uitgevoerd.",
      ],
    },
    {
      avatar: man2,
      name: "Raymond Van de Steenoven",
      badge: "• 1ste",
      role: "Eigenaar Steenoven Group B.V. Eigenaar Steenoven Prefab B.V",
      meta: "3 september 2026, Raymond was klant van Eryk",
      // headline: "⭐ Fijne samenwerking met Eryk",
      paragraphs: [
        "Wij werken inmiddels met veel plezier samen met onze externe recruiter Eryk. Recent heeft hij ons geholpen aan twee zeer goede nieuwe medewerkers, waar we ontzettend tevreden mee zijn.",
        // "Wat wij vooral waarderen in de samenwerking met Eryk, is dat hij goed luistert naar wat wij als organisatie nodig hebben. Hij neemt de tijd om onze wensen en verwachtingen te begrijpen en gaat vervolgens heel gericht op zoek naar kandidaten die daar daadwerkelijk bij passen.",
        // "Zijn persoonlijke aanpak, betrokkenheid en het vermogen om de juiste mensen aan de juiste organisatie te koppelen, maken de samenwerking erg prettig en effectief.",
        // "Bedankt voor je inzet, Eryk! We kijken uit naar het vervolg van onze samenwerking. 🥂",
      ],
    },
  ];

  return (
    <section className={styles.features_section}>
      {/* 1. ORIGINAL HEADER */}
      <div className={styles.header}>
        <span className={styles.subtitle}>
          Voor bouwbedrijven
        </span>
        <h2>Hoe wij te werk gaan – stap voor stap</h2>
        <p>
          Wij begeleiden je in elke fase van het proces: van aanvraag tot start
          en ondersteuning op de bouwplaats.
        </p>
      </div>

      {/* 2. ORIGINAL SLIDER (STEPS) */}
      <Slider {...settings}>
        {steps.map((step, index) => (
          <div key={index} className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <ul>
                {step.text.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>

      {/* 3. NEW REVIEW SECTION (3 Cards Slider) */}
      <div className={styles.reviewContainer}>
        <div className={styles.reviewHeaderTitle}>
          <span className={styles.subtitle}>
            Aanbevelingen
          </span>
        </div>

        {/* Swipe / Auto Slider for 3 Cards */}
        <div className={styles.reviewsSliderWrapper}>
          <Slider {...reviewSettings} className={styles.reviewsSlider}>
            {reviews.map((item, index) => (
              <div key={index} className={styles.reviewSlide}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewUserSection}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className={styles.avatar}
                    />
                    <div className={styles.userInfo}>
                      <div className={styles.nameRow}>
                        <span className={styles.name}>{item.name}</span>
                        <svg className={styles.verifiedIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className={styles.years}>{item.badge}</span>
                      </div>
                      <span className={styles.role}>{item.role}</span>
                      <span className={styles.meta}>{item.meta}</span>
                    </div>
                  </div>
                  <div className={styles.reviewBody}>
                    {item.headline && (
                      <p className={styles.reviewHeadline}>{item.headline}</p>
                    )}
                    {item.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;