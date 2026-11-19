'use client';

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked; // only checkboxes

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent navigation

    setStatus("Sending...");

    const data = new FormData();
    data.append("access_key", "5d137a1d-b43b-4a6c-aa0b-8e594affcc28");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    if (formData.botcheck) data.append("botcheck", "true");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent! Thanks!");
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: false });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return ( 
  <>
    {/*CONTACT PAGE CONTAINER*/}
    <div className={styles['contact-page']}>
      {/*TITLE*/}
      <section className={styles['contact-title-section']}>
          <h1 className={styles['contact-title']}>CONTACT US.</h1>
      </section>

      {/*ENTIRE INPUT SECTION (name, email, subject, message, send button)*/}
      <section className={styles['contact-form-section']}>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              {/*NAME INPUT*/}
              <input
                placeholder="Name*"
                className={styles['name-box']}
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              {/*EMAIL INPUT*/}
              <input
                placeholder="Email*"
                className={styles['email-box']}
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              {/*SUBJECT DROPDOWN*/}
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={styles['subject-box']}
              >
                <option className={styles['subject-options']} value="">Subject*</option>
                <option className={styles['subject-options']} value="artist-inquiry">Artist Inquiry</option>
                <option className={styles['subject-options']} value="team-application">Team Application</option>
                <option className={styles['subject-options']} value="event-inquiry">Event Inquiry</option>
                <option className={styles['subject-options']} value="partnership">Partnership Opportunity</option>
                <option className={styles['subject-options']} value="general">General Question</option>
                <option className={styles['subject-options']} value="other">Other</option>
              </select>
            </div>

            <div>
              {/*MESSAGE INPUT*/}
              <label className={styles['message-label']} htmlFor="message">Type your message here:*</label>
              <textarea
                className={styles['message-box']}
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/*BOT CHECK*/}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
              checked={formData.botcheck}
              onChange={handleChange}
            />

            {/*'SEND MESSAGE' BUTTON*/}
            <div className={styles['send-button-container']}>
              <button className={styles['send-button']} type="submit">Send Message</button>
            </div>

            {/*STATUS MESSAGE*/}
            {status && <p style={{ marginTop: "1rem", color: "lightgreen" }}>{status}</p>}
          </form>
        </div>
      </section>
    </div>
  </>);
}

// const styles: { [key: string]: React.CSSProperties } = {
//   'contact-page': {
//     marginTop: '110px',
//     backgroundColor: '#FFFFFF',
//   },
//   'contact-title-section': {
//     marginTop: '2rem',
//     textAlign: 'center',
//     paddingTop: '6rem',
//   },
//   'contact-title': {
//     color: '#000000',
//     fontFamily: displayFont,
//     fontSize: '13rem',
//     fontWeight: 700,
//     lineHeight: 1,
//   },
//   'contact-form-section': {
//     backgroundColor: '#000000',
//     marginTop: '2rem',
//     marginRight: '13.8vw',
//     marginLeft: '13.8vw',
//     padding: '3rem 3rem 2rem 3rem',
//     fontFamily: bodyFont,
//     fontSize: '1.1rem',
//   },
//   'name-box': {
//     borderBottom: '1px solid #FFFFFF',
//     width: '100%',
//     padding: '0.5rem',
//     margin: '0.2rem 0',
//   },
//   'email-box': {
//     borderBottom: '1px solid #FFFFFF',
//     width: '100%',
//     padding: '0.5rem',
//     margin: '1rem 0',
//   },
//   'subject-options': {
//     backgroundColor: '#000000',
//     color: '#FFFFFF',
//   },
//   'subject-box': {
//     border: '1px solid #FFFFFF',
//     width: '100%',
//     padding: '0.5rem',
//     margin: '1rem 0',
//   },
//   'message-label': {
//     display: 'block',
//     paddingLeft: '0.5rem',
//     marginTop: '0.8rem',
//   },
//   'message-box': {
//     width: '100%',
//     padding: '0.5rem',
//     borderRadius: '0px',
//     border: '1px solid #FFFFFF',
//     backgroundColor: '#000000',
//     marginTop: '0.8rem',
//     marginBottom: '1rem',
//   },
//   'send-button-container': {
//     textAlign: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   'send-button': {
//     backgroundColor: '#FFFFFF',
//     color: '#000000',
//     padding: '0.8rem 2rem',
//     borderRadius: '0px',
//     textAlign: 'center',
//   },

// }
