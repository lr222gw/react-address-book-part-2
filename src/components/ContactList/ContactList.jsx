import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {AppContext} from "../../App"

function ContactList() {
    const {contacts} = useContext(AppContext)

    return (
        <>
            <ul>
                {contacts.map((x, index) => (
                    <li key={index}>
                        <Link to={`contact/${x.id}`}>{`${x.firstName} ${x.lastName}`}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactList