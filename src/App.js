import React from 'react';
import './App.css';
import AddContact from "./component/addContact/addContact";
import ContactsGet from "./component/contactsGet/contactsGet";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./component/layout/layout";
import Modal from "./component/UI/modal/Modal";
import Edit from "./component/edit/edit";

const App = () => {
    return (
        <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route path={'/contacts'} element={<ContactsGet/>} ></Route>
                            <Route path={'/add'} element={<AddContact/>} ></Route>
                            <Route path={'/contacts/full/:id'} element={<Modal/>}></Route>
                            <Route path={'/contacts/full/:id/edit'} element={<Edit/>}></Route>
                            <Route path={'*'} element={<h1>No pages</h1>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
