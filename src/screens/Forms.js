import React from 'react'
import './Form.css'
function Forms() {
    return (
        <div class="showcase-form card">
            <h2>Contact US</h2>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden">
                    <label >Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div class="form-control">
                    <input type="text" name="name" placeholder="Name" required="" />
                </div>
                <div class="form-control">
                    <input type="text" name="company" placeholder="Phone number" required="" />
                </div>
                <div class="form-control">
                    <input type="email" name="email" placeholder="email" required="" />
                </div>
                <input type="submit" value="Send" class="btn  btn-primary" />
            </form>
        </div>
    )
}

export default Forms
