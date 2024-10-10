import "./FormStyle.css"
import React from 'react'

const Form = () => {
return (
    <div>
<form>
    <label>Your Name </label>
    <input type="text" placeholder=" Enter your Name" ></input>
    <label>Email </label>
    <input type="email" placeholder="@email.com" ></input>
        <label>Message</label>
    <textarea rows="6" placeholder="Type Your Message Here" ></textarea>
    <button className="btn">Submit</button>
</form>
    </div>
)
}

export default Form
