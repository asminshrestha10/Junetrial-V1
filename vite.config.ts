import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// must match your repository name exactly. Update REPO_NAME below once
// you've created the GitHub repo (e.g. "junetrail" if your repo URL is
// github.com/yourname/junetrail).
const REPO_NAME = 'junetrail'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${REPO_NAME}/`,
})
