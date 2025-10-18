// import React, { useRef } from "react";
// import Slider from "react-slick";
// import styles from "./Slider.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { Button } from "../../elements";

// export default ({ data = [] }) => {
//   let sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const slideList = data.map((item, index) => (
//     <article key={index}>
//       <Layout
//         style={{
//           background: "url(" + item.image + ") center/cover",
//         }}
//         col="1"
//         mode="dark"
//       >
//         <div className={styles.slide}>
//           <i
//             className={"las la-long-arrow-alt-left"}
//             onClick={() => sliderRef.slickPrev()}
//           />

//           <div className={styles.intro}>
//             <h1>{item.title}</h1>
//             <p>{item.short}</p>
//             <Button to={"/blog/" + item.id} hoverType="solid-white-tb">
//               Read more
//             </Button>
//           </div>
//           <i
//             className={"las la-long-arrow-alt-right"}
//             onClick={() => sliderRef.slickNext()}
//           />
//         </div>
//       </Layout>
//     </article>
//   ));

//   return (
//     <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
//       {slideList}
//     </Slider>
//   );
// };

import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";

import homeSlider1 from "../../../assets/placeholders/first_home.png";
import homeSlider2 from "../../../assets/placeholders/second_home.png";
import homeSlider3 from "../../../assets/placeholders/third_home.png";
import homeSlider4 from "../../../assets/placeholders/fourth_home.png";
import homeSlider5 from "../../../assets/placeholders/fifth_home.png";


export default function HomeSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const slideImages = [homeSlider1, homeSlider2, homeSlider3, homeSlider4, homeSlider5];

  const Arrow = ({ onClick, icon, arrowClass }) => (
    <div className={`${styles.arrow} ${arrowClass}`} onClick={onClick}>
      <i className={icon} />
    </div>
  );

  return (
    <div className={styles.slider_container}>
      <Slider ref={sliderRef} {...settings}>
        {slideImages.map((img, index) => (
          <div key={index} className={styles.slide_wrapper}>
            <img src={img} alt={`Slide ${index}`} className={styles.slide_img} />
          </div>
        ))}
      </Slider>

      {/* --- Arrows --- */}
      <Arrow
        onClick={() => sliderRef.current.slickPrev()}
        icon="las la-angle-left"
        arrowClass={styles.prev_arrow}
      />
      <Arrow
        onClick={() => sliderRef.current.slickNext()}
        icon="las la-angle-right"
        arrowClass={styles.next_arrow}
      />
    </div>
  );
}