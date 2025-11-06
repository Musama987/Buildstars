// import React, { Fragment } from "react";
// import styles from "./Facts.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import THEME from "../../../state/theme";
// import useCurrentWidth from "../../../utilities/useCurrentWidth";
// import { useCustomState } from "../../../state/state";

// export default ({ data = [] }) => {
//   const state = useCustomState()[0];

//   const dummy = <div className={styles.dummy} />;

//   const factsList = data.map((item, index) => (
//     <Fragment key={index}>
//       <div>
//         <div className={styles.card}>
//           <h4>{item.title}</h4>
//           <p>{item.text}</p>
//           <i
//             style={{ color: THEME.color }}
//             className="las la-long-arrow-alt-right"
//           />
//         </div>
//       </div>
//       {index % 2 !== 0 ? dummy : null}
//     </Fragment>
//   ));

//   return (
//     <Layout
//       style={{
//         background:
//           useCurrentWidth() > 768
//             ? "url(" +
//               state.data.header_bgs.facts +
//               ") top/cover, rgb(240,240,240)"
//             : "rgb(240,240,240)",
//       }}
//       padding
//       col="3"
//     >
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Company facts
//         </span>
//         <h2>Building bright future for new generations.</h2>
//       </div>
//       {factsList}
//     </Layout>
//   );
// };






// import React from "react";
// import styles from "./Facts.module.scss";
// import { 
//   FcFlashOn,
//   FcHome,
//   FcPrivacy,
//   FcCallback,
//   FcOk,
//   FcAutomotive,
//   FcDocument,
//  FcHighPriority,
// } from "react-icons/fc";

// const Facts = () => {
//   const cardData = [
//     {
//       title: "⚡ Snelle inzet van medewerkers",
//       icon: <FcFlashOn size={50} />,
//       text: [
//         "Eerste medewerkers binnen 7 dagen",
//         "Spoedwerving voor dringende projecten",
//         "Klaarstaande database van betrouwbare vakmensen",
//       ],
//     },
//     {
//       title: "🏠 Compleet huisvestingspakket",
//       icon: <FcHome size={50} />,
//       text: [
//         "Eigen woningen voor medewerkers",
//         "Volledig uitgeruste appartementen",
//         "Dicht bij de werkplek",
//         "Regelmatige kwaliteitscontroles",
//       ],
//     },
//     {
//       title: "🛡️ Continuïteitsgarantie",
//       icon: <FcPrivacy size={50} />,
//       text: [
//         "Directe vervanging indien nodig",
//         "Reservepersoneel altijd beschikbaar",
//         "Geen stilstand op de bouwplaats",
//       ],
//     },
//     {
//       title: "📞 24/7 Ondersteuning",
//       icon: <FcCallback size={50} />,
//       text: [
//         "Toegewijde projectcoördinator",
//         "Ondersteuning in het Pools en Nederlands",
//         "Probleemoplossing binnen maximaal 2-3 dagen",
//         "Constant contact via WhatsApp/telefoon",
//       ],
//     },
//     {
//       title: "✅ Competentiecontrole",
//       icon: <FcOk size={50} />,
//       text: [
//         "Controle van kwalificaties en certificaten",
//         "Praktische vaardigheidstests",
//         "Referenties van eerdere projecten",
//         "Alleen ervaren vakmensen",
//       ],
//     },
//     {
//       title: "🚐 Gereguleerd transport",
//       icon: <FcAutomotive size={50} />,
//       text: [
//         "Transport van Polen naar Nederland",
//         "Bussen naar de werkplek (optioneel)",
//         "Hulp bij reisorganisatie",
//         "Logistieke ondersteuning",
//       ],
//     },
//     {
//       title: "📋 Volledige administratieve service",
//       icon: <FcDocument size={50} />,
//       text: [
//         "BSN, verzekeringen, documenten",
//         "Afhandeling van betalingen en formaliteiten",
//         "In overeenstemming met Nederlands recht",
//         "Geen papierwerk voor de klant",
//       ],
//     },
//     {
//       title: "🎯 Flexibele samenwerkingsmodellen",
//       icon: <FcHighPriority size={50} />,
//       text: [
//         "Uitzenden van medewerkers",
//         "Detachering",
//         "Korte- en langlopende projecten",
//         "Afgestemd op uw behoeften",
//       ],
//     },
//   ];

//   return (
//     <section className={styles.facts_section}>
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: "#F57C00" }}>
//           Belangrijkste kenmerken
//         </span>
//         <h2>Onze aanpak voor succesvolle samenwerking</h2>
//       </div>

//       <div className={styles.grid}>
//         {cardData.map((card, index) => (
//           <div key={index} className={styles.card}>
//             <div className={styles.icon}>{card.icon}</div>
//             <h3>{card.title}</h3>
//             <ul>
//               {card.text.map((line, i) => (
//                 <li key={i}>{line}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Facts;



import React from "react";
import styles from "./Facts.module.scss";
import {
  FcFlashOn,
  FcHome,
  FcPrivacy,
  FcCallback,
  FcOk,
  FcAutomotive,
  FcDocument,
  FcHighPriority,
} from "react-icons/fc";

const Facts = () => {
  const cardData = [
    {
      title: "⚡ Snelle inzet van medewerkers",
      icon: <FcFlashOn size={50} />,
      text: [
        "Eerste medewerkers binnen 7 dagen",
        "Spoedwerving voor dringende projecten",
        "Klaarstaande database van betrouwbare vakmensen",
      ],
    },
    {
      title: "🏠 Compleet huisvestingspakket",
      icon: <FcHome size={50} />,
      text: [
        "Eigen woningen voor medewerkers",
        "Volledig uitgeruste appartementen",
        "Dicht bij de werkplek",
        "Regelmatige kwaliteitscontroles",
      ],
    },
    {
      title: "🛡️ Continuïteitsgarantie",
      icon: <FcPrivacy size={50} />,
      text: [
        "Directe vervanging indien nodig",
        "Reservepersoneel altijd beschikbaar",
        "Geen stilstand op de bouwplaats",
      ],
    },
    {
      title: "📞 24/7 Ondersteuning",
      icon: <FcCallback size={50} />,
      text: [
        "Toegewijde projectcoördinator",
        "Ondersteuning in het Pools en Nederlands",
        "Probleemoplossing binnen maximaal 2-3 dagen",
        "Constant contact via WhatsApp/telefoon",
      ],
    },
    {
      title: "✅ Competentiecontrole",
      icon: <FcOk size={50} />,
      text: [
        "Controle van kwalificaties en certificaten",
        "Praktische vaardigheidstests",
        "Referenties van eerdere projecten",
        "Alleen ervaren vakmensen",
      ],
    },
    {
      title: "🚐 Gereguleerd transport",
      icon: <FcAutomotive size={50} />,
      text: [
        "Transport van Polen naar Nederland",
        "Bussen naar de werkplek (optioneel)",
        "Hulp bij reisorganisatie",
        "Logistieke ondersteuning",
      ],
    },
    {
      title: "📋 Volledige administratieve service",
      icon: <FcDocument size={50} />,
      text: [
        "BSN, verzekeringen, documenten",
        "Afhandeling van betalingen en formaliteiten",
        "In overeenstemming met Nederlands recht",
        "Geen papierwerk voor de klant",
      ],
    },
    {
      title: "🎯 Flexibele samenwerkingsmodellen",
      icon: <FcHighPriority size={50} />,
      text: [
        "Uitzenden van medewerkers",
        "Detachering",
        "Korte- en langlopende projecten",
        "Afgestemd op uw behoeften",
      ],
    },
  ];

  return (
    <section className={styles.facts_section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="subtitle">Belangrijkste kenmerken</span>
          <h2>Onze aanpak voor succesvolle samenwerking</h2>
        </div>

        <div className={styles.grid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <ul>
                {card.text.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
