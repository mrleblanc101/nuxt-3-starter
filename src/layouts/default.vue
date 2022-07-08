<template>
    <div class="layout">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main {
        flex-grow: 1;
        padding: 10px 20px;
    }
}
</style>
