// Imports
import {
	COMMERCIAL_USE,
	DISTRIBUTION,
	MODIFICATION,
	PRIVATE_USE
} from "../tags/permissions.ts";
import {
	LIABILITY,
	WARRANTY,
} from "../tags/limitations.ts";
import { license } from "../license.ts";

export const _ = license(
	"The Unlicense",
	"unlicense",
	"https://choosealicense.com/licenses/unlicense/",
	"A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
	[ ],
	{ },
	[
		COMMERCIAL_USE,
		DISTRIBUTION,
		MODIFICATION,
		PRIVATE_USE
	],
	[ ],
	[
		LIABILITY,
		WARRANTY
	],
	`This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`,
	"UNLICENSE"
);

export default _;
