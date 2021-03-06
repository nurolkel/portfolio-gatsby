import { useState } from "react";


const useSubmit = ({ values }) => {
    
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    async function submitForm(e) {
        
        e.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);

        const body = {
            name: values.name,
            email: values.email,
            telephone: values.telephone
        }

        const res = await fetch(`${process.env.FORM_SPREE}` , {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            body:JSON.stringify(body)
        });

        const text = JSON.parse(await res.text());

        if (res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);

        } else {
            setLoading(false);
            setMessage('Awesome and Thank You!')
        }
    }

    

    return {
        error,
        message,
        loading,
        submitForm,
    }
}


export default useSubmit;
