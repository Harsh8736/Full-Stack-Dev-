import React from 'react'
// import image1 from "../images/image1.jpg"
const Card = (props) => {
    console.log(props)
  return (
    
    <div classNameName='Card'> 

        <h2>{props.name}</h2>
          <img src={props.pic} alt="babu" height="300px"/>
        <h2>{props.roll}</h2>
        <h2>{props.branch}</h2>
        <img src={props.pic} alt="dada" height="300px"/>
        <h2>{PopStateEvent.course}</h2>
       <h2>{props.course}</h2>

        </div>
  );
};

// export default Card

