import React from 'react'
function ProjectCard({ image, name, languages, Tech, Database }) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
            <img class="w-full lg:h-[150px]" src={image} alt="" />
            <div class="px-6 py-2">
                <div class="font-bold text-xl mb-2">{name}</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-2 pb-2">
                <span class="inline-block bg-violet-700 text-white rounded-xl px-[20px] py-[10px] text-md font-semibold  mr-4 mb-2">#{languages}</span>
                <span class="inline-block bg-violet-700 text-white rounded-xl px-[20px] py-[10px] text-md font-semibold  mr-4 mb-2">#{Tech}</span>
                <span class="inline-block bg-violet-700 text-white rounded-xl px-[20px] py-[10px] text-md font-semibold  mr-4 mb-2">#{Database}</span>
            </div>
        </div>
    )
}

export default ProjectCard
