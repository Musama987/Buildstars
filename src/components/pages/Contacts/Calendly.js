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
          Book a Meeting
        </span>
        <h2>Schedule a Consultation</h2>
        <p>
          Choose a date and time below that works for you. We look forward to
          speaking with you!
        </p>
      </div>

      <Layout>
        <div style={{ padding: '3rem 0', minHeight: '70vh' }}>
          <InlineWidget url="https://calendly.com/musamaramzan916/30min" />
        </div>
      </Layout>
    </div>
  );
};

export default Calendly;