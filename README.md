## How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

## Development breif

i have done this app in 3 hours.
- initializing app using create-react-native-app.   
- setup my skeleton.  
- start develop splash screen.  
- check the apis provided in email.
- start designing the home screen based on provided mockups.
- integrate with apis and fill my design with live data.
- start design my grid view in album details screen.
- then i started to develop the viewer and next/prev functionalities.

## Design decisions

None.

## Given more time, what would you have done differently?

None.

## Challenges

My big challenge was to make the list scroll with me automaticlly when i press on prev/next buttons and goes to diff row.

## Project Structure
```
gallery
├─ .env
├─ .gitignore
├─ App.js
├─ README.md
├─ babel.config.js
├─ jsconfig.json
├─ package.json
├─ src
│  ├─ assets
│  │  ├─ back.png
│  │  └─ logo.png
│  ├─ hooks
│  │  ├─ albumDetails.hook.js
│  │  ├─ home.hook.js
│  │  ├─ index.js
│  │  └─ splash.hook.js
│  ├─ lib
│  │  └─ windowStack.js
│  ├─ models
│  │  ├─ axios.js
│  │  └─ home.model.js
│  └─ screens
│     ├─ AlbumDetails
│     │  ├─ AlbumDetails.js
│     │  └─ style.js
│     ├─ Home
│     │  ├─ Home.js
│     │  └─ style.js
│     └─ Splash
│        ├─ Splash.js
│        └─ style.js
└─ yarn.lock

```