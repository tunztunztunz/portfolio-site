import React from 'react';

const Contact = () => {
  console.log('stay');
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        action="/"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </section>
  );
};

export default Contact;
