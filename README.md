# component-maker

Permet de créer plusieurs composants d'un coup avec le fichier jsx et le scss correspondant. 
Le jsx sera composé de la base suivante : 
```js
import PropTypes from 'prop-types';
import './ComponentName.scss';

const ComponentName = () => {
 return <div className="ComponentName">ComponentName</div>
};

ComponentName.propTypes = {};
export default ComponentName;
```

Les fichiers scss : 
```scss
@use 'src/styles/variables' as v;

.ComponentName {
  // Styles for ComponentName
}
```

ComponentName représentant le nom que vous fournirez à la création du composant. 

## Installation 
Clonez le projet dans un dossier, où vous le souhaitez sur votre machine. 

Ligne 23, remplacez ```'your-project-folder'``` par le nom de votre dossier de projet. 

## Utilisation
Dans votre terminal, utilisez la commande ```node makeComponent.js``` puis renseignez les composants que vous souhaitez créer en paramètre.

Exemple : 
```zsh
node makeComponent.js Header Footer Form List
```

Et hop, c'est plié. 
