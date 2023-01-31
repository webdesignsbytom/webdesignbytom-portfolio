import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'


function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tom@gmail.com</h5>
            <a href='mailto:tom@gmail.com' rel="noreferrer" target='_blank'>Send a message</a>

          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>webdesignbytom</h5>
            <a href='http:facebook-subdomain' rel="noreferrer" target='_blank'>Send a message</a>

          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Chat any time</h5>
            <a href='https://api.whatsapp.com/send?phone+447841378347' rel="noreferrer" target='_blank'>Send a message</a>

          </article>
        </div>

        {/* end of contact options */}
        
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email Address' required />
          <textarea name='message' rows={7} placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
