function MatchCard({ match }) {
	const winningTeam = match.teams.blue > match.teams.red ? "Blue" : "Red";
	return (
		<div className="match-card">
			<h3>{match.meta.mode}</h3>
			<h4>{match.meta.map.name}</h4>
			<p>Agent: {match.stats.character.name}</p>
			<p>Result: {match.stats.team === winningTeam ? "Win" : "Loss"}</p>
			<p>
				K/D/A: {match.stats.kills}/{match.stats.deaths}/{match.stats.assists}
			</p>
		</div>
	);
}
export default MatchCard;
