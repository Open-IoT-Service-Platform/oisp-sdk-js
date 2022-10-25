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

function IoTKitRestCloud(conf, rest) {
    var me = this;
    me.config = conf;
    me.client = rest;
    me.type = 'rest';
}

IoTKitRestCloud.prototype.addComponent = function (data, callback) {
    var me = this;
    var token = data.deviceToken;
    delete data.deviceToken;
    var did = data.deviceId;
    delete data.deviceId;
    var dataPayload = {
        deviceId : did,
        deviceToken: token,
        body: data
    };
    me.client.devices.registerComponents(dataPayload, function (err, response) {
        var comp = {};
        if (!err && response) {
            comp = response;
            comp.status = 0;
            callback(comp);
        } else {
            comp = new Error ("Component registration failed");
            comp.status = 3001;
            callback(comp);
        }
    });
};

IoTKitRestCloud.prototype.data = function (data , callback) {
    var me = this;
    var token = data.deviceToken;
    delete data.deviceToken;
    delete data.gatewayId;
    var dataPayload = {
        deviceId : data.did,
        deviceToken: token,
        body: data.convertToRestPayload()
    };

    me.client.devices.submitData(dataPayload, function (err, response) {
        var data = {};
        if (!err) {
            data.response = response || "none detail";
            data.status = 0;
            return callback(data);
        } else {
            data = new Error("Data Submission Fail");
            data.status = 4000;
            return callback(err);
        }
    });
};

IoTKitRestCloud.prototype.attributes = function (data, callback) {
    var me = this;
    var token = data.deviceToken;
    delete data.deviceToken;
    var did = data.deviceId;
    delete data.deviceId;
    var dataPayload = {
        deviceId : did,
        deviceToken: token,
        body: data
    };
    me.client.devices.updateMetadataDevice(dataPayload, function(err, response) {
        if (!err && response) {
            callback(response);
        } else  {
            callback(err);
        }
        return true;
    });
    return true;
};

IoTKitRestCloud.prototype.activation = function (data, callback) {
    var me = this;

    var code = data.code;
    delete data.code;
    var dataPayload = {
        deviceId : data.deviceId,
        body: {
            activationCode: code
        }
    };

    me.client.devices.registerDevice(dataPayload, function (err, response) {
        var secret = { };
        if (!err && response && response.deviceToken && response.domainId) {
            secret.deviceToken = response.deviceToken;
            secret.refreshToken = response.refreshToken;
            secret.accountId = response.domainId;
            secret.status = 0;
        } else {
            secret = new Error("Activation Rejected");
            secret.status = 300;
        }
        callback(secret);
    });
};

IoTKitRestCloud.prototype.disconnect = function () {
};

IoTKitRestCloud.prototype.health = function (device, callback) {
    var me = this;
    me.client.publicApi.health(function (err, response) {
        if (!err && response) {
            callback(response);
        } else {
            callback(null);
        }

    });
};

IoTKitRestCloud.prototype.getCatalog = function (data, callback) {
    var me = this;
    var dataPayload = {
        deviceToken: data.deviceToken
    };
    me.client.cmpcatalog.getDeviceCatalog(dataPayload, function (err, response) {
        if (!err && response) {
            callback(response);
        } else {
            callback(null);
        }

    });
};

IoTKitRestCloud.prototype.getDevice = function (data, callback) {
    var me = this;
    var dataPayload = {
        deviceId : data.deviceId,
        deviceToken: data.deviceToken
    };
    me.client.devices.getDevice(dataPayload, function(err, response) {
        if (!err && response) {
            callback(response);
        } else  {
            callback(err);
        }
        return true;
    });
    return true;
};

IoTKitRestCloud.prototype.pullActuations = function (data, callback) {
    var me = this;
    me.client.control.pullActuations(data, function (err, response) {
        if (!err && response) {
            callback(response);
        } else {
            callback(null);
        }
    });
};

IoTKitRestCloud.prototype.setCredential = function (user, password) {
    var me = this;
    me.crd = {
        username: user || '',
        password: password || ''
    };
};

IoTKitRestCloud.prototype.getActualTime = function (callback) {
    var me = this;
    me.client.publicApi.getActualTime(function (err, response) {
        if (!err && response) {
            callback(response.actualTime);
        } else {
            callback(null);
        }
    });
};


module.exports.init = function(conf) {
    var rest = require("../..")(conf).api.rest;
    return new IoTKitRestCloud(conf, rest);
};
