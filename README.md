# dduongtran.github.io

Personal site for Duy Duong-Tran. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Preview on your computer
Double-click `index.html`. Everything works offline except the Google Fonts, which fall back to Georgia.

## Publish (GitHub Pages)
1. In the repo `dduongtr/dduongtr.github.io`, delete the old files, then add everything from this folder (including the hidden `.nojekyll` file).
2. Commit to `main`.
3. Settings > Pages: source "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live at https://dduongtr.github.io within a couple of minutes.

## The three files you will edit most
| To change | Edit |
|---|---|
| Email, social links, CV link, nav | `data/site.js` |
| Add a news item | `data/news.js` (copy a line, change date and text) |
| Add a paper | `data/publications.js` (copy an entry to the top, change fields) |

Counts on the home page (papers, awards) update automatically from `publications.js`.
A paper with an `award:` field appears in the Recognition list. `featured: true` puts it on the home page.

## Page text
Longer prose (Leadership, Research, Teaching, CV, press bios) lives in the HTML files. Search for `TODO` to find places that need your input.

## Files
```
index.html  leadership.html  research.html  publications.html
teaching.html  news.html  cv.html
assets/css/style.css      colors and fonts are the variables at the top
assets/js/site.js         header, footer, renderers
assets/img/               headshot.jpg (web), headshot-press.jpg (download)
data/                     site.js  news.js  publications.js
```
