import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos () {
	return (
		<div className="recommendedvideos">
			<h2>Recommended</h2>
			<div className="recommendedvideos__videos">
				<VideoCard
					title="Far Cry 2/ Part 1/ BeastNight TV"
					views="11 views"
					timestamp="6 days ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/Vc9bR9elLx0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCYTrkCzc60Tj9i-f3ldbsXtOv69w"
				/>
				
				<VideoCard
					title="I'm Going to change my channel Name/ Important Announcement/ BeastNight TV"
					views="12 views"
					timestamp="3 months ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/O8GzYucg-eU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDaClJRsmlbTjmfoCNKYxro3SzAg"
				/>
				
				<VideoCard
					title="Call Of Duty MW 3/ Part 1/ BeastNight TV"
					views="36 views"
					timestamp="4 months ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/F6lZyefHfTg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGCpP09DeoIUhacxjamRDUD6ZzGQ"
				/>
				
				<VideoCard
					title="Granny Chapter 2/ Easy Mode/ Part 2/ BeastNight TV"
					views="18 views"
					timestamp="10 months ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/V3lqUtFSTGs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBXBT9c0TKVd1WZKGymrGqS17nUSw"
				/>
				
				<VideoCard
					title="Granny Chapter 2/ First Try/ Not Good/ BeastNight TV"
					views="10 views"
					timestamp="10 months ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/5GbOnMAmbNM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBB93_eSLDTdNde6HOQ8DLZNVfXZQ"
				/>
				
				<VideoCard
					title="My Channel Trailer/ Watch It Now!"
					views="26 views"
					timestamp="11 months ago"
					channel_image=""
					channel="BeastNight TV"
					thumbnail_image="https://i.ytimg.com/vi/8T1XHVlCrZA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBu6j2YK2Xd44jISPN1era3IVz5Iw"
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos