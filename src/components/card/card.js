import React from 'react';
// import ReactDOM from 'react-dom';

const card=(props)=>{
    
	return(

		<div className="card">

			<img src={props.image}	alt="news_image" />

			<h4> {props.title}</h4>

			<h6>Source : {props.source}</h6>

			   

			<h6><a href={props.url}>Click here</a> to  Read more</h6>			

		</div>

		)



}


// class card extends React.Component{
//     state = {

//     }

//     render(){
// 	return(

// 		<div className="card">

// 			<img src={props.image}	alt="news_image" />

// 			<h3> {props.title}</h3>

// 			<h5>Source : {props.source}</h5>

			   

// 			<h5><a href={props.url} target="_blank" rel="noopener noreferrer">Click here</a> to  Read more</h5>			

//         </div>
//     )

//     }



// }

export default card;