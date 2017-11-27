# Empyrean
A complete website boilerplate including node express server, typescript, react and sass compilation

### Prerequisites
NodeJS with NPM


### Installation
```
npm install
```

### Start

##### development mode
```
npm run dev
```

##### production mode
```
npm run prod
```

### Tech Stack

##### TypeScript
Used primarily to provide a browser agnostic approach to object oriented JavaScript.

##### Nunjucks Templates
Provides server-rendered and cached page layouts that are easier to read and maintain than React. Could be used client-side for controls but React is better at managing DOM controls and updates.

##### React
Reusable, interactive, client-side controls rendered client-side.

##### SASS / SCSS
Sensible and smart css management.

##### Gulp / Webpack
Minification, linting and source maps for styles and scripts.

##### Node Express
Provides a simple HTTP server. Currently only used to serve handlebars views.
