import React, {useState} from "react";
import './addContact.css'
import {useDispatch} from "react-redux";
import {addContact} from "../../store/contactsSlice";
import {useNavigate,} from "react-router-dom";


const AddContact = () => {
    const [inputVal, setInputval] = useState({
        name: '',
        phone: '',
        email: '',
        photo: 'https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg',
        id: Math.random()
    })
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const inputHandler = (e) => {
        setInputval(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })

    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(addContact({
            name: inputVal.name,
            phone: inputVal.name,
            email: inputVal.email,
            photo: inputVal.photo,
            id: Math.random()
        }))
        navigation({pathname: '/contacts'})
    }

    return (
        <form className={'form'} onSubmit={submit}>
            <input className={'input'} name={'name'} onChange={inputHandler} type={'text'} placeholder={'Name'}/>
            <input className={'input'} name={'phone'} onChange={inputHandler} type={'number'} placeholder={'Phone'}/>
            <input className={'input'} name={'email'} onChange={inputHandler} type={'text'} placeholder={'Email'}/>
            <input className={'input'} name={'photo'} onChange={inputHandler} type={'text'} placeholder={'Photo'}/>
            <img className={'imgStyle'} src={inputVal.photo}/>
            <button disabled={inputVal.name.trim().length !== 0 && inputVal.name.trim().length !== 0
                && inputVal.email.trim().length !== 0 && inputVal.photo.trim().length !== 0
                ? false : true} className = {'button'}>Add</button>
        </form>

    )
}
export default AddContact;