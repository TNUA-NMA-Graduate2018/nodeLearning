// The mqttClientId is a unique string that identifies this device. For Google
// Cloud IoT Core, it must be in the format below.
const mqttClientId = `projects/${argv.project_id}/locations/${argv.cloud_region}/registries/${argv.registry_id}/devices/${argv.device_id}`;

// With Google Cloud IoT Core, the username field is ignored, however it must be
// non-empty. The password field is used to transmit a JWT to authorize the
// device. The "mqtts" protocol causes the library to connect using SSL, which
// is required for Cloud IoT Core.
const connectionArgs = {
  host: argv.mqtt_bridge_hostname,
  port: argv.mqtt_bridge_port,
  clientId: mqttClientId,
  username: 'unused',
  password: createJwt(argv.project_id, argv.private_key_file, argv.algorithm),
  protocol: 'mqtts'
};

// Create a client, and connect to the Google MQTT bridge.
const client = mqtt.connect(connectionArgs);

// The MQTT topic that this device will publish data to. The MQTT
// topic name is required to be in the format below. The topic name must end in
// 'state' to publish state and 'events' to publish telemetry. Note that this is
// not the same as the device registry's Cloud Pub/Sub topic.
const mqttTopic = `/devices/${argv.device_id}/${argv.message_type}`;

client.on('connect', () => {
  console.log('connect', arguments);
  // After connecting, publish 'num_messages' messagse asynchronously, at a rate
  // of 1 per second for telemetry events and 1 every 2 seconds for states.
  publishAsync(1, argv.num_messages);
});

client.on('close', () => {
  console.log('close', arguments);
});

client.on('error', () => {
  console.log('error', arguments);
});

client.on('packetsend', () => {
  console.log('packetsend', arguments);
});

// Once all of the messages have been published, the connection to Google Cloud
// IoT will be closed and the process will exit. See the publishAsync method.
