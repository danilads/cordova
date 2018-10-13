import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import './Block_MainPage.scss';
class Block_MainPage extends React.PureComponent {
	
  	render() {
		return (
			<div className="Block_MainPage container-fluid">
				<div className="row no-gutters">
					<div className="col-xs-3">1</div>
					<div className="col-xs-3">2</div>
					<div className="col-xs-3">3</div>
					<div className="col-xs-3">4</div>
				</div>

			</div>
			
		);

  	}

}



export default Block_MainPage;
