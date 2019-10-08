"use strict";
const mosca = require('mosca');

const settings = {
	http: {
		port: 3000,
		bundle: true
	}
};

const server = new mosca.Server(settings);

server.on('ready', setup);

function setup() {
	console.log('Mosca server está operativo!');
}

server.on('clientConnected', function (client) {
	console.log('Se ha conectado un cliente:', client.id);
});
