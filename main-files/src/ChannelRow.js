import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow ({channel_image, channel, verified, subs, noOfvideos, description}) {
	return ( 
		<div className="channelRow">
			<Avatar className="channelRow__logo" 
				alt={ channel }
				src={ channel_image } 	
			/>
			
			<div className="channelRow__text">
				<h4>{channel} {verified && <VerifiedIcon />}</h4>
				<p>{subs} Subscribers • {noOfvideos} Videos</p>
				<p>{description}</p>
			</div>
			
		</div>
	);
}

export default ChannelRow;