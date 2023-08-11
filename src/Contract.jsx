import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Axios from 'axios';


const url = "http://18.116.174.228:3001/products";
const websitePitch = "Let's simplify law jargons becuase Law Is For Everyone.";

class Contract extends Component {

    constructor(props){
        super(props)

        this.state = {
            contract:''
        }
    }


    handleContractChange = event =>{
        this.setState({
            contract: event.target.value
        })
    }

    // Function to calculate the word count
  countWords = () => {
    return this.state.contract.trim().split(/\s+/).filter(Boolean).length;
  };

    handleSubmit = event => {
        //MOST IMPORTANT VARIABLE!!!! send to backend
        const contractInfo = (`${this.state.contract}`)

       
        console.log(contractInfo)
        //calling function to call backend
        callBackend(contractInfo);
        event.preventDefault()
    }

  
    render() {
    return (
      <div>
        <p className="header1">Let's simplify law jargons becuase</p>
        <p className="header2">Law Is For Everyone.</p>
     <div className="bigBox">
     <div>
   
      <form onSubmit={this.handleSubmit}>
        <div className="input">
        <textarea className="textarea" id="input" value = {this.state.contract} onChange={this.handleContractChange} placeholder = "Copy-Paste your contract here (Limit 2000 words)"></textarea>
        </div>
        <br></br> 
        <p id = "wordCount">Word Count: {this.countWords()}</p>
        <button type="submit">Summarize</button>
      </form>
      
      <div className="result" id="content-holder">Your Summarized Contract will appear after submitting</div>
      </div>
      </div>
      </div>
    )
  }
}
//Function to call backend
function callBackend(contractMessage) {
  console.log("callBackend started") ;
  Axios.get(url, {params: { message: contractMessage }}).then(
    (response) => {
      console.log(response);
      var summary = response.data.data.content;
      console.log(summary);
      document.getElementById('content-holder').innerHTML = summary;
    }
  )
  
}




export default Contract