# MercadoLibre Frontend Test Tecnico

## Descripción

Este proyecto es una prueba técnica para el rol de frontend engineer en MercadoLibre. La aplicación consiste en una barra de busqueda donde los usuarios pueden buscar items, ver los resultados y acceder a una pantalla de detalle del item si así lo desean.

## Diseño
La aplicación consiste en un servidor express que renderiza las pantallas antes de enviarlas al cliente (SSR), 
donde luego se realiza hydration a la pantalla.

## Scope
El scope de este proyecto escapa a ciertas consideraciones que se tiene que tener en cuenta a la hora de realizar server side rendering, algunos ejemplos son:
- Code splitting.
- Estrategias de carga de datos que funcionen indistintamente en el servidor así como en el cliente.
- Cacheo de datos entre el servidor y el cliente.

## Tecnologías
- React
- Express
- TypeScript
- SCSS
- Webpack

## Requisitos
- Node.js 14 o superior.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/manema/ml-test.git 
    cd ml-test
    ```

2. Instala las dependencias:
    ```bash
    npm install // npm
    yarn // yarn
    ```

## Scripts disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

### `npm start`

Inicia la aplicación.

```bash
npm start
```

### `npm run build`

Buildea el codigo del servidor asi como también el del cliente.

```bash
npm run build
```

### `npm run prettier`

Formatea el codigo.

```bash
npm run prettier
```

### `npm run lint`

Corre el linter.

```bash
npm run lint
```
