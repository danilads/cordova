import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	state={
		t:"-",
		text:"1",
		txt:"2",

	}


	devReady=()=>{
		
		this.setState({text: 'deviceready'});
		
	}
		  
	componentDidMount(){
		this.setState({t:'mount'})
		document.addEventListener("deviceready", this.devReady, false);
	}
	componentWillUnmount(){
		document.removeEventListener("deviceready", this.devReady, false);
	}
	
  	render() {
		return (
			<div className="Block_MainPage" style={{backgroundColor:this.state.color}}>
				<div>{this.state.t}</div>
				<div>{this.state.text}</div>
				<div>{this.state.txt}</div>
			</div>
			
		);

  	}

}



export default Block_MainPage;
