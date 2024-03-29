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



function IoTKitMQTTControl(conf, broker) {
    var me = this;
    me.client = broker;
    me.type = 'mqtt';
    me.topics = {
        "control_topic": "server/{accountid}/DCMD/{gatewayid}/{deviceid}"
    }
    me.pubArgs = {
        qos: 0,
        retain: false
    };
}

IoTKitMQTTControl.prototype.controlCommandListen = function (data, handlerCb, syncCall) {
    var me = this;
    var controlTopic = common.buildPath(me.topics.control_topic, [data.accountId, data.gatewayId, data.deviceId]);
    var handler = function (topic, message) {
        handlerCb(message);
    };
    return me.client.bind(controlTopic, handler, syncCall);
};

IoTKitMQTTControl.prototype.updateDeviceInfo = function (deviceInfo) {
    var me = this;
    me.client.updateDeviceInfo(deviceInfo);
};

module.exports.init = function(conf) {
    var broker = Broker.singleton(conf.connector.mqtt);
    return new IoTKitMQTTControl(conf, broker);
};
