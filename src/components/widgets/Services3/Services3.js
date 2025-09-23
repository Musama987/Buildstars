// import React, { useState, useEffect, useRef } from "react";
// import styles from "./Services3.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import THEME from "../../../state/theme";

// import { Button } from "../../elements";

// export default ({ data = [] }) => {
//   const ref = useRef(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     setHeight(ref.current.clientHeight);
//     window.addEventListener("resize", resizeListener);
//     return window.removeEventListener("resize", resizeListener);
//   }, []);

//   const resizeListener = () => {
//     setHeight(ref.current.clientHeight);
//   };

//   let listStatistic = data
//     .map((item, index) => (
//       <div
//         key={index}
//         className={styles.wrapper}
//         style={{
//           borderColor: THEME.color,
//         }}
//       >
//         <div className={styles.extra} style={{ background: THEME.color }}>
//           <p>
//             Progressively synthesize metrics and multimedia based action items.
//             Globally benchmark process-centric experiences without technologies.
//           </p>
//         </div>

//         <div className={styles.card}>
//           <div className={styles.icon}>
//             <img src={item.icon} alt="card_icon" />
//           </div>

//           <h3
//             style={{
//               color: THEME.color,
//             }}
//           >
//             {item.title}
//           </h3>
//           <p>{item.text.replace(/^(.{60}[^\s]*).*/, "$1")}</p>
//           <div className={styles.button}>
//             <Button
//               to={"/services/" + item.id}
//               type="solid-white-tb"
//               hoverType="solid-white-tb"
//               round
//               small
//               before="&#xf105;"
//             />
//           </div>
//         </div>
//       </div>
//     ))
//     .slice(0, 3);

//   listStatistic.unshift(
//     <div
//       key={Math.random()}
//       className={styles.list_header}
//       style={{ background: THEME.color }}
//     >
//       <div className={styles.list_front}>
//         <h3>
//           Here is what you <b>should know</b>
//         </h3>
//         <i className="las la-long-arrow-alt-down" />
//       </div>
//       <div className={styles.list_back}>
//         <p>
//           Progressively synthesize metrics and multimedia based action items.
//           Globally benchmark process-centric experiences without technologies.
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <div className={styles.stat_area}>
//       <Layout
//         style={{
//           transform: "translateY(-50%)",
//         }}
//         col="1"
//       >
//         <div className={styles.statistic} ref={ref}>
//           {listStatistic}
//         </div>
//       </Layout>
//       <span
//         className={styles.negative_space}
//         style={{
//           height: height / 2 + "px",
//           marginTop: -height + "px",
//         }}
//       />
//     </div>
//   );
// };

import React from "react";
import Slider from "react-slick";
import styles from "./Services3.module.scss";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services3 = () => {
  const settings = {
    dots: false, // Slider dots are now hidden
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    {
      title: "wat ons onderscheidt",
      text: "This is a placeholder text for the first card.",
      icon: "/assets/placeholders/icon.svg",
    },
    {
      title: "Antwoord binnen 24 uur",
      text: "Geen weken wachten. Jij belt – wij handelen direct.",
      icon: "/assets/placeholders/icon.svg",
    },
    {
      title: "Card 3 Title",
      text: "Placeholder text for the third card.",
      icon: "/assets/placeholders/icon.svg",
    },
    {
      title: "Card 4 Title",
      text: "Placeholder text for the fourth card.",
      icon: "/assets/placeholders/icon.svg",
    },
    {
      title: "Card 5 Title",
      text: "Placeholder text for the fifth card.",
      icon: "/assets/placeholders/icon.svg",
    },
    {
      title: "Card 6 Title",
      text: "Placeholder text for the sixth card.",
      icon: "/assets/placeholders/icon.svg",
    },
  ];

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={card.icon} alt="icon" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services3;
