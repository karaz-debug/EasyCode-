import React from 'react'

function ServiceCard({ icon, description, }) {
    return (
        <div>
            <div class="card">
                {icon}
                {description}
            </div>
        </div>
    )
}

export default ServiceCard
