import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'My API',
        description: 'API Documentation',
    },
    host: `localhost:${process.env.PORT || 3000}`,
    schemes: ['http']
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
    import('./app.js');  // Dynamically import app.js after Swagger generation
});