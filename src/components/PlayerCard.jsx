function PlayerCard({ data }) {
	const { account, mmr } = data;
	return (
		<div className="player-card">
			<h2>
				{account.name}#{account.tag}
			</h2>
			<p>Region: {account.region}</p>
			<p>lvl:{account.account_level}</p>
			<img
				src={account.card.wide}
				alt="Player Card"
				style={{ width: "300px" }}
			/>
			{mmr && (
				<div>
					<p>Current Rank: {mmr.currenttierpatched}</p>
					<img
						src={mmr.images.large}
						alt="Rank Icon"
						style={{ width: "100px" }}
					/>
				</div>
			)}
		</div>
	);
}
export default PlayerCard;
