import React from 'react'
import ProjectCard from './ProjectCard'
import nft from '../images/nft.webp'
import trucking from '../images/trucking.webp'
import ngo from '../images/ngo-management.webp'
import cloud from '../images/cloud.jpg'
function Project() {
    return (
        <div>
            <div className="text-center mt-10 mb-10">
                <h1 className="md text-center my-2">Here are some of our Amaizing 🚀 Project we Achieved</h1>
                <div className="flex justify-between gap-6  flex-wrap mt-20 cursor-pointer ">
                    <ProjectCard image={nft} name="NFT Drop" languages="Typescript" Tech="Next JS" Database='Sanity' />
                    <ProjectCard image={trucking} name="Trucking Dispatch" languages="Javascript" Tech="HTML/CSS" Database='Tailwind' />
                    <ProjectCard image={ngo} name="NGO Management System" languages="React" Tech="MongoDB" Database='NodeJS' />
                    <ProjectCard image={cloud} name="Cloud Web Hosting" languages="BootStrap" Tech="Jquery" Database='NodeJS/MangoDB' />
                </div>
            </div>
        </div>
    )
}

export default Project
