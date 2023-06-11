const local = { API_URL: 'http://localhost:4000' };

const { writeFileSync } = require('node:fs');
const { join } = require('node:path');

writeFileSync(
  join(__dirname, '..', '.env.local'),
  Object.entries(local)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')
);
