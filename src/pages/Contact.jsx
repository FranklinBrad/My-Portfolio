import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n7c7szd', 'template_2jnabfm', form.current, {
        publicKey: '-7pF6Ozhze3iyBn9o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div style={{
      color:"white"
    }}>
    <h1 > Send Me an Email!</h1>
    </div>
    <form ref={form} onSubmit={sendEmail} style={{
      paddingTop: '200px',
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize:"24px"
    }}>
      <div style={{ paddingTop: "10px"}}>
        <label style={{paddingRight:"10px"}}>Name</label>
        <input style={{ fontSize:"25px", borderRadius:"5px"}} type="text" name="from_name" />
      </div>
      <div style={{ paddingTop: "10px"}}>
        <label style={{paddingRight:"10px"}}>Email</label>
        <input style={{ fontSize:"25px", borderRadius:"5px"}} type="email" name="user_email" />
      </div>
      <div style={{ paddingTop: "10px"}}>
        <label style={{paddingRight:"10px"}}>Message</label>
        <textarea style={{ fontSize:"25px", borderRadius:"5px"}} name="message" />
      </div>
      <input type="submit" value="Send" />
    </form>
    </>
  );

  };  