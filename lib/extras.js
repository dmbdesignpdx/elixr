"use strict"

const ver = "0.1.0"


// Help
exports.help = () => process.stdout.write(`
Elixir Help\n
   mix [command] [directory-name] [options...]\n
                  commands:
       dir <directory-name>\tcreate a directory using the following name 
                       help\tprint this message
                    version\tprint user version\n
                   options:
                   --no-git\tdo not turn the directory into a Git repository
               --no-gemfile\tdo not create a Gemfile\n\n`)

// Version
exports.version = () => process.stdout.write(`Elixir ${ver}\n`)
