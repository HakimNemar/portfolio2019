import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import $ from 'jquery';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [form, setForm] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        let invalids = {};

        if (name === "" || name === null) {
            invalids.name = "Veuillez entrez votre nom";
        }
        if (email === "" || email === null) {
            invalids.email = "Veuillez entrez votre email";
        }
        if (message === "" || message === null) {
            invalids.message = "Veuillez entrez un message";
        }

        if (Object.keys(invalids).length === 0) {
            setIsInvalid(invalids);
            setForm(e.target);
            setIsReady(true);
        } else {
            setIsInvalid(invalids);
        }
    }
    
    useEffect(() => {
        if (isReady) {
            setIsReady(false);
            emailjs.sendForm('gmail', 'template_kuMy2OpZ', form, 'user_5VwJPxWIJ4W9EYRUBTIdl').then((result) => {
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
                setName("");
                setEmail("");
                setMessage("");
                setForm("");
                console.log('good', result.text);
            }, (error) => {
                console.log('bad', error.text);
            });
        }
    }, [isReady, form]);

    return (
        <>
            <div className="container PanelContact m-5 pl-5">
                <h1 className="title">CONTACT</h1>
                <hr className="HR" />
                <h2 className="mt-5">Écrivez-moi directement !</h2>
                <div>
                    <form onSubmit={sendEmail}>
                        <div className="my-5">
                            <div className="input-field ">
                                <input id="name" type="text" className={"validate " + (isInvalid.name && "invalid is-invalid")} name="name" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="name">Nom</label>
                                <div className="invalid-feedback">{isInvalid.name}</div>
                            </div>
                            <div className="input-field">
                                <input id="email" type="email" className={"validate " + (isInvalid.email && "invalid is-invalid")} name="email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                                <div className="invalid-feedback">{isInvalid.email}</div>
                            </div>
                            <div>
                                <div className="input-field">
                                    <textarea id="message" type="text" className={"materialize-textarea validate " + (isInvalid.message && "invalid is-invalid")} name="message" onChange={(e) => setMessage(e.target.value)} />
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback">{isInvalid.message}</div>
                                </div>
                            </div>
                        </div>
                        <input className="btn sendEmail" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;