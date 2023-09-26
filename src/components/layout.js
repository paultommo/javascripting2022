/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby"

// import Header from "./header"
import "./layout.css"
import "./layout-custom.css"
import Navigation from "./navigation"

const axios = require('axios');

const Layout = ({ children }) => {

  const [emailValue, setEmailValue] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleMailSubmit = () => {

    if(validateEmail(emailValue)){

      console.log(emailValue)

      axios.post('https://story-spinner-vjrm.temp-dns.com/paultommo-php/addcontact.php', {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{
          email: emailValue,
        }
      
      })
      .then(response => {
        
        switch(true){

          case response.data.id!==undefined:

            setEmailMessage('Thanks for signing up!')

            setEmailValue('') 

          break;

          case response.data.code=="duplicate_parameter":
           
              setEmailMessage('Email is already on the list!')

          break


        }

        // console.log(response.data)
         
       })
      .catch(error => {
        console.log(error);
      });

      }
      else{

        setEmailMessage('Invalid email. Please try again!')
      }

  }

  function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

 
  return (
    <>
      
      <div>
        <Navigation />
        <main>{children}</main>
        
        <footer>

          <div>

          <h4>Sign up for valuable insights on enhancing your website!</h4>

          {emailMessage &&
                <div className="mailinglist_message">
                {emailMessage}
                </div>
          }
            <div>
            <input onChange={event => {
            setEmailValue(event.target.value)
              }}
              type="text" name="email" value={emailValue} /><input onClick={ handleMailSubmit } type="submit" value="Sign up" />

            </div>
          </div>


         <div><span><Link activeClassName="active" to="/privacy">Privacy Policy</Link></span> © {new Date().getFullYear()} </div>
        </footer>
        <CookieConsent
          containerClasses="consentHolder"
          buttonWrapperClasses="consentButtonClasses"
          declineButtonClasses=""
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="MMCookie"
          expires={150}
          enableDeclineButton
          onAccept={() => {
            console.log('accept!')
          }}
          onDecline={() => {
            console.log('declined!')
          }}
          
         >
          This website uses cookies to improve user experience. By using this website you consent to their usage in accordance with our privacy policy.
        
        </CookieConsent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
