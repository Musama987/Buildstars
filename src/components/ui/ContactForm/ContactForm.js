// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import styles from "./ContactForm.module.scss";
// import { CardButton } from "../../ui";
// import { Spinner } from "../../elements";

// export default ({ style }) => {
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState("");
//   const [error, setError] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [preferedCheck, setPreferedCheck] = useState(false);

//   const templateParams = {
//     name: name,
//     email: email,
//     phone: phone,
//     message: message,
//     email_prefered: preferedCheck ? "Yes" : "No",
//   };

//   const validateEmail = (email) => {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const onSubmit = () => {
//     if (name === "") {
//       setStatus("Please enter your name");
//       setError(true);
//       return;
//     }

//     if (!validateEmail(email)) {
//       setStatus("Incorrect email address");
//       setError(true);
//       return;
//     }

//     if (phone === "") {
//       setStatus("Please enter your phone");
//       setError(true);
//       return;
//     }

//     setSending(true);
//     emailjs
//       .send(
//         "SERVICE ID",
//         "TEMPLATE ID",
//         templateParams,
//         "USER ID"
//       )
//       .then(
//         (response) => {
//           setSending(false);
//           setError(false);
//           setStatus("Your message has been sent!");
//         },
//         (err) => {
//           setSending(false);
//           setError(true);
//           setStatus("Sorry. There is an error: " + err.text);
//         }
//       );
//     resetForm();
//   };

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setMessage("");
//     setPreferedCheck(false);
//   };

//   const loading = sending && (
//     <div className={styles.loading}>
//       <Spinner />
//     </div>
//   );

//   return (
//     <form style={style} className={styles.wrapper}>
//       {loading}
//       <CardButton
//         click={onSubmit}
//         btn_after="&#xf107;"
//         btn_text="Send message"
//         btn_type="solid-color-tb"
//         btn_hoverType="solid-gray-tb"
//         btn_align="stretch"
//         padding
//       >
//         <div className={styles.contact_form}>
//           <span className={[styles.status, error && styles.error].join(" ")}>
//             {status}
//           </span>
//           <h4>Send as a message:</h4>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Your name *"
//           />
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email address *"
//           />
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="text"
//             placeholder="Phone number *"
//           />
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             rows="10"
//             placeholder="Enter your message"
//           />
//           <label className={styles.checkbox_group}>
//             <p>Email prefered way to contact</p>
//             <input
//               onChange={() => setPreferedCheck(!preferedCheck)}
//               type="checkbox"
//               checked={preferedCheck}
//             />
//             <span className={styles.checkmark} />
//           </label>
//         </div>
//       </CardButton>
//     </form>
//   );
// };



// before email js

// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import styles from "./ContactForm.module.scss";
// import { CardButton } from "../../ui";
// import { Spinner } from "../../elements";

// export default ({ style }) => {
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState("");
//   const [error, setError] = useState(false);

//   // form state
//   const [name, setName] = useState(""); // Naam / Bedrijfsnaam
//   const [phone, setPhone] = useState("");
//   const [vakmensen, setVakmensen] = useState(""); // Welke vakmensen
//   const [aantal, setAantal] = useState(""); // Hoeveel mensen
//   const [startdatum, setStartdatum] = useState(""); // Wanneer starten

//   const templateParams = {
//     name,
//     phone,
//     vakmensen,
//     aantal,
//     startdatum,
//   };

//   const onSubmit = () => {
//     if (name === "") {
//       setStatus("Vul je naam of bedrijfsnaam in");
//       setError(true);
//       return;
//     }

//     if (phone === "") {
//       setStatus("Vul je telefoonnummer in");
//       setError(true);
//       return;
//     }

//     if (vakmensen === "") {
//       setStatus("Geef aan welke vakmensen je zoekt");
//       setError(true);
//       return;
//     }

//     setSending(true);
//     emailjs
//       .send("SERVICE ID", "TEMPLATE ID", templateParams, "USER ID")
//       .then(
//         () => {
//           setSending(false);
//           setError(false);
//           setStatus("Je aanvraag is verzonden!");
//         },
//         (err) => {
//           setSending(false);
//           setError(true);
//           setStatus("Sorry, er ging iets mis: " + err.text);
//         }
//       );
//     resetForm();
//   };

//   const resetForm = () => {
//     setName("");
//     setPhone("");
//     setVakmensen("");
//     setAantal("");
//     setStartdatum("");
//   };

//   const loading = sending && (
//     <div className={styles.loading}>
//       <Spinner />
//     </div>
//   );

//   return (
//     <form style={style} className={styles.wrapper}>
//       {loading}
//       <CardButton
//         click={onSubmit}
//         btn_after="&#xf107;"
//         btn_text="Verstuur aanvraag"
//         btn_type="solid-color-tb"
//         btn_hoverType="solid-gray-tb"
//         btn_align="stretch"
//         padding
//       >
//         <div className={styles.contact_form}>
//           <span className={[styles.status, error && styles.error].join(" ")}>
//             {status}
//           </span>
//           <h4>Vul het formulier in:</h4>

//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Naam / Bedrijfsnaam *"
//           />
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="text"
//             placeholder="Telefoonnummer *"
//           />
//           <input
//             value={vakmensen}
//             onChange={(e) => setVakmensen(e.target.value)}
//             type="text"
//             placeholder="Welke vakmensen zoek je? *"
//           />
//           <input
//             value={aantal}
//             onChange={(e) => setAantal(e.target.value)}
//             type="number"
//             placeholder="Hoeveel mensen? *"
//           />
//           <input
//             value={startdatum}
//             onChange={(e) => setStartdatum(e.target.value)}
//             type="text"
//             placeholder="Wanneer moeten ze starten? *"
//           />
//         </div>
//       </CardButton>
//     </form>
//   );
// };




// aftar add email js is it working but styles they used ui changes issue

// import React, { useState, useEffect } from "react";

// // ===============================================
// // STANDALONE FIX: 
// // The missing components (Spinner, CardButton) and styles 
// // are included here to make this file runnable for testing.
// // ===============================================

// // A simple spinner component (replaces "../../elements")
// const Spinner = () => (
//     <div className="spinner-standalone">
//         <div className="bounce1"></div>
//         <div className="bounce2"></div>
//         <div className="bounce3"></div>
//     </div>
// );

// // A simple button component (replaces "../../ui")
// const CardButton = ({ children, btn_text }) => (
//     <div className="card-base-standalone">
//         <div className="card-button-content-standalone">
//             {children}
//             {/* A real submit button is used here */}
//             <button type="submit" className="submit-button-standalone">
//                 {btn_text}
//             </button>
//         </div>
//     </div>
// );

// // The main Contact Form component with corrected logic
// const ContactForm = ({ style }) => {
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState("");
//   const [error, setError] = useState(false);

//   // Form state
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [vakmensen, setVakmensen] = useState("");
//   const [aantal, setAantal] = useState("");
//   const [startdatum, setStartdatum] = useState("");
  
//   // Dynamically load the EmailJS script when the component mounts
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup the script when the component is removed
//       document.body.removeChild(script);
//     }
//   }, []);

//   const templateParams = {
//     name,
//     phone,
//     vakmensen,
//     aantal,
//     startdatum,
//   };
  
//   const resetForm = () => {
//     setName("");
//     setPhone("");
//     setVakmensen("");
//     setAantal("");
//     setStartdatum("");
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (name === "" || phone === "" || vakmensen === "") {
//       setStatus("Please fill in all required fields marked with *");
//       setError(true);
//       return;
//     }

//     if (!window.emailjs) {
//         setError(true);
//         setStatus("Could not send email. Please refresh and try again.");
//         console.error("EmailJS script not loaded yet.");
//         return;
//     }
    
//     setSending(true);
//     setStatus("Sending...");
//     setError(false);

//     // --- Replace with your actual IDs ---
//     const SERVICE_ID = "service_eudtp8u";
//     const TEMPLATE_ID = "template_kg4aalp";
//     const PUBLIC_KEY = "QOxRYmFaF-whMKN5j";

//     window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           setSending(false);
//           setError(false);
//           setStatus("Je aanvraag is verzonden!");
//           resetForm();
//         },
//         (err) => {
//           console.log("FAILED...", err);
//           setSending(false);
//           setError(true);
//           setStatus("Sorry, er ging iets mis: " + err.text);
//         }
//       );
//   };

//   return (
//     <form style={style} className="wrapper-form-standalone" onSubmit={onSubmit}>
//       {sending && (
//         <div className="loading-standalone">
//           <Spinner />
//         </div>
//       )}
//       <CardButton
//         btn_text="Verstuur aanvraag"
//       >
//         <div className="contact_form-standalone">
//           <span className={`status-standalone ${error ? 'error' : ''}`.trim()}>
//             {status}
//           </span>
//           <h4>Vul het formulier in:</h4>

//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Naam / Bedrijfsnaam *"
//             required
//           />
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="tel"
//             placeholder="Telefoonnummer *"
//             required
//           />
//           <input
//             value={vakmensen}
//             onChange={(e) => setVakmensen(e.target.value)}
//             type="text"
//             placeholder="Welke vakmensen zoek je? *"
//             required
//           />
//           <input
//             value={aantal}
//             onChange={(e) => setAantal(e.target.value)}
//             type="number"
//             placeholder="Hoeveel mensen?"
//           />
//           <input
//             value={startdatum}
//             onChange={(e) => setStartdatum(e.target.value)}
//             type="text"
//             onFocus={(e) => (e.target.type = 'date')}
//             onBlur={(e) => (e.target.type = 'text')}
//             placeholder="Wanneer moeten ze starten?"
//           />
//         </div>
//       </CardButton>
//     </form>
//   );
// };

// // A simple App component to render everything for the preview
// export default function App() {
//   const backgroundUrl = "https://images.unsplash.com/photo-1587560699334-cc4ff6349094?q=80&w=2070&auto=format&fit=crop";

//   return (
//     <>
//       {/* All styles are now inside this <style> tag */}
//       <style>{`
//         body { font-family: 'Poppins', sans-serif; margin: 0; }
//         .layout-standalone {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           padding: 4rem;
//           min-height: 100vh;
//           align-items: center;
//           background-size: cover;
//           background-position: center;
//         }
//         .wrapper-contacts-standalone { display: flex; align-items: center; }
//         .contact_info-standalone { color: #fff; padding-left: 4rem; text-shadow: 1px 1px 3px rgba(0,0,0,0.4); }
//         .contact_info-standalone h2 { font-size: 4rem; font-weight: 200; margin-bottom: 3rem; }
//         .contact_info-standalone p { margin-bottom: 4rem; }
        
//         .card-base-standalone {
//           background-color: #fff;
//           border-radius: 8px;
//           padding: 2.5rem;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//         }
//         .card-button-content-standalone {
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           height: 100%;
//         }
//         .submit-button-standalone {
//           margin-top: 3rem;
//           width: 100%;
//           padding: 1rem;
//           font-size: 1.1rem;
//           color: #fff;
//           background-color: #4a90e2;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
        
//         .wrapper-form-standalone { position: relative; }
//         .loading-standalone {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: rgba(255, 255, 255, 0.85);
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 8px;
//         }
//         .status-standalone {
//           text-align: center;
//           margin-bottom: 1.5rem;
//           padding: 0.5rem;
//           border-radius: 4px;
//           font-weight: 500;
//           color: #28a745;
//         }
//         .status-standalone.error { color: #D8000C; background-color: #FFBABA; }
        
//         .contact_form-standalone h4 {
//           font-size: 2rem;
//           font-weight: 400;
//           margin-top: 1rem;
//           margin-bottom: 4rem;
//         }
//         .contact_form-standalone input {
//           width: 100%;
//           box-sizing: border-box;
//           padding: 1.2rem 1rem;
//           background-color: #f5f5f5;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           margin-bottom: 2rem;
//           transition: all 0.3s ease;
//         }
//         .contact_form-standalone input:focus {
//           outline: none;
//           background-color: #eee;
//           border-color: #4a90e2;
//         }

//         .spinner-standalone { margin: 20px auto; width: 70px; text-align: center; }
//         .spinner-standalone > div {
//           width: 18px;
//           height: 18px;
//           background-color: #333;
//           border-radius: 100%;
//           display: inline-block;
//           animation: sk-bouncedelay 1.4s infinite ease-in-out both;
//         }
//         .spinner-standalone .bounce1 { animation-delay: -0.32s; }
//         .spinner-standalone .bounce2 { animation-delay: -0.16s; }
//         @keyframes sk-bouncedelay { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
        
//         @media (max-width: 768px) {
//           .layout-standalone { grid-template-columns: 1fr; }
//           .contact_info-standalone { padding-left: 0; margin-top: 3rem; text-align: center; }
//         }
//       `}</style>

//       <div className="layout-standalone" style={{ backgroundImage: `url(${backgroundUrl})` }}>
//         <ContactForm />
//         <div className="wrapper-contacts-standalone">
//           <div className="contact_info-standalone">
//             <h2>Gebrek aan personeel?</h2>
//             <p>Vul het formulier in – klaar in 3 minuten.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// new test

import React, { useState, useEffect } from "react";

// ===============================================
// STANDALONE PREVIEW VERSION
// The 'Spinner' and 'CardButton' components and all necessary styles
// are included in this file to make it runnable in the preview.
// ===============================================

// A simple Spinner component to replace the import from "../../elements"
const Spinner = () => (
    <div className="preview-spinner">
        <div className="preview-bounce1"></div>
        <div className="preview-bounce2"></div>
        <div className="preview-bounce3"></div>
    </div>
);

// A simple CardButton component to replace the import from "../../ui"
// It uses a real <button type="submit"> to work with the form.
const CardButton = ({ children, btn_text, btn_after }) => (
    <div className="preview-card-button">
        {children}
        <button type="submit" className="preview-submit-button">
            {btn_text}
            {btn_after && <span dangerouslySetInnerHTML={{ __html: ` ${btn_after}` }} />}
        </button>
    </div>
);

// =================================================================
// YOUR UPDATED CONTACT FORM COMPONENT STARTS HERE
// (This is the part to copy into your actual project file)
// =================================================================
const ContactForm = ({ style }) => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vakmensen, setVakmensen] = useState("");
  const [aantal, setAantal] = useState("");
  const [startdatum, setStartdatum] = useState("");

  // FIX: Dynamically load the EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, []);

  const templateParams = {
    name,
    phone,
    vakmensen,
    aantal,
    startdatum,
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setVakmensen("");
    setAantal("");
    setStartdatum("");
  };
  
  // FIX: Updated onSubmit function to handle form submission
  const onSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    if (name === "" || phone === "" || vakmensen === "") {
      setStatus("Please fill in all required fields.");
      setError(true);
      return;
    }
    
    // Check if the script has loaded
    if (!window.emailjs) {
        setError(true);
        setStatus("Could not send email. Please refresh and try again.");
        return;
    }

    setSending(true);
    setStatus("Sending...");
    setError(false);

    // Your EmailJS keys
    const SERVICE_ID = "service_eudtp8u";
    const TEMPLATE_ID = "template_kg4aalp";
    const PUBLIC_KEY = "QOxRYmFaF-whMKN5j";

    // FIX: Use window.emailjs and move resetForm() to success block
    window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          setSending(false);
          setError(false);
          setStatus("Je aanvraag is verzonden!");
          resetForm();
        },
        (err) => {
          setSending(false);
          setError(true);
          setStatus("Sorry, er ging iets mis: " + err.text);
        }
      );
  };

  const loading = sending && (
    // Note: className uses 'styles.loading' in your file, but is generic here for the preview
    <div className="preview-loading">
      <Spinner />
    </div>
  );

  return (
    // Note: classNames use 'styles.x' in your file, but are generic here for the preview
    <form style={style} className="preview-wrapper" onSubmit={onSubmit}>
      {loading}
      <CardButton
        btn_after="&#xf107;"
        btn_text="Verstuur aanvraag"
      >
        <div className="preview-contact-form">
          <span className={`preview-status ${error ? 'error' : ''}`.trim()}>
            {status}
          </span>
          <h4>Vul het formulier in:</h4>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Naam / Bedrijfsnaam *"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Telefoonnummer *"
            required
          />
          <input
            value={vakmensen}
            onChange={(e) => setVakmensen(e.target.value)}
            type="text"
            placeholder="Welke vakmensen zoek je? *"
            required
          />
          <input
            value={aantal}
            onChange={(e) => setAantal(e.target.value)}
            type="number"
            placeholder="Hoeveel mensen?"
          />
          <input
            value={startdatum}
            onChange={(e) => setStartdatum(e.target.value)}
            type="text"
            placeholder="Wanneer moeten ze starten?"
          />
        </div>
      </CardButton>
    </form>
  );
};
// =================================================================
// YOUR UPDATED CONTACT FORM COMPONENT ENDS HERE
// =================================================================

// Simple App wrapper to render everything for the preview
export default function App() {
  return (
    <>
      <style>{`
        /* Minimal styles to make the form look correct in preview */
        .preview-wrapper {
            position: relative;
            background: #fff;
            padding: 2rem;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .preview-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
        }
        .preview-status {
            text-align: center;
            display: block;
            margin-bottom: 1.5rem;
            font-weight: 500;
            color: rgb(92, 228, 114);
            font-size: 1.2rem;
        }
        .preview-status.error {
            color: red;
        }
        .preview-contact-form h4 {
            font-size: 2rem;
            font-weight: 400;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
        .preview-contact-form input {
            padding: 1.5rem 1rem;
            background-color: rgb(245, 245, 245);
            border: 1px solid #eee;
            margin-bottom: 1.5rem;
            width: 100%;
            box-sizing: border-box;
            border-radius: 4px;
        }
        .preview-card-button {
            display: flex;
            flex-direction: column;
        }
        .preview-submit-button {
            margin-top: 1rem;
            padding: 1rem;
            background-color: #F57C00;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        .preview-spinner { margin: 20px auto; width: 70px; text-align: center; }
        .preview-spinner > div {
          width: 18px; height: 18px; background-color: #333;
          border-radius: 100%; display: inline-block;
          animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        }
        .preview-spinner .preview-bounce1 { animation-delay: -0.32s; }
        .preview-spinner .preview-bounce2 { animation-delay: -0.16s; }
        @keyframes sk-bouncedelay { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
      `}</style>
      <ContactForm />
    </>
  )
}

