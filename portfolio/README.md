# Josie Carine | Portfolio

Portfolio personnel moderne avec thème sombre, accents néon lime et animations fluides.  
Construit avec React et Framer Motion.

## Déploiement sur GitHub Pages

### 1. Initialiser Git (si pas déjà fait)

```bash
git init
```

### 2. Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **New repository**
3. Nom du repo :
   - Pour un site utilisateur à la racine : `josiecarine.github.io`
   - Pour un projet : `portfolio` (l’URL sera `https://josiecarine.github.io/portfolio`)
4. Ne cochez pas « Initialize with README » si le projet existe déjà

### 3. Pousser le code

```bash
git add .
git commit -m "Initial commit - Portfolio"
git branch -M main
git remote add origin https://github.com/JosieCarine/VOTRE-REPO.git
git push -u origin main
```

Remplacez `VOTRE-REPO` par le nom du dépôt (`josiecarine.github.io` ou `portfolio`).

### 4. Configurer l’URL de base (si repo = portfolio)

Si votre dépôt s’appelle `portfolio`, modifiez `package.json` :

```json
"homepage": "https://josiecarine.github.io/portfolio"
```

### 5. Déployer

```bash
npm run deploy
```

Le site sera accessible à :
- `https://josiecarine.github.io` (si repo `josiecarine.github.io`)
- `https://josiecarine.github.io/portfolio` (si repo `portfolio`)

### 6. Activer le formulaire de contact (Formspree)

1. Crée un formulaire gratuit sur [formspree.io](https://formspree.io) (Plan gratuit : 50 messages/mois).
2. Copie l’URL fournie (format `https://formspree.io/f/XXXXXXX`).
3. Duplique le fichier `.env.example` en `.env` et remplace `YOUR_FORM_ID` par ton ID :

   ```bash
   cp .env.example .env
   # ouvrir .env puis mettre ta vraie URL
   ```

4. Redémarre `npm start`. Le formulaire enverra désormais directement les messages à ton adresse Formspree.

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
