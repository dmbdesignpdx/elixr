"use strict"

exports.site =
`@-ms-viewport {
\twidth: device-width
}

*, *::before, *::after {
\tbox-sizing: border-box
}

html, body {
\theight: 100vh
}

html {
\tfont: 20px system-ui, sans-serif
}

body, figure, h1, h2, h3, h4, h5, h6, p, hr, blockquote, summary, ol, ul, dl, dd, pre, th, td, table, tbody, tr, tfoot, thead, colgroup, iframe, textarea, button {
\tpadding: 0;
\tmargin: 0;
\tborder: 0
}

video, img, object, svg, iframe {
\tdisplay: block
}

ol, ul {
\tlist-style: none
}

a, abbr {
\ttext-decoration: none;
\tcolor: inherit
}

table {
\tborder-collapse: collapse;
\tborder-spacing: 0
}\n`

exports.global = 
`address {
\tfont-style: normal
}

span.nobr {
\twhite-space: nowrap
}\n`

exports.master = 
`---
# Master
---

@import
// Vendor Dependencies


// Base
"_base/vars",
"_base/global",

// Patterns


// Includes
"_includes/nav",
"_includes/footer",

// Pages
"_pages/home",
"_pages/about",
"_pages/contact",

// Posts
"_posts/_standard";\n`

exports.desktop = 
`---
# Desktop
---

@import
// Vendor Dependencies


// Base
"_base/vars",

// Desktop
"_desktop/large";\n`
