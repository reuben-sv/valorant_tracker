import MatchCard from "../components/MatchCard";
function Matches({ data }) {
	if (!data?.length) {
		return (
			<div className="page-matches">
				<h2>Matches Page</h2>
				<p>No recent matches available.</p>
			</div>
		);
	}

	data = data.slice(0, 10); // Show only the 10 most recent matches
	return (
		<div className="page-matches">
			<h2>Matches Page</h2>
			{data.map((match, index) => (
				<MatchCard key={index} match={match} />
			))}
		</div>
	);
}
export default Matches;
