/**
 * Get the git user name.
 */
export const getGitName = async (): Promise<string | void> => {
	try
	{
		const proc = Deno.run({
			cmd: ["git", "config", "user.name"],
			stdout: "piped"
		});
		const output = await proc.output();
		let str = "";
		for (let c of output) str += String.fromCharCode(c);
		if (str.length > 0) return str;
		return undefined;
	} catch (error)
	{
		return undefined;
	}
};
