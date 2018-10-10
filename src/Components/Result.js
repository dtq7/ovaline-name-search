import React from "react";

const Result = props => (
	
	<div>
			<div className="result__info col-md-6">
	 {	
	 	props.fname && props.lname && <p className="result__key"> Full Name: 
	 		<span className="result__value"> { props.fname }  { props.lname }</span>
	 	</p> 
	 }
	 { 	
	 	props.stat && <p className="result__key"> State: 
	 		<span className="result__value"> { props.stat }	</span>
	 	</p> 
	 }
	 { 	
	 	props.age && <p className="result__key"> Age: 
	 		<span className="result__value"> { props.age } </span>
	 	</p> 
	 }
	 { 	
	 	props.occupation && <p className="result__key"> Occupation: 
	 		<span className="result__value"> { props.occupation } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="result__error">{ props.error }</p>  
	 }
	</div>
	<div className="col-md-1">
	 
	</div>
	<div className="result_image_div col-md-5">
		
	  {	props.img && <img className="result_image" src={require(`../img/${props.img.toLowerCase()}`)} alt={props.fname} />}
	  
	</div>
	</div>
	
);

export default Result;