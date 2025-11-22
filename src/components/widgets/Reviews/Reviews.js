// import React, { useState } from "react";
// import styles from "./Reviews.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { Button } from "../../elements";
// import THEME from "../../../state/theme";

// export default ({ data = [] }) => {
//   const [amount, setAmount] = useState(2);
//   const reviewList = data
//     .map((item, index) => (
//       <div key={index}>
//         <div className={styles.review}>
//           <figure
//             className={styles.photo}
//             style={{ background: "url(" + item.img + ") center/cover" }}
//           />
//           <div className={styles.content}>
//             <h4>{item.title}</h4>
//             <p>{item.text}</p>
//             <span>
//               <b style={{ color: THEME.color }}>{item.author},</b>
//               {item.status}
//             </span>
//           </div>
//         </div>
//       </div>
//     ))
//     .slice(0, amount);

//   const toogleAmount = () => {
//     setAmount(amount === data.length ? 2 : data.length);
//   };

//   return (
//     <Layout
//       style={{
//         background: "rgb(240,240,240)",
//       }}
//       col="2"
//       padding
//     >
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Testimonials
//         </span>
//         <h2>Check reviews from our customers for great products.</h2>
//       </div>

//       {reviewList}

//       <div className={["layout-footer", styles.footer].join(" ")}>
//         <Button click={toogleAmount}>
//           {amount === data.length ? "Less reviews" : "More reviews"}
//         </Button>
//       </div>
//     </Layout>
//   );
// };




import React, { useState } from "react";
import styles from "./Reviews.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { Button } from "../../elements";
import THEME from "../../../state/theme";

import nbbu from "../../../assets/placeholders/footer2.jpeg";
import vcu from "../../../assets/placeholders/footer1.jpeg";
import sna from "../../../assets/placeholders/footer3.jpeg";
import wka from "../../../assets/placeholders/footer4.jpeg";

export default ({ data = [] }) => {
  const [amount, setAmount] = useState(2);
  const reviewList = data
    .map((item, index) => (
      <div key={index}>
        <div className={styles.review}>
          <figure
            className={styles.photo}
            style={{ background: "url(" + item.img + ") center/cover" }}
          />
          <div className={styles.content}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <span>
              <b style={{ color: THEME.color }}>{item.author},</b>
              {item.status}
            </span>
          </div>
        </div>
      </div>
    ))
    .slice(0, amount);

  const toogleAmount = () => {
    setAmount(amount === data.length ? 2 : data.length);
  };

  return (
    <>
    {/* <Layout
      style={{
        background: "rgb(240,240,240)",
      }}
      col="2"
      padding
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Testimonials
        </span>
        <h2>Check reviews from our customers for great products.</h2>
      </div>

      {reviewList}

      <div className={["layout-footer", styles.footer].join(" ")}>
        <Button click={toogleAmount}>
          {amount === data.length ? "Less reviews" : "More reviews"}
        </Button>
      </div>
       </Layout> */}

           {/* 🔸 New Section Starts Here */}
      {/* 🔸 New Section Starts Here */}
 {/* ✅ ADD BELOW, still inside return */}
    <section className={styles.standardsSection}>
      <h2 className={styles.standardsTitle}>Wij garanderen normen</h2>

      <div className={styles.standardsGrid}>
        <div className={styles.standardCard}>
          <img src={nbbu} alt="NBBU" className={styles.standardImg} />
          <h4>NBBU-lidmaatschap</h4>
          <p>
            Wij werken volgens strenge cao-regels en kwaliteitsstandaarden voor
            uitzendorganisaties. Garandeert correcte contracten, eerlijke
            beloning en transparante arbeidsvoorwaarden.
          </p>
        </div>

        <div className={styles.standardCard}>
          <img src={sna} alt="VCU" className={styles.standardImg} />
          <h4>VCU-certificering</h4>
          <p>
            Richt zich op veiligheid en gezondheid op de werkvloer. Wij voldoen
            aan veiligheidsnormen voor personeel dat werkt in risicovolle
            omgevingen.
          </p>
        </div>

        <div className={styles.standardCard}>
          <img src={vcu} alt="SNA" className={styles.standardImg} />
          <h4>SNA-certificering (NEN 4400)</h4>
          <p>
            Controle op loonadministratie, afdrachten en identiteit van
            werknemers. Garandeert dat alles volledig legaal en betrouwbaar
            wordt uitgevoerd.
          </p>
        </div>

        <div className={styles.standardCard}>
          <img src={wka} alt="WKA" className={styles.standardImg} />
          <h4>WKA-verklaring</h4>
          <p>
            Loonheffingen en sociale premies correct worden betaald. Vermindert
            risico’s voor opdrachtgevers en biedt financiële zekerheid.
          </p>
        </div>
      </div>
    </section>
</>
  );
};
