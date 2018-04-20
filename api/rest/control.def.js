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

function SendActuationCommandOption(data) {
    this.pathname = common.buildPath(api.control.SEND_ACTUATION_COMMAND, data.accountId);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.body = JSON.stringify(data.body);
}
SendActuationCommandOption.prototype = new ConnectionOptions();
SendActuationCommandOption.prototype.constructor = SendActuationCommandOption;
IoTKiT.SendActuationCommandOption = SendActuationCommandOption;

function SaveComplexCommandOption(data) {
    this.pathname = common.buildPath(api.control.SAVE_COMMAND, [data.accountId, data.commandName]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'POST';
    this.body = JSON.stringify(data.body);
}
SaveComplexCommandOption.prototype = new ConnectionOptions();
SaveComplexCommandOption.prototype.constructor = SaveComplexCommandOption;
IoTKiT.SaveComplexCommandOption = SaveComplexCommandOption;


function GetComplexCommandsOption(data) {
    this.pathname = common.buildPath(api.control.GET_COMMANDS, data.accountId);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'GET';
}
GetComplexCommandsOption.prototype = new ConnectionOptions();
GetComplexCommandsOption.prototype.constructor = GetComplexCommandsOption;
IoTKiT.GetComplexCommandsOption = GetComplexCommandsOption;

function DeleteComplexCommandOption(data) {
    this.pathname = common.buildPath(api.control.DELETE_COMMAND, [data.accountId, data.commandName]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'DELETE';
}
DeleteComplexCommandOption.prototype = new ConnectionOptions();
DeleteComplexCommandOption.prototype.constructor = DeleteComplexCommandOption;
IoTKiT.DeleteComplexCommandOption = DeleteComplexCommandOption;

function UpdateComplexCommandOption(data) {
    this.pathname = common.buildPath(api.control.UPDATE_COMMAND, [data.accountId, data.commandName]);
    this.token = data.userToken;
    ConnectionOptions.call(this);
    this.method = 'PUT';
    this.body = JSON.stringify(data.body);
}
UpdateComplexCommandOption.prototype = new ConnectionOptions();
UpdateComplexCommandOption.prototype.constructor = UpdateComplexCommandOption;
IoTKiT.UpdateComplexCommandOption = UpdateComplexCommandOption;


function ActuationsOption(data) {
    this.pathname = common.buildPath(api.control.ACTUATIONS, [data.accountId, data.deviceId]);
    if(data.from) {
        this.query = { from: data.from };
    }
    this.token = data.deviceToken;
    ConnectionOptions.call(this);
    this.method = 'GET';
}
ActuationsOption.prototype = new ConnectionOptions();
ActuationsOption.prototype.constructor = ActuationsOption;
IoTKiT.ActuationsOption = ActuationsOption;

module.exports = IoTKiT;
