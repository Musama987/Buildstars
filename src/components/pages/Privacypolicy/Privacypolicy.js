import React from "react";
import { Layout } from "../../layouts";
import styles from "./privacypolicy.module.scss";
import THEME from "../../../state/theme";

const Privacybeleid = () => {
  return (
    <div className={styles.privacyPageWrapper}>
      
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Privacy
        </span>

        <h2>Privacy beleid</h2>

        <p>
          Wij respecteren de privacy van alle bezoekers van onze website en
          zorgen ervoor dat de persoonlijke informatie die u ons verstrekt
          vertrouwelijk wordt behandeld.
        </p>
      </div>

      <Layout>
        <div className={styles.content}>
          
          <h3>Welke gegevens verzamelen wij</h3>
          <p>
            Wanneer u onze website bezoekt, kunnen wij bepaalde gegevens
            verzamelen zoals technische informatie over uw browser,
            apparaatgegevens en pagina’s die u bezoekt.
          </p>

          <h3>Gebruik van gegevens</h3>
          <p>
            Deze informatie wordt uitsluitend gebruikt om onze website te
            verbeteren, onze diensten te optimaliseren en beter inzicht te
            krijgen in de interesse van bezoekers.
          </p>

          <h3>Bedrijfsidentificatie via Albacross</h3>
          <p>
            Onze website maakt gebruik van de dienst van
            <strong> Albacross </strong> om bedrijven te identificeren die onze
            website bezoeken. Deze dienst gebruikt IP-adresinformatie om te
            bepalen van welk bedrijf een bezoek mogelijk afkomstig is.
          </p>

          <p>
            Deze gegevens helpen ons om zakelijke interesse in onze diensten
            beter te begrijpen en onze communicatie met bedrijven te
            verbeteren. Er worden geen persoonlijke gegevens van individuele
            bezoekers verzameld of opgeslagen via deze dienst.
          </p>

          <h3>Cookies</h3>
          <p>
            Onze website kan cookies gebruiken om de gebruikerservaring te
            verbeteren en statistieken te verzamelen over het gebruik van de
            website.
          </p>

          <h3>Contact</h3>
          <p>
            Heeft u vragen over dit privacybeleid? Neem gerust contact met ons
            op via:
          </p>

          <p>
            Email: info@araratbureau.nl <br />
            Adres: Smalle Haven 54, Eindhoven 5611 EJ
          </p>

        </div>
      </Layout>
    </div>
  );
};

export default Privacybeleid;