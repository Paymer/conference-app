- Conference Application

1. Webpack 
2. API REST

    2.1 Outil json-server:
    
    I have "concurrently" used that to run start-watch and webpack server at the same time :
       - commande installation:  npm i concurrently --save-dev
       - commande: npm run dev 
       - script:  "dev":  "start npm run start && start npm run dist"

    2.2 Service TalkService

    UglyFy deactivated to allow the "concurrently" performance.

3. Partials


    html-Loader added to take html data and transform it:
    command line: npm i html-loader --save-dev
    webpack config:
        module: {
            rules: [
                { test: /\.html$/, use: [ "html-loader" ] }
            ]
        },


4. Routeur

5. Application

Page Accueil: Started the htmml not linked to the program


TODO:
- Liste Sessions
- Liste presentateurs
- details sessions
- details presentateurs
- notes
