import React from 'react'
import Woman1 from '../../assets/woman1.jpg'
import Woman2 from '../../assets/woman2.jpg'
import Man from '../../assets/man.jpg'


const ReviewData = () => {

    const reviews = [
        {
        img:Woman1,
        alt:"Image",
        nameOne:"Brooklyn Simmons",
        titleOne:"“Exceptional”",
        reviewDate:"Reviewed 23rd, November",
        text:"Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
        },
        {
        img:Man,
        alt:"Image",
        nameOne:"Brooklyn Simmons",
        titleOne:"“Exceptional”",
        reviewDate:"Reviewed 23rd, November",
        text:"Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
        },
        {
        img:Woman2,
        alt:"Image",
        nameOne:"Brooklyn Simmons",
        titleOne:"“Exceptional”",
        reviewDate:"Reviewed 23rd, November",
        text:"Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
        },
    ]

  return {
    reviews,
  }
}

export default ReviewData