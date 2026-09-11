import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Recommendation.module.scss";
import Layout from "../../layouts/Layout/Layout";

// Import client avatars
import man from "../../../assets/placeholders/man.jpg";
import man1 from "../../../assets/placeholders/man1.jpeg";
import man2 from "../../../assets/placeholders/man2.jpg";

const Recommendations = () => {
  // Automatically scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detailed recommendation cards data
  const reviewsData = [
    {
      id: 1,
      avatar: man,
      name: "Robbert Vliet",
      badge: "• 1st",
      role: "Directeur at Dry Coating Company",
      meta: "6 july 2025, Robbert was klant van Eryk",
      rating: 5,
      headline: null,
      paragraphs: [
        "De samenwerking met Ararat Bouw verliep prettig en soepel. Ze communiceren duidelijk, schakelen snel en komen afspraken na. Ik heb het contact als prettig ervaren en zou in de toekomst zeker opnieuw met hen samenwerken.",
      ],
      source: "LinkedIn Recommendation",
    },
    {
      id: 2,
      avatar: man1,
      name: "Rick Schraven",
      badge: "• 1st",
      role: "Mogelijkmaker van circulariteit in de techniek | Project- en procesbegeleiding STEKERBAAS",
      meta: "23 january 2026, Eryk was klant van Rick",
      rating: 5,
      headline: null,
      paragraphs: [
        "Wat een fijne partij en persoon om mee samen te werken! Eryk schakelt snel mee als de situatie daar om vraagt. Contact verloopt soepel en het werk wordt professioneel uitgevoerd.",
      ],
      source: "LinkedIn Recommendation",
    },
    {
      id: 3,
      avatar: man2,
      name: "Raymond Van de Steenoven",
      badge: "• 1st",
      role: "Eigenaar Steenoven Group B.V. & Eigenaar Steenoven Prefab B.V",
      meta: "3 september 2026, Raymond was klant van Eryk",
      rating: 5,
      headline: "⭐ Fijne samenwerking met Eryk",
      paragraphs: [
        "Wij werken inmiddels met veel plezier samen met onze externe recruiter Eryk. Recent heeft hij ons geholpen aan twee zeer goede nieuwe medewerkers, waar we ontzettend tevreden mee zijn.",
        "Wat wij vooral waarderen in de samenwerking met Eryk, is dat hij goed luistert naar wat wij als organisatie nodig hebben. Hij neemt de tijd om onze wensen en verwachtingen te begrijpen en gaat vervolgens heel gericht op zoek naar kandidaten die daar daadwerkelijk bij passen.",
        // "Zijn persoonlijke aanpak, betrokkenheid en het vermogen om de juiste mensen aan de juiste organisatie te koppelen, maken de samenwerking erg prettig en effectief.",
        // "Bedankt voor je inzet, Eryk! We kijken uit naar het vervolg van onze samenwerking. 🥂",
      ],
      source: "LinkedIn Recommendation",
    },
  ];

  // Trust highlight metrics
  const trustMetrics = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "100% Geverifieerd",
      description: "Echte referenties van directeuren en projectleiders.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Snelle Schakeling",
      description: "Binnen 72 uur geschikte vakmensen ter plaatse.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Persoonlijke Aanpak",
      description: "Wij luisteren gericht naar de specifieke behoeften van jouw bouwbedrijf.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "5-Sterren Tevredenheid",
      description: "Bewezen staat van dienst in kwalitatieve bemiddeling.",
    },
  ];

  return (
    <Fragment>
      <div className={styles.recommendations_page}>
        {/* --- RECOMMENDATIONS SECTION (Parallel with Header/Footer via Layout) --- */}
        <section className={styles.recommendations_section}>
          <Layout>
            <div className={styles.section_content}>
              {/* SECTION HEADER */}
              <div className={styles.header_section}>
                <div className={styles.badge_wrapper}>
                  <span className={styles.badge_dot}></span>
                  <span>Aanbevelingen &amp; Referenties</span>
                </div>
                <h1 className={styles.section_title}>
                  Wat Klanten Zeggen Over{" "}
                  <span className={styles.highlight}>Ararat Bouw</span>
                </h1>
                <p className={styles.subtitle_text}>
                  Transparantie en betrouwbaarheid staan bij ons voorop. Lees de
                  ervaringen van opdrachtgevers, directeuren en projectmanagers
                  die met ons samenwerken.
                </p>
              </div>

              {/* 3 REVIEW CARDS */}
              <div className={styles.cards_grid}>
                {reviewsData.map((item) => (
                  <div key={item.id} className={styles.review_card}>
                    {/* Watermark Quote */}
                    <svg
                      className={styles.quote_icon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* User Header */}
                    <div className={styles.card_user}>
                      <div className={styles.avatar_wrapper}>
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className={styles.avatar_img}
                          loading="lazy"
                        />
                        <span className={styles.linkedin_mini}>in</span>
                      </div>
                      <div className={styles.user_details}>
                        <div className={styles.name_row}>
                          <span className={styles.client_name}>
                            {item.name}
                          </span>
                          <span
                            className={styles.verified_badge}
                            title="Geverifieerde LinkedIn connectie"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </span>
                          <span className={styles.badge_connection}>
                            {item.badge}
                          </span>
                        </div>
                        <span className={styles.client_role}>{item.role}</span>
                        <span className={styles.client_meta}>{item.meta}</span>
                      </div>
                    </div>

                    {/* Rating Stars & Verification Tag */}
                    <div className={styles.card_rating}>
                      <div className={styles.card_stars}>★★★★★</div>
                      <span className={styles.verified_text}>
                        Geverifieerde Ervaring
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <div className={styles.card_content}>
                      {item.headline && (
                        <div className={styles.headline}>{item.headline}</div>
                      )}
                      <div className={styles.card_paragraphs}>
                        {item.paragraphs.map((p, pIndex) => (
                          <p key={pIndex}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className={styles.card_footer}>
                      <span className={styles.source_tag}>
                        <svg viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                        </svg>
                        {item.source}
                      </span>
                      <span className={styles.security_tag}>
                        <svg viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                        </svg>
                        100% Authentiek
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4 TRUST METRICS */}
              <div className={styles.trust_section}>
                {trustMetrics.map((item, index) => (
                  <div key={index} className={styles.trust_item}>
                    <div className={styles.trust_icon}>{item.icon}</div>
                    <h3 className={styles.trust_title}>{item.title}</h3>
                    <p className={styles.trust_desc}>{item.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA BANNER */}
              <div className={styles.cta_container}>
                <h2 className={styles.cta_title}>
                  Ervaar Zelf de Kwaliteit van Onze Dienstverlening
                </h2>
                <p className={styles.cta_text}>
                  Ben je op zoek naar betrouwbare vakmensen voor jouw
                  bouwproject of wil je weten hoe wij jouw capaciteit snel
                  kunnen versterken? Wij denken graag met je mee.
                </p>
                <div className={styles.cta_buttons}>
                  <Link to="/consultation" className={styles.cta_primary_btn}>
                    Plan een gratis consult
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z" />
                    </svg>
                  </Link>
                  <Link to="/contacts" className={styles.cta_secondary_btn}>
                    Neem contact op
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </section>
      </div>
    </Fragment>
  );
};

export default Recommendations;
