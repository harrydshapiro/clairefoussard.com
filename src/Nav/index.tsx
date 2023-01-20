import React, { useCallback, useEffect, useState } from 'react'
import './index.css'

export function Nav ({ currentSection }: {currentSection?: 'about' | 'projects' | 'artists'}): JSX.Element {
    return (
        <div id="nav">
            <p>i'm <a href="#section-about" data-highlighted={currentSection==='about'}>claire foussard</a>. i <a href="#section-projects" data-highlighted={currentSection==='projects'}>exhibit art</a> and <a href="#section-artists" data-highlighted={currentSection==='artists'}>represent artists</a>.</p>
        </div>
    )
}