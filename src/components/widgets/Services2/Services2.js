// import React, { useState } from "react";
// import styles from "./Services2.module.scss";
// import useHover from "../../../utilities/useHover";
// import Layout from "../../layouts/Layout/Layout";
// import { Link } from "../../elements";
// import THEME from "../../../state/theme";

// export default ({ data = [], items = "3" }) => {
//   const [amount, setAmount] = useState(items);

//   const servicesList = data
//     .map((item, index) => (
//       <article key={index}>
//         <div className={styles.card}>
//           <figure>
//             <img src={item.icon} alt="icon" />
//             <span style={{ background: THEME.color }} />
//           </figure>
//           <h3>{item.title}</h3>
//           <p>{item.text}</p>
//           <Link
//             style={{ color: THEME.color }}
//             hoverStyle={{ color: "#000" }}
//             url={"/services/" + item.id}
//           >
//             Learn more
//           </Link>
//         </div>
//       </article>
//     ))
//     .slice(0, amount);

//   const moreButton =
//     amount < data.length ? (
//       <div className={["layout-footer", styles.footer].join(" ")}>
//         <Button click={() => setAmount(data.length)}>View all services</Button>
//       </div>
//     ) : null;

//   return (
//     <Layout
//       col="3"
//       padding
//       style={{
//         background: "rgb(240,240,240)",
//       }}
//     >
//       <div className="layout-header">
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Our services
//         </span>
//         <h2>We offer you professional bunch of services.</h2>
//         <p className="parargraph">
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       {servicesList}
//       {moreButton}
//     </Layout>
//   );
// };

// const Button = ({ click, children }) => {
//   const [hoverRef, isHovered] = useHover();

//   return (
//     <button
//       ref={hoverRef}
//       onClick={click}
//       style={{ color: isHovered ? THEME.color : "#000" }}
//     >
//       {children}
//       <i className="las la-long-arrow-alt-right" />
//     </button>
//   );
// };



//updated code
import React from "react";
import styles from "./Services2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import HowWeWork from '../../pages/Home/HowWeWork';
export default function Services2() {
  const services = [
    {
      title: "SNELLE IMPLEMENTATIE BINNEN 72 UUR",
      text: "Wij leveren bekwame bouwspecialisten op de werkplek in recordtijd (gemiddeld 2-3 dagen). Focus op uw project – wij regelen de volledige werving en administratie.",
    },
    {
      title: "NETWERK VAN GECONTROLEERDE VAKLUI",
      text: "Selectie uit ons uitgebreide, geteste netwerk van specialisten (Timmermannen, Monteurs, Betonwerkers, Technici). Wij garanderen dat elke kandidaat is gescreend op vaardigheden en certificaten.",
    },
    {
      title: "ZORGELOZE LOGISTIEK (EIGEN HUISVESTING)",
      text: "Wij nemen de volledige logistieke verantwoordelijkheid. Wij zorgen voor comfortabele, eigen huisvesting en transport. U heeft geen omkijken naar het verblijf van het personeel.",
    },
    {
      title: "24/7 ADMINISTRATIEVE ONDERSTEUNING",
      text: "Volledige juridische en administratieve ondersteuning. Wij beheren de loonadministratie en alle formaliteiten. Onze support lost onverwachte situaties op elk moment op.",
    },
    {
      title: "WIJ ZIJN DE BRUG (KENNIS VAN BEIDE ZIJDEN)",
      text: "Wij verbinden Poolse vakmensen met de Nederlandse bouwmarkt. We kennen de behoeften van zowel de werknemers als de bedrijven – voor een stabiele en langdurige samenwerking.",
    },
  ];
  // --- Data for HowWeWork section ---
  const stepsData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      ),
      title: '1. Begrip van jouw behoeften (24 uur)',
      items: [
        'We analyseren jouw specifieke eisen',
        'We beoordelen benodigde vaardigheden en certificaten',
        'We leren de projectplanning en het budget kennen',
      ],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: '2. Gerichte werving (2–3 dagen)',
      items: [
        'We maken gebruik van ons netwerk van geverifieerde bouwspecialisten',
        'We selecteren kandidaten vooraf op vaardigheden en certificaten',
        'We controleren werkvergunningen en documenten',
      ],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16.899A2 2 0 0 1 2 15V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 4zM12 11h.01" />
          <path d="M8 11h.01" />
          <path d="M16 11h.01" />
        </svg>
      ),
      title: '3. Soepele integratie (doorlopende samenwerking)',
      items: [
        'We regelen alle formaliteiten en documentatie',
        'We organiseren huisvesting en vervoer',
        'We bieden 24/7 ondersteuning gedurende het hele project',
        'We beheren salarissen en wettelijke naleving',
      ],
    },
  ];

  return (
    <Layout
      padding
      style={{
        background: "rgb(240,240,240)",
        marginTop: "30px",
      }}
    >
      {/* ✅ Wrapper added for Mobile Spacing Fix */}
      <div className={styles.mobileFixWrapper}>
        <div className="layout-header">
          <span className="subtitle" style={{ color: THEME.color }}>
            Onze diensten
          </span>
          <h2>Wij bieden complete personeelsoplossingen voor de bouwsector</h2>
          <p className="parargraph">
            Van snelle inzet van werknemers, via gecontroleerde vakbekwaamheid, tot volledige logistieke en administratieve ondersteuning. Dankzij ons krijgt u een stabiel, voorspelbaar en volledig georganiseerd wervingsproces.
          </p>
        </div>

        <div className={styles.singleCard}>
          {services.map((item, index) => (
            <div className={styles.serviceRow} key={index}>
              <div
                className={styles.number}
                style={{ backgroundColor: THEME.color }}
              >
                {index + 1}
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <HowWeWork steps={stepsData} />
      </div>
    </Layout>

  );
}
