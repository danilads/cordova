import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	state={
		text:"text1",
		txt:"hi"
	}

	initialPoint: "";
	finalPoint: "";
		
	touchStart(event){
		//event.preventDefault();
		event.stopPropagation();
		
		this.initialPoint=event.changedTouches[0];
		
	}
	touchEnd=(event)=>{
		//event.preventDefault();
		console.log(document);
		event.stopPropagation();
		document.finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(document.initialPoint.pageX - document.finalPoint.pageX);
		var yAbs = Math.abs(document.initialPoint.pageY - document.finalPoint.pageY);
		if (xAbs > 20 || yAbs > 20) {
		if (xAbs > yAbs) {
			if (document.finalPoint.pageX < document.initialPoint.pageX){
				/*СВАЙП ВЛЕВО*/
					this.setState({txt:Math.random()})
					document.body.style.backgroundColor = "#"+this.mR()+this.mR()+this.mR();
				}
			else{
					/*СВАЙП ВПРАВО*/
					this.setState({txt:Math.random()})
					document.body.style.backgroundColor = "#"+this.mR()+this.mR()+this.mR();
				}
			}
			else {
				if (document.finalPoint.pageY < document.initialPoint.pageY){
					/*СВАЙП ВВЕРХ*/
					this.setState({txt:Math.random()})
					document.body.style.backgroundColor = "#"+this.mR()+this.mR()+this.mR();
				}
				else{
					/*СВАЙП ВНИЗ*/
					this.setState({txt:Math.random()})
					document.body.style.backgroundColor = "#"+this.mR()+this.mR()+this.mR();
				}
			}
		}
	}
		  
	componentDidMount(){
		document.addEventListener("touchstart", this.touchStart, false);
		document.addEventListener('touchend', this.touchEnd, false);
	}
	componentWillUnmount(){
		document.removeEventListener("touchstart", this.touchStart, false);
		document.removeEventListener('touchend', this.touchEnd, false);
	}
	
	mR=()=>{
		return Math.round(Math.random()*100);
	}
	runClick=()=>{
		alert("WATAFAK");
		if(this.state.text==="text1"){
			this.setState({text:"run"});
		}
		else if(this.state.text==="run"){
			this.setState({text:"text1"});
		}
	}
  	render() {
		return (
			<div className="Block_MainPage container-fluid">

				<div className="row no-gutters">
					<div className="col-12"><Filter>{this.state.txt}</Filter></div>
				</div>
				<div className="row no-gutters">
					<div className="col-xs-3 Main-bold">1</div>
					<div className="col-xs-3 Main">2</div>
					<div className="col-xs-3 Main">3</div>
					<div className="col-xs-3 Main">4</div>
				</div>
				<div className="row no-gutters btn">
					<div className="col-12" onClick={this.runClick} style={{height:"200px"}}>{this.state.text}</div>
				</div>
				<div className="row no-gutters">
					<input style={{width:"100%"}} type={"text"}/>
				</div>
			</div>
			
		);

  	}

}



export default Block_MainPage;
