// Imports
import { Command } from "./deps/cmd.ts";
import { array, map } from "./licenses/data.ts";
import {
	permissionsMap,
	conditionMap,
	limitationMap,
	permissions,
	conditions,
	limitations,
	PermissionTag,
	ConditionTag,
	LimitiationTag,
	TagType
} from "./tags/tags.ts";
import { wordwrap } from "./wordwrap.ts";
import {
	bold,
	magenta,
	green,
	blue,
	red,
} from "./deps/colors.ts";
import { generate } from "./generate.ts";

// Init
const program = new Command("license");
program.version("0.1.0", "-v, --version");

// Util

const n = "\n";
const circle = "• ";

const error = (message: string) => console.log(`${bold(red("error"))} ${message}`);

const cols = (
	permissions: PermissionTag<string, string>[],
	conditions: ConditionTag<string, string>[],
	limitations: LimitiationTag<string, string>[]
) => {
	let text = green("Permissions".padEnd(16, " ")) + " " + blue("Conditions".padEnd(30, " ")) + " " + red("Limitations") + n;
	const rows = Math.max(
		permissions.length,
		conditions.length,
		limitations.length
	);
	for (let i = 0; i < rows; i++)
	{
		const _perm = permissions[i];
		const _cond = conditions[i];
		const _limt = limitations[i];
		const perm = _perm ? (green(circle) + _perm.name.padEnd(15)) : "".padEnd(17);
		const cond = _cond ? (blue(circle) + _cond.name.padEnd(29)) : "".padEnd(31);
		const limt = _limt ? (red(circle) + _limt.name) : "";
		text += perm + cond + limt + n;
	}
	return text;
};

const printLicenses = async () => {
	let text = bold(magenta("Licenses")) + ":" + n;
	const longest = array.reduce((longest, license) => Math.max(longest, license.alias.length), 0);
	for (let license of array) text += "  " + green(license.alias.padEnd(longest, " ")) + " " + blue(license.url) + n;
	console.log(text);
};


const showLicenseInfo = async (_: string) => {
	const license = map.get(_);
	if (!license) return error(`Unknown license ${_}`);
	let text = "";
	text += bold(magenta(license.name)) + n;
	text += green(license.alias) + " " + blue(license.url) + n;
	text += wordwrap(license.description) + n + n;
	
	// Render permissions conditions limitations
	text += cols(license.tags.permissions, license.tags.conditions, license.tags.limitations);
	console.log(text);
};

const getTag = (tag: string): void | PermissionTag<string, string> | ConditionTag<string, string> | LimitiationTag<string, string> => {
	if (permissionsMap.has(tag)) return permissionsMap.get(tag)!;
	if (conditionMap.has(tag)) return conditionMap.get(tag)!;
	if (limitationMap.has(tag)) return limitationMap.get(tag)!;
};

const printTag = (_tag: string) => {
	const tag = getTag(_tag);
	if (!tag) return error(`Unknown tag '${_tag}'!`);
	let text = "";
	if (tag.type === TagType.Permission) text += green("Permission");
	if (tag.type === TagType.Condition) text += blue("Condition");
	if (tag.type === TagType.Limitation) text += blue("Limitation");
	text += " " + tag.name + n;
	text += wordwrap(tag.description);
	console.log(text);
};

// Commands

program
	.command("ls")
	.description("List the licenses.")
	.action(async () => {
		await printLicenses();
	});

program
	.command("tags")
	.alias("tl")
	.description("List all permissions, conditions and limitiations that exists.")
	.action(async () => {
		console.log(cols(
			permissions,
			conditions,
			limitations
		))
	});

program
	.command("info <license>")
	.description("Show information about a license.")
	.action(async (license: string) => {
		await showLicenseInfo(license);
	});

program
	.command("tag <name>")
	.alias("t")
	.description("Get information about a permission, condition or a limitation.")
	.action(async (name: string) => {
		printTag(name);
	});

program
	.command("generate <license>")
	.description("Generate a license.")
	.alias("g")
	.option("-y, --year [year]", "The year. Defaults to current year.")
	.option("-a, --author [name]", "The project author. Defaults to git user.name.")
	.option("-p, --project [name]", "The project name. Defaults to current directory.")
	.option("-d, --description [desc]", "The project description. Defaults to 'No description.'.")
	.action(async (_license: string, opts: any) => {
		try
		{
			const license = map.get(_license);
			if (!license) return error(`License ${_license} not found!`);
			const content = await generate(license, opts);
			await Deno.writeTextFile(Deno.cwd() + "/" + license.file, content);
			console.log("✨ Done!")
		} catch (err)
		{
			error(err.message);
		}
	});

await program.parseAsync(Deno.args);
