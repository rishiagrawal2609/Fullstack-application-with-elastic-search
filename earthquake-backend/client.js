const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'cloud-url-here',
  auth: {
    apiKey: 'api-key-here',
  }
});



client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))

module.exports = client; 