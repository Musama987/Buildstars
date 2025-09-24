// import React from "react";
// import styles from "./Features2.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { Button } from "../../elements";
// import THEME from "../../../state/theme";
// import { useCustomState } from "../../../state/state";

// export default ({ data = [] }) => {
//   const actions = useCustomState()[1];

//   const servicesList = data
//     .map((item, index) => (
//       <article key={index} className={styles.wrapper}>
//         <div
//           className={[styles.card, index === 1 && styles.main].join(" ")}
//           style={{ borderColor: THEME.color }}
//         >
//           <i className={item.icon} />
//           <h3 style={{ color: THEME.color }}>{item.title}</h3>
//           <p>{item.text}</p>
//           {index === 1 && (
//             <div className={styles.btn}>
//               <Button
//                 before="&#xf067;"
//                 round
//                 type="solid-white-tb"
//                 hoverType="solid-color-tb"
//                 click={() =>
//                   actions.toogleRequest(
//                     "Please call me back, I want to start do business with you!"
//                   )
//                 }
//               >
//                 Order Now
//               </Button>
//             </div>
//           )}
//         </div>
//       </article>
//     ))
//     .slice(0, 3);

//   return (
//     <Layout
//       col="3"
//       padding
//       style={{
//         background: "rgb(240,240,240)",
//       }}
//     >
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Why choose us
//         </span>
//         <h2>Our company has trustworthy in a global economic.</h2>
//         <p className="parargraph">
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       {servicesList}
//     </Layout>
//   );
// };

import React from "react";
import Slider from "react-slick";
import styles from "./Features2.module.scss";

// react-icons
import {
  FcBarChart,
  FcEngineering,
  FcHome,
  FcConferenceCall,
  FcGlobe,
  FcBriefcase,
} from "react-icons/fc";

const Features2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const cardData = [
    {
      title: "Belangrijke cijfers",
      icon: <FcBarChart size={50} />,
      text: [
        "Oprichtingsjaar: 2022",
        "Specialisatie: Werving van Poolse vakmensen",
        "Reactietijd: 2-3 dagen voor oplossingen",
        "Beschikbaarheid: 24/7 ondersteuning",
      ],
    },
    {
      title: "🏗️ Onze specialisatie",
      icon: <FcEngineering size={50} />,
      text: [
        "Gekwalificeerde bouwvakkers uit Polen",
        "Timmerlieden, metselaars, machinebedieners",
        "Grondwerkers",
        "Beton- en wapeningsspecialisten",
        "Montage van stalen constructies",
      ],
    },
    {
      title: "🏠 Wat ons onderscheidt",
      icon: <FcHome size={50} />,
      text: [
        "Eigen huisvesting voor werknemers",
        "Snelle reactie binnen 2-3 dagen",
        "Volledige service – werving, huisvesting, transport",
        "Tweetalig team Pools/Nederlands",
        "Diepe marktkennis",
      ],
    },
    {
      title: "🤝 Waarom Ararat?",
      icon: <FcConferenceCall size={50} />,
      text: [
        "Brug tussen Polen en Nederland",
        "Betrouwbare werknemers, gecontroleerde ervaring",
        "Langdurige partnerschappen",
        "Flexibiliteit per project",
        "Transparantie in samenwerking",
      ],
    },
    {
      title: "📍 Werkgebied",
      icon: <FcGlobe size={50} />,
      text: [
        "Heel Nederland",
        "Specialisatie in grote bouwregio’s",
        "Samenwerking met bedrijven van elke omvang",
      ],
    },
    {
      title: "💼 Onze waarden",
      icon: <FcBriefcase size={50} />,
      text: [
        "Betrouwbaarheid – afspraken nakomen",
        "Snelheid – directe reactie",
        "Partnerschap – altijd aanwezig",
        "Kwaliteit – alleen bekwame vakmensen",
        "Klanttevredenheid: 95%",
      ],
    },
  ];

  return (
    <section className={styles.features_section}>
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: "#F57C00" }}>
          Onze diensten
        </span>
        <h2>Waarom kiezen voor Ararat?</h2>
        <p className="parargraph">
          Wij bieden betrouwbare Poolse vakmensen voor de Nederlandse bouwsector
          met volledige ondersteuning, huisvesting en transparante samenwerking.
        </p>
      </div>

      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <ul>
                {card.text.map((line, i) => (
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

export default Features2;
