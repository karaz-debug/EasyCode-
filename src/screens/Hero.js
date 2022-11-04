import React from 'react'
import Forms from './Forms'
import './Hero.css'
function Hero() {
    return (
        <div class="showcase" >
            <div class="container grid">
                <div class="showcase-text">
                    <h1>Easily You can Reach US 🚀:</h1>
                    <p>
                        Filling out this form we provide for you All the web Sevices you need, starting from building web applications from scratch according to your preferences and building softwares for different management use , we can create for you world best product that you will never found any where else , check more about our services down
                    </p>
                    <a href="#" class="btn btn-outline">Read More</a>
                </div>
                {/*  */}
                <Forms />
                {/*  */}
            </div>
        </div>
    )
}

export default Hero



