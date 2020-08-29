import { License } from "../license.ts";
import {
	PermissionTag,
	ConditionTag,
	LimitiationTag
} from "../tags/tags.ts";
import { default as ApacheLicense20 } from "./apache-license-2.0.ts";
import { default as BoostSoftwareLicense10 } from "./boost-software-license-1.0.ts";
import { default as GNU_AGPLv3 } from "./gnu-agplv3.ts";
import { default as GNU_GPLv3 } from "./gnu-gplv3.ts";
import { default as GNU_LGPLv3 } from "./gnu-lgplv3.ts";
import { default as MIT } from "./mit.ts";
import { default as MozillaPublicLicense20 } from "./mozilla-public-license-2.0.ts";
import { default as TheUnlicense } from "./the-unlicense.ts";
export const array = [
	ApacheLicense20,
	BoostSoftwareLicense10,
	GNU_AGPLv3,
	GNU_GPLv3,
	GNU_LGPLv3,
	MIT,
	MozillaPublicLicense20,
	TheUnlicense
];
export const map = new Map<string, License<
	string,
	string,
	string,
	string,
	string[],
	PermissionTag<string, string>[],
	ConditionTag<string, string>[],
	LimitiationTag<string, string>[],
	string
>>();
for (let license of array) map.set(license.alias, license);
