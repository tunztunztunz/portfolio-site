import React from 'react';
import styled from 'styled-components';
import Reverse from '../common/Reverse';
import { Button } from '../common/Button';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  align-items: center;
  label {
    font-size: 1.25rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    //height: 3rem;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid var(--black);
    font-size: 1.25rem;
  }
  .form-header {
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    Button {
      min-width: 85px;
      width: 25%;
      margin: 0 1rem;
    }
  }
`;

const Contact = () => {
  console.log('stay');
  return (
    <section id="contact">
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <div className="form-header">
          <h1 className="header">Contact Me</h1>
          <p>
            Want to get in <Reverse>touch?</Reverse> Fill out this form!
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
            placeholder="Subject Title"
          />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" required />
        </label>
        <div className="buttons">
          <Button type="submit">Send</Button>
          <Button type="reset"
                  value="Clear"
          >Clear</Button>
        </div>
      </Form>
    </section>
  );
};

export default Contact;
