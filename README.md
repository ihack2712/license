# license

Get quickly on with your license file by automatically generating one!

## Features

- Automatically generate a license file for your project.
- Automatically tries generate all properties for you, such as the current year, your name and your project name.

## Example

```text
$ license g mit
✨ Done!
```

However it is possible to override the name:

```text
$ license g mit -a "author name"
✨ Done!
```

## Installation

```shell
deno install \
	--unstable \
	--allow-write \
	--allow-read \
	--allow-run \
	--allow-env \
	-n license \
	https://deno.land/x/license/cli.ts
```

## Usage

```text
$ license
Usage: license [options] [command]

Options:
  -v, --version                   output the version number
  -h, --help                      display help for command

Commands:
  ls                              List the licenses.
  tags|tl                         List all permissions, conditions and
                                  limitiations that exists.
  info <license>                  Show information about a license.
  tag|t <name>                    Get information about a permission,
                                  condition or a limitation.
  generate|g [options] <license>  Generate a license.
  help [command]                  display help for command
```
