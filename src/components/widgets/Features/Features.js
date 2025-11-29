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






import React from "react";
import Slider from "react-slick";
import styles from "./Features.module.scss";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const settings = {
    dots: false, // ✅ Hidden on desktop (since all 4 fit)
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Optional: Hide default arrows if you don't want them
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true, // Show dots when we start scrolling
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true, // ✅ Dots enabled for mobile
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
      title: "Selectie van kandidaten (24-48 uur)",
      text: [
        "Wij selecteren geschikte vakmensen uit onze database",
        "Wij verifiëren kwalificaties en ervaring",
        "Wij presenteren je de beste kandidaten",
      ],
    },
    {
      title: "Snelle mobilisatie (3-7 dagen)",
      text: [
        "Wij regelen alle formaliteiten",
        // "Wij organiseren transport naar Nederland",
        "Wij zorgen voor huisvesting in de buurt van de bouwplaats",
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

  return (
    <section className={styles.features_section}>
      {/* Header */}
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: "#F57C00" }}>
          Voor bouwbedrijven
        </span>
        <h2>Hoe wij te werk gaan – stap voor stap</h2>
        <p className="parargraph">
          Wij begeleiden je in elke fase van het proces: van aanvraag tot start
          en ondersteuning op de bouwplaats.
        </p>
      </div>

      {/* Slider */}
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
    </section>
  );
};

export default Features;