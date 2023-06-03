const { DomUtils, parseDocument } = require('htmlparser2');
const { concatMap, delay, map, mergeMap, range, retry } = require('rxjs');
const { fromFetch } = require('rxjs/fetch');

range(1, 1010)
  .pipe(
    map((id) => id.toString().padStart(4, '0')),
    mergeMap(
      (id) =>
        fromFetch(`https://zukan.pokemon.co.jp/detail/${id}`).pipe(
          delay(500),
          concatMap((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.text();
          }),
          retry(3)
        ),
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
