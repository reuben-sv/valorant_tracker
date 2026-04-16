const HENRIK_KEY = import.meta.env.VITE_HENRIK_API_KEY;

export async function fetchPlayer(name, tag) {
	const baseurl = "https://api.henrikdev.xyz/valorant/";
	const accountRes = await fetch(
		`${baseurl}v1/account/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`,
		{ headers: { Authorization: HENRIK_KEY } },
	);
	if (!accountRes.ok) {
		const err = await accountRes.json();
		throw new Error(err.errors?.[0]?.message || "Player not found");
	}
	// getting account data
	const account = await accountRes.json();
	const region = account.data.region;

	//getting mmr data
	const mmrRes = await fetch(
		`${baseurl}v1/mmr/${encodeURIComponent(region)}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`,
		{ headers: { Authorization: HENRIK_KEY } },
	);
	const mmr = mmrRes.ok ? await mmrRes.json() : null;
	//getting match data
	const matchRes = await fetch(
		`https://api.henrikdev.xyz/valorant/v1/stored-matches/${region}/${name}/${tag}`,
		{
			headers: {
				Authorization: HENRIK_KEY,
			},
		},
	);
	const matches = matchRes.ok ? await matchRes.json() : null;

	return { account: account.data, mmr: mmr?.data, matches: matches?.data };
}
