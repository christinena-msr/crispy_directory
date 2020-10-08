import React from "react";

function Hero(props) {
    return (
        <section className="hero is-medium is-bold">
            <div className="hero-body">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </section>)
}

export default Hero;