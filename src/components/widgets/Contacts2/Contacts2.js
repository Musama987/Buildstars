// import React, { Fragment } from "react";
// import styles from "./Contacts2.module.scss";
// import Layout from "../../layouts/Layout/Layout";
// import { ContactForm } from "../../ui";
// import { AddressBox } from "../../elements";
// import THEME from "../../../state/theme";
// import { useCustomState } from "../../../state/state";

// export default () => {
//   const actions = useCustomState()[1];

//   return (
//     <Fragment>
//       <div className={styles.header}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Stuur een bericht
//         </span>
//         <h2>Neem gerust contact met ons op.</h2>
//         <p>
//           Dwing energiek afstemmingen met een hoge opbrengst, terwijl onderhoudbare
//           materialen tijdige leveringen opleveren. Maak synergetisch gebruik van de holistische visie van anderen via expertise met een hoge opbrengst.
//         </p>
//       </div>
//       <Layout col="4">
//         <AddressBox
//           icon="las la-phone"
//           title="Bel ons"
//           text="+31 6 20 57 68 94"
//         />
//         <AddressBox
//           icon="la la-envelope-open"
//           title="Mail ons"
//           text="info@araratbureau.nl"
//         />
//         <AddressBox
//           icon="las la-comments"
//           title="Gratis consult"
//           text="Small Haven 54,Eidhoven 5611 EJ"
//         />
//         <AddressBox
//           icon="las la-comment"
//           title="Gratis"
//           text="Live chart 24/7"
//         />
//         <span className={styles.divider} style={{ borderColor: THEME.color }} />
//       </Layout>

//       <Layout col="2">
//         <div className={styles.wrapper}>
//           <ContactForm style={{ border: "1px solid #eee" }} />
//         </div>

//         <div className={styles.info}>
//           <i
//             className="las la-long-arrow-alt-right"
//             style={{ color: THEME.color }}
//           />
//           <h2>Klaar om met ons zaken te doen?</h2>
//           <p>
//             Transformeer snel geïntegreerde processen via wrijvingsloze
//             paradigma's. Productiveer intrinsiek proactieve katalysatoren voor verandering via
//             economisch gezonde relaties.
//           </p>
//           {/* <Button
//             click={() =>
//               actions.toogleRequest(
//                 "I'm ready to start making business with you!"
//               )
//             }
//             type="solid-gray-tb"
//             hoverType="solid-white-tb"
//             after="&#xf107;"
//           >
//             Get quote
//           </Button> */}
//         </div>
//       </Layout>
//     </Fragment>
//   );
// };




import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Contacts2.module.scss"; // Make sure this is imported
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
        {/* CARD 1 */}
        <AddressBox
          icon="las la-phone"
          title="Bel ons"
          text={
            <div className={styles.textHeightFix}>
              +31 6 20 57 68 94
            </div>
          }
        />

        {/* CARD 2 */}
        <AddressBox
          icon="la la-envelope-open"
          title="Mail ons"
          text={
            <div className={styles.textHeightFix}>
              info@araratbureau.nl
            </div>
          }
        />
        
        {/* CARD 3 - The Long One */}
        <AddressBox
          icon="las la-calendar-check" 
          title="Gratis consult"
          text={
            <div className={styles.textHeightFix}>
              <span>
                <Link 
                  to="/consultation" 
                  style={{ 
                    color: 'inherit',
                    textDecoration: 'underline', 
                    cursor: 'pointer',
                    whiteSpace: 'nowrap' // Keeps "Plan een consult" together
                  }}
                >
                  Plan een consult
                </Link>
                {/* Address might wrap to 2nd line, which is fine now */}
                <span style={{ fontSize: '0.9em' }}> (Small Haven 54, Eidhoven 5611 EJ)</span>
              </span>
            </div>
          }
        />

        {/* CARD 4 */}
        <AddressBox
          icon="las la-comment"
          title="Gratis"
          text={
            <div className={styles.textHeightFix}>
              Live chart 24/7
            </div>
          }
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
          <h2>Wij helpen u graag verder.</h2>
          <p>
            Vertel ons wat u zoekt, dan nemen wij direct contact met u op.
          </p>
        </div>
      </Layout>
    </Fragment>
  );
};