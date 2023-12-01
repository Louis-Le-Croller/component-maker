const fs = require('fs');
const path = require('path');

function generateComponentFiles(componentName) {
  const jsxContent = `import PropTypes from 'prop-types';
import './${componentName}.scss';

const ${componentName} = () => {
 return <div className="${componentName}">${componentName}</div>
};

${componentName}.propTypes = {};
export default ${componentName};
`;

  const scssContent = `@use 'src/styles/variables' as v;

.${componentName} {
  // Styles for ${componentName}
}
`;

  const componentDirectory = path.join(__dirname, '..', 'your-project-folder', 'src', 'components', componentName);

  // Creates component directory if it does not exist
  if (!fs.existsSync(componentDirectory)) {
    fs.mkdirSync(componentDirectory, { recursive: true });
  }

  fs.writeFileSync(path.join(componentDirectory, `${componentName}.jsx`), jsxContent);
  fs.writeFileSync(path.join(componentDirectory, `${componentName}.scss`), scssContent);

  console.log(`Component files for ${componentName} created successfully.`);
}

// Get components name based on your command lines args
const componentNames = process.argv.slice(2);

// Verify if at least one component name is provided
if (componentNames.length === 0) {
  console.error('Please provide at least one component name.');
  process.exit(1); // Quit script with an error code
}

// Create each component
componentNames.forEach(componentName => {
  generateComponentFiles(componentName);
});
