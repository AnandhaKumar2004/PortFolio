import { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Contact = () => {
  const form = useRef();
  const receiverEmail = "anandhakumar20048@gmail.com"; // ✅ moved here (component scope)

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const senderEmail = formData.get("from_email").trim();

    // ✅ 1. Check empty fields
    if (!formData.get("from_name") || !senderEmail || !formData.get("message")) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // ✅ 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // ✅ 3. Prevent sender & receiver being same
    if (senderEmail.toLowerCase() === receiverEmail.toLowerCase()) {
      alert("⚠️ Sender and receiver email cannot be the same.");
      return;
    }

    // ✅ 4. Send using EmailJS
    emailjs
      .sendForm(
        "service_7c7ms5s",   // from EmailJS
        "template_qt22jjf",  // from EmailJS
        form.current,
        "uvc73jm4qTEgTTG1b"    // from EmailJS
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("❌ Failed to Send. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you have any questions or inquiries, feel free to reach out!</p>

      {/* Contact info section */}
      <div className="contact-info">
        <div className="info-card">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>Email</p>
          <span>{receiverEmail}</span> {/* ✅ now works */}
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>Phone</p>
          <span>+91 9092038300</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <p>LinkedIn</p>
          <span>www.linkedin.com/in/anandha-kumar</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          <p>Website</p>
          <span>https://akportfolioanand.netlify.app</span>
        </div>
      </div>

      {/* Contact form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
