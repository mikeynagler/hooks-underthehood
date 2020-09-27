import React, { useEffect, useState } from "react";

function Stories() {
	const [topStory, setTopStory] = useState({});
	useEffect(() => {
		fetch(
			`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
		)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return res[0];
			})
			.then((storyId) => {
				fetch(
					`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
				)
					.then((res) => {
						return res.json();
					})
					.then((topStory) => {
						console.log(topStory);
						setTopStory(topStory);
					});
			});
		return () => {};
	}, []);
	return (
		<div>
			<div className="top-story">
				<a href={topStory.url}>{topStory.title}</a>
			</div>
		</div>
	);
}

export default Stories;
