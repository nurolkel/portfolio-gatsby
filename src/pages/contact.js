import React from "react";
import useForm from "../utils/useForm";
import useSubmit from "../utils/useSubmit";
import Loading from "../components/Loading";
import MessageComponent from "../components/Message";
import { ContactContainer } from "../components/Container";
import ReachMe from "../components/ReachMe";
import Seo from '../components/Seo'


const ContactPage = () => {
    
    const { values, updateValue } = useForm({
        name:'',
        email:'',
        telephone:''
    });
   const {
        error,
        message,
        loading,
        submitForm
    }  = useSubmit({values});


    if (message) {
        return <MessageComponent message={message} />
    }

    if (error) {
        return <MessageComponent message={error} />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <React.Fragment>
        <Seo title="Contact Me" />
        <ContactContainer>
            <div>
                <h1 className="text-blue text-center padding-top-bottom">Contact Page</h1>
                <div className="padding-inline--small flow">
                    <p className="text-light-grey letter-spacing-2">Thank You for coming to my page. I hope you liked what you saw. Please enter your information so we can talk one on one for any opportunity you may have!</p>
                    <ReachMe />
                </div>
            </div>
            <form onSubmit={submitForm}>
                <label htmlFor="name" className="text-light-grey d-block">Name
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={values.name} 
                    onChange={updateValue} 
                    className="bg-black text-white"
                /></label>
                <label htmlFor="email" className="text-light-grey d-block">Email
                <input  
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={updateValue}
                    className="bg-black text-white"
                /></label>
                <label htmlFor="telephone" className="text-light-grey d-block">Telephone
                <input 
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={values.telephone}
                    onChange={updateValue}
                    className="bg-black text-white"
                /></label>
                <button role="submit">Submit</button>
            </form>
        </ContactContainer>
        </React.Fragment>
    )

}

export default ContactPage;