import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from "../components/Services"

export default function Home() {
    return (
        //trying to render two adjacent components can be solved with react fragment or 2 angle brackets
        <>
        <Hero>
            <Banner 
                title="luxurious rooms" 
                subtitle="deluxe rooms starting at $299" >
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link> 
            </Banner>
        </Hero>
        <Services />
        </>
        
    )
}
