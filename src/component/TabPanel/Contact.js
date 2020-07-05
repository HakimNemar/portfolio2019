import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [form, setForm] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        let invalids = {};

        if (name == "") {
            
        }
        // setForm(e.target);
        // setIsReady(true);
    }
    
    useEffect(() => {
        if (isReady) {
            setIsReady(false);
                emailjs.sendForm('gmail', 'template_kuMy2OpZ', form, 'user_5VwJPxWIJ4W9EYRUBTIdl').then((result) => {
                    console.log('good', result.text);
                }, (error) => {
                    console.log('bad', error.text);
                });
        }
    }, [isReady]);

    return (
        <>
            <div className="container PanelContact m-5 pl-5">
                <h1 className="title">CONTACT</h1>
                <hr className="HR" />
                <div>
                    <form onSubmit={sendEmail}>
                        <div className="my-5">
                            <div className="input-field ">
                                <input id="password" type="text" className="validate" name="name"  onChange={(e) => setName(e.target.value)}/>
                                <label htmlFor="name">Nom</label>
                            </div>
                            <div className="input-field">
                                <input id="email" type="email" className="validate" name="email" onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <div className="input-field">
                                    <textarea id="textarea1" type="text" className="materialize-textarea validate" name="message" onChange={(e) => setMessage(e.target.value)}/>
                                    <label htmlFor="message">Message</label>
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