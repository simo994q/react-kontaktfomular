import { useForm } from "react-hook-form";
import style from './ReactFormHook.module.scss'
import { useState } from "react";

export const ReactFormHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const setData = (data) => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setPhoneNumber(data.phone)
        setEmail(data.email)
        setComment(data.comment)
        setContactMethod(data.contactMethod)
    }

    const resetData = (data) => {
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setEmail('')
        setComment('')
        setContactMethod('')
    }

    const onSubmit = data => setData(data);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [contactMethod, setContactMethod] = useState('')



    const [showInput, setShowInput] = useState(false)

    return (
        <div className={style.reactFormInputContainer}>
            <form className={style.reactFormInput} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">
                    First name
                    <input {...register('firstName')} name="firstName" id="firstName" />
                </label>
                <label htmlFor="lastName">
                    Last name
                    <input {...register('lastName')} name="lastName" id="lastName" />
                </label>
                <label htmlFor="phone">
                    Phone
                    <input {...register('phone')} name="phone" id="phone" />
                </label>
                <label htmlFor="email">
                    Email
                    <input {...register('email')} name="email" id="email" />
                </label>
                <label htmlFor="comment">
                    Comment
                    <input {...register('comment')} name="comment" id="comment" />
                </label>
                <span>Preferred contact method:</span>
                <label htmlFor="">
                    Phone
                    <input {...register("contactMethod", { required: true })} type="radio" id="phone" value='Phone' />
                </label>
                <label htmlFor="">
                    Email
                    <input {...register("contactMethod", { required: true })} type="radio" id="email" value='Email' />
                </label>
                <input type="submit" value="Send" onClick={() => setShowInput(true)} />
                <input type="reset" value="Reset" onClick={() => {resetData(), setShowInput(false)}} />
            </form>
            <div style={{ display: showInput ? 'block' : 'none' }} className={style.reactFormInput}>
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