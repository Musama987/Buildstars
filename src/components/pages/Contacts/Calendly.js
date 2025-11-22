// src/components/pages/Contacts/calendly.js

import React from 'react';
import { Layout } from '../../layouts';
import { InlineWidget } from 'react-calendly';
import styles from './calendly.module.scss'; // Import the styles
import THEME from '../../../state/theme';

const Calendly = () => {
  return (
    // This new wrapper will fix the overlap with the navbar
    <div className={styles.calendlyPageWrapper}>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Maak een afspraak
        </span>
        <h2>Plan een consult</h2>
        <p>
          Kies hieronder een datum en tijd die u schikt. We kijken ernaar uit om
met u te spreken!
        </p>
      </div>

      <Layout>
        <div style={{ padding: '3rem 0', minHeight: '70vh' }}>
          {/* <InlineWidget url="https://calendly.com/musamaramzan916/30min" /> */}
           <InlineWidget url="https://calendly.com/araratbureau-info/30min" />
        </div>
      </Layout>
    </div>
  );
};

export default Calendly;