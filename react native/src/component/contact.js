import React, {useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../store/conSlice";
import Item from "./iitem";

const Contact = () => {
    const contacts = useSelector(state => state.contacts.contact)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
    }, [])

    return (
        <View style={styles.container}>
            {Object.keys(contacts).map(key =>{
                return <Item
                    key={key}
                    image={contacts[key].photo}
                    text = {contacts[key].name}
                />
            })}
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 900,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 0,
        backgroundColor: 'blue'
    },
})
export default Contact;