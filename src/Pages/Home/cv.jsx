import React from 'react'
import cv from "../../assets/example.pdf"


const CV = () => {
  return (
    <div>
        <a href={cv} target='_blank' download="Example-PDF-document" rel='noreferrer'>
        <button className="btn btn-primary">Download CV</button>
        </a>
    </div>
  )
}

export default CV