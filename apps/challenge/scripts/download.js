const { DomUtils, parseDocument } = require('htmlparser2');
const { delay, map, mergeMap, range, retry } = require('rxjs');
const { fromFetch } = require('rxjs/fetch');

range(1, 1010)
  .pipe(
    map(String),
    map((id) => id.padStart(4, '0')),
    mergeMap(
      (id) =>
        fromFetch(`https://zukan.pokemon.co.jp/detail/${id}`, {
          selector: (response) => response.text(),
        }).pipe(delay(500), retry(3)),
      2
    ),
    map((html) =>
      DomUtils.findOne(
        (element) =>
          element.tagName === 'script' && element.attribs.id === 'json-data',
        parseDocument(html).children
      )
    ),
    map(DomUtils.textContent),
    map(JSON.parse),
    map(({ pokemon }) => pokemon.image_m)
  )
  .subscribe(console.log);
