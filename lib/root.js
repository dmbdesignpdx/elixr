"use strict"

exports.config = 
`title: site title
description: site description
category: category
copyright: copyright

contact:
\tauthor: author
\temail: email
\tphone: 1234567890
\taddress: address

same:
\tgithub: account
\ttwitter: account
\tfacebook: account
\tlinkedin: account
\tgoogle: account

images:
\tlogo: "logo.jpg"
\tmain: "main-image.jpg"

colors:
\ttheme: 000
\tbkg: 000
\ttile: 0078D7

baseurl: ""
url: ""

kramdown:
\tauto_ids: false
\tsyntax_highlighter: rouge

sass:
\tstyle: compressed

port: 4000

exclude:
\t- .sass-cache
\t- .jekyll-metadata
\t- .gitignore
\t- node_modules
\t- src
\t- package.json
\t- gulpfile.js
\t- README.md
\t- LICENSE.md

include:
\t- _pages

defaults:
\t-
\t\tscope:
\t\t\tpath: "_posts"
\t\tvalues:
\t\t\tlayout: "post"
\t\t\tpermalink: /:title/
\t\t\texcerpt_separator: <!--end-->
\t-
\t\tscope:
\t\t\tpath: "_pages"
\t\tvalues:
\t\t\tlayout: "page"\n`

exports.ignore = `.DS_Store\n.sass-cache/\n_site/\nnode_modules/\n`

exports.browser = 
`---
# MS Icons
---

<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
\t<msapplication>
\t\t<tile>
\t\t\t<square150x150logo src="{{ site.url }}/img/mstile-150x150.png"/>
\t\t\t<square310x310logo src="{{ site.url }}/img/mstile-310x310.png"/>
\t\t\t<wide310x150logo src="{{ site.url }}/img/mstile-310x150.png"/>
\t\t\t<TileColor>#{{ site.colors.tile }}</TileColor>
\t\t</tile>
\t</msapplication>
</browserconfig>\n`

exports.gemfile = 
`source "https://rubygems.org"

# gem "jekyll"
# gem "sass"\n`

exports.gulpfile = 
`"use strict"

const gulp = require("gulp"),
babel = require("gulp-babel"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
shell = require("gulp-shell"),
plumber = require("gulp-plumber"),
browserSync = require("browser-sync").create(),

project = {
\tsrc: ["./src/*.js"],
\tmerge: "main.min.js",
\tdest: "./dist/",
\tport: 4000
},

serve = shell.task("jekyll serve")

function scripts() {
\treturn gulp.src(project.src)
\t.pipe(plumber())
\t.pipe(concat(project.dest))
\t.pipe(babel({presets: ["env"]}))
\t.pipe(uglify({compress: {properties: false}, output:{comments: "/^!/"}}))
\t.pipe(gulp.dest(project.dest))
}

function watch() { 
\tgulp.watch(project.src, scripts) 
}

function sync() {
\tbrowserSync.init({
\t\tserver: "./_site/",
\t\topen: false,
\t\tghostMode: false
\t}),
\tbrowserSync.watch(["./_site/*"]).on("change", browserSync.reload)
}

exports.scripts = scripts
exports.default = gulp.parallel(scripts, watch, serve, sync)
exports.kill = shell.task(\`kill -9 $(lsof -t -i:\${project.port})\`)\n`

exports.license = 
`Copyright [year] [owner].

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`

exports.manifest = 
`---
# Chrome
---

{
\t"name": "{{ site.title }}",
\t"icons": [
\t\t{
\t\t\t"src": "{{ site.url }}/img/android-chrome-192x192.png",
\t\t\t"sizes": "192x192",
\t\t\t"type": "image/png"
\t\t},
\t\t{
\t\t\t"src": "{{ site.url }}/img/android-chrome-256x256.png",
\t\t\t"sizes": "256x256",
\t\t\t"type": "image/png"
\t\t}
\t],
\t"theme_color": "#{{ site.colors.theme }}",
\t"background_color": "#{{ site.colors.bkg }}",
\t"display": "standalone"
}\n`

exports.package = 
`{
\t"name": "name",
\t"version": "1.0.0",
\t"description": "description",
\t"main": "dist/main.min.js",
\t"homepage": "site",
\t"repository": "repo",
\t"author": "name <email>",
\t"license": "MIT",
\t"devDependencies": {
\t\t"babel-core": "^6.26.0",
\t\t"babel-preset-env": "^1.6.1",
\t\t"browser-sync": "^2.23.6",
\t\t"gulp": "^4.0.0",
\t\t"gulp-babel": "^7.0.1",
\t\t"gulp-concat": "^2.6.1",
\t\t"gulp-plumber": "^1.2.0",
\t\t"gulp-shell": "^0.6.5",
\t\t"gulp-uglify": "^3.0.0"
\t}
}\n`

exports.readme = 
`# Title

Description\n`

exports.robots = 
`User-agent: *
Allow: 
Disallow: 

sitemap: http://yoursite.com/sitemap.xml\n`

exports.rss = 
`---
# RSS
---

<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
\t<channel>

\t\t<atom:link href="{{ site.url }}/rss.xml" rel="self" type="application/rss+xml"/>
\t\t<title>{{ site.title }}</title>
\t\t<description>{{ site.description }}</description>
\t\t<link>{{ site.url }}</link>
\t\t<category>{{ site.category }}</category>
\t\t<image>
\t\t\t<url>{{ site.url }}/img/favicon-32x32.png</url>
\t\t</image>
\t\t<copyright>{{ site.copyright }}</copyright>

\t\t{%- for post in site.posts -%}
\t\t<item>

\t\t\t<title>{{ post.title }}</title>
\t\t\t<description>{{ post.excerpt | strip_html }}</description>
\t\t\t<link>{{ post.url | absolute_url }}</link>
\t\t\t<guid>{{ post.url | absolute_url }}</guid>
\t\t\t<pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
		
\t\t</item>
\t\t{%- endfor -%}
	
\t</channel>
</rss>\n`

exports.sitemap = 
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\t<url>
\t\t<loc>https://yoursite.com</loc>
\t\t<lastmod>2018-03-23</lastmod>
\t\t<changefreq>monthly</changefreq>
\t\t<priority>1.0</priority>
\t</url>
\t<url>
\t\t<loc>https://yoursite.com/sibling</loc>
\t\t<lastmod>2018-03-23</lastmod>
\t\t<changefreq>monthly</changefreq>
\t\t<priority>0.9</priority>
\t</url>
\t<url>
\t\t<loc>https://yoursite.com/sibling</loc>
\t\t<lastmod>2018-03-23</lastmod>
\t\t<changefreq>monthly</changefreq>
\t\t<priority>0.8</priority>
\t</url>
\t<url>
\t\t<loc>https://yoursite.com/sibling</loc>
\t\t<lastmod>2018-03-23</lastmod>
\t\t<changefreq>monthly</changefreq>
\t\t<priority>0.7</priority>
\t</url>
</urlset>\n`

exports.contribute =
`# Title

Guidelines\n`
