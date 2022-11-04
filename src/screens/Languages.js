import React from 'react'
import './Languages.css'
import ReactJS from '../images/first.png'
import Javascript from '../images/second.png'
import Jquery from '../images/thrid.png'
import NextJs from '../images/forth.png'
import Tailwindcss from '../images/fiffth.png'
import MongoDB from '../images/seve.png'
import Firebases from '../images/sixth.png'
import NodeJS from '../images/eight.png'
function Languages() {
    return (
        <section class="languages">
            <h2 class="md text-center my-2">
                Here Some Amaizing Tech 💻 We Use in EasyCode 🚀
            </h2>
            <div class="container flex">
                <div class="card">
                    <h4>React JS</h4>
                    <img src={ReactJS} alt="" />
                </div>
                <div class="card">
                    <h4>JavaScript</h4>
                    <img src={Javascript} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>JQuery#</h4>
                    <img src={Jquery} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>Next JS</h4>
                    <img src={NextJs} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>Tailwind CSS</h4>
                    <img src={Tailwindcss} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>MongoDB</h4>
                    <img src={MongoDB} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>Firebase</h4>
                    <img src={Firebases} alt="" width="100px" height="150px" />
                </div>
                <div class="card">
                    <h4>NodeJS</h4>
                    <img src={NodeJS} alt="" width="100px" height="150px" />
                </div>
            </div>

        </section>
    )
}

export default Languages
