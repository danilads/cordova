import React,{Fragment} from 'react';
import './Block_MainPage.scss';
import Block_View from './Block_View';

class Block_MainPage extends React.PureComponent {
	state={
		data:''
	}
	run=(e)=>{
		if(e===1){
			g_l('def');
		}
		else if(e===2){
			g_l('zoomIn')
		}
		else if(e===3){
			g_l('zoomOut')
		}
		else if(e===4){
			g_l('zoomInIn')
		}
		else if(e===5){
			g_l('zoomOut')
		}	
	}
	run=()=>{
		console.log('hello');
		fetch('https://cors-anywhere.herokuapp.com/https://www.dota2.com/jsfeed/heropediadata?feeds=abilitydata&l=english')
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
				console.log(data)
			});
	}
	
	render() {
		return <div>
				{/* <div>
					<input type="button" value="change html(default)" onClick={()=>this.run(1)}/>
					<input type="button" value="масштаб (zoom +)" onClick={()=>this.run(2)}/>
					<input type="button" value="масштаб (zoom -)" onClick={()=>this.run(3)}/>
					<input type="button" value="приближение (zoom ++)" onClick={()=>this.run(4)}/>
					<input type="button" value="приближение (zoom --)" onClick={()=>this.run(5)}/>
				</div> */}
				<div>
					<div>
						{
							this.state&&
							this.state.data&&
							this.state.data.abilitydata&&
							this.state.data.abilitydata.abaddon_death_coil&&
							this.state.data.abilitydata.abaddon_death_coil.dname
						}
					</div>
					<div>
						<img src="https://www.accengage.com/wp-content/uploads/2016/04/picto-web-push.png" />
					</div>
					<div>
						<input onClick={this.run} type="button" value="run" />
					</div>
					<br/>
					<div>
						<a href={"https://www.dotabuff.com/"}>link</a>
					</div>
				</div>
			</div>
	
	}

}



export default Block_MainPage;
