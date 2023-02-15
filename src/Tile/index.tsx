import React, { useState } from 'react'
import { PageTile } from '../content/types';
import './index.css'

export function Tile ({imageSrc, body, title, instagramLink, externalSite, dates}: PageTile): JSX.Element {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="tile">
            <div onClick={() => setExpanded(!expanded)}>
                <img src={imageSrc} alt="" className="main-tile-image"/>
                <div className='information-text-container'>
                    <div className='left'>
                        <div className='title-text'>{title}</div>
                        {dates && <p>{dates}</p>}
                    </div>
                    <img src="arrow.svg" alt="expand-caret" className='expand-button' data-expanded={expanded}/>
                </div>
            </div>
            {
                expanded &&
                <div className='body-text'>{body}</div>
            }
        </div>
    )
}