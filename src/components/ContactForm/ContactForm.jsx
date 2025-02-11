import React, {useState, useContext} from 'react'
import { AppContext } from '../../App';


function ContactForm() {
    const [newUser, setNewUser] = useState({
        firstName       : "",
        lastName        : "",
        street          : "",
        city            : "",
        gender          : "",
        email           : "",
        jobTitle        : "",
        latitude        : 0,
        longitude       : 0,
        favoriteColor   : "",
        profilePicture  : ""
    });

    const {addContact} = useContext(AppContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(newUser);
        console.log(newUser);
    }

    const handleChange = (e, name, val) => {
        console.log(e);
        // rewrite label into camelCase to work with Contact data
        if(e.currentTarget.type == "number" )
            setNewUser({...newUser, [name]:Number(val)})
        else 
            setNewUser({...newUser, [name]:val})
    }
    const getLabeledInput = (name, labelDisplay, type, extraInputArgs) => {
        return (
            <div className="contactField">
                <label htmlFor={name}>{labelDisplay}</label>
                <input type={type} {...extraInputArgs} name={name} onChange={(e) => handleChange(e, name, e.currentTarget.value)} required/>
            </div>
        )
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {getLabeledInput("firstName",       "First Name",       "text"   )}
            {getLabeledInput("lastName",        "Last Name",        "text"   )}
            {getLabeledInput("street",          "Street",           "text"   )}
            {getLabeledInput("city",            "City",             "text"   )}
            {getLabeledInput("gender",          "Gender",           "text"   )}
            {getLabeledInput("email",           "Email",            "email"  )}
            {getLabeledInput("jobTitle",        "Job Title",        "text"   )}
            {getLabeledInput("latitude",        "Latitude",         "number" )}
            {getLabeledInput("longitude",       "Longitude",        "number" )}
            {getLabeledInput("favoriteColor",   "Favorite Color",   "color"  )}
            {getLabeledInput("profilePicture",  "Profile Picture",  "text"   )}

            <input type='submit' value={"Create Contact"}/>

        </form>
    )
}

export default ContactForm