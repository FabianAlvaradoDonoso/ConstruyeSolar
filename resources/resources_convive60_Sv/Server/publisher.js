const mqtt = require('mqtt');
const client = mqtt.connect('ws://localhost:3000');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort("/dev/ttyACM0", {
    baudRate: 9600
});

const parser = new Readline();
port.pipe(parser);

class Sensor {
    constructor(nombre, valor, topic) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

client.on('connect', function () {
    enviarMensajes(client);
});

function enviarMensajes(client) {
    parser.on('data', function (line) {
        line = line.trim();
        if (line != "*") {
            var info = line.split("#");
            if (info.length === 4) {
                var mapped_info = [new Sensor('Contaminación', info[2]), new Sensor('Humo', info[3]), new Sensor('Temperatura', info[1]), new Sensor('Humedad', info[0])]
		client.publish('demostracion', JSON.stringify(mapped_info));
                console.log("Mensaje enviado!");
		console.log("Mensaje: " + JSON.stringify(mapped_info));
            } else {
                client.publish('demostracion', 'error');
            }
        }
    });
}
