const local = { DATABASE_URL: 'file:./dev.db' };

const { writeFileSync } = require('node:fs');
const { join } = require('node:path');

writeFileSync(
  join(__dirname, '..', '.env'),
  Object.entries(local)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')
);
