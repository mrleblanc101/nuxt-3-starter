<template>
    <header>
        <LibeoLogo height="50" width="200" />
        {{ $t('app.header') }}
        <NuxtLink v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)" class="button secondary">
            {{ l.name }}
        </NuxtLink>
    </header>
</template>

<script setup>
import LibeoLogo from '@/assets/svg/libeo-logo.svg';

import { useI18n } from '#i18n';

const { locale, locales } = useI18n();
const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
</script>
