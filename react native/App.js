import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import Contact from "./src/component/contact";
// import {getContacts} from "./src/store/conSlice";

export default function App() {

    return (
        <Provider store={store}>
                <Contact/>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
