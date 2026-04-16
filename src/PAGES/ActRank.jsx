import RankCard from "../components/RankCard";

function ActRank({ data }) {
	if (!data) {
		return (
			<div className="page-actrank">
				<p>No rank data available for this player.</p>
			</div>
		);
	}

	return (
		<div className="page-actrank">
			<RankCard data={data} />
		</div>
	);
}
export default ActRank;
