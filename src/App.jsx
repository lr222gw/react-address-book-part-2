import './App.css';

import {Routes, Route, Link} from "react-router-dom";
import { useState, createContext, useContext } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import DashBoard from './components/DashBoard/DashBoard';

export const AppContext = createContext()

function App() {
    const [contacts, setContacts] = useState([]);


    return (
        <AppContext.Provider value={{contacts}}>
            <p>Hello, world!</p>
            <ul>
                <li><Link to={'/new'}>New Contact</Link></li>
            </ul>
            <DashBoard />
            <Routes>
                <Route path='/new' element={<ContactForm />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
