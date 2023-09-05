<template>
    <div class="grid-container">
        <div class="grid">
            <div class="cell">
                <h3>Documentation</h3>
                <p>The official documentation provides you with all information you need to get started.</p>
                <ul>
                    <li>
                        <a target="_blank" href="https://vuejs.org/guide/">Vue documentation</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://v3.nuxtjs.org/guide/">Nuxt documentation</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://get.foundation/sites/docs/">Foundation-Sites</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>
                    </li>
                    <!-- <li>
                        <a target="_blank" href="#">Vue Meta</a>
                    </li> -->
                </ul>
            </div>
            <div class="cell">
                <h3>Tooling</h3>
                <p>This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar.</p>
                <ul>
                    <li>
                        <a target="_blank" href="https://code.visualstudio.com/">VS Code</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/johnsoncodehk/volar">Volar</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://devtools.vuejs.org/">Vue-devtools</a>
                    </li>
                    <!-- <li>
                        <a target="_blank" href="#">Nuxt-devtools</a>
                    </li> -->
                    <li>
                        <a target="_blank" href="https://vue-loader.vuejs.org/">Vue-loader</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://vitejs.dev/">Vite</a>
                    </li>

                    <li>
                        <a target="_blank" href="https://github.com/jpkleemans/vite-svg-loader">Vite-svg-loader</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/gxmari007/vite-plugin-eslint">Vite-plugin-eslint</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/ModyQyW/vite-plugin-stylelint"
                            >Vite-plugin-stylelint</a
                        >
                    </li>
                </ul>
            </div>
            <div class="cell">
                <h3>Recommanded Plugins</h3>
                <ul>
                    <li>
                        <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>
                    </li>
                    <!-- <li>
                        <a target="_blank" href="#">Swiper</a>
                    </li> -->
                    <!-- <li>
                        <a target="_blank" href="#">Date-fns</a>
                    </li> -->
                </ul>
            </div>
            <div class="cell">
                <h3>Resources</h3>
                <p></p>
                <ul>
                    <li>
                        <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/nuxt-community/awesome-nuxt">Awesome Nuxt</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://modules.nuxtjs.org/">Nuxt modules</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$color-primary: #003e27;
$color-secondary: #00cd81;
$color-text: #ffffff;
$color-background: #1a202c;
$color-border: #2d3748;
html,
body {
    color: $color-text;
    background: $color-background;
}
main {
    display: flex;
    align-items: center;
    justify-content: center;
}
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid $color-border;
}
.button.secondary {
    margin: 0;
    color: $color-secondary;
    border-radius: 0.25rem;
    background-color: $color-primary;
    &:hover {
        color: $color-primary;
        background-color: $color-secondary;
    }
}
h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
}
ul {
    margin-bottom: 0;
}
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    gap: 16px;
}
.cell {
    padding: 16px;
    border: 1px solid $color-border;
    border-radius: 0.5rem;
}
a {
    color: $color-secondary;
    &:focus,
    &:hover {
        text-decoration: underline;
        color: $color-secondary;
    }
}
</style>
