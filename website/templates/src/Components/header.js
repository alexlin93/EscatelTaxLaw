import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {

	handleClick = (index) => {
		// var main = document.getElementById('main').childNodes

		// for (var i = 0; i < main.length; i++) {
		// 	if (main[i].id !== index && main[i].style.display === 'block') {
		// 		main[i].style.display = 'none';
		// 	} else if (main[i].id === index) {
		// 		main[i].style.display = 'block';
		// 	} else {
		// 		console.log('fail');
		// 	}
		// }
		
  	}

	render() {
		return (
			<header className="container-fluid navbar-fixed-top">
				<div className="container text-right">
					
					<FlatButton className="title" label="Escatel Tax Law" />
					
					<FlatButton label="Home" onClick={this.handleClick.bind(this, 'home')} />
					<FlatButton label="About" onClick={this.handleClick.bind(this, 'about')} />
					
					<FlatButton className="practiceAreas" label="Practice Areas" onClick={this.handleClick.bind(this, 'PA')} />
					<i className="fa fa-caret-down" aria-hidden="true"></i>

					<div className="dropdown">
			        	<FlatButton label="Practice Areas" />
			        	<FlatButton label="Federal & State Fraud/Evasion" />
			        	<FlatButton label="Tax Controversy Practice" />
			        	<FlatButton label="Employment Tax Audit (Federal & State)" />
			        	<FlatButton label="Business Formation & Tax Planning" />
			        	<FlatButton label="CA Residency Source of Income Audits" />
			        	<FlatButton label="International Taxation" />
			        	<FlatButton label="Trusts & Estates" />
			        </div>

					<FlatButton label="Contact Us" onClick={this.handleClick.bind(this, 'contact')} />
					<a href="#"><i className="fa fa-bars fa-2x dropdown" aria-hidden="true"></i></a>

				</div>	
			</header>
		);
	}
}

export default Header