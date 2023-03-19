import React from 'react';

const elipse = <img src="./Ellipse 5.svg" className='elipse' alt="elipse"/>


export default function MainContent(){
    return (
        <main className='maincontent'>
            <h1>Fun gacts about React</h1>
            <img src="./perfil.png" alt="perfil" />
            <div class="list_elipse" alt="logo">
                <ul id="ul_elipse">
                    <li>{elipse}</li>
                    <li>{elipse}</li>
                    <li>{elipse}</li>
                    <li>{elipse}</li>
                    <li>{elipse}</li>
                </ul>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Power thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}