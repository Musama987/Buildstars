// import React from "react";
// import styles from "./TextBlock.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import THEME from "../../../state/theme";
// import { Button } from "../../elements";
// import { useCustomState } from "../../../state/state";
// import logoImage from "../../../assets/placeholders/about-image.jpeg";

// export default () => {
//   const [state, actions] = useCustomState();
//   return (
//     <Layout col="2" padding>
//       <article className={styles.wrapper}>
//         <div className={styles.info}>
//           <span className={styles.subtitle} style={{ color: THEME.color }}>
//             Company info
//           </span>
//           <h2>Wij creëren kansen voor groei en &amp; vakmanschap </h2>
//           <p className={styles.paragraph}>
//            Contact met mensen vormt de basis van onze activiteiten. Daarom bouwen wij al jaren consequent aan relaties die gebaseerd zijn op wederzijds vertrouwen en begrip. Dankzij de ervaring die we door de jaren heen hebben opgedaan, hebben we geleerd aandachtig te luisteren naar de behoeften van beide partijen, zodat we effectief kunnen inspelen op hun verwachtingen.
//           </p>
//           <p className={styles.paragraph}>
//             <b>
//              Wij geloven dat sterke relaties niet alleen ontstaan door goede communicatie, maar vooral door het nakomen van beloftes en het vermogen om problemen op te lossen. Deze waarden stellen ons in staat om diensten van de hoogste kwaliteit te leveren en langdurige, partnerschappelijke samenwerkingen op te bouwen in plaats van slechts eenmalige transacties.
//             </b>
//           </p>
//           {/* <div className={styles.btn_box}>
//             <Button to="/blog/post_4" hoverType="solid-gray-tb">
//               Read more
//             </Button>
//             <Button
//               click={() => actions.toogleVideo()}
//               type="solid-gray-tb"
//               hoverType="solid-color-tb"
//               after="&#xf105;"
//             />
//           </div> */}
//         </div>
//       </article>
//       {/* <article className={styles.wrapper}>
//         <figure className={styles.image}>
//           <div
//             className={styles.rectangle}
//             style={{ borderColor: THEME.color }}
//           />
//           <div className={styles.photo}>
//             <i
//               onClick={() => actions.toogleVideo()}
//               className="las la-caret-right"
//               style={{ borderColor: THEME.color, color: THEME.color }}
//             />
//             <span
//               style={{
//                 background:
//                   "url(" +
//                   state.data.header_bgs.about_video_poster +
//                   ") center/cover",
//               }}
//             />
//           </div>
//         </figure>
//       </article> */}
//       <article className={styles.wrapper}>
//     <figure className={styles.image}>
//       {/* The Decorative Border Rectangle - Kept exactly the same */}
//       <div
//         className={styles.rectangle}
//         style={{ borderColor: THEME.color }}
//       />
      
//       {/* The Photo Container */}
//       <div className={styles.photo}>
//         {/* REMOVED: The <i> play button */}
//         {/* ADDED: Your Image */}
//         <img 
//           src={logoImage} 
//           alt="Ararat Bouw" 
//           className={styles.static_image} 
//         />
//       </div>
//     </figure>
//   </article>
//     </Layout>
//   );
// };




import React from "react";
import styles from "./TextBlock.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";
import logoImage from "../../../assets/placeholders/about-image1.jpeg";

export default () => {
  const [state, actions] = useCustomState();
  
  return (
    <Layout col="2" padding>
      {/* LEFT COLUMN: TEXT INFO */}
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <span className={styles.subtitle} style={{ color: THEME.color }}>
           Bedrijfsinformatie
          </span>
          <h2>Wij creëren kansen voor groei en &amp; vakmanschap </h2>
          <p className={styles.paragraph}>
            Contact met mensen vormt de basis van onze activiteiten. Daarom bouwen wij al jaren consequent aan relaties die gebaseerd zijn op wederzijds vertrouwen en begrip. Dankzij de ervaring die we door de jaren heen hebben opgedaan, hebben we geleerd aandachtig te luisteren naar de behoeften van beide partijen, zodat we effectief kunnen inspelen op hun verwachtingen.
          </p>
          <p className={styles.paragraph}>
            <b>
              Wij geloven dat sterke relaties niet alleen ontstaan door goede communicatie, maar vooral door het nakomen van beloftes en het vermogen om problemen op te lossen. Deze waarden stellen ons in staat om diensten van de hoogste kwaliteit te leveren en langdurige, partnerschappelijke samenwerkingen op te bouwen in plaats van slechts eenmalige transacties.
            </b>
          </p>
        </div>
      </article>

      {/* RIGHT COLUMN: IMAGE */}
      <article className={styles.wrapper}>
        <figure className={styles.image}>
          {/* Decorative Border Rectangle */}
          <div
            className={styles.rectangle}
            style={{ borderColor: THEME.color }}
          />
          
          {/* Photo Container */}
          <div className={styles.photo}>
            <img 
              src={logoImage} 
              alt="Ararat Bouw" 
              className={styles.static_image} 
            />
          </div>
        </figure>
      </article>
    </Layout>
  );
};