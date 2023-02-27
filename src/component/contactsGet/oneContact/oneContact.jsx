import React from "react";
import './oneContact.css'
import {NavLink} from "react-router-dom";

const OneContact = (props) => {
    return (
        <div   className={'info'}>
            <img className={'imgPhoto'} src={props.img}/>
            <h2 className = {'nameStyle'}>{props.name}</h2>
            <button className = {'button'}><NavLink to={`/contacts/full/${props.id}`} end>Full Info< / NavLink ></button>
        </div>
    )
}
export default OneContact;