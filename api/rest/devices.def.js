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

var common = require('../../lib/common');
var api = require('./api');
var ConnectionOptions = require('./iot.connection.def');

//variable to be returned
var IoTKiT = {};

function GetDevicesOption(data) {
    this.pathname = common.buildPath(api.device.GET_ALL, data.accountId);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'GET';
    this.body =  null;
}
GetDevicesOption.prototype = new ConnectionOptions();
GetDevicesOption.prototype.constructor = GetDevicesOption;
IoTKiT.GetDevicesOption = GetDevicesOption;


function CreateDeviceOption(data) {
    this.pathname = common.buildPath(api.device.GET_ALL, data.accountId);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.body = JSON.stringify(data.body);
}
CreateDeviceOption.prototype = new ConnectionOptions();
CreateDeviceOption.prototype.constructor = CreateDeviceOption;
IoTKiT.CreateDeviceOption = CreateDeviceOption;


function GetDeviceDetailsOption(data) {
    this.pathname = common.buildPath(api.device.GET_DETAILS, [data.accountId, data.deviceId]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'GET';
    this.body =  null;
}
GetDeviceDetailsOption.prototype = new ConnectionOptions();
GetDeviceDetailsOption.prototype.constructor = GetDeviceDetailsOption;
IoTKiT.GetDeviceDetailsOption = GetDeviceDetailsOption;


function UpdateDeviceDetailsOption(data) {
    this.pathname = common.buildPath(api.device.GET_DETAILS, [data.accountId, data.deviceId]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'PUT';
    this.body = JSON.stringify(data.body);
}
UpdateDeviceDetailsOption.prototype = new ConnectionOptions();
UpdateDeviceDetailsOption.prototype.constructor = UpdateDeviceDetailsOption;
IoTKiT.UpdateDeviceDetailsOption = UpdateDeviceDetailsOption;


function DeleteDeviceOption(data) {
    this.pathname = common.buildPath(api.device.GET_DETAILS, [data.accountId, data.deviceId]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'DELETE';
    this.body =  null;
}
DeleteDeviceOption.prototype = new ConnectionOptions();
DeleteDeviceOption.prototype.constructor = DeleteDeviceOption;
IoTKiT.DeleteDeviceOption = DeleteDeviceOption;


function ActivateDeviceOption(data) {
    this.pathname = common.buildPath(api.device.ACTIVATE_FULL, [data.accountId, data.deviceId]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'PUT';
    this.body = JSON.stringify(data.body);
}
ActivateDeviceOption.prototype = new ConnectionOptions();
ActivateDeviceOption.prototype.constructor = ActivateDeviceOption;
IoTKiT.ActivateDeviceOption = ActivateDeviceOption;


function AddDeviceComponentOption(data) {
    this.pathname = common.buildPath(api.device.COMPONENTS_FULL, [data.accountId, data.deviceId]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.body = JSON.stringify(data.body);
}
AddDeviceComponentOption.prototype = new ConnectionOptions();
AddDeviceComponentOption.prototype.constructor = AddDeviceComponentOption;
IoTKiT.AddDeviceComponentOption = AddDeviceComponentOption;


function DeleteDeviceComponentOption(data) {
    this.pathname = common.buildPath(api.device.COMPONENTS_DELETE, [data.accountId, data.deviceId, data.cid]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'DELETE';
    this.body = null;
}
DeleteDeviceComponentOption.prototype = new ConnectionOptions();
DeleteDeviceComponentOption.prototype.constructor = DeleteDeviceComponentOption;
IoTKiT.DeleteDeviceComponentOption = DeleteDeviceComponentOption;


function DeviceActivateOption(data) {
    this.pathname = common.buildPath(api.device.ACTIVATE, data.deviceId);
    this.token = null;
    ConnectionOptions.call(this);
    this.method = 'PUT';
    this.body =  JSON.stringify(data.body);
}
DeviceActivateOption.prototype = new ConnectionOptions();
DeviceActivateOption.prototype.constructor = DeviceActivateOption;
IoTKiT.DeviceActivateOption = DeviceActivateOption;


function DeviceGetOption (data) {
    this.pathname = common.buildPath(api.device.GET, data.deviceId);
    this.token = data.deviceToken;
    ConnectionOptions.call(this);
    this.method = 'GET';

}
DeviceGetOption.prototype = new ConnectionOptions();
DeviceGetOption.prototype.constructor = DeviceGetOption;
IoTKiT.DeviceGetOption = DeviceGetOption;


function DeviceMetadataOption (data) {
    this.pathname = common.buildPath(api.device.UPDATE, data.deviceId);
    this.token = data.deviceToken;
    ConnectionOptions.call(this);
    this.method = 'PUT';
    this.body = JSON.stringify(data.body);
}
DeviceMetadataOption.prototype = new ConnectionOptions();
DeviceMetadataOption.prototype.constructor = DeviceMetadataOption;
IoTKiT.DeviceMetadataOption = DeviceMetadataOption;


/**
 * Build an object option for Request package.
 * @param data
 * @constructor
 * */
function DeviceComponentOption (data) {
    this.pathname = common.buildPath(api.device.COMPONENTS, data.deviceId);
    this.token = data.deviceToken;
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.body = JSON.stringify(data.body);
}
DeviceComponentOption.prototype = new ConnectionOptions();
DeviceComponentOption.prototype.constructor = DeviceComponentOption;
IoTKiT.DeviceComponentOption = DeviceComponentOption;


/**
 * @description Build an object option for Request package.
 * @param data
 * @constructor
 */
function DeviceSubmitDataOption (data) {
    this.pathname = common.buildPath(api.submit.DATA, data.deviceId);
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.headers = {
        "Content-type" : "application/json",
        "Authorization" : "Bearer " + data.deviceToken
    };
    if (data.forwarded) {
        this.headers["forwarded"] = true;
        delete data.forwarded;
    }
    this.body = JSON.stringify(data.body);
}
DeviceSubmitDataOption.prototype = new ConnectionOptions();
DeviceSubmitDataOption.prototype.constructor = DeviceSubmitDataOption;
IoTKiT.DeviceSubmitDataOption = DeviceSubmitDataOption;

module.exports = IoTKiT;
