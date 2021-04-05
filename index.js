'use strict'

const parseVbbStopName = require('parse-vbb-station-name')
const normalize = require('normalize-for-search')

// like `\b`, but with Unicode support
const boundaryBefore = '(?<=^|[^\\p{L}\\p{N}])'
const boundaryAfter = '(?=$|[^\\p{L}\\p{N}])'

const strasseSuffix = new RegExp(`\\s*(strasse|straße|str\\.|str)${boundaryAfter}`, 'ugi')
const expandStrasse = (words) => {
	return words
	.replace(strasseSuffix, ' Strasse')
	.trim()
}

const platz = new RegExp(`\\s*(platz|pl\\.|pl)${boundaryAfter}`, 'ugi')
const expandPlatz = (words) => {
	return words
	.replace(platz, ' Platz')
	.trim()
}

const bhf = new RegExp(`${boundaryBefore}(bhf\\.|bhf|bf\\.|bf)${boundaryAfter}`, 'ugi')
const expandBahnhof = (words) => {
	return words
	.replace(bhf, 'bahnhof')
	.trim()
}

const hbf = new RegExp(`${boundaryBefore}(hbf\\.|hbf)${boundaryAfter}`, 'ugi')
const expandHauptbahnhof = (words) => {
	return words
	.replace(hbf, 'hauptbahnhof')
	.trim()
}

const normalizeVbbStationNameForSearch = (rawName, opt = {}) => {
	const {
		sbahnUbahn: useSbahnUbahn,
	} = {
		sbahnUbahn: false,
		...opt,
	}

	const {
		sbahnUbahn,
		name,
		part,
	} = parseVbbStopName(rawName)

	return [
		useSbahnUbahn && sbahnUbahn && sbahnUbahn.text,
		...[
			name && name.text,
			...(part || []).map(p => p.text),
		]
		.filter(str => !!str)
		.map(expandStrasse)
		.map(expandPlatz)
		.map(expandBahnhof)
		.map(expandHauptbahnhof),
	]
	.filter(str => !!str)
	.map(str => normalize(str.toLowerCase().replace(/[^\p{N}\p{L}]+/ug, ' ')))
	.join(' ')
}

normalizeVbbStationNameForSearch.expandStrasse = expandStrasse
normalizeVbbStationNameForSearch.expandPlatz = expandPlatz
module.exports = normalizeVbbStationNameForSearch
