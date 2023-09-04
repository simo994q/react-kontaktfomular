import { useState } from "react"
import style from './ControlledInput.module.scss'


export const ControlledInput = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [contactMethod, setContactMethod] = useState('')

    const [showInput, setShowInput] = useState(false)

    function formSubmit(e) {
        e.preventDefault()
        setShowInput(true)

        console.log(
            'Full name: ' + firstName + ' ' + lastName,
            'Phone: ' + phoneNumber,
            'Email: ' + email,
            'Comment: ' + comment,
            'Contact method: ' + contactMethod
        );
    }

    function resetForm() {
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setEmail('')
        setComment('')
        setContactMethod('')
    }

    return (
        <div className={style.controlledInputContainer}>
            <form onSubmit={(e) => formSubmit(e)} className={style.controlledInput}>
                <label htmlFor="firstName">
                    First name
                    <input id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </label>
                <label htmlFor="lastName">
                    Last name
                    <input id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </label>
                <label htmlFor="phoneNumber">
                    Phone number
                    <input id="phoneNumber" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </label>
                <label htmlFor="email">
                    Email
                    <input id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label htmlFor="comment">
                    Comment
                    <input id="comment" name="comment" onChange={(e) => setComment(e.target.value)} value={comment} />
                </label>
                <span>Preferred contact method:</span>
                <label htmlFor="phoneMethod">
                    Phone
                    <input type="radio" name="contactMethod" id="phone" onClick={() => setContactMethod('phone')} />
                </label>
                <label htmlFor="emailMethod">
                    Email
                    <input type="radio" name="contactMethod" id="email" onClick={() => setContactMethod('email')} />
                </label>
                <input type="submit" value="Send" />
                <input type="button" value="Reset" onClick={() => resetForm()} />
            </form>
            <div style={{display: showInput ? 'block' : 'none'}} className={style.controlledInput}>
                <h2>Sent data:</h2>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Phone number: {phoneNumber}</p>
                <p>Email: {email}</p>
                <p>Comment: {comment}</p>
                <p>Contact method: {contactMethod}</p>
            </div>
        </div>
    )
}