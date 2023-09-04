import { useState } from "react"
import style from './UncontrolledInput.module.scss'

export const UncontrolledInput = () => {

    const [showInput, setShowInput] = useState(false)
    const [contactMethod, setContactMethod] = useState('')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        comment: '',
        contactMethod: ''
    })

    const formSubmit = (e) => {
        e.preventDefault()
        setShowInput(true)
        setFormData({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            phoneNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
            comment: e.target.comment.value,
            contactMethod: contactMethod
        })
    }

    return (
        <>
            <div className={style.uncontrolledInputContainer}>
                <form onSubmit={(e) => formSubmit(e)} className={style.uncontrolledInput}>
                    <label htmlFor="firstName">
                        First name
                        <input id="firstName" name="firstName" />
                    </label>
                    <label htmlFor="lastName">
                        Last name
                        <input id="lastName" name="lastName" />
                    </label>
                    <label htmlFor="phoneNumber">
                        Phone number
                        <input id="phoneNumber" name="phoneNumber" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input id="email" name="email" />
                    </label>
                    <label htmlFor="comment">
                        Comment
                        <input id="comment" name="comment" />
                    </label>
                    <span>Preferred contact method:</span>
                    <label htmlFor="phoneMethod">
                        Phone
                        <input type="radio" name="contactMethod" id="phoneMethod" onClick={() => setContactMethod('Phone')}/>
                    </label>
                    <label htmlFor="emailMethod">
                        Email
                        <input type="radio" name="contactMethod" id="emailMethod" onClick={() => setContactMethod('Email')}/>
                    </label>
                    <input type="submit" value="Send" onSubmit={(e) => formSubmit(e)}/>
                    <input type="reset" value="Reset" />
                </form>
                <div style={{ display: showInput ? 'block' : 'none' }} className={style.uncontrolledInput}>
                    <h2>Sent data:</h2>
                    <p>First name: {formData.firstName}</p>
                    <p>Last name: {formData.lastName}</p>
                    <p>Phone number: {formData.phoneNumber}</p>
                    <p>Email: {formData.email}</p>
                    <p>Comment: {formData.comment}</p>
                    <p>Contact method: {formData.contactMethod}</p>
                </div>
            </div>
        </>
    )
}