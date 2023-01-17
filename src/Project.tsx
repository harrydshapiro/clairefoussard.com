import React from 'react'
import './Project.css';
import Ticker from 'react-ticker';

interface ProjectImage {
    url: string,
    alt: string,
    scrollHorizontal?: boolean
}

export function Project ({
    title,
    images,
    description,
    dates,
}: {
    title: string,
    images: ProjectImage[],
    description: string,
    dates: {
        start: Date,
        end: Date
    },
}): JSX.Element {
    return (
        <>
            {images.map(({ url, alt, scrollHorizontal }, index) => {
                return scrollHorizontal ?
                <div className="project-image-container" key={index}> 
                    <Ticker>
                        {() => <img src={url} alt={alt}/>}
                    </Ticker>
                </div>
                :
                <div className="project-image-container">
                    <img src={url} alt={alt} key={index}/>
                </div>
            })}
        </>
    )
}