import React, { Component } from 'react'
import notFound from '../Assets/notFound.jpg'
import { Link } from 'react-router-dom'
export default function Page404() {
    return (
        <div style={{display:"flex", background:"cyan", alignContent:"center", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", height:"100vh"}}>
            <img src= {notFound} alt="not found" style={{width:"250px", height:"250px"}} />
            <h1 className="title">This Page is Lost in Space</h1>
            <p className="not-found-message">You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.</p>
            <Link to="/" className={"back-to-home"}>Back to Home</Link>
        </div>
    )
}