import React,{ useState,useEffect } from 'react';
import './LowerHeader.css';
import FullscreenRoundedIcon from '@material-ui/icons/FullscreenRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ResizePanel from "react-resize-panel";

function LowerHeader(props){
	const [isactive,setIsActive] = useState(true);
	const [isfullScreen,setIsfullScreen] =useState(false);
	const [className,setClassName]=useState(['lowerheader__upper'])
	const [lowerconainer,setLowerContainer]=useState(['lower__container'])
	
	

	const closeDiv = (event)=>{
		setIsActive(false)
		console.log(isactive)
	}

	const fullScreenActive = (event)=>{
		if(isfullScreen){
			setIsfullScreen(false);
			setClassName(['lowerheader__upper-active'])
			setLowerContainer(['lower__container-active'])
			console.log(isfullScreen)
		}
		else{
			setIsfullScreen(true);
			setClassName(['lowerheader__upper'])
			setLowerContainer(['lower__container'])
			console.log(isfullScreen)
		}
	}

	const restoreApp = (event)=>{
		if (isactive) {
			setIsActive(false)
			console.log(isactive)
		}
		else{
			setIsActive(true)
			console.log(isactive)
		}
	}


	

	

	

		return(


		
		
			<div className="lowerheader">
			{isactive ? 
			<div className={className}>
			<div className="option__left" onClick={restoreApp}>
				<AppsOutlinedIcon />
				<h5>APPS</h5>
				</div>
				<div className="option__right">
				<div className="lowerheader__option" onClick={fullScreenActive} > <FullscreenRoundedIcon fontSize="small" /> </div>
				<div onClick={closeDiv} className="lowerheader__option"> <CloseRoundedIcon fontSize="small" /> </div>
				</div>
				</div>:
				<div className="lowerheader__upper">
				<div className="option__left-active" onClick={restoreApp}>
				<AppsOutlinedIcon />
				<h5>APPS</h5>
				</div>
				</div>

		}

		
			
				{isactive  ? 
					<div className={lowerconainer}>
							
							<div className= "left__container"> </div>
							
							<ResizePanel direction="w"  >
								<div className="right__container"></div>
							</ResizePanel>
						
					</div>
			:
			<div className={lowerconainer}>
				
				<div className="left__container-active"></div>
				
			 	
				</div>
			
				}
				</div>
			
			
				
			
				
			
	)


	

	

	
}

export default LowerHeader;