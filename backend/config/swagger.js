const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, '../docs/index.yaml'));

const swaggerSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true,
    customSiteTitle: 'Collector Library API Documentation'
  }));
}

module.exports = swaggerSetup;