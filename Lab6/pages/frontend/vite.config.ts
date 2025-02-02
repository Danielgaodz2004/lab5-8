import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    devOptions: {
        enabled: true
    },
    manifest: {
        name: 'Шифрование кодом для коррекции ошибок',
        short_name: 'Шифрование кодом для коррекции ошибок',
        description: 'Description',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
};

export default defineConfig({
    base: "/lab5-8/",
    plugins: [
        react(),
        tsconfigPaths(),
        VitePWA(manifestForPlugin)
    ],
    server: {
        host: true
    },
});
