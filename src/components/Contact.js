import {
  ContactWrapper,
  SectionHeading,
  BlueText,
  FormContainer,
  InputWrapper,
  StyledLabel,
  StyledInput,
  StyledArea,
  ErrorMessage,
  ButtonWrapper,
  ContactButton,
  ContactInfoWrapper,
  ContactName,
  ContactEmail,
  ContactEmailWrapper,
  ContactIconWrapper,
  ContactIconBorder,
  ContactIcon,
  ContactImageWrapper,
  ContactImage
} from './Contact.elements'
import Mailto from '../components/Mailto'
import { Element } from 'react-scroll'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const elementStyle = {
  height: '100%',
  width: '100%',
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  )
}

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
    </>
  );
};

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <Element id="contact" style={elementStyle}>
          <SectionHeading>
            <BlueText>Contact&nbsp;</BlueText>Me
          </SectionHeading>
          <Formik
            initialValues = {{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
              email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
              subject: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
              message: Yup.string()
              .max(500, "Must be 500 characters or less")
              .required("Required"),
            })}
              onSubmit={(values, { setSubmitting }) => {
              fetch("/", {                                 
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                'form-name': 'contact',
                ...values,
                }),
              })
              .then(() => {
                alert('Success!')
                setSubmitting(false)
              })
            .catch(error => {
              alert('Error: Please Try Again!')                            
              setSubmitting(false)
            })
          }}
            >
            <FormContainer>
              <Form>
                <InputWrapper>
                  <TextInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="email@gmail.com"
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextArea
                    label="Message"
                    name="message"
                    type="textrea"
                    placeholder="Message"
                    rows="6"
                  />
                </InputWrapper>
                <ButtonWrapper>
                  <ContactButton>
                    Contact
                  </ContactButton>
                </ButtonWrapper>
              </Form>
              <ContactInfoWrapper>
                <ContactName>
                  Mitchell Mujwit
                </ContactName>
                <ContactEmailWrapper>
                  <Mailto>
                    <ContactEmail>
                      Mitchellmujwit@protonmail.com
                    </ContactEmail>
                  </Mailto>
                </ContactEmailWrapper>
                <ContactIconWrapper>
                  <ContactIconBorder href="https://www.linkedin.com/in/mitchell-mujwit/" target="_blank">
                    <ContactIcon src={require('../images/linkedin.svg').default}/>
                  </ContactIconBorder>
                  <ContactIconBorder href="https://github.com/mitchellmujwit" target="_blank">
                    <ContactIcon src={require('../images/github.svg').default}/>
                  </ContactIconBorder>
                </ContactIconWrapper>
                <ContactImageWrapper>
                  <ContactImage src={require('../images/contact.svg').default} />
                </ContactImageWrapper>
              </ContactInfoWrapper>  
            </FormContainer>
          </Formik>
        </Element>        
      </ContactWrapper>
    </>
  )
}

export default Contact