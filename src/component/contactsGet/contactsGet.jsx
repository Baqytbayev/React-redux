import OneContact from "./oneContact/oneContact";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getContacts} from "../../store/contactsSlice";


export const ContactsGet = () => {
    const contacts = useSelector(state => state.contacts.contact)
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getContacts())
    }, [])

    return (
        <div className={'mainDiv'}>
            {Object.keys(contacts).map(key => {
                return <OneContact key={key}
                                    img={contacts[key].photo}
                                    name={contacts[key].name}
                                    id={key}
                />
            })}
        </div>
    )
}
export default ContactsGet;