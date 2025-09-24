// import React from "react";
// import styles from "./Header.module.scss";
// import Layout from "../../layouts/Layout/Layout";

// export default ({ children, img }) => {
//   return (
//     <Layout
//       style={{
//         background: "url(" + img + ") center/cover"
//       }}
//       col="1"
//       mode="dark"
//     >
//       <div className={styles.header}>
//         <h1>{children}</h1>
//       </div>
//     </Layout>
//   );
// };

import React from "react";
import Slider from "react-slick";
import styles from "./Header.module.scss";

export default function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    fade: false,
  };

  const slides = [
    [
      "O Ararat Uitzendbureau",
      "Wij verbinden Poolse vakmensen met Nederlandse bouwbedrijven."
    ],
    [
      "Ararat Uitzendbureau is meer dan een uitzendbureau.",
      "Wij vormen de brug tussen Poolse bouwspecialisten en de Nederlandse arbeidsmarkt."
    ],
    [
      "Waarom Ararat?",
      "Eigen huisvesting",
      " Bliksemsnelle reactie",
      "Wij begrijpen beide kanten",
      "Uitgebreide ondersteuning"
    ],
    [
      "Onze missie",
      "Wij geloven dat een goede medewerker de basis van elke bouw is."
    ],
    [
      "Neem contact met ons op",
      "Vul het contactformulier in of bel: +31 620 57 68 94"
    ]
  ];

  return (
    <div className={styles.hero}>
      <Slider {...settings}>
        {slides.map((lines, i) => (
          <div key={i} className={styles.slide}>
            {lines.map((line, j) => (
              <p key={j} className={styles.slideText}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}
