// Imports
import {
	COMMERCIAL_USE,
	DISTRIBUTION,
	MODIFICATION,
	PRIVATE_USE
} from "../tags/permissions.ts";
import {
	LICENSE_AND_COPYRIGHT_NOTICE
} from "../tags/conditions.ts";
import {
	LIABILITY,
	WARRANTY
} from "../tags/limitations.ts";
import { license } from "../license.ts";
import { getGitName } from "../getName.ts";

export const _ = license(
	"MIT License",
	"mit",
	"https://choosealicense.com/licenses/mit/",
	"A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
	[
		"year",
		"author"
	],
	{
		year: () => new Date().getFullYear().toString(),
		author: async () => {
			const n = await getGitName();
			if (n) return n.trim();
		}
	},
	[
		COMMERCIAL_USE,
		DISTRIBUTION,
		MODIFICATION,
		PRIVATE_USE
	],
	[
		LICENSE_AND_COPYRIGHT_NOTICE
	],
	[
		LIABILITY,
		WARRANTY
	],
	`MIT License

Copyright (c) <year> <author>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
);

export default _;
