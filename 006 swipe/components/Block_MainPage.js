import React,{Fragment} from 'react';
import './Block_MainPage.scss';


class Block_MainPage extends React.PureComponent {
	state={
		text: "hello",
		bgColor: "white",
		leftMenu: false
	}

	
	
	  touchStart=(event)=>{
		event.stopPropagation();
		
		document.initialPoint=event.changedTouches[0];
		this.setState({leftMenu:false});
		
	  }
	  touchEnd=(event)=>{
		event.stopPropagation();
		document.finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(document.initialPoint.pageX - document.finalPoint.pageX);
		var yAbs = Math.abs(document.initialPoint.pageY - document.finalPoint.pageY);
		if (xAbs > 20 || yAbs > 20) {
		if (xAbs > yAbs) {
			if (document.finalPoint.pageX < document.initialPoint.pageX){
				//   достаем спрва меню
				// console.log('get percents', document.initialPoint.pageX/(document.documentElement.clientWidth/100));
				let n = false;
				if(document.initialPoint.pageX/(document.documentElement.clientWidth/100)>90){
					console.log('here');
					n=true;
				}
				/*СВАЙП ВЛЕВО*/
					
					this.setState({bgColor:this.mRcolor(),text:Math.random(),leftMenu:n})
					
				}
			else{
					/*СВАЙП ВПРАВО*/
					this.setState({bgColor:this.mRcolor(),text:Math.random()})
					
				}
			}
			else {
				if (document.finalPoint.pageY < document.initialPoint.pageY){
					/*СВАЙП ВВЕРХ*/
					this.setState({bgColor:this.mRcolor(),text:Math.random()})
				
				}
				else{
					/*СВАЙП ВНИЗ*/
					this.setState({bgColor:this.mRcolor(),text:Math.random()})
				
				}
			}
		}
	  }
	  mRcolor=()=>{
			return '#'+Math.round(Math.random()*100)+Math.round(Math.random()*100)+Math.round(Math.random()*100);
		}
	  componentDidMount(){
		document.addEventListener("touchstart", this.touchStart, false);
		document.addEventListener('touchend', this.touchEnd, false);
	  }
	  componentWillUnmount(){
		document.removeEventListener("touchstart", this.touchStart, false);
		document.removeEventListener('touchend', this.touchEnd, false);
	  }
	
	render() {

		return (
			<div className="container" style={{backgroundColor:this.state.bgColor}}>
				<div>{this.state.text}</div>
				<div className={this.state.leftMenu?"menu":"menu show"}>left menu show</div>
			</div>
		);
	}

}



export default Block_MainPage;
