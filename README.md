# Ejemplo Vue.js: Rick and Morty

<p align="center">
    <img src="https://www.latercera.com/resizer/wYOVxpChZfy-GAe1pocnF7oUp68=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/MITDV2TMLRAIBAOKSLREQAFNTA.jpeg">
</p>

Ejemplo de sitio en Vue.js, utilizando la API pública de Rick and Morty.

## Tabla de contenidos <!-- omit from toc -->

- [API Rick and Morty](#api-rick-and-morty)
- [Proyecto](#proyecto)
  - [Clonar proyecto con Git](#clonar-proyecto-con-git)
  - [Estructura de directorios](#estructura-de-directorios)
  - [Detalles de desarrollo](#detalles-de-desarrollo)
  - [Scripts de NPM](#scripts-de-npm)
  - [Dependencias externas utilizadas](#dependencias-externas-utilizadas)
    - [Dependencias de desarrollo](#dependencias-de-desarrollo)
    - [Dependencias del proyecto](#dependencias-del-proyecto)

## API Rick and Morty

Para el desarrollo de este ejemplo, se usó la [API pública de Rick and Morty][ram-api-web]. Se puede visitar [su documentación][ram-api-docs-web] para mas detalles.

## Proyecto

### Clonar proyecto con Git

Para clonar el proyecto:

```
git clone https://github.com/sebaignacioo/vue-rickandmorty-example.git
```

### Estructura de directorios

```
.
├── ./.vscode/
├── ./node_modules/
├── ./public/
├── ./src/
│   ├── ./src/components/
│   │   ├── ./src/components/card/
│   │   │   ├── ./src/components/card/CardDetails.vue
│   │   │   ├── ./src/components/card/CardGender.vue
│   │   │   └── ./src/components/card/TheCard.vue
│   │   ├── ./src/components/navbar/
│   │   │   ├── ./src/components/navbar/NavbarLink.vue
│   │   │   ├── ./src/components/navbar/NavbarToggle.vue
│   │   │   └── ./src/components/navbar/TheNavbar.vue
│   │   └── ./src/components/TheButton.vue
│   ├── ./src/layouts/
│   │   └── ./src/layouts/MainLayout.vue
│   ├── ./src/router/
│   │   └── ./src/router/index.ts
│   ├── ./src/styles/
│   │   ├── ./src/styles/_variales.scss
│   │   └── ./src/styles/main.scss
│   ├── ./src/views/
│   │   ├── ./src/views/AboutView.vue
│   │   ├── ./src/views/EpisodiosView.vue
│   │   └── ./src/views/HomeView.vue
│   ├── ./src/App.vue
│   ├── ./src/main.ts
│   └── ./src/shims-vue.d.ts
├── ./tests/
│   └── ./tests/unit/
│       └── ./tests/unit/example.spec.ts
├── ./.browserslistrc
├── ./.eslintrc.js
├── ./.gitignore
├── ./.npmrc
├── ./.nvmrc
├── ./jest.config.js
├── ./package.json
├── ./pnpm-lock.yaml
├── ./README.md
└── ./tsconfig.json
```

### Detalles de desarrollo

|                          |                                                               |
| ------------------------ | ------------------------------------------------------------- |
| **IDEs**                 | [![vscode-badge]][vscode-web]                                 |
| **Lenguajes y entornos** | [![js-badge]][js-web] [![vue-badge]][vue-web]                 |
| **Estilos**              | [![bootstrap-badge]][bootstrap-web] [![sass-badge]][sass-web] |
| **Utilidades**           | [![pnpm-badge]][pnpm-web] [![jest-badge]][jest-web]                                     |

### Scripts de NPM

| Script           | Descripción                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| `pnpm serve`     | Ejecuta el entorno de desarrollo.                                          |
| `pnpm build`     | Construye la aplicación, para su posterior despliegue.                     |
| `pnpm test:unit` | Ejecuta las pruebas unitarias (si las hubiese) con Jest.                   |
| `pnpm lint`      | Linter de la app, para mejorar y estandarizar la sintáxis de programación. |

### Dependencias externas utilizadas

#### Dependencias de desarrollo

| Paquete                           | Descripción                                                |
| --------------------------------- | ---------------------------------------------------------- |
| [`vite`][devdep1]                 | Herramientas de desarrollo frontend. Reemplazo de Webpack. |
| [`sass`][devdep2]                 | Preprocesador de CSS                                       |
| [`@vitejs/plugin-react`][devdep3] | Plugin de Vite para soportar React                         |
| [`@types/react`][devdep4]         | Tipos para la librería React                               |
| [`@types/react-dom`][devdep5]     | Tipos para la librería ReactDOM                            |

#### Dependencias del proyecto

| Paquete                       | Descripción                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [`vue`][dep1]                 | Librería de JavaScript que permite crear interfaces de usuario.                                                         |
| [`vue-class-component`][dep2] | Permite la interacción entre la librería de React, y el DOM en desarrollo web.                                          |
| [`vue-router`][dep3]          | Librería que permite generar enrutamiento en la aplicación de React.                                                    |
| [`@popperjs/core`][dep4]      | Librería con utilidades para mostrar mensajes y avisos.                                                                 |
| [`bootstrap`][dep5]           | Librería de estilos, muy conocida y con gran cantidad de documentación y ejemplos.                                      |
| [`oh-vue-icons`][dep6]        | Librería que permite incorporar una gran cantidad de librerías de íconos con licencia libre, como un componente de Vue. |

[ram-api-docs-web]: https://rickandmortyapi.com/documentation
[ram-api-web]: https://rickandmortyapi.com/documentation
[vscode-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[vscode-web]: https://code.visualstudio.com/
[js-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[vue-badge]: https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=for-the-badge
[vue-web]: https://vuejs.org/
[sass-badge]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge
[sass-web]: https://sass-lang.com/
[bootstrap-badge]: https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge
[bootstrap-web]: https://getbootstrap.com/
[pnpm-badge]: https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff&style=for-the-badge
[pnpm-web]: https://pnpm.io/es/
[jest-badge]: https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=for-the-badge
[jest-web]: https://jestjs.io/
[devdep1]: https://www.npmjs.com/package/vite
[devdep2]: https://www.npmjs.com/package/sass
[devdep3]: https://www.npmjs.com/package/@vitejs/plugin-react
[devdep4]: https://www.npmjs.com/package/@types/react
[devdep5]: https://www.npmjs.com/package/@types/react-dom
[dep1]: https://www.npmjs.com/package/react
[dep2]: https://www.npmjs.com/package/react-dom
[dep3]: https://www.npmjs.com/package/react-router-dom
[dep4]: https://www.npmjs.com/package/@popperjs/coreOK
[dep5]: https://www.npmjs.com/package/bootstrap
[dep6]: https://www.npmjs.com/package/react-icons
