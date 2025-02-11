import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../App';


function ContactView() {
    const {contacts} = useContext(AppContext);
    const [contact, setContact] = useState(null);

    const {id} = useParams();
    useEffect(() => {
        let c = contacts.find(x => x.id == id);
        if(c)
            setContact(c);
    },
    [id,contacts]
    );
    if(contact == null) return (<>Loading...</>);
    
    const getLabeled = (labelName, value) => {
        return (
            <div className="contactField">
                <label>
                    {labelName}
                </label>
                <p>{`${value}`}</p>
            </div>
        )
    }

    return (
        <div className='mb-3'>
            <h3>ContactView</h3>
            {getLabeled("name", `${contact.firstName} ${contact.lastName}`)}
            {getLabeled("gender", `${contact.gender}`)}
            {getLabeled("email", `${contact.email}`)}
            {getLabeled("address", `${contact.street}, ${contact.city}`)}
            {getLabeled("job title", `${contact.jobTitle}`)}
            {getLabeled("favorite color", `${contact.favouriteColour}`)}
            


        </div>
    )
}

export default ContactView