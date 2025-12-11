const items = $input.all();

return items.map(item => {
	const url = item.json.repoURL;
	const clean = url.replace(/\/$/, "");
	const match = clean.match(/github\.com\/([^\/]+)\/([^\/]+)/);

	if (!match) {
		throw new Error("Invalid GitHub URL");
	}

	const owner = match[1];
	const repo = match[2];

    const level =  item.json.level|| 'deep'; 

	return {
		json: {
			...item.json,
			owner,
			repo,
          level
		}
	};
});
