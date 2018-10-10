import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Result from "./Components/Result";
import NewData from "./name.json";


class App extends React.Component {
  state = {
    stat: undefined,
    age: undefined,
    occupation: undefined,
    fname: undefined,
    lname: undefined,
    pic:undefined,
    error: undefined
  }
  getResult = (e) => {
    e.preventDefault();
    const Fname = e.target.elements.fname.value;
    const Lname = e.target.elements.lname.value;
    const data = NewData;
     const dataValid = data[Fname+" "+Lname];

     if((Fname || Lname) && dataValid === undefined){
      this.setState({
        stat: undefined,
        age: undefined,
        occupation: undefined,
        fname: undefined,
        lname: undefined,
        pic:undefined,
        error: "No information found."
      });
     }
    else if (Fname && Lname && dataValid !== undefined) {
      this.setState({
        stat: dataValid.stat,
        age: dataValid.age,
        occupation: dataValid.occupation,
        fname: Fname,
        lname: Lname,
        pic:dataValid.pic,
        error: ""
      });
    } else {
      this.setState({
        stat: undefined,
        age: undefined,
        occupation: undefined,
        fname: undefined,
        lname: undefined,
        pic:undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-4 title-container">
                  <Titles />
                </div>
                <div className="col-md-8 form-container">
                  <Form getResult={this.getResult} />
                  <Result 
                    stat={this.state.stat} 
                    age={this.state.age}
                    occupation={this.state.occupation}
                    fname={this.state.fname}
                    lname={this.state.lname}
                    error={this.state.error}
                    img={this.state.pic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;