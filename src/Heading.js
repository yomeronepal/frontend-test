import React from 'react';
import './Header.css'
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header(){
	return(
		<div className="header">
		<div className="header__leftcomponent">
		<HomeTwoTone style={{'color':'white'}}  fontSize="large" />
		</div>
		
		<div className="header__rightcomponent">
		<div className="header__option">
		<h5 style={{'color':'#BFE9F6'}}>HELP</h5>
		</div>
		
		<div className="header__option">
		<HelpRoundedIcon   fontSize="medium" className="header__rightcomponenthelp" />
		</div>
		<div className="header__option">
		<NotificationsRoundedIcon />
		</div>
		<div className="header__option">
		<AccountCircleIcon fontSize="large" />
		</div>
		
		
		
		</div>

		</div>
		)
}

export default Header;