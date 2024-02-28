'use strict';
require('../common');
const assert = require('assert');
const net = require('net');

const v4 = [
  '0.0.0.0',
  '8.8.8.8',
  '127.0.0.1',
  '100.100.100.100',
  '192.168.0.1',
  '18.101.25.153',
  '123.23.34.2',
  '172.26.168.134',
  '212.58.241.131',
  '128.0.0.0',
  '23.71.254.72',
  '223.255.255.255',
  '192.0.2.235',
  '99.198.122.146',
  '46.51.197.88',
  '173.194.34.134',
];

const v4not = [
  '.100.100.100.100',
  '100..100.100.100.',
  '100.100.100.100.',
  '999.999.999.999',
  '256.256.256.256',
  '256.100.100.100.100',
  '123.123.123',
  'http://123.123.123',
  '1000.2.3.4',
  '999.2.3.4',
  '0000000192.168.0.200',
  '192.168.0.2000000000',
];

for (const ip of v4) {
  assert.strictEqual(net.isIPv4(ip), true);
}

for (const ip of v4not) {
  assert.strictEqual(net.isIPv4(ip), false);
}
