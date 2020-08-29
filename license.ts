// Imports
import {
	PermissionTag,
	ConditionTag,
	LimitiationTag
} from "./tags/tags.ts";

export type License <
	Name extends string,
	Alias extends string,
	Url extends string,
	Description extends string,
	Args extends string[],
	Permissions extends PermissionTag<string, string>[],
	Conditions extends ConditionTag<string, string>[],
	Limitiations extends LimitiationTag<string, string>[],
	Content extends string
> = {
	name: Name,
	alias: Alias,
	url: Url,
	description: Description,
	args: Args,
	defaults: {
		[key: string]: () => Promise<string | void> | string | void
	},
	tags: {
		permissions: Permissions,
		conditions: Conditions,
		limitations: Limitiations
	},
	file: string,
	content: Content
};

export const license = <
	Name extends string,
	Alias extends string,
	Url extends string,
	Description extends string,
	Args extends string[],
	Permissions extends PermissionTag<string, string>[],
	Conditions extends ConditionTag<string, string>[],
	Limitiations extends LimitiationTag<string, string>[],
	Content extends string,
	Defaults extends { [key: string]: () => Promise<string | void> | string | void }
> (
	name: Name,
	alias: Alias,
	url: Url,
	description: Description,
	args: Args,
	defaults: Defaults,
	permissions: Permissions,
	conditions: Conditions,
	limitations: Limitiations,
	content: Content,
	file: string = "LICENSE",
): License<Name, Alias, Url, Description, Args, Permissions, Conditions, Limitiations, Content> => ({
	name,
	alias,
	url,
	description,
	args,
	tags: {
		permissions: permissions.sort((a, b) => (a.name as any) - (b.name as any)),
		conditions: conditions.sort((a, b) => (a.name as any) - (b.name as any)),
		limitations: limitations.sort((a, b) => (a.name as any) - (b.name as any))
	},
	file,
	content,
	defaults
});
