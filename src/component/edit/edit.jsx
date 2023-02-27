import React, {useEffect, useState} from "react";
import './edit.css'
import {useDispatch, useSelector} from "react-redux";
import {getById, updateContact} from "../../store/contactsSlice";
import {useNavigate, useParams} from "react-router-dom";

const Edit = () => {
    const edit = useSelector(state => state.contacts.contact)
    const dispatch = useDispatch()
    const params = useParams()
    const [update, setUpdate] = useState({})
    const updateText = e => {
        const {name, value} = e.target;
        setUpdate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const navi = useNavigate()
    useEffect(() => {
        dispatch(getById(params.id))
        setUpdate(edit)
    }, [])
    const [disabled, setDisabled] = useState(true);
    const send = ( event,i) => {
        event.preventDefault();
        const data ={
            id: params.id,
            contact: update
        }
        dispatch(updateContact(data))
        navi({pathname: '/contacts'})
    }
    return (
        <form className={'form'}>
            <input className={'input'} onChange={(e) => {updateText(e); setDisabled(false)}} name={'name'} value={update.name}/>
            <input className={'input'} onChange={(e) => {updateText(e); setDisabled(false)}} name={'phone'} value={update.phone}/>
            <input className={'input'} onChange={(e) => {updateText(e); setDisabled(false)}} name={'email'} value={update.email}/>
            <input className={'input'} onChange={(e) => {updateText(e); setDisabled(false)}} name={'photo'} value={update.photo}/>
            <button disabled={disabled} onClick={send} className = {'button'}>Save</button>
        </form>
    )
}
export default Edit;
