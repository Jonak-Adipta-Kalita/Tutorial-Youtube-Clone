import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'

function SearchPage () {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow 
				channel_image="https://avatars3.githubusercontent.com/u/70377522?s=400&u=73a2f07dae4bc3ad8dde860128a577fed66debed&v=4"
				channel="BeastNight TV"
				verified
				subs={23}
				noOfvideos={9}
				description="Gaming/Vloging/Unboxing"
			/> 
			
			<hr />
			<VideoRow 
				title="Far Cry 2/ Part 1/ BeastNight TV"
				image="https://i.ytimg.com/vi/Vc9bR9elLx0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCYTrkCzc60Tj9i-f3ldbsXtOv69w"
				subs={23}
				description="Hey Guys my name is Jonak and today I'm going to play Far Cry 2, Hope you would like it!..."
				timestamp="6 Sept. 2020"
				views={11}
				channel="BeastNight TV"
			/>
		</div>
	);
}

export default SearchPage
