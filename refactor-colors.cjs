const fs = require('fs');
const path = require('path');

const root = '/Users/chinna-2310/apps/crm-design-system';
const srcFile = path.join(root, '☀️ Day Mode NXT GEN.tokens.json');
const outFile = path.join(root, 'colors.json');
const reportFile = path.join(root, 'colors.migration-report.md');

const data = JSON.parse(fs.readFileSync(srcFile, 'utf8'));

const TOP_LEVELS = [
	'bg',
	'text',
	'border',
	'icon',
	'primary',
	'success',
	'warning',
	'error',
	'info',
	'neutral',
	'overlay',
	'shadow',
	'focus',
	'status',
	'components',
	'products'
];

const COMPONENT_GROUPS = [
	'button',
	'input',
	'badge',
	'tag',
	'tooltip',
	'dialog',
	'toast',
	'alert',
	'table',
	'navigation'
];

function toCamelCase(input) {
	const s = String(input ?? '').trim();
	if (!s) return 'token';

	const parts = s
		.replace(/['’]/g, '')
		.replace(/&/g, ' and ')
		.replace(/\//g, ' ')
		.replace(/\(/g, ' ')
		.replace(/\)/g, ' ')
		.replace(/[^a-zA-Z0-9]+/g, ' ')
		.trim()
		.split(/\s+/)
		.filter(Boolean);

	if (!parts.length) return 'token';

	return parts
		.map((part, i) => {
			const lower = part.toLowerCase();
			if (i === 0) return lower;
			return lower.charAt(0).toUpperCase() + lower.slice(1);
		})
		.join('');
}

function buildTokenIndex(obj, p = [], map = new Map()) {
	if (!obj || typeof obj !== 'object') return map;

	if (obj.$type) {
		map.set(p.join('.'), obj);
		return map;
	}

	for (const key of Object.keys(obj)) {
		buildTokenIndex(obj[key], p.concat(key), map);
	}

	return map;
}

const tokenIndex = buildTokenIndex(data);

function resolveRef(ref) {
	const m = /^\{(.+)\}$/.exec(ref || '');
	if (!m) return null;

	const pathKey = m[1];
	const token = tokenIndex.get(pathKey);
	if (!token || token.$type !== 'color') return null;

	if (typeof token.$value === 'string') {
		return resolveRef(token.$value);
	}

	return token.$value?.hex || null;
}

function normalizeTokenValue(token) {
	if (token.$type !== 'color') return token.$value;

	if (typeof token.$value === 'string') {
		const resolved = resolveRef(token.$value);
		return resolved || token.$value;
	}

	return token.$value?.hex || null;
}

function classify(record) {
	const top = (record.path[0] || '').toLowerCase();
	const second = (record.path[1] || '').toLowerCase();
	const full = record.path.join(' ').toLowerCase();

	const productTops = new Set([
		'new module builder',
		'builder colors',
		'kanban',
		'setup left panel',
		'search highlight',
		'zia'
	]);

	if (productTops.has(top)) {
		return { section: 'products', subgroup: toCamelCase(record.path[0]) };
	}

	if (top === 'component') {
		let group = 'input';

		if (second.includes('button')) group = 'button';
		else if (
			second.includes('input') ||
			second.includes('dropdown') ||
			second.includes('checkbox') ||
			second.includes('radio') ||
			second.includes('switch') ||
			second.includes('slider') ||
			second.includes('calender') ||
			second.includes('calendar') ||
			second.includes('drag') ||
			second.includes('image upload') ||
			second.includes('rich text')
		)
			group = 'input';
		else if (second.includes('multiselect') || second.includes('tag')) group = 'tag';
		else if (second.includes('tooltip') || second.includes('tour')) group = 'tooltip';
		else if (second.includes('modal')) group = 'dialog';
		else if (second.includes('message box')) group = 'alert';
		else if (second.includes('message info')) group = 'badge';
		else if (second.includes('table')) group = 'table';
		else if (second.includes('tab') || second.includes('stepper')) group = 'navigation';
		else if (second.includes('sticky notes')) group = 'badge';
		else if (second.includes('shadows')) return { section: 'shadow', subgroup: 'componentShadows' };

		return { section: 'components', subgroup: group };
	}

	if (top === 'icons') return { section: 'icon', subgroup: 'palette' };
	if (top === 'common bg' || top === 'bg colors') return { section: 'bg', subgroup: toCamelCase(record.path[0]) };
	if (top === 'border colors') return { section: 'border', subgroup: 'palette' };
	if (top === 'pastel colors') return { section: 'neutral', subgroup: 'pastel' };
	if (top === 'keyboard focus') return { section: 'focus', subgroup: 'default' };
	if (top === 'status colors') return { section: 'status', subgroup: 'semantic' };
	if (top === 'color tags') return { section: 'status', subgroup: 'tags' };

	if (top === 'primary palette') {
		if (/heading|paragraph|label|notfound/.test(full)) return { section: 'text', subgroup: 'primaryPalette' };
		if (/link/.test(full)) return { section: 'primary', subgroup: 'links' };
		if (/iconbghover/.test(full)) return { section: 'bg', subgroup: 'interactive' };
		return { section: 'primary', subgroup: 'palette' };
	}

	if (/shadow/.test(full)) return { section: 'shadow', subgroup: 'default' };
	if (/overlay/.test(full)) return { section: 'overlay', subgroup: 'default' };
	if (/focus/.test(full)) return { section: 'focus', subgroup: 'default' };
	if (/error|danger|negative|red/.test(full)) return { section: 'error', subgroup: 'default' };
	if (/success|green/.test(full)) return { section: 'success', subgroup: 'default' };
	if (/warning|orange|yellow/.test(full)) return { section: 'warning', subgroup: 'default' };
	if (/info|blue/.test(full)) return { section: 'info', subgroup: 'default' };
	if (/border|stroke/.test(full)) return { section: 'border', subgroup: 'default' };
	if (/bg|background/.test(full)) return { section: 'bg', subgroup: 'default' };
	if (/text|label|heading|paragraph/.test(full)) return { section: 'text', subgroup: 'default' };

	return { section: 'neutral', subgroup: 'default' };
}

function ensurePath(obj, segments) {
	let cur = obj;
	for (const seg of segments) {
		if (!cur[seg] || typeof cur[seg] !== 'object' || cur[seg].$type) {
			cur[seg] = {};
		}
		cur = cur[seg];
	}
	return cur;
}

function uniqueKey(parent, key) {
	if (!(key in parent)) return key;

	let i = 2;
	while (`${key}${i}` in parent) i += 1;
	return `${key}${i}`;
}

const out = {};
for (const section of TOP_LEVELS) out[section] = {};
out.components = {};
for (const group of COMPONENT_GROUPS) out.components[group] = {};

const migrations = [];

function walkTokens(obj, p = []) {
	if (!obj || typeof obj !== 'object') return;

	if (obj.$type) {
		const cls = classify({ path: p, token: obj });
		const legacyPath = p.join('.');

		const tail = p.slice(cls.section === 'components' ? 2 : 1).map(toCamelCase);

		const basePath = [cls.section];
		if (cls.section === 'components') {
			basePath.push(cls.subgroup);
			basePath.push(toCamelCase(p[1] || 'misc'));
		} else if (cls.section === 'products') {
			basePath.push(cls.subgroup);
			basePath.push('tokens');
		} else {
			basePath.push(toCamelCase(cls.subgroup || 'default'));
			basePath.push(toCamelCase(p[0] || 'tokens'));
		}

		const fullPath = basePath.concat(tail);
		const parent = ensurePath(out, fullPath.slice(0, -1));
		const leafKey = uniqueKey(parent, toCamelCase(p[p.length - 1]));

		const newToken = {
			$type: obj.$type,
			$value: normalizeTokenValue(obj),
			$extensions: obj.$extensions || {},
			$legacy: {
				path: legacyPath,
				name: p[p.length - 1]
			}
		};

		if (obj.$type === 'color' && typeof obj.$value === 'string') {
			newToken.$legacy.reference = obj.$value;
		}

		parent[leafKey] = newToken;

		const newPath = fullPath.slice(0, -1).concat(leafKey).join('.');
		const renamed = p[p.length - 1] !== leafKey;
		const moved = legacyPath !== newPath;

		migrations.push({
			oldPath: legacyPath,
			newPath,
			type: obj.$type,
			action: moved && renamed ? 'moved+renamed' : moved ? 'moved' : renamed ? 'renamed' : 'unchanged'
		});
		return;
	}

	for (const key of Object.keys(obj)) {
		if (key === '$extensions') continue;
		walkTokens(obj[key], p.concat(key));
	}
}

walkTokens(data);

if (data.$extensions) {
	out.$extensions = data.$extensions;
}

fs.writeFileSync(outFile, JSON.stringify(out, null, 2));

const movedCount = migrations.filter((m) => m.action.includes('moved')).length;
const renamedCount = migrations.filter((m) => m.action.includes('renamed')).length;

const report = [];
report.push('# Color Token Migration Report');
report.push('');
report.push(`- Source: ${path.basename(srcFile)}`);
report.push(`- Output: ${path.basename(outFile)}`);
report.push(`- Total tokens processed: ${migrations.length}`);
report.push(`- Moved tokens: ${movedCount}`);
report.push(`- Renamed tokens (camelCase/dedupe): ${renamedCount}`);
report.push('');
report.push('## Full token move/rename list');
report.push('');
report.push('| # | Type | Action | Old Path | New Path |');
report.push('|---:|---|---|---|---|');

migrations.forEach((m, i) => {
	const safeOld = m.oldPath.replace(/\|/g, '\\|');
	const safeNew = m.newPath.replace(/\|/g, '\\|');
	report.push(`| ${i + 1} | ${m.type} | ${m.action} | ${safeOld} | ${safeNew} |`);
});

fs.writeFileSync(reportFile, report.join('\n'));

console.log(`Created: ${outFile}`);
console.log(`Created: ${reportFile}`);
console.log(`Processed tokens: ${migrations.length}`);
