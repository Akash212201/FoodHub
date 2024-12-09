import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import './style/newsletter.css'
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        setEmail('');
    }

    return (
        <div className="newsletter">
            <div className="newsletter-info-box">
                <h2>Stay Updated and increase
                    <br />your knowledge and thinking
                </h2>
                <p>Subscribe to our newsletter and get latest updates of events,
                    book launch, reader's community trends and much mor
                </p>
                <br />
                <div className="newsletter-box">
                    <FaTelegramPlane className='icon' />
                    <input type="text" placeholder="Your email address"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="newsletter-btn" type="button"
                        onClick={handleSubmit}>
                        Subscribe

                    </button>
                </div>
            </div>
            <div className="newsletter-img-box">
                <div className='newsletter-img'>
                    <img src=''/>
                </div>
            </div>
        </div>

    )
}

export default Newsletter