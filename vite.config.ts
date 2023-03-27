import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/markdown-notes-app/',
    plugins: [react()]
});
