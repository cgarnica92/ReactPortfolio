import React from "react";

function Contact () {
    return(
        <div className="columns aboutMain">
            <div className="column is-one-fifth box">
                <p>Contact Details</p>
            </div>
            <div className="column section box">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Your Name"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Your Email"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Add Your Message Here."></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;