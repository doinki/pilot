const local = { URL: 'http://localhost:3000' };

const { writeFileSync } = require('node:fs');
const { join } = require('node:path');

writeFileSync(
  join(__dirname, '..', '.env.local'),
  Object.entries(local)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')
);
