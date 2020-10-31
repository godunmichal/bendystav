import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import emailjs from 'emailjs-com';
import { ArrowForward, ArrowRight, ContactContainer, ContactForm, FormButton, FormContainer, FormH1, FormP, FormSendMessage } from './ContactElements'


const schema = yup.object().shape({
    name: yup.string().required('Toto pole je povinné !'),
    email: yup.string().email('Neplatná e-mailová adresa!').required('Toto pole je povinné !'),
    subject: yup.string().required('Toto pole je povinné !'),
    message: yup.string().required('Toto pole je povinné !'),

  });


function Contact() {

  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover);
  }

    const [disabled, setDisabled]= useState(false);
    const {register,handleSubmit, errors,reset} = useForm({
        resolver: yupResolver(schema)
      });


    const [result, setResult] = useState(null);

     const sendEmail = (e) => {
      // e.preventDefault();
      console.log(e);
       emailjs.send('gmail', 'template_fvq0jjv', e, 'user_FTGqaDNTbGCd3Hl51jxTK')
        .then((result) => {
            console.log(result.text);
            setResult(result.text)
        }, (error) => {
            console.log(error.text);
            setResult(error.text)
        });
        reset();
        setDisabled(true);
    }


    return (
        <>
        <ContactContainer>
        <ContactForm>
        <FormH1>Společnost</FormH1>
            <address>
            <strong>Bendystav s.r.o.</strong>
            <p>Robertova 846</p>
            <p>667 01 Židlochovice</p>
            <a href="mailto:info@bendystav.cz">info@bendystav.cz</a>
            <p>Jozef Benčík</p>
            <p>602 520 122</p>
            <a href="mailto:bencik@bendystav.cz">bencik@bendystav.cz</a>
            </address>
        </ContactForm>
        <FormContainer className='contact' onSubmit={handleSubmit(sendEmail)}>
        <FormH1>Kontaktní formulář</FormH1>
        <TextField
            name="name"
          className="outlined-required"
          label="Jméno a příjmení"
          placeholder="Jméno a příjmení"
          variant="outlined"
          inputRef={register}
          style={{
            width: "100%"
          }}
        />
        <FormP className="error">{errors.name?.message}</FormP>
        <TextField
        name="email"
          className="outlined-required"
          label="Email"
          placeholder="Email"
          variant="outlined"
          inputRef={register}
          style={{
            width: "100%"
          }}
        />
        <FormP className="error">{errors.email?.message}</FormP>
        <TextField
        name="subject"
          className="outlined-required"
          label="Předmět"
          placeholder="Předmět"
          variant="outlined"
          inputRef={register}
          style={{
            width: "100%"
          }}
        />
        <FormP className="error">{errors.subject?.message}</FormP>
        <TextField
        name="message"
          multiline
          rowsMax={4}
          className="outlined-required"
          label="Zpráva"
          placeholder="Napište zprávu"
          variant="outlined"
          inputRef={register}
          style={{
            width: "100%"
          }}
        />
        <FormP className="error">{errors.message?.message}</FormP>
         <FormButton disabled={disabled} lightBg='true' big='true' type="submit" onMouseEnter={onHover} onMouseLeave={onHover}>
         Poslat zprávu {hover ? <ArrowForward/> : <ArrowRight/>}
         </FormButton>
         {result && (
        <FormSendMessage>
          Odeslali jste zprávu. Děkujeme za kontakt.
        </FormSendMessage>
      )}
         {/* <Button disabled={disabled} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' type="submit" >
                        Send Message {hover ? <ArrowForward/> : <ArrowRight/>}
        </Button> */}
        </FormContainer>
        </ContactContainer>
        </>
    )
}

export default Contact

