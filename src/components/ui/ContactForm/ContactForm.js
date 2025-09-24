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



import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import { CardButton } from "../../ui";
import { Spinner } from "../../elements";

export default ({ style }) => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  // form state
  const [name, setName] = useState(""); // Naam / Bedrijfsnaam
  const [phone, setPhone] = useState("");
  const [vakmensen, setVakmensen] = useState(""); // Welke vakmensen
  const [aantal, setAantal] = useState(""); // Hoeveel mensen
  const [startdatum, setStartdatum] = useState(""); // Wanneer starten

  const templateParams = {
    name,
    phone,
    vakmensen,
    aantal,
    startdatum,
  };

  const onSubmit = () => {
    if (name === "") {
      setStatus("Vul je naam of bedrijfsnaam in");
      setError(true);
      return;
    }

    if (phone === "") {
      setStatus("Vul je telefoonnummer in");
      setError(true);
      return;
    }

    if (vakmensen === "") {
      setStatus("Geef aan welke vakmensen je zoekt");
      setError(true);
      return;
    }

    setSending(true);
    emailjs
      .send("SERVICE ID", "TEMPLATE ID", templateParams, "USER ID")
      .then(
        () => {
          setSending(false);
          setError(false);
          setStatus("Je aanvraag is verzonden!");
        },
        (err) => {
          setSending(false);
          setError(true);
          setStatus("Sorry, er ging iets mis: " + err.text);
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setVakmensen("");
    setAantal("");
    setStartdatum("");
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    <form style={style} className={styles.wrapper}>
      {loading}
      <CardButton
        click={onSubmit}
        btn_after="&#xf107;"
        btn_text="Verstuur aanvraag"
        btn_type="solid-color-tb"
        btn_hoverType="solid-gray-tb"
        btn_align="stretch"
        padding
      >
        <div className={styles.contact_form}>
          <span className={[styles.status, error && styles.error].join(" ")}>
            {status}
          </span>
          <h4>Vul het formulier in:</h4>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Naam / Bedrijfsnaam *"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Telefoonnummer *"
          />
          <input
            value={vakmensen}
            onChange={(e) => setVakmensen(e.target.value)}
            type="text"
            placeholder="Welke vakmensen zoek je? *"
          />
          <input
            value={aantal}
            onChange={(e) => setAantal(e.target.value)}
            type="number"
            placeholder="Hoeveel mensen? *"
          />
          <input
            value={startdatum}
            onChange={(e) => setStartdatum(e.target.value)}
            type="text"
            placeholder="Wanneer moeten ze starten? *"
          />
        </div>
      </CardButton>
    </form>
  );
};
