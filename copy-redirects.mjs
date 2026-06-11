import { copyFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = join(__dirname, '_redirects');
const dest = join(__dirname, 'dist', 'public', '_redirects');

try {
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(source, dest);
  console.log('✅ _redirects copied to dist/public/');
} catch (error) {
  console.error('❌ Error copying _redirects:', error.message);
  process.exit(1);
}
