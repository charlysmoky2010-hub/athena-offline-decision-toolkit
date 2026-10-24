// No dependencies, API credentials, external network or injected analytics.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const base = new URL('../docs/', import.meta.url);
const checkout = 'https://buy.stripe.com/aFacN54VSbtY5WP3QJ6Na2i';
const cases = [
  ['entscheidungshilfe-de.html', 'de', '9,90'],
  ['decision-matrix.html', 'en', '€9.90'],
];
for (const [filename, language, price] of cases) {
  test(filename + ': truthful purchase path', () => {
    const html = readFileSync(fileURLToPath(new URL(filename, base)), 'utf8');
    assert.ok(html.includes('<html lang="' + language + '">'));
    assert.equal((html.match(/<h1(?:\s|>)/gi) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/gi) || []).length, 1);
    assert.ok(html.includes(checkout), 'Use the existing verified payment link');
    assert.ok(html.includes(price), 'Display the actual existing price');
    assert.ok(html.includes('page=imprint'));
    assert.ok(html.includes('page=withdrawal'));
    assert.ok(html.includes('athena-offline-decision-toolkit/'), 'Preserve free demo');
    assert.ok(html.includes('hypnotic-aura-878t7t3.shipstatic.com/'), 'Product details');
    assert.equal((html.match(/<script(?:\s|>)/gi) || []).length, 0, 'No new trackers');
    assert.doesNotMatch(html, /limited spots|guaranteed income|sale ends tonight|only today|nur heute|nur noch 3/i);
  });
}
test('both language versions share one verified one-time checkout', () => {
  const contents = cases.map(([filename]) =>
    readFileSync(fileURLToPath(new URL(filename, base)), 'utf8'));
  assert.ok(contents.every((html) => html.includes(checkout)));
});