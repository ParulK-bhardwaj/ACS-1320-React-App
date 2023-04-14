import React from "react";
import "./Register.css"

export default function Register() {
    return (
        <div className="Register">
            <h1 className="Register-title">Register for our Newsletter</h1>
            <p className="Register-description">Sign up today to stay up-to-date with all the offers and events and more happening at the publicly accessible spaces(POPOS) in San Francisco.</p>

            <div className="Form-with-title">
                <h2>Sign Up</h2>
                <form>
                    <div className="Name-form">
                        <div>
                            <label htmlFor="firstName"></label>
                            <input type="text" id="firstName" name="firstNname" placeholder="First Name"/>
                        </div>
                        
                        <div>
                            <label htmlFor="lastName"></label>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>
                        </div>
                    </div>
                    
                    <div className="Email-form">
                        <label htmlFor="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email"/>
                    </div>
                    
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
            
    )
};