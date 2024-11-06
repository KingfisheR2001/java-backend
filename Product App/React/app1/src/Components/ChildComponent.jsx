import React, { Component } from 'react'

export default function ChildComponent({data}) {
    return(
        <div>
            <p>Name: {data.uname}</p>
            <p>Location: {data.place}</p>
        </div>
    )
}