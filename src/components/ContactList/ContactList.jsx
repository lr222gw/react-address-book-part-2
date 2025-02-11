import React, {useContext} from 'react'

import {AppContext} from "../../App"

function ContactList() {
    const {contacts} = useContext(AppContext)

    return (
        <div>ContactList</div>
    )
}

export default ContactList