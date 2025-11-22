import React, { Fragment } from "react";
import styles from "./Contacts2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { ContactForm } from "../../ui";
import { AddressBox } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Stuur een bericht
        </span>
        <h2>Neem gerust contact met ons op.</h2>
        <p>
          Dwing energiek afstemmingen met een hoge opbrengst, terwijl onderhoudbare
          materialen tijdige leveringen opleveren. Maak synergetisch gebruik van de holistische visie van anderen via expertise met een hoge opbrengst.
        </p>
      </div>
      <Layout col="4">
        <AddressBox
          icon="las la-phone"
          title="Bel ons"
          text="+31 6 20 57 68 94"
        />
        <AddressBox
          icon="la la-envelope-open"
          title="Mail ons"
          text="info@araratbureau.nl"
        />
        <AddressBox
          icon="las la-comments"
          title="Gratis consult"
          text="Small Haven 54,Eidhoven 5611 EJ"
        />
        <AddressBox
          icon="las la-comment"
          title="Gratis"
          text="Live chart 24/7"
        />
        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>

      <Layout col="2">
        <div className={styles.wrapper}>
          <ContactForm style={{ border: "1px solid #eee" }} />
        </div>

        <div className={styles.info}>
          <i
            className="las la-long-arrow-alt-right"
            style={{ color: THEME.color }}
          />
          <h2>Klaar om met ons zaken te doen?</h2>
          <p>
            Transformeer snel geïntegreerde processen via wrijvingsloze
            paradigma's. Productiveer intrinsiek proactieve katalysatoren voor verandering via
            economisch gezonde relaties.
          </p>
          {/* <Button
            click={() =>
              actions.toogleRequest(
                "I'm ready to start making business with you!"
              )
            }
            type="solid-gray-tb"
            hoverType="solid-white-tb"
            after="&#xf107;"
          >
            Get quote
          </Button> */}
        </div>
      </Layout>
    </Fragment>
  );
};
