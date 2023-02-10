import React, { useState } from "react";
import Form1 from "./Form1";
import Table from "./Table";
const _ = require('lodash');

function Homepage(){
    const [contacts,updateContacts]  = useState([]);
    const [editContact,setEditContact] = useState({});

    const addContact = (contactInfo) => {
        updateContacts([...contacts,contactInfo]);
    };

    const updateData = (id,data) => {
        // var deepCopy = _.cloneDeep(contacts);
        var deepCopy = JSON.parse(JSON.stringify(contacts));
        const index = deepCopy.findIndex(no => no.id === id);
        deepCopy.splice(index,1,data);
        updateContacts([...deepCopy]);
    };

    const manageData=(action,id) => {
        if(action==='delete'){
            const temp = contacts.filter(x => x.id !== id);
            updateContacts([...temp]);
            // const contac = JSON.parse(JSON.stringify(contacts));
            // const indes = contacts.findIndex(er => er.id === id);
            // updateContacts([...contac.splice(indes,1),...contac.splice(indes + 1,0)]);
        }
        if(action==='edit'){
            const index = contacts.findIndex(no => no.id === id);
            const temp1 = contacts[index];
            setEditContact(temp1);          
        }
    }
    // console.log(editContact);
    return(
        <>
        <h1>Enter your details below</h1>
        <Form1 addContact={addContact} editContact={editContact} updateData={updateData} />
        <Table contacts={contacts} manageData={manageData} />
        </>
    )
}

export default Homepage;