import React, { useState } from 'react'
import { PageTile } from '../content/types';
import './index.css'

export function Tile ({imageSrc, body, title, instagramLink, externalSite, dates}: PageTile): JSX.Element {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="tile">
            <div onClick={() => setExpanded(!expanded)}>
                <img src={imageSrc} alt={title} className="main-tile-image"/>
                <div className='information-text-container'>
                    <div className='left'>
                        <p className='title-text'>{title}</p>
                        {dates && <p>{dates}</p>}
                    </div>
                    <span className='expand-button' data-expanded={expanded}>{'>'}</span>
                </div>
            </div>
            {
                expanded &&
                <div className='body-text'>{body}</div>
            }
        </div>
    )
}