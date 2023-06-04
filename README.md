# Inland Empire DSA Website

![Deploy Status Badge](https://github.com/marvinroman/iedsa.org/actions/workflows/nuxtjs.yml/badge.svg)

The website is deployed on Github Pages infrastructure using this repository.

## Thanks

Site template create by [Binod Nepali](https://github.com/binodnepali) for running Nuxt 3 & Vuetify 3 together was cloned from [https://github.com/binodnepali/nuxt3-with-vuetify3-example-template](https://github.com/binodnepali/nuxt3-with-vuetify3-example-template). 

Instructions on how to deploy on Github pages was found at [https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/](https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/). 

## Before getting started

Make sure you have installed [Node.js 16.15.0 or higher](https://nodejs.org/en/) on your machine. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple node version on your machine.

## Getting started

You can setup this project using npm or yarn package managers.

> I would recommend to installed or enabled [yarn 3.1.1 or higher](https://yarnpkg.com/getting-started) package manager on your machine.

### Clone repo

```bash
# https
git clone https://github.com/marvinroman/iedsa.org.git

# ssh
git clone git@github.com:marvinroman/iedsa.org.git
```

### Navigate to cloned repo

```bash
cd iedsa.org
```

### Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
# yarn
yarn dev

# npm
npm run dev
```

### Production

Build the application for production

```bash
# yarn
yarn generate

# npm
npm run generate
```

Locally preview production build

```bash
# yarn
yarn preview

# npm
npm run preview
```

### Lint

```bash
# yarn
yarn lint

# npm
npm run lint
```

### Lint fix

```bash
# yarn
yarn lint:fix

# npm
npm run lint:fix
```

### Lint style

```bash
# yarn
yarn lint:style

# npm
npm run lint:style
```

### Lint style fix

```bash
# yarn
yarn lint:style:fix

# npm
npm run lint:style:fix
```

### Commit

Open interactive terminal to write conventional commit message

```bash
# yarn
yarn commit

# npm
npm run commit
```

### Release

Create a release tag and generates change log based on commit history

```bash
# yarn
yarn release

# npm
npm run release
```

## References

* Checkout Vuetify 3 [documentation](https://vuetifyjs.com/en/getting-started/installation/)  
* Checkout Nuxt 3 [documentation](https://nuxt.com/docs/getting-started/introduction)  
* Checkout Nuxt 3 Content [documentation](https://content.nuxtjs.org/get-started)  
* Where to find [Material Icons](https://pictogrammers.com/library/mdi/)  
* Checkout the Wiki for instructions.  
