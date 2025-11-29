// // src/components/pages/Contacts/calendly.js

// import React from 'react';
// import { Layout } from '../../layouts';
// import { InlineWidget } from 'react-calendly';
// import styles from './calendly.module.scss'; // Import the styles
// import THEME from '../../../state/theme';

// const Calendly = () => {
//   return (
//     // This new wrapper will fix the overlap with the navbar
//     <div className={styles.calendlyPageWrapper}>
//       <div className={styles.header}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Maak een afspraak
//         </span>
//         <h2>Plan een consult</h2>
//         <p>
//           Kies hieronder een datum en tijd die u schikt. We kijken ernaar uit om
// met u te spreken!
//         </p>
//       </div>

//       <Layout>
//         <div style={{ padding: '3rem 0', minHeight: '70vh' }}>
//           {/* <InlineWidget url="https://calendly.com/musamaramzan916/30min" /> */}
//            <InlineWidget url="https://calendly.com/araratbureau-info/30min" />
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default Calendly;




// src/components/pages/Contacts/calendly.js

import React from 'react';
import { Layout } from '../../layouts';
import { InlineWidget } from 'react-calendly';
import styles from './calendly.module.scss';
import THEME from '../../../state/theme';

const Calendly = () => {

  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

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

        {/* --- MOVED: Refresh/Troubleshooting Section --- */}
        <div style={{ marginTop: '1.5rem' }}>
          <span style={{ fontSize: '01.2rem', color: '#666', marginRight: '8px' }}>
            Ziet u geen beschikbare tijden?
          </span>
          <button 
            onClick={handleRefresh}
            style={{
              background: 'none',
              border: 'none',
              color: THEME.color || 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              padding: 0
            }}
          >
            Vernieuw de pagina
          </button>
        </div>
        {/* --------------------------------------------- */}
      </div>

      <Layout>
        <div style={{ padding: '3rem 0', minHeight: '70vh' }}>
           <InlineWidget url="https://calendly.com/araratbureau-info/30min" />
        </div>
      </Layout>
    </div>
  );
};

export default Calendly;