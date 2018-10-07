import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	state={
		input:"",
		storage:"",

	}

	getStorage=(e)=>{
		console.log('--1',e)
	}
	edit=()=>{
		console.log('set');
		localStorage.setItem('someKey', this.state.input)
		console.log('--get',localStorage.getItem('someKey'))
	}
	set=(e)=>{
		this.setState({input:e.target.value})
	}
	
	componentDidMount(){
		//window.addEventListener('storage', this.getStorage, false);
		document.addEventListener("storage", function () {
			// do your checks to detect
			console.log('DETECT');
			// changes in "e1", "e2" & "e3" here
		}, false);
		window.addEventListener('storage',function () {
			// do your checks to detect
			console.log('DETECT');
			// changes in "e1", "e2" & "e3" here
		}, false);
		
	}
	componentWillUnmount(){
		//window.removeEventListener("storage", this.getStorage, false);
		document.addEventListener("storage", function () {
			// do your checks to detect
			console.log('DETECT');
			// changes in "e1", "e2" & "e3" here
		}, false);
	}
	
	
  	render() {
		return (
			<div className="Block_MainPage container-fluid" style={{backgroundColor:this.state.color}}>
				<div className="row no-gutters">
					{this.state.storage}
				</div>
				<div className="row no-gutters">
					<input onChange={this.set} value={this.state.input} style={{width:"100%"}} type={"text"}/>
				</div>
				<div className="row no-gutters">
					<input onClick={this.edit} style={{width:"100%"}} value="add to storage" type={"button"}/>
				</div>
			</div>
			
		);

	  }
	  

}



export default Block_MainPage;
