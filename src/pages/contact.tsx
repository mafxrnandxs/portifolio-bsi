import styles from '../styles/Contact.module.css';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form handling logic here (e.g., API call)
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Get in Touch</h2>
        <p>
          Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.
        </p>
        <div className={styles.contactInfo}>
          <p>📧 fernandes.mariafernandes03@gmail.com</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/pinterest.svg" alt="Pinterest" /></a>
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
        </div>
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
            className={styles.input}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className={styles.input}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
