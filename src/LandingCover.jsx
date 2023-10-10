import React from 'react'
import './style.css'
import gallery1 from './assets/gallery1.png'
import gallery2 from './assets/gallery2.png'
import gallery3 from './assets/gallery3.png'
import gallery4 from './assets/gallery4.png'
import gallery5 from './assets/gallery5.jpg'
import gallery6 from './assets/gallery6.jpg'
import gallery7 from './assets/gallery7.jpg'
import gallery8 from './assets/gallery8.jpg'
import gallery9 from './assets/gallery9.jpg'
import gallery10 from './assets/gallery10.jpg'

function LandingCover() {
    return (
        <div>
            <div className="cover">
                <div className="cover-filter">
                    <div className="title">
                        Elan & ηVision 2023
                    </div>
                    <div className="elan-tag">
                        Annual Techno-Cultural Fest of IIT-H
                    </div>
                </div>

            </div>
            <div className="brief-intro">
                <div className="intro-text-one">
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Elan and ηVision</span> is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. Elan refers to the cultural part and ηVision cites the technological part of fest. This fest boasts of several professional and semi-professional crowd pulling events and promises to be a grand event that exhibits the best of cultural performances, technical solutions, and advances from the student community.
                </div>
            </div>
            <div className="past-gallery">
                <div className="gallery-one">
                    <img className='gallery-img' src={gallery1}></img>
                    <img className='gallery-img' src={gallery2}></img>
                    <img className='gallery-img' src={gallery3}></img>
                    <img className='gallery-img' src={gallery4}></img>
                    <img className='gallery-img' src={gallery5}></img>
                    <img className='gallery-img' src={gallery6}></img>
                    <img className='gallery-img' src={gallery7}></img>
                    <img className='gallery-img' src={gallery8}></img>
                    <img className='gallery-img' src={gallery9}></img>
                    <img className='gallery-img' src={gallery10}></img>
                </div>
                <div className="gallery-text">
                    GLIMPSES
                </div>
                <div className="gallery-two">
                    <img className='gallery-img' src={gallery1}></img>
                    <img className='gallery-img' src={gallery2}></img>
                    <img className='gallery-img' src={gallery3}></img>
                    <img className='gallery-img' src={gallery4}></img>
                    <img className='gallery-img' src={gallery5}></img>
                    <img className='gallery-img' src={gallery6}></img>
                    <img className='gallery-img' src={gallery7}></img>
                    <img className='gallery-img' src={gallery8}></img>
                    <img className='gallery-img' src={gallery9}></img>
                    <img className='gallery-img' src={gallery10}></img>
                </div>
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
}

export default LandingCover
