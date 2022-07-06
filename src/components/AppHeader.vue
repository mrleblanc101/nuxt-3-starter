<template>
    <header>
        {{ $t('header') }}
        <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="button primary"
        >
            {{ locale.name }}
        </NuxtLink>
    </header>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
        },
    },
};
</script>

<style lang="scss" scoped></style>

<!-- <i18n lang="json">
{
  "fr": {
    "header": "Entête"
  },
  "en": {
    "header": "Header"
  }
}
</i18n> -->
