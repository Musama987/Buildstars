// import React, { useState } from "react";
// import styles from "./Process.module.scss";
// import { Layout } from "../../layouts";
// import { Button } from "../../elements";
// import THEME from "../../../state/theme";

// export default ({ data = [] }) => {
//   const processList = data.map((item, index) => (
//     <div key={index} className={styles.wrapper}>
//       <Card data={item} index={index} />
//     </div>
//   ));
//   return (
//     <Layout col="3" padding mode="dark" style={{ background: "rgb(40,40,50)" }}>
//       <div className={"layout-header"}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Workflow
//         </span>
//         <h2 style={{ color: "#fff" }}>
//           Smart, simple &amp; cost effective‎ working process.
//         </h2>
//       </div>

//       {processList}

//       <div className={["layout-footer", styles.footer].join(" ")}></div>
//     </Layout>
//   );
// };

// const Card = ({ data, index }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <div className={styles.step}>
//       <span className={styles.number}>{index + 1 + "."}</span>
//       <div
//         className={styles.info}
//         style={{
//           opacity: hover ? "0" : "1",
//           transitionDelay: hover ? ".1s" : ".6s",
//         }}
//       >
//         <h4>{data.title}</h4>
//         <p>{data.text}</p>
//       </div>
//       <ul
//         style={{
//           opacity: hover ? "1" : "0",
//           transitionDelay: hover ? ".6s" : ".1s",
//         }}
//         className={styles.list}
//       >
//         <li>
//           <i className="las la-check" style={{ color: THEME.color }} />
//           Compellingly orchestrate distinctive collaboration and idea-sharing
//           before.
//         </li>
//         <li>
//           <i className="las la-check" style={{ color: THEME.color }} />
//           Holisticly embrace ubiquitous e-business via real-time intellectual
//           capital.
//         </li>
//         <li>
//           <i className="las la-check" style={{ color: THEME.color }} />
//           Enthusiastically exploit cooperative best practices via global
//           methodologies.
//         </li>
//       </ul>
//       <div
//         onMouseEnter={() => setHover(!hover)}
//         onMouseLeave={() => setHover(!hover)}
//         className={styles.btn}
//       >
//         <Button hoverType="solid-gray-tb" after="&#xf101;" />
//       </div>
//     </div>
//   );
// };



import React from "react";
import styles from "./Process.module.scss";
import { Layout } from "../../layouts";
import THEME from "../../../state/theme";

// De data voor de processtappen
const processData = [
  {
    title: "Aanvraag indienen",
    list: [
      "Vul een eenvoudig formulier in (3 minuten)",
      "Geef aan hoeveel en welke medewerkers je nodig hebt",
      "Vermeld de gewenste startdatum van het werk",
    ],
  },
  {
    title: "Selectie van kandidaten (24-48 uur)",
    list: [
      "Wij selecteren geschikte vakmensen uit onze database",
      "Wij verifiëren kwalificaties en ervaring",
      "Wij presenteren je de beste kandidaten",
    ],
  },
  {
    title: "Snelle mobilisatie (3-7 dagen)",
    list: [
      "Wij regelen alle formaliteiten",
      "Wij organiseren transport naar Nederland",
      "Wij zorgen voor huisvesting in de buurt van de bouwplaats",
    ],
  },
  {
    title: "Start en ondersteuning",
    list: [
      "Wij blijven gedurende het hele project in contact",
      "Wij reageren op problemen binnen 2-3 dagen",
      "Medewerkers beginnen op de afgesproken datum",
    ],
  },
];

export default () => {
  const processList = processData.map((item, index) => (
    <div key={index} className={styles.wrapper}>
      <Card data={item} index={index} />
    </div>
  ));

  return (
    <Layout col="4" padding mode="dark" style={{ background: "rgb(40,40,50)" }}>
      <div className={"layout-header"}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Voor bouwbedrijven 🏗️
        </span>
        <h2 style={{ color: "#fff" }}>
          Hoe wij te werk gaan – stap voor stap
        </h2>
      </div>

      {processList}

      <div className={["layout-footer", styles.footer].join(" ")}></div>
    </Layout>
  );
};

// ✅ Vereenvoudigde Card component zonder hover-effect
const Card = ({ data, index }) => {
  return (
    <div className={styles.step}>
      <span className={styles.number}>{index + 1 + "."}</span>
      <div className={styles.card_content}>
        <h4>{data.title}</h4>
        <ul className={styles.list}>
          {data.list.map((item, i) => (
            <li key={i}>
              <i className="las la-check" style={{ color: THEME.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
