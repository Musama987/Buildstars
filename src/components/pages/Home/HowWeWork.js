// 




import React, { Fragment } from 'react';
import styles from './HowWeWork.module.scss';
import THEME from "../../../state/theme"; // Importing theme if needed for colors

// --- Import Portfolio Images (First 8 only) ---
import portfolio1 from "../../../assets/placeholders/portfolio1 (1).jpeg";
import portfolio2 from "../../../assets/placeholders/portfolio1 (2).jpeg";
import portfolio3 from "../../../assets/placeholders/portfolio1 (3).jpeg";
import portfolio4 from "../../../assets/placeholders/portfolio1 (4).jpeg";
import portfolio5 from "../../../assets/placeholders/portfolio1 (5).jpeg";
import portfolio6 from "../../../assets/placeholders/portfolio1 (6).jpeg";
import portfolio7 from "../../../assets/placeholders/portfolio1 (7).jpeg";
import portfolio8 from "../../../assets/placeholders/portfolio1 (8).jpeg";

const portfolioImages = [
  portfolio1, portfolio2, portfolio3, portfolio4,
  portfolio5, portfolio6, portfolio7, portfolio8
];

// --- Icons for the steps ---

const IconStep1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M9 9h6"></path>
    <path d="M9 13h6"></path>
    <path d="M9 17h4"></path>
  </svg>
);

const IconStep2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconStep3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16.899A2 2 0 0 1 2 15V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 4zM12 11h.01"></path>
    <path d="M8 11h.01"></path>
    <path d="M16 11h.01"></path>
  </svg>
);

// --- Data for the process steps ---

const stepsData = [
  {
    icon: <IconStep1 />,
    title: '1. Begrip van jouw behoeften (24 uur)',
    items: [
      'We analyseren jouw specifieke eisen',
      'We beoordelen benodigde vaardigheden en certificaten',
      'We leren de projectplanning en het budget kennen',
    ],
  },
  {
    icon: <IconStep2 />,
    title: '2. Gerichte werving (2–3 dagen)',
    items: [
      'We maken gebruik van ons netwerk van geverifieerde bouwspecialisten',
      'We selecteren kandidaten vooraf op vaardigheden en certificaten',
      'We controleren werkvergunningen en documenten',
    ],
  },
  {
    icon: <IconStep3 />,
    title: '3. Soepele integratie (doorlopende samenwerking)',
    items: [
      'We regelen alle formaliteiten en documentatie',
      'We organiseren huisvesting en vervoer',
      'We bieden 24/7 ondersteuning gedurende het hele project',
      'We beheren salarissen en wettelijke naleving',
    ],
  },
];

const HowWeWork = () => {
  return (
    <Fragment>
      <div className={styles.how_we_work_page}>
        {/* --- PROCESS SECTION --- */}
        <div className={styles.container}>
          <h1 className={styles.main_heading}>
            Ons Proces in 3 Eenvoudige Stappen:
          </h1>

          <div className={styles.card_container}>
            {stepsData.map((step, index) => (
              <div className={styles.step_card} key={index}>
                <div className={styles.card_icon}>{step.icon}</div>
                <h3 className={styles.card_title}>{step.title}</h3>
                <ul className={styles.card_list}>
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- NEW PORTFOLIO SECTION --- */}
        <div className={styles.portfolio_section}>
           <div className={styles.container}>
              {/* Header/Description nearest to images */}
              <div className={styles.portfolio_header}>
                 {/* Dynamic color using theme if desired, or scss class */}
                 <span className={styles.subtitle} style={{ color: THEME.color }}>Onze Projecten</span>
                 <h2>Een selectie van ons werk</h2>
                 <p>Bekijk hieronder 8 van onze recente succesvolle projecten in de bouwsector.</p>
              </div>

              {/* Grid of 8 Images */}
              <div className={styles.image_grid}>
                 {portfolioImages.map((img, index) => (
                    <div key={index} className={styles.image_item}>
                       <img src={img} alt={`Project ${index + 1}`} />
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </Fragment>
  );
};

export default HowWeWork;