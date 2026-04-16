function RankCard({ data }) {
	return (
		<div className="rank-card">
			<h2>Current Rank</h2>
			<div className="rank-info">
				<img src={data.images.small} alt="Rank Icon" className="rank-icon" />
				<div className="rank-details">
					<p className="rank-name">{data.currenttierpatched}</p>
					<p className="rank-mm">{data.ranking_in_tier} / 100</p>
				</div>
			</div>
		</div>
	);
}
export default RankCard;
