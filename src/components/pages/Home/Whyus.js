import React, { Fragment } from 'react';
import styles from './WhyUs.module.scss';
import HowWeWork from './HowWeWork';

// Data for the feature cards (first section)
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'Snelheid',
    description: 'Gekwalificeerde medewerkers ter plaatse binnen 72 uur',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: 'Kwaliteit',
    description: 'Elke kandidaat is vooraf geverifieerd en getest',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10a6 6 0 0 0-12 0v8h12v-8Z"></path>
        <path d="M21 10a2 2 0 0 1-2 2h-1a4 4 0 0 0-4 4v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v0a4 4 0 0 0-4-4H5a2 2 0 0 1-2-2Z"></path>
      </svg>
    ),
    title: 'Ondersteuning',
    description: 'Volledige administratieve en logistieke ondersteuning',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    ),
    title: 'Flexibiliteit',
    description: 'Mogelijkheid om het team snel uit te breiden of in te krimpen',
  },
];

// Data for the new "Why Choose Us" section
const whyChooseUsData = [
  {
    title: '5 Jaar Ervaring',
    description:[
      'We hebben met succes honderden',
      'gekwalificeerde werknemers geplaatst',
      'in Nederlandse bouwprojecten.',
      ],
  },
  {
    title: 'Geverifieerde Professionals',
    description: [
      'Alle medewerkers beschikken over bevestigde certificaten',
      'Praktische vaardigheden getest vóór indiensttreding',
      'Basiskennis van de Nederlandse taal gegarandeerd',
    ],
  },
  {
    title: 'Volledige Administratieve Ondersteuning',
    description: [
      'Werkvergunningen en documentatie',
      'Salarisadministratie en mogelijkheid tot voorschotbetaling',
      'Organisatie van huisvesting',
    ],
  },
  {
    title: '24/7 Probleemoplossing',
    description:[
      'Als er om 6 uur s ochtends een probleem op de bouwplaats is',
       'nemen wij de telefoon op en lossen het op.',
      ],
  },
  {
    title: 'Branche-specialisatie',
    description: [
      'Timmerlieden',
      'Ramenmontage specialisten',
      'Beton specialisten',
      'Algemene bouwvakkers',
      'Technici met specialistische kwalificaties',
    ],
  },
  {
    title: 'Reële Resultaten',
    description: [
      '95% van onze klanten blijft langdurig bij ons',
      'Gemiddelde aanlooptijd van 2–3 dagen',
      'Geen vertragingen in projecten door personeelstekorten',
    ],
  },
  {
    title: 'Menselijke Maat in Digitale Tijden',
    description:[
      'Waar anderen vertrouwen op kunstmatige intelligentie en automatisering, bouwen wij aan echte relaties.',
      'We kennen onze medewerkers persoonlijk.',
      'We begrijpen de behoeften van jouw bedrijf.',
      ],
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


// Data for the new "Team" section
// const teamData = [
//   {
//     name: 'Andrzej',
//     title: 'Oprichter & Partner',
//     description:
//       'Gespecialiseerd in het verbinden van Poolse professionals met Nederlandse bouwbedrijven. Zorgt voor naadloze integratie en operationele efficiëntie.',
//   },
//   {
//     name: 'Maria',
//     title: 'HR & Administratie',
//     description:
//       'Verantwoordelijk voor alle administratieve processen, inclusief contracten, BSN-nummers en huisvesting. Zorgt ervoor dat alles soepel verloopt voor zowel werknemers als klanten.',
//   },
// ];

// Checkmark Icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.check_icon}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WhyUs = () => {
  return (
    <Fragment>
      <div className={styles.why_us_page}>
        <div className={styles.container}>
          {/* --- First Section --- */}
          <h1 className={styles.main_heading}>
            Wat Ons Proces Onderscheidt:
          </h1>
          <div className={styles.card_container}>
            {features.map((feature, index) => (
              <div className={styles.feature_card} key={index}>
                <div className={styles.card_icon}>{feature.icon}</div>
                <h3 className={styles.card_title}>{feature.title}</h3>
                <p className={styles.card_description}>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* --- Second Section --- */}
          <div className={styles.why_choose_us_section}>
            <h2 className={styles.secondary_heading}>
              Waarom Kiezen voor Ararat Bouw?
            </h2>
            <div className={styles.why_card_container}>
              {whyChooseUsData.map((item, index) => (
                <div className={styles.why_card} key={index}>
                  <h3 className={styles.why_card_title}>
                    <CheckIcon />
                    {item.title}
                  </h3>
                  {Array.isArray(item.description) ? (
                    <ul className={styles.why_card_list}>
                      {item.description.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.why_card_description}>
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
<HowWeWork steps={stepsData} />
          {/* --- Third Section (Team) --- */}
          {/* <div className={styles.team_section}>
            <h2 className={styles.secondary_heading}>Ons Team</h2>
            <div className={styles.team_card_container}>
              {teamData.map((member, index) => (
                <div className={styles.team_card} key={index}>
                  <h3 className={styles.team_card_name}>{member.name}</h3>
                  <p className={styles.team_card_title}>{member.title}</p>
                  <p className={styles.team_card_description}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default WhyUs;
