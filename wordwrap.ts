export const wordwrap = (text: string, length: number = 60, brk: string = "\n") => {
	let out = "";
	let tokens = text.split(/\s+/);
	
	let isFirstWord = true;
	let pos = 0;
	
	for (let token of tokens)
	{
		let c = false;
		if (!isFirstWord && pos + token.length <= length)
		{
			out += " " + token;
			pos += token.length + 1;
			c = true;
		}
		if (pos >= length + 1)
		{
			pos = 0;
			out += brk;
		}
		if (c) continue;
		while (token.length > 0)
		{
			if (!isFirstWord && pos + token.length >= length)
			{
				out += brk;
				isFirstWord = true;
				pos = 0;
			}
			if (token.length > length)
			{
				const chunk = token.substring(0, length - 1) + "-" + brk;
				out += chunk;
				token = token.substring(length - 1, token.length);
			} else
			{
				pos += 1;
				out += token;
				pos = token.length;
				token = "";
			}
		}
		isFirstWord = false;
	}
	
	return out;
};
