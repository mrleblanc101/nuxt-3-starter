import { defineNuxtConfig } from 'nuxt/config';
import EslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';
import ViteSvgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',

    devtools: { enabled: true },

    css: ['@/assets/scss/foundation.scss', '@/assets/scss/app.scss'],

    modules: ['@nuxtjs/i18n'],

    runtimeConfig: {
        public: {
            commitTag: process.env.COMMIT_TAG || process.env.NUXT_ENV_CURRENT_GIT_TAG,
            commitShortSha: process.env.COMMIT_SHORT_SHA || process.env.NUXT_ENV_CURRENT_GIT_SHA,
        },
    },

    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'fr',
        langDir: 'i18n/',
        locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-CA',
                file: 'fr.js',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-CA',
                file: 'en.js',
            },
        ],
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
                defaultImport: 'url',
                svgoConfig: {
                    plugins: [
                        { name: 'prefixIds' },
                        { name: 'removeTitle' },
                        { name: 'removeDesc' },
                        { name: 'removeDimensions' },
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: '(fill|stroke)',
                            },
                        },
                    ],
                },
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/settings/_functions.scss" as *;
                        @use "@/assets/scss/settings/_colors.scss" as *;
                        @use "@/assets/scss/settings/_variables.scss" as *;
                        @use "@/assets/scss/settings/_settings.scss" as *;
                        @use "@/assets/scss/settings/_mixins.scss" as *;
                    `,
                },
            },
        },
    },
});
