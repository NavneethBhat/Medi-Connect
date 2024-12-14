import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>

            {/*-------------------Left Section--------------------------*/}
            <div>
               <img src={assets.logo} alt="Logo"/>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
            {/*-------------------Middle Section------------------------*/}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*-------------------Right Section-------------------------*/}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            {/*-------------------Copyright Text------------------------*/}
            <hr/>
            <p>Copyright © 2024 GreatStack - All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer