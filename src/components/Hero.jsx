import "../styles/Hero.css";
import doctors from "../assets/images/image.png";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import { useEffect, useState } from "react";
const images = [ doctors, img1, img2, img3, img4, img5 ];

function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
                setCurrent((prev) => (prev + 1) % images.length);
            }, 2000);
            return () => clearInterval(slider);
         } , []);
    return (
        <>
    <section className="hero" style={{ backgroundImage: `url(${images[current]})` }}>
        <div className="overlay" />
        <div className="hero-content">
            <h1>Your Health </h1>
            <h2>Our Priority</h2>
        <p>
            We provide our best medical services for you and your family.
            Our experinced doctors are always ready to help you.
            </p>
            </div>
    </section>

    <section className="cards">
        <div className="card">
                <i className="fas fa-user-doctor"></i>
                <h3>Expert Doctors</h3>
                <p>Our experienced doctors are always ready to help you.</p>
            </div>
            <div className="card">
                <i className="fas fa-ambulance"></i>
                <h3>24/7 Emergency</h3>
                <p>We provide round-the-clock emergency services.</p>
            </div>
            <div className="card">
                <i className="fas fa-heartbeat"></i>
                <h3>Modern Equipment</h3>
                <p>We use the latest medical equipment for accurate diagnosis.</p>
            </div>
            <div className="card">
                <i className="fas fa-hospital"></i>
                <h3>Comfortable Environment</h3>
                <p>We provide a comfortable and clean environment for our patients.</p>
        </div>
    </section>
    </>
    );
}
export default Hero;