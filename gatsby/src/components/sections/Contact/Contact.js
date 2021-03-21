import React from 'react';
import { Button } from '../../common/Button';
import FormStyles from './FormStyles';

const duration = '400';

const Contact = () => (
  <section id="contact">
    <FormStyles
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <div className="form-header">
        <h1
          className="header"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration={duration}
          data-sal-easing="ease-out"
        >
          Contact Me
        </h1>
        <p
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration={duration}
          data-sal-easing="ease-out"
        >
          Want to get in <span className="mark">touch?</span>
        </p>
      </div>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label
        data-sal="slide-right"
        data-sal-delay="500"
        data-sal-duration={duration}
        data-sal-easing="ease-out"
        htmlFor="name"
      >
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jane Doe"
          required
        />
      </label>
      <label
        data-sal="slide-left"
        data-sal-delay="600"
        data-sal-duration={duration}
        data-sal-easing="ease-out"
        htmlFor="email"
      >
        Email
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="JaneDoe@who.com"
        />
      </label>
      <label
        data-sal="slide-right"
        data-sal-delay="700"
        data-sal-duration={duration}
        data-sal-easing="ease-out"
        htmlFor="subject"
      >
        Subject
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="I am not a robot"
        />
      </label>
      <label
        data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration={duration}
        data-sal-easing="ease-out"
        htmlFor="message"
      >
        Message
        <textarea
          name="message"
          id="message"
          rows="5"
          required
          placeholder="Hey Dustin, I want to hire you!"
        />
      </label>
      <div
        className="buttons"
        data-sal="fade"
        data-sal-delay="850"
        data-sal-duration={duration}
        data-sal-easing="ease-out"
      >
        <Button type="submit">Send</Button>
        <Button type="reset" value="Clear">
          Clear
        </Button>
      </div>
    </FormStyles>
  </section>
);

export default Contact;
