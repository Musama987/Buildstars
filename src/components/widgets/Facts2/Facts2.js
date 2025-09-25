// import React from "react";
// import styles from "./Facts2.module.scss";
// import { Layout } from "../../layouts";
// import { Button } from "../../elements";
// import useHover from "../../../utilities/useHover";
// import THEME from "../../../state/theme";
// import { useCustomState } from "../../../state/state";

// export default ({ data = [] }) => {
//   const actions = useCustomState()[1];

//   const cardList = data.map((item, index) => (
//     <Card
//       key={index}
//       icon={item.icon}
//       title={item.title}
//       lead={item.lead}
//       text={item.text}
//     />
//   ));
//   return (
//     <Layout
//       col="3"
//       style={{ background: "rgb(245,245,245)", marginBottom: "7rem" }}
//     >
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Statistic
//         </span>
//         <h2>Our company results in numbers</h2>
//         <p>
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       {cardList}

//       <div
//         style={{ background: THEME.color }}
//         className={["layout-footer", styles.footer].join(" ")}
//       >
//         <h2>
//           Make arrangement today <b>and get discount 20%</b>
//         </h2>
//         <Button
//           click={() => actions.toogleModal()}
//           round
//           after="&#xf105;"
//           type="solid-white-tb"
//           hoverType="outline-white-tw"
//         >
//           Get quote
//         </Button>
//       </div>
//     </Layout>
//   );
// };

// const Card = ({ icon, title, lead, text }) => {
//   const [hoverRef, isHovered] = useHover();

//   return (
//     <article className={styles.wrapper}>
//       <div ref={hoverRef} className={styles.card}>
//         <figure>
//           <img src={icon} alt="icon" />
//         </figure>
//         <h2 style={{ color: isHovered && THEME.color }}>{title}</h2>
//         <span style={{ color: THEME.color }}>{lead}</span>
//         <p>{text}</p>
//       </div>
//     </article>
//   );
// };




import React from "react";
import Slider from "react-slick";
import styles from "./Facts2.module.scss";
import { Layout } from "../../layouts"; // We still use Layout for the header
import THEME from "../../../state/theme";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the icons we will use
import {
  FcBullish,
  FcCollaboration,
  FcAlarmClock,
  FcHome,
  FcLike,
  FcCalendar,
} from "react-icons/fc";

// This is the correct data your client wants to show
const factsData = [
  {
    title: "300+",
    lead: "werknemers per jaar",
    icon: <FcCollaboration size={50} />,
  },
  {
    title: "50+",
    lead: "vaste partners",
    icon: <FcLike size={50} />,
  },
  {
    title: "24 uur",
    lead: "Eerste contact binnen",
    icon: <FcAlarmClock size={50} />,
  },
  {
    title: "30+",
    lead: "slaapplaatsen",
    icon: <FcHome size={50} />,
  },
  {
    title: "95%",
    lead: "terugkerende klanten",
    icon: <FcBullish size={50} />,
  },
  {
    title: "4 jaar",
    lead: "op de markt",
    icon: <FcCalendar size={50} />,
  },
];

export default () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cardList = factsData.map((item, index) => (
    <Card key={index} icon={item.icon} title={item.title} lead={item.lead} />
  ));

  return (
    <div className={styles.slider_section_wrapper}>
      {/* The header is kept inside a Layout to stay centered */}
      <Layout>
        <div className={["layout-header", styles.header].join(" ")}>
          <span className="subtitle" style={{ color: THEME.color }}>
            Onze Kracht in Cijfers
          </span>
          <h2>Waarom voor ons kiezen?</h2>
        </div>
      </Layout>

      {/* The Slider is now OUTSIDE the Layout component, which fixes the visibility issue */}
      <div className={styles.slider_container}>
        <Slider {...sliderSettings}>{cardList}</Slider>
      </div>
    </div>
  );
};

// This is the Card component with the new icon structure
const Card = ({ icon, title, lead }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <h2>{title}</h2>
        <p>{lead}</p>
      </div>
    </article>
  );
};