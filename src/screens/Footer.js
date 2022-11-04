import React from 'react'
import './Footer.css'
import {
    Link
} from "react-router-dom";
function Footer() {
    return (
        <footer class="footer bg-dark py-5">
            <div class="container flex flex-col justify-center align-center space-y-11 sm:flex-row sm:justify-around sm:gap-36 lg:gap-52 sm:align-center">
                <div className="text-xl">
                    <h1>EasyCode 💥</h1>
                    <p>Copyright &copy; 2022</p>
                </div>
                <nav className="text-3xl">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Tech</a></li>
                    </ul>
                </nav>
                <div class="social">
                    <a href="www.linkedin.com/in/abdiqafar-abukar-mohamed-"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://hi-in.facebook.com/abdulqafar.abubakar"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com/luckrisk"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://github.com/karaz-debug"><i class="fab fa-github fa-2x"></i></a>

                </div>
            </div>
        </footer>
    )
}

export default Footer

{/* <Link><a href="#index.html">Home</a></Link>
                        <Link><a href="#features.html">Services</a></Link>
                        <Link><a href="#docs.html">Tech</a></Link> */}
