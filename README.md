# Template for Frontend project Wild Heroes

## First steps

### Install these extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Install `husky`, which will check your code everytime you commit files

- `npm run prepare`

## Second step

- Create a "wild-heroes" folder in your IDE

- In your terminal, create a clone of the "wild-heroes" Github repository in the "wild heroes" folder that you just created :
  git clone git@github.com:Jarod79/wild-heroes.git

## Third step

- You need to do an "npm install" in your terminal in order to install the different packages that we need to run the app

## Fourth step

- Run the app with "npm start"

- If you have issues running the app because of an error message about the progress bar, such as :

  src\components\Quiz\ProgressBar.jsx
  Line 2:8: Unable to resolve path to module 'react-step-progress-bar/styles.css' import/no-unresolved

----> You need to do an "npm install --save react-step-progress-bar" in order to re install the package that handle the progress bar feature.
