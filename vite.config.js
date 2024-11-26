import { resolve } from 'path'

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                marioKart: resolve(__dirname, 'pages/marioKart/index.html'),
                mortalKombat: resolve(__dirname, 'pages/mortalKombat/index.html'),
            }
        }
    }
}