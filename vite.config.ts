import react from '@vitejs/plugin-react-swc';
// import * as path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// import { readdir } from 'fs/promises';

// const handleAbsoluteImports = async () => {
//   const sourceDir = path.resolve(__dirname, 'src');
//   const dirContent = await readdir(sourceDir, { withFileTypes: true });
//   const directories = dirContent.filter((entry) => entry.isDirectory());
//   const files = dirContent.filter((entry) => entry.isFile());

//   return {
//     ...Object.fromEntries(directories.map((entry) => [entry.name, path.resolve(sourceDir, entry.name)])),
//     ...Object.fromEntries(
//       files.map((entry) => [entry.name.replace(/\.[^/.]+$/, ''), path.resolve(sourceDir, entry.name)])
//     )
//   };
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()]
});
