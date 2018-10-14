import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	
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
	render() {
		//вывод пропорции зерна может прийти дробно число
		console.log(window.devicePixelRatio);
		return <div>
				<div>
					<input type="button" value="change html(default)" onClick={()=>this.run(1)}/>
					<input type="button" value="масштаб (zoom +)" onClick={()=>this.run(2)}/>
					<input type="button" value="масштаб (zoom -)" onClick={()=>this.run(3)}/>
					<input type="button" value="приближение (scale +)" onClick={()=>this.run(4)}/>
					<input type="button" value="приближение (scale -)" onClick={()=>this.run(5)}/>
				</div>
			</div>
	
	}

}



export default Block_MainPage;
