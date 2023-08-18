import React from 'react';
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import reactImage from "../Assets/react.png";
import nextjs from "../Assets/nextjs.png";
import github from "../Assets/github.png";
import tailwind from "../Assets/tailwind.png";
import antd from "../Assets/antd.png";
import angularjs from "../Assets/angularjs.png";


 const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: angularjs,
      title: "Angular JS",
      style: "shadow-red-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: antd,
      title: "Ant D",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <>
     <div class="container">
     <div className='row'>
    
          {technologies?.map(({ id, src, title, style }) => (
            <div
              key={id}
              className='col-sm-4 thumbnail'
            >
              <img src={src} alt="" />
              <p>{title}</p>
            </div>
          ))}
          </div>
          </div>
    </>
  )
}
export default Experience;
