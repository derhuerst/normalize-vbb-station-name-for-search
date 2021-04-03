# normalize-vbb-station-name-for-search

Station names in [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg)/[BVG](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe) data are terribly inconsistent, cluttered with abbreviations, phrases to tell identically named places apart, and unhelpful suffixes like `, Bahnhof`.

This package keeps only those parts that are relevant for searching locally, and normalizes umlauts and special characters:

- `S Südkreuz Bhf (Berlin)` -> `s suedkreuz`
- `S Beusselstr` -> `sbahn beussel strasse`
- `S+U Warschauer Str.` -> `s u warschauer strasse`
- `Charité - Campus Benjamin Franklin (Berlin)` -> `charite campus benjamin franklin`

[![npm version](https://img.shields.io/npm/v/normalize-vbb-station-name-for-search.svg)](https://www.npmjs.com/package/normalize-vbb-station-name-for-search)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/normalize-vbb-station-name-for-search.svg)
![minimum Node.js version](https://img.shields.io/node/v/normalize-vbb-station-name-for-search.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install normalize-vbb-station-name-for-search
```


## Usage

```js
const normalize = require('normalize-vbb-station-name-for-search')

normalize('S+U Warschauer Str.') // 's+u warschauer strasse'
```


## Contributing

If you have a question, found a bug or want to propose a feature, have a look at [the issues page](https://github.com/derhuerst/normalize-vbb-station-name-for-search/issues).
