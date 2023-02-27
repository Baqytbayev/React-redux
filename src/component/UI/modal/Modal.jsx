import React, {useEffect, useState} from "react";
import './Modal.css'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getById, removeContact} from "../../../store/contactsSlice";


const Modal = () => {
    const params = useParams()
    const oneContact = useSelector(state => state.contacts.contact)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getById(params.id))
    }, [])
    const navigation = useNavigate()
    const deleteContact = () => {
        dispatch(removeContact(params.id))
        navigation({pathname: '/contacts'})
    }
    return (
        <>
            <div className={'infoOne'}>
                <div className={'photoDiv'}>
                    <img className={'onePhoto'} src={oneContact.photo}/>
                </div>
                <div className={'infoText'}>
                    <h2>{oneContact.name}</h2>
                    <p>{oneContact.phone}</p>
                    <p>{oneContact.email}</p>
                    <button onClick = {deleteContact}>
                        Delete
                    </button>
                    <button>
                        <NavLink to={`/contacts/full/${params.id}/edit`} end>Edit</NavLink>

                    </button>
                </div>

            </div>
        </>
    )
}

export default Modal