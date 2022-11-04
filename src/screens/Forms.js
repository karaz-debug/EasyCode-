import React from 'react'
import './Form.css'
function Forms() {
    return (
        <div class="showcase-form card">
            <h2>Contact US</h2>
            <form >
                <input type="hidden" />
                <p class="hidden">
                    <label >Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div class="form-control">
                    <input type="text" placeholder="Name" required="" />
                </div>
                <div class="form-control">
                    <input type="text" placeholder="Phone number" required="" />
                </div>
                <div class="form-control">
                    <input type="email" placeholder="email" required="" />
                </div>
                <input type="button" value="Submit" class="btn  btn-primary" />
            </form>
        </div>
    )
}

export default Forms
