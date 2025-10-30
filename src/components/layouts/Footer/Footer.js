import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link, Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";


// --- Import your 4 social images ---
import social1 from "../../../assets/placeholders/footer1.jpeg";
import social2 from "../../../assets/placeholders/footer2.jpeg";
import social3 from "../../../assets/placeholders/footer3.jpeg";
import social4 from "../../../assets/placeholders/footer4.jpeg";

export default () => {
  const state = useCustomState()[0];

  const servicesList = state.data.services
    .map((item, index) => (
      <Link
        key={index}
        url={"/services/" + item.id}
        hoverStyle={{ color: THEME.color }}
      >
        <i className="las la-angle-right" />
        {item.title}
      </Link>
    ))
    .slice(0, 5);

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
            Efficiently productivate adaptive testing after strategic
            experiences dramatically through client-centric potentialities.
          </p>
          <div className={styles.social}>
            {/* <i className="lab la-facebook-f" />
            <i className="lab la-twitter" />
            <i className="lab la-linkedin-in" /> */}
             {/* --- New Social Images (40x40) --- */}
            <img src={social1} alt="social-1" />
            <img src={social2} alt="social-2" />
            <img src={social3} alt="social-3" />
            <img src={social4} alt="social-4" />
          </div>
        </div>

        <div className={styles.link_area}>
          <div className={styles.links}>
            <h4>Services</h4>
            {servicesList}
          </div>
          <div className={styles.links}>
            <h4>Fast Links</h4>
            {linkList}
          </div>
        </div>

        <div className={styles.subscribe}>
          <h4>Newsletter</h4>
          <Subscribe />
          <p>
            Productivate adaptive testing after strategic experiences
            dramatically through.
          </p>
        </div>
      </div>
    </Layout>
  );
};
