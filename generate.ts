// Imports
import { License } from "./license.ts";
import {
	PermissionTag,
	ConditionTag,
	LimitiationTag
} from "./tags/tags.ts";

export const generate = async <L extends License<string, string, string, string, string[], PermissionTag<string, string>[], ConditionTag<string, string>[], LimitiationTag<string, string>[], string>> (
	license: L,
	args: {
		[key: string]: string
	}
) => {
	const a: any = {};
	let text = license.content;
	for (let arg of license.args)
	{
		if (!args[arg])
		{
			const d = license.defaults[arg];
			if (!d) throw new Error(`Missing argument '${arg}'!`);
			const v = await d();
			if (!v) throw new Error(`Missing argument '${arg}'!`);
			a[arg] = v;
		} else
		{
			a[arg] = args[arg];
		}
	}
	for (let key in a)
	{
		const value = a[key];
		text = text.replaceAll(`<${key}>`, value);
	}
	return text;
};
