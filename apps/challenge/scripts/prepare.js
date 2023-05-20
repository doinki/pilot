const { writeFileSync } = require('node:fs');
const { join } = require('node:path');

writeFileSync(
  join(__dirname, '..', '.env.local'),
  `
URL=http://localhost:3000
`
);
