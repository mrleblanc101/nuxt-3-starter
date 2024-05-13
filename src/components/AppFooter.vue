<template>
    <footer>
        <template v-if="runtimeConfig.public.commitTag || runtimeConfig.public.commitShortSha"> Version: </template>
        {{ runtimeConfig.public.commitTag }}
        {{
            runtimeConfig.public.commitTag
                ? `(${runtimeConfig.public.commitShortSha})`
                : runtimeConfig.public.commitShortSha
        }}
    </footer>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>

<style lang="postcss" scoped>
footer {
    padding: 10px 20px 30px;
    text-align: center;
}
</style>
