#!/usr/bin/env node

"use strict"

const build = require("./lib/build"),
extras = require("./lib/extras")


// Check Arguments
function check(x) {
	return {
		index: process.argv.indexOf(x),
		get state() {
			return -1 < this.index
		},
		get next() {
			return process.argv[this.index + 1]
		}
	}
}


// Invoke
switch (true) {
	case check("help").state: 
		extras.help()
      break
	case check("version").state: 
		extras.version()
      break
	case check("dir").state: 
		build.start(check("dir").next)
      break
	default:
		process.stdout.write(`\nElixr: Try using "mix help" for a list of commands.\n`)
}
