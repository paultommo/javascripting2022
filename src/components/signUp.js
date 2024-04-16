const axios = require('axios');
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
