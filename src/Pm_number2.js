import React, { Component } from 'react';
import './MyStyle.css';

class Pm_number2 extends Component {
    constructor(props) {
        super(props);
        this.state = { num1: 0, num2: 0, output: " "}
    }
    handleFirstNum = (e) => {
      parseInt(this.setState({num1:e.target.value}));
        // this.setState({ num1: e.target.value });
    }
    handleSecondNum = (e) => {
      parseInt(this.setState({ num2: e.target.value }));
    }
    handleOption = (e) => {
        if(e.target.value === "+"){
          parseInt(this.setState({output:this.state.num1 + this.state.num2}))
        }
        if(e.target.value === "-"){
          parseInt(this.setState({output:this.state.num1 - this.state.num2}))
        }
        if(e.target.value === "*"){
          parseInt(this.setState({output:this.state.num1 * this.state.num2}))
        }
        if(e.target.value === "/"){
          parseInt(this.setState({output:this.state.num1 / this.state.num2}))
        }
        if(e.target.value === "^"){
          parseInt(this.setState({output:this.state.num1 ** this.state.num2}))
        }   
    }
    render() {
        return (
            <center>
                <div class = "container">
                    <div class = "box">
                        <form>
                            <input style={{ color: "black",fontSize:"20px",  borderStyle: "inset" }} type="text" placeholder="Enter First Number" onChange={(e) => this.handleFirstNum(e)}></input><span></span>
                            <input style={{ color: "black",fontSize:"20px", borderStyle: "inset" }} type="text" placeholder="Enter Second Number" onChange={(e) => this.handleSecondNum(e)}></input>
                            <div><h1>{this.state.num1} and {this.state.num2}</h1></div>
                        </form>

                        <div><h2>Result <br></br> {this.state.output}</h2></div>
                        <div>
                            <button value="+" onClick={(e)=>this.handleOption(e)}>+</button>
                            <button value="-" onClick={(e)=>this.handleOption(e)}>-</button>
                            <button value="*" onClick={(e)=>this.handleOption(e)}>*</button>
                            <button value="/" onClick={(e)=>this.handleOption(e)}> /</button>
                            <button value="^" onClick={(e)=>this.handleOption(e)}>^</button>
                        </div>
                    </div>
                </div>
            </center>

        )
    }
}
export default Pm_number2;