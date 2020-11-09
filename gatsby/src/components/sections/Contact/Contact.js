import React from 'react';
import Reverse from '../../common/Reverse';
import { Button } from '../../common/Button';
import FormStyles from './FormStyles';

const Contact = () => (
  <section id="contact">
    <FormStyles
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <div className="form-header">
        <h1 className="header">Contact Me</h1>
        <p>
          Want to get in <span className="mark">touch?</span>
        </p>
      </div>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jane Doe"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="JaneDoe@who.com"
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Hello Dustin"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          id="message"
          rows="5"
          required
          placeholder="Hey Dustin, I want to hire you!"
        />
      </label>
      <div className="buttons">
        <Button type="submit">Send</Button>
        <Button type="reset" value="Clear">
          Clear
        </Button>
      </div>
    </FormStyles>
  </section>
);

export default Contact;
