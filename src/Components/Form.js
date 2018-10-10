import React from "react";

const Form = props => (
	<form onSubmit={props.getResult}>
		<input type="text" name="fname" placeholder="First Name..."/>
		<input type="text" name="lname" placeholder="Last Name..."/>
		<button>Get Information</button>
	</form>
);

export default Form;