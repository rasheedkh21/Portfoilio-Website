import React from 'react'
import cv from "../../assets/resume.pdf"


const CV = () => {
  return (
    <div>
        <a href={cv} target='_blank' download="rasheeds-portfolio" rel='noreferrer'>
        <button className="btn btn-primary">Download CV</button>
        </a>
    </div>
  )
}

export default CV