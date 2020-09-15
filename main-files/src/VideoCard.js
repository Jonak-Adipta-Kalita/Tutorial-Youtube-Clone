import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard ({ thumbnail_image, title, channel, views, timestamp, channel_image, channel_image_logo }) {
	return (
		<div className="VideoCard">
			<img className="videoCard__thumbnail" src={thumbnail_image} alt="" />
			<div className="videoCard__info">
				<Avatar className="videoCard__avatar" 
					alt={channel} 
					src="channel_image" />
				<div className="videoCard__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard