import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export function ParentComponent() {
    const person = {uname: "Sarthak", place:"Pune"}

    return(
        <div>
            <ChildComponent data={person}/>
        </div>
    )
}