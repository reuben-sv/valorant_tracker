import PlayerCard from "../components/PlayerCard";

function Profile({ data }) {
	return (
		<div className="page-profile">
			<PlayerCard data={data} />
		</div>
	);
}
export default Profile;
