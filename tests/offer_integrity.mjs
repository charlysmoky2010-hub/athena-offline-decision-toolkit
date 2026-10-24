// ATHENA offer integrity checks: dependency-free, no network and no paid API.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const base = new URL('../docs/', import.meta.url);
const CHECKOUT = 'https://buy.stripe.com/aFacN54VSbtY5WP3QJ6Na2i';
const cases = [
  ['entscheidungshilfe-de.html','de','9,90'],
  ['decision-matrix.html','en','€9.90']
];
for (const [filename, lang, price] of cases) {
  test(filename + ' preserves verified offer and customer rights', () => {
    const html = readFileSync(fileURLToPath(new URL(filename, base)), 'utf8');
    assert.match(html, new RegExp('<html lang="'+lang+'">'));
    assert.equal((html.match(/<h1\\b/g) || []).length,1);
    assert.equal((html.match(/rel="canonical"/g) || []).length,1);
    assert.ok(html.includes(CHECKOUT),'current Stripe checkout must not be invented');
    assert.ok(html.includes(price),'the seller-authorized price must be accurate');
    assert.ok(html.includes('page=imprint'));
    assert.ok(html.includes('page=withdrawal'));
    assert.ok(html.includes('athena-offline-decision-toolkit/'));
    assert.ok(html.includes('hypnotic-aura-878t7t3.shipstatic.com/'),'full details must be accessible before purchase');
    assert.equal((html.match(/<script\\b/gi)||[]).length,0,'no scripts, pixels or trackers introduced');
    assert.doesNotMatch(html, /limited spots|guaranteed income|sale ends tonight|only today|nur heute|nur noch 3/i);
  });
}
test('both offer guides use the same proven checkout link',()=>{
  for(const [filename] of cases) {
    const html=readFileSync(fileURLToPath(new URL(filename,base)), 'utf8');
    assert.match(html,new RegExp(CHECKOUT.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')));
  }
});
