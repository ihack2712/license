
// #region tag definitons

export enum TagType {
	Permission,
	Condition,
	Limitation
};

export interface Tag<Name extends string, Description extends String>
{
	name: Name;
	description: Description;
}

export interface PermissionTag<Name extends string, Description extends String> extends Tag<Name, Description>
{
	type: typeof TagType.Permission;
}

export interface ConditionTag<Name extends string, Description extends String> extends Tag<Name, Description>
{
	type: typeof TagType.Condition;
}

export interface LimitiationTag<Name extends string, Description extends String> extends Tag<Name, Description>
{
	type: typeof TagType.Limitation;
}

const perm = <Name extends string, Description extends string> (name: Name, description: Description): PermissionTag<Name, Description> => ({
	type: TagType.Permission,
	name,
	description
});

const cond = <Name extends string, Description extends string> (name: Name, description: Description): ConditionTag<Name, Description> => ({
	type: TagType.Condition,
	name,
	description
});

const limt = <Name extends string, Description extends string> (name: Name, description: Description): LimitiationTag<Name, Description> => ({
	type: TagType.Limitation,
	name,
	description
});

// #endregion

// #region Permissions

// max width: 14
export const COMMERCIAL_USE = perm("commercial-use", "The licensed material and deriatives may be used for commercial purposes.");
export const DISTRIBUTION   = perm("distribution", "The licensed material may be distributed.");
export const MODIFICATION   = perm("modification", "The licensed material may be modified.");
export const PRIVATE_USE    = perm("private-use", "The licensed material may be used and modified in private.");
export const PATENT_USE     = perm("patent-use", "This license provides an express grant of patent rights from contributors.");
export const permissions = [ COMMERCIAL_USE, DISTRIBUTION, MODIFICATION, PRIVATE_USE, PATENT_USE ].sort((a, b) => (a.name as any) - (b.name as any));
export const permissionsMap = new Map<string, PermissionTag<string, string>>();
for (let _ of permissions) permissionsMap.set(_.name, _);

// #endregion

// #region Conditions

// max width: 28
export const LICENSE_AND_COPYRIGHT_NOTICE = cond("license-and-copyright-notice", "A copy of the license and copyright notice must be included with the licensed material.");
export const DISCLOSE_SOURCE              = cond("disclose-source", "Source code must be made available when the licensed material is distributed.");
export const NETWORK_USE_IS_DISTRIBUTION  = cond("network-use-is-distrobution", "Users who interact with the licensed material via network are given the right to receive a copy of the source code.");
export const SAME_LICENSE                 = cond("same-license", "Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.");
export const SAME_LICENSE_LIBRARY         = cond("same-license-library", "Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used, or this condition may not apply to works that use the licensed material as a library.");
export const SAME_LICENSE_FILE            = cond("same-license-file", "Modifications of existing files must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.");
export const STATE_CHANGES                = cond("state-changes", "Changes made to the licensed material must be documented.");
export const conditions = [ LICENSE_AND_COPYRIGHT_NOTICE, DISCLOSE_SOURCE, NETWORK_USE_IS_DISTRIBUTION, SAME_LICENSE, SAME_LICENSE_LIBRARY, SAME_LICENSE_FILE, STATE_CHANGES ].sort((a, b) => (a.name as any) - (b.name as any));
export const conditionMap = new Map<string, ConditionTag<string, string>>();
for (let _ of conditions) conditionMap.set(_.name, _);

// #endregion

// #region Limitations

// max width: 13
export const LIABILITY     = limt("liability", "This license includes a limitation of liability.");
export const WARRANTY      = limt("warranty", "This license explicitly states that it does NOT provide any warranty.");
export const TRADEMARK_USE = limt("trademark-use", "This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do grant any implicit trademark rights.");
export const limitations = [ LIABILITY, WARRANTY, TRADEMARK_USE ].sort((a, b) => (a.name as any) - (b.name as any));
export const limitationMap = new Map<string, LimitiationTag<string, string>>();
for (let _ of limitations) limitationMap.set(_.name, _);

// #endregion
