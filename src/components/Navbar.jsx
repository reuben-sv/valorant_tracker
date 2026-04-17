import { useCallback } from "react";
import { fetchPlayer } from "../api/valorant";
import { Link } from "react-router-dom";

function Navbar({ onResult, onLoading, onError }) {
	const handleSubmit = useCallback(async (e) => {
		e.preventDefault();

		//getting name and tag from input
		const riotId = e.target[0].value.trim();

		//error handling for invalid input
		if (!riotId.includes("#")) {
			onError("Enter the player as name#tag");
			return;
		}

		const [name, tag] = riotId.split("#");

		if (!name || !tag) {
			onError("Enter the player as name#tag");
			return;
		}

		try {
			onError(null);
			onLoading(true);
			const data = await fetchPlayer(name, tag);
			onResult(data);
		} catch (err) {
			onError(err.message);
			onResult(null);
		} finally {
			onLoading(false);
		}
	}, []);
	return (
		<div className="navbar">
			<div className="navbar-logo">LOGO</div>
			<div className="navbar-links">
				<Link to="/">Home</Link>
				<Link to="/actrank">Act Rank</Link>
				<Link to="/matches">Matches</Link>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Search player..." />
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
}
export default Navbar;
