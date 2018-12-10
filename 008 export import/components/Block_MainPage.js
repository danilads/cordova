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
						<input onClick={this.run} type="button" value="run" />
						
					</div>
					
				</div>
			</div>
	
	}

}



export default Block_MainPage;
