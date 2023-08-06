import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'


const url = "http://18.219.239.121:3001/products";

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
     <div className="bigBox">
     <div>
   
      <form onSubmit={this.handleSubmit}>
        <textarea value = {this.state.contract} onChange={this.handleContractChange} placeholder = "Copy-Paste your contract here" rows="10" cols="50"></textarea>
        <br></br>
        <button type="submit">Summarize</button>
      </form>
      
      <div className="box" id="content-holder">Your Summarized Contract will appear here shortly ...</div>
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