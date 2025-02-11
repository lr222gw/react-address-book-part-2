import './App.css';

import { useState, createContext, useEffect } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import DashBoard from './components/DashBoard/DashBoard';
import Index from './components/Index';
import ContactView from './components/ContactView/ContactView';

export const AppContext = createContext()

function App() {
    const [contacts, setContacts] = useState([]);
    const [contactsInitialized, setContactsInitialized] = useState(false);

    useEffect(() => {
        if(contactsInitialized) return;
        const fetchData = async() => {
            fetch("https://boolean-uk-api-server.fly.dev/lr222gw/contact")
                .then(res => res.json())
                .then(dat => {
                    console.log(dat);
                    setContacts(dat);
                    setContactsInitialized(true);
                })
        };
        fetchData();
    },
    [contacts]
    );

    return (
        <AppContext.Provider value={{contacts}}>
            <p>Hello, world!</p>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/new'}>New Contact</Link></li>
            </ul>
            <DashBoard />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/contact/:id' element={<ContactView />} />
                <Route path='/new' element={<ContactForm />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
