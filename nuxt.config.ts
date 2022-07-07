import { defineNuxtConfig } from 'nuxt';
import EslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';
import ViteSvgLoader from 'vite-svg-loader';

import messages from './src/i18n/index.json';
import svgoConfig from './svgo.config.js';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',

    css: ['@/assets/scss/foundation.scss', '@/assets/scss/app.scss'],

    modules: ['@nuxtjs/i18n'],

    i18n: {
        locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-CA',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-CA',
            },
        ],
        defaultLocale: 'fr',

        vueI18n: {
            messages,
        },
    },

    vite: {
        plugins: [
            EslintPlugin({
                fix: true,
            }),
            StylelintPlugin({
                fix: true,
            }),
            ViteSvgLoader({
                svgoConfig,
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/scss/settings/_functions.scss";
                        @import "@/assets/scss/settings/_colors.scss";
                        @import "@/assets/scss/settings/_variables.scss";
                        @import "@/assets/scss/settings/_settings.scss";
                        @import "@/assets/scss/settings/_mixins.scss";
                    `,
                },
            },
        },
    },
});
