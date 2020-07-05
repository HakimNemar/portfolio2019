import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_kuMy2OpZ', e.target, 'user_5VwJPxWIJ4W9EYRUBTIdl').then((result) => {
            console.log('good', result.text);
        }, (error) => {
            console.log('bad', error.text);
        });
    }

    return (
        <>
            <div className="container about m-5 pl-5">
                <h1 className="title">CONTACT</h1>
                <hr className="HR" />
                {/* <form className="contact-form mt-4" onSubmit={sendEmail}>
                    
                    <label for="name">Name</label>
                    <input type="text" name="name" />

                    <label for="email">Email</label>
                    <input type="email" name="email" />

                    <label for="message">Message</label>
                    <textarea name="message" />

                    <input type="submit" value="Send" />
                </form> */}

                <form>
                    <div>
                        <div class="input-field col s12">
                            <input id="password" type="text" class="validate" name="name" />
                            <label for="name">Nom</label>
                        </div>
                    </div>
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" name="email"/>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <div class="input-field col s12">
                            <textarea id="textarea1" type="text" class="materialize-textarea" name="message"/>
                            <label for="message">Message</label>
                        </div>
                    </div>
                    {/* <input type="submit" value="Send" /> */}
                </form>
            </div>
        </>
    )
}

export default Contact;