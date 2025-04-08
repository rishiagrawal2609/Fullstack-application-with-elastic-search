const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://my-elasticsearch-project-c21946.es.ap-southeast-1.aws.elastic.cloud:443',
  auth: {
    apiKey: 'N1hyTEU1WUJyMFREekF4bEExRzU6eUd3Z09sN3ZrMjh3eVpJVXFzc3RQZw=='
  }
});



client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))

module.exports = client; 