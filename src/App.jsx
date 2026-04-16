import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./PAGES/Profile";
import ActRank from "./PAGES/ActRank";
import Matches from "./PAGES/Matches";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	const [playerData, setPlayerData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	return (
		<div>
			<Navbar
				onResult={setPlayerData}
				onLoading={setLoading}
				onError={setError}
			/>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
			{playerData && (
				<Routes>
					<Route path="/" element={<Profile data={playerData} />} />
					<Route path="/actrank" element={<ActRank data={playerData.mmr} />} />
					<Route
						path="/matches"
						element={<Matches data={playerData.matches} />}
					/>
				</Routes>
			)}
		</div>
	);
}

export default App;
