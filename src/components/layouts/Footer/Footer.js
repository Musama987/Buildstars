// import React from "react";
// import styles from "./Footer.module.scss";
// import Layout from "../Layout/Layout";
// import { Logo, Link } from "../../elements";
// import THEME from "../../../state/theme";
// import { useCustomState } from "../../../state/state";


// // --- Import your 4 social images ---
// import social1 from "../../../assets/placeholders/footer1.jpeg";
// import social2 from "../../../assets/placeholders/footer2.jpeg";
// import social3 from "../../../assets/placeholders/footer3.jpeg";
// import social4 from "../../../assets/placeholders/footer4.jpeg";

// // import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

// export default () => {
//   const state = useCustomState()[0];

//   const servicesList = state.data.services
//     .map((item, index) => (
//       <Link
//         key={index}
//         url={"/services/" + item.id}
//         hoverStyle={{ color: THEME.color }}
//       >
//         <i className="las la-angle-right" />
//         {item.title}
//       </Link>
//     ))
//     .slice(0, 5);

//   const linkList = state.data.fast_links.map((item, index) => (
//     <Link key={index} url={item.url} hoverStyle={{ color: THEME.color }}>
//       <i className="las la-angle-right" />
//       {item.title}
//     </Link>
//   ));
//   return (
//     <Layout col="1" padding style={{ background: "rgb(40,40,50" }}>
//       <div className={styles.footer}>
//         <div className={styles.logo_area}>
//           <Logo dark />
//           <p>
//             Efficiently productivate adaptive testing after strategic
//             experiences dramatically through client-centric potentialities.
//           </p>
//           <div className={styles.social}>
//             {/* <i className="lab la-facebook-f" />
//             <i className="lab la-twitter" />
//             <i className="lab la-linkedin-in" />  */}

//             {/* {/* --- New Social Images (40x40) --- */}
//             <img src={social1} alt="social-1" />
//             <img src={social2} alt="social-2" />
//             <img src={social3} alt="social-3" />
//             <img src={social4} alt="social-4" />
//           </div>
//         </div>

//         <div className={styles.link_area}>
//           <div className={styles.links}>
//             <h4>Services</h4>
//             {servicesList}
//           </div>
//           <div className={styles.links}>
//             <h4>Fast Links</h4>
//             {linkList}
//           </div>
//         </div>

//         <div className={styles.subscribe}>
//           <h4>Contact Us</h4>
//           {/* <Subscribe /> */}
//           <p>
//             +31 6 20 57 68 94
//           </p>
//           <a href="mailto:info@araratbureau.nl" className={styles.emailLink}>
//            info@araratbureau.nl
//           </a>
//           <p> Small Haven 54,Eidhoven 5611 EJ
//           </p>
//           {/* ✅ New Social Media Links Section */}
//           <div className={styles.socialMedia}>
//             {/* <a
//               href="https://facebook.com/YOUR_CLIENT_ID"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF />
//             </a> */}
//             <a
//               href="https://www.linkedin.com/in/eryk-arojan-6a9728224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn />
//             </a>
//             {/* <a
//               href="https://twitter.com/YOUR_CLIENT_ID"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter />
//             </a> */}
//             {/* <a
//               href="https://www.tiktok.com/@YOUR_CLIENT_ID"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTiktok />
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };






import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

// --- Import your 4 social images ---
import social1 from "../../../assets/placeholders/footer1.jpeg";
import social2 from "../../../assets/placeholders/footer2.jpeg";
import social3 from "../../../assets/placeholders/footer3.jpeg";
import social4 from "../../../assets/placeholders/footer4.jpeg";

import { FaLinkedinIn } from "react-icons/fa";

export default () => {
  // ✅ Fix: Destructure actions to access toogleModal
  const [state, actions] = useCustomState();

  // ✅ Restored: Dynamic Fast Links List
  const linkList = state.data.fast_links.map((item, index) => (
   <Link key={index} url={item.url} hoverStyle={{ color: THEME.color }}>
      <i className="las la-angle-right" />
    {item.title}
    </Link>
  ));

  return (
    <Layout col="1" padding style={{ background: "rgb(40,40,50" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Logo dark />
          <p>
            Contact met mensen vormt de basis van ons werk, daarom bouwen we al jaren relaties op die ons in staat stellen om klanten effectief te bedienen en aan hun verwachtingen te voldoen
          </p>
          <div className={styles.social}>
            {/* --- Social Images (40x40) --- */}
            <img src={social1} alt="social-1" />
            <img src={social2} alt="social-2" />
            <img src={social3} alt="social-3" />
            <img src={social4} alt="social-4" />
          </div>
        </div>

        <div className={styles.link_area}>
          {/* ✅ SERVICES SECTION: Updated with your specific links */}
          <div className={styles.links}>
            <h4>Services</h4>
            
            <Link url="/working-us" hoverStyle={{ color: THEME.color }}>
              <i className="las la-angle-right" />
              Working Us
            </Link>

            <Link url="/consultation" hoverStyle={{ color: THEME.color }}>
              <i className="las la-angle-right" />
              Get Consultation
            </Link>

            {/* ✅ BUTTON ACTION: Opens the Modal (Get a Quote) */}
            <Link 
              url="#" 
              click={() => actions.toogleModal()} 
              hoverStyle={{ color: THEME.color }}
            >
              <i className="las la-angle-right" />
              Get a Quote
            </Link>

            <Link url="/why-us" hoverStyle={{ color: THEME.color }}>
              <i className="las la-angle-right" />
              Why Us
            </Link>
          </div>

          {/* ✅ FAST LINKS: Restored to use {linkList} */}
          <div className={styles.links}>
            <h4>Fast Links</h4>
            {linkList}
          </div>
        </div>

        <div className={styles.subscribe}>
          <h4>Contact Us</h4>
          <p>
            +31 6 20 57 68 94
          </p>
          {/* ✅ Email Link Fix */}
          <a href="mailto:info@araratbureau.nl" className={styles.emailLink}>
            info@araratbureau.nl
          </a>
          <p> Small Haven 54, Eidhoven 5611 EJ
          </p>
          
          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/eryk-arojan-6a9728224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};