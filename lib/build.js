"use strict"

const fs = require("fs"),
exec = require("child_process").exec,
html = require("./html.js"),
scss = require("./scss.js"),
root = require("./root.js"),

files = {
	browser: "browserconfig.xml",
	config: "_config.yml",
	contribute: "/CONTRIBUTING.md",
	ignore: ".gitignore",
	gulpfile: "gulpfile.js",
	license: "LICENSE.md",
	manifest: "manifest.json",
	package: "package.json",
	readme: "README.md",
	robots: "robots.txt",
	rss: "rss.xml",
	sitemap: "sitemap.xml"
}


// Check Arguments
function check(x) {
	return -1 < process.argv.indexOf(x)
}

// Build
exports.start = a => {

	let c = []

   // Project Folder:
   fs.mkdir(`./${a}`, () => {

      // _data
      fs.mkdir(`./${a}/_data`, () => {
         fs.writeFileSync(`./${a}/_data/info.yml`, "")
      })

      // _includes
      fs.mkdir(`./${a}/_includes`, () => {

         // _critical
         fs.mkdir(`./${a}/_includes/critical`, () => {
            fs.writeFileSync(`./${a}/_includes/critical/site.scss`, scss.site)
         })

			fs.writeFileSync(`./${a}/_includes/defer.html`, html.defer)
         fs.writeFileSync(`./${a}/_includes/footer.html`, html.footer)
         fs.writeFileSync(`./${a}/_includes/head.html`, html.head)
         fs.writeFileSync(`./${a}/_includes/nav.html`, html.nav)
      })

      // _layouts
      fs.mkdir(`./${a}/_layouts`, () => {
         fs.writeFileSync(`./${a}/_layouts/compress.html`, html.compress)
         fs.writeFileSync(`./${a}/_layouts/page.html`, html.page)
         fs.writeFileSync(`./${a}/_layouts/post.html`, html.post)
      })

      // _pages
      fs.mkdir(`./${a}/_pages`, () => {
         fs.writeFileSync(`./${a}/_pages/about.html`, html.about)
         fs.writeFileSync(`./${a}/_pages/contact.html`, html.contact)
         fs.writeFileSync(`./${a}/_pages/home.html`, html.home)
      })

      // _posts
      fs.mkdir(`./${a}/_posts`, () => {
         fs.writeFileSync(`./${a}/_posts/YYYY-MM-DD-title.md`, html.posting)
      })

      // _sass
      fs.mkdir(`./${a}/_sass`, () => {

         // _base
         fs.mkdir(`./${a}/_sass/_base`, () => {
            fs.writeFileSync(`./${a}/_sass/_base/_global.scss`, scss.global)
            fs.writeFileSync(`./${a}/_sass/_base/_vars.scss`, "")
			})

         // _desktop
         fs.mkdir(`./${a}/_sass/_desktop`, () => {
            fs.writeFileSync(`./${a}/_sass/_desktop/_large.scss`, "")
         })

         // _external
         fs.mkdir(`./${a}/_sass/_external`, () => {
            fs.writeFileSync(`./${a}/_sass/_external/.gitkeep`, "")
         })

         // _includes
         fs.mkdir(`./${a}/_sass/_includes`, () => {
            fs.writeFileSync(`./${a}/_sass/_includes/_footer.scss`, "")
            fs.writeFileSync(`./${a}/_sass/_includes/_nav.scss`, "")
			})

         // _pages
         fs.mkdir(`./${a}/_sass/_pages`, () => {
            fs.writeFileSync(`./${a}/_sass/_pages/_about.scss`, "")
            fs.writeFileSync(`./${a}/_sass/_pages/_contact.scss`, "")
            fs.writeFileSync(`./${a}/_sass/_pages/_home.scss`, "")
         })

         // _patterns
         fs.mkdir(`./${a}/_sass/_patterns`, () => {
            fs.writeFileSync(`./${a}/_sass/_patterns/.gitkeep`, "")
         })

         // _posts
         fs.mkdir(`./${a}/_sass/_posts`, () => {
            fs.writeFileSync(`./${a}/_sass/_posts/_standard.scss`, "")
         })

         // _vendor
         fs.mkdir(`./${a}/_sass/_vendor`, () => {
            fs.writeFileSync(`./${a}/_sass/_vendor/.gitkeep`, "")
         })

      })

      // css
      fs.mkdir(`./${a}/css`, () => {
			fs.writeFileSync(`./${a}/css/master.scss`, scss.master)
			fs.writeFileSync(`./${a}/css/desktop.scss`, scss.desktop)
      })

      // dist
      fs.mkdir(`./${a}/dist`, () => {
			fs.writeFileSync(`./${a}/dist/main.min.js`, "")
      })

      // img
      fs.mkdir(`./${a}/img`, () => {
         fs.writeFileSync(`./${a}/img/.gitkeep`, "")
      })

      // scripts
      fs.mkdir(`./${a}/src`, () => {
         fs.writeFileSync(`./${a}/src/.gitkeep`, "")
		})

		// root stuff	
		for (const key in files) {
			if (Object.prototype.hasOwnProperty.call(files, key)) {
				const value = files[key]
				fs.writeFileSync(`./${a}/${value}`, root[key])
			}
		}

		if (check("--no-gemfile")) {
			c.push(` Gemfile`)
		} else {
			fs.writeFileSync(`./${a}/Gemfile`, root.gemfile)
		}
      
      if (check("--no-git")) {
			c.push(` Git`)
      } else {
			exec(`cd ${a} && git init`)
      }

   })

   process.on("exit", () => {
		process.stdout.write(`\nElixr: Project directory \x1b[1;32m${a}\x1b[0m created.\n\n`)
		if (0 < c.length) {
			process.stdout.write(`\x1b[33mExcluded:\x1b[0m${c}\n\n`)
		}
   })

}
