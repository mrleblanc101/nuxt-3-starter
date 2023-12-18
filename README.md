# Nuxt 3 Starter

Ceci est un modèle de projet. Pour l'utiliser:

1. Cloner le modèle: `git clone --depth 1 ssh://git@gitlab.libeo.com:36220/modeles/nuxt-3-starter.git`
2. Aller dans le dossier du site: `cd nuxt-3-starter`
3. Supprimer le git du modèle: `rm -rf .git`
4. Initier le git du projet: `git init`
5. Commit initial: `git add . && git commit -m "Initial commit"`
5. Créer un repo git vide pour le projet sur https://gitlab.libeo.com/projects/new
6. Suivre les indication dans "Push an existing folder" pour les lignes `git remote add origin` et `git push`

Vous pouvez maintenant pusher votre code dans une nouveau repo sur Gitlab.

## Documentation

Core:
- [Vue](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue-router](https://router.vuejs.org/)
- [Nuxt](https://nuxt.com/)

Packages:
- [foundation-sites](https://get.foundation/sites/docs/)
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)


**Astuce:** N'oubliez pas d'installer l'extension [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) pour inspecter votre code.

**Astuce:** N'oubliez pas d'installer l'extension [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) pour VS Code.

## Utilisation

Ce projet gère ses dépendances avec [`yarn`](https://yarnpkg.com/)

### Mode développement

```sh
cp .env.local .env
# install dependencies
yarn
# run with hot reload
yarn dev
```

### Mode production

```sh
# install dependencies
yarn
# build
yarn build
# serve
yarn preview
```

### Lint

**Note:** Éxécuter automatiquement en mode dev

```sh
yarn lint:js
yarn lint:scss
```

## Arborescence

### Répertoires racine

#### deploy

Le répertoire `deploy` contient les fichiers de configuration pour `deployer`, l'outil de déploiment.


#### src

Le répertoire `src` contient les fichiers source de l'application Nuxt.

#### .nuxt

Le répertoire `.nuxt` contient les fichiers temporaire pour l'exécution du serveur Nuxt local. Ce répertoire ne devrait pas être dans le Git.

#### .output

Le répertoire `.output` contient les fichiers compilé pour la distribution. Ce répertoire ne devrait pas être dans le Git.

### Répertoire src

#### assets

Le répertoire `assets` contient vos ressources qui seront compilées et bundler par Webpack tels que les fichiers SASS global et les SVG.

#### components

Le répertoire `components` contient vos composants Vue.js. Vous ne pouvez pas utiliser les méthodes `asyncData` ou `fetch` sur ces composants.

#### i18n

Le répertoire `i18n` contient les fichiers de traductions global au format JSON. Vous pouvez aussi traduire directement dans les composants.

#### layout

Le répertoire `layouts` contient les mises en page de votre application. Les mises en page sont utilisées pour changer l'aspect de votre page.

#### middleware

Le répertoire `middleware` contient vos middlewares. Un middleware vous permet de définir une fonction qui sera exécutée avant de faire le rendu d'une mise en page ou d'un groupe de mises en page.

#### pages

Le répertoire `pages` contient vos vues et routes de l'application.

#### plugins

Le répertoire `plugins` contient les plugins JavaScript que vous désirez exécuter avant d'instancier l'application. C'est le bon endroit pour enregistrer des composants globaux.

#### public

Le répertoire `public` est directement servi par le serveur ([/public/robots.txt]() est accessible à l'adresse http://localhost:3000/robots.txt).

#### stores

Le répertoire `stores` contient vos stores Pinia. Chaque fichier représente un store.
