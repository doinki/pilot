import axios from 'axios';
import { readFile, writeFile } from 'fs/promises';
import iconv from 'iconv-lite';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { read } from 'xlsx';

const __dirname = dirname(fileURLToPath(import.meta.url));
const lottoFilePath = join(__dirname, '..', 'public', 'lotto.json');
const drwNoStart = 1;
const drwNoEnd = 1;
const rowPrefixList = ['N', 'O', 'P', 'Q', 'R', 'S', 'T'];

const sheet = await axios
  .get('https://dhlottery.co.kr/gameResult.do', {
    params: {
      drwNoEnd,
      drwNoStart,
      gubun: 'byWin',
      method: 'allWinExel',
    },
    responseType: 'arraybuffer',
  })
  .then(({ data }) => iconv.decode(data, 'EUC-KR'))
  .then((decodedData) => read(decodedData, { type: 'string' }).Sheets.Sheet2);

const data = JSON.parse(await readFile(lottoFilePath));

for (let i = 3; sheet[`N${i}`]; i += 1) {
  const round = sheet[`B${i}`].v;
  const drawDate = sheet[`C${i}`].v;
  const winningNumbers = rowPrefixList
    .map((row) => `${row}${i}`)
    .map((cell) => sheet[cell].v);

  data[round] = { drawDate, round, winningNumbers };
}

await writeFile(lottoFilePath, JSON.stringify(data));
