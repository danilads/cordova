import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	state={
		text:"text1",
	}

	initialPoint: "";
	finalPoint: "";
		
	touchStart(event){
		//event.preventDefault();
		event.stopPropagation();
		
		this.initialPoint=event.changedTouches[0];
		
	}
	touchEnd(event){
		//event.preventDefault();
		event.stopPropagation();
		this.finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
		var yAbs = Math.abs(this.initialPoint.pageY - this.finalPoint.pageY);
		if (xAbs > 20 || yAbs > 20) {
		if (xAbs > yAbs) {
			if (this.finalPoint.pageX < this.initialPoint.pageX){
				/*СВАЙП ВЛЕВО*/
					
					document.body.style.backgroundColor = "red";
				}
			else{
					/*СВАЙП ВПРАВО*/
				
					document.body.style.backgroundColor = "green";
				}
			}
			else {
				if (this.finalPoint.pageY < this.initialPoint.pageY){
					/*СВАЙП ВВЕРХ*/
					
					document.body.style.backgroundColor = "blue";
				}
				else{
					/*СВАЙП ВНИЗ*/
					
					document.body.style.backgroundColor = "yellow";
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
		
	runClick=()=>{
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

				<div className="row">
					<div className="col-12"><Filter>hello</Filter></div>
					<div className="col-md-3 Main-bold">1</div>
					<div className="col-md-3 Main">2</div>
					<div className="col-md-3 Main">3</div>
					<div className="col-md-3 Main">4</div>
					<div className="col-12" onClick={this.runClick} style={{height:"200px"}}>{this.state.text}</div>

				</div>

			</div>
			
		);

  	}

}



export default Block_MainPage;
