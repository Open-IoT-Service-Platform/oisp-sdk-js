/*
Copyright (c) 2014, Intel Corporation

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
"use strict";
var common = require('../common'),
    Broker = require("../../api/mqtt/connector");

function IoTKitMQTTCloud(conf, broker) {

    var me = this;
    me.client = broker;
    me.type = 'mqtt';
    me.topics = conf.connector[me.type].topic;
    me.pubArgs = {
        qos: 1,
        retain: false
    };
    console.log("logger", me.logger)

}

IoTKitMQTTCloud.prototype.pullActuations = function (data, callback) {
    var me = this;
    //me.logger.error("Actuations pulling is not yet supported by MQTT protocol");
    callback(null);
};

IoTKitMQTTCloud.prototype.data = function (data, callback) {
    var me = this;
    delete data.deviceToken;
    var topic = common.buildPath(me.topics.metric_topic, [data.accountId, data.did]);
    //me.logger.debug("Metric doc: %j", data, {});
    delete data.gatewayId;
    return me.client.publish(topic, data.convertToMQTTPayload(), me.pubArgs, function() {
        return callback({status:0});
    });
};

IoTKitMQTTCloud.prototype.disconnect = function () {
    var me = this;
    me.client.disconnect();
};

IoTKitMQTTCloud.prototype.healthResponse = function (device, callback, syncCallback) {
    var me = this;
    var healthStatus = common.buildPath(me.topics.health_status, device);
    var handler = function (topic, message) {
        //me.logger.debug('Topic %s , Message Recv : %s', topic, message);
        me.client.unbind(healthStatus);
        callback(message);
    };
    me.client.bind(healthStatus, handler, syncCallback);
};

IoTKitMQTTCloud.prototype.health = function (device, callback) {
    var me = this;
    //me.logger.info("Starting Health testing ");
    me.healthResponse(device, callback, function (err) {
        if (!err) {
            var topic = common.buildPath(me.topics.health, device);
            var data = { 'detail': 'mqtt'};
            me.client.publish(topic, data, me.pubArgs);
        } else {
            callback();
        }

    });

};

IoTKitMQTTCloud.prototype.setCredential = function (user, password) {
    var me = this;
    me.crd = {
        username: user || '',
        password: password || ''
    };

    me.client.setCredential(me.crd);
};

IoTKitMQTTCloud.prototype.getActualTime = function (callback) {
    var me = this;
    //me.logger.error('This option is not currently supported for MQTT protocol.');
    callback(null);
};

module.exports.init = function(conf) {
    var brokerConnector = Broker.singleton(conf.connector.mqtt);
    return new IoTKitMQTTCloud(conf, brokerConnector);
};
