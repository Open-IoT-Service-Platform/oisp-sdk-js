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

module.exports = function(config) {
    var common = require('../../lib/common');
    var api = require('./api');
    var ConnectionOptions = require('./iot.connection.def')(config);

    var module = {};


    function GetUserInfoOption(data) {
        this.pathname = common.buildPath(api.user.GET, data.userId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetUserInfoOption.prototype = new ConnectionOptions();
    GetUserInfoOption.prototype.constructor = GetUserInfoOption;
    module.GetUserInfoOption = GetUserInfoOption;


    function UpdateUserInfoOption(data) {
        this.pathname = common.buildPath(api.user.GET, data.userId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateUserInfoOption.prototype = new ConnectionOptions();
    UpdateUserInfoOption.prototype.contstructor = UpdateUserInfoOption;
    module.UpdateUserInfoOption = UpdateUserInfoOption;


    function DeleteUserOption(data) {
        this.pathname = common.buildPath(api.user.GET, data.deleteUserId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'DELETE';
        this.body = null;
    }
    DeleteUserOption.prototype = new ConnectionOptions();
    DeleteUserOption.prototype.contstructor = DeleteUserOption;
    module.DeleteUserOption = DeleteUserOption;


    function RequestUserPasswordChangeOption(data) {
        this.pathname = common.buildPath(api.user.FORGOT_PASSWORD);
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    RequestUserPasswordChangeOption.prototype = new ConnectionOptions();
    RequestUserPasswordChangeOption.prototype.contstructor = RequestUserPasswordChangeOption;
    module.RequestUserPasswordChangeOption = RequestUserPasswordChangeOption;


    function UpdateUserPasswordOption(data) {
        this.pathname = common.buildPath(api.user.FORGOT_PASSWORD);
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateUserPasswordOption.prototype = new ConnectionOptions();
    UpdateUserPasswordOption.prototype.contstructor = UpdateUserPasswordOption;
    module.UpdateUserPasswordOption = UpdateUserPasswordOption;


    function ChangeUserPasswordOption(data) {
        this.pathname = common.buildPath(api.user.CHANGE_PASSWORD, data.username);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    ChangeUserPasswordOption.prototype = new ConnectionOptions();
    ChangeUserPasswordOption.prototype.contstructor = ChangeUserPasswordOption;
    module.ChangeUserPasswordOption = ChangeUserPasswordOption;


    function RequestUserActivationOption(data) {
        this.pathname = common.buildPath(api.user.REQUEST_ACTIVATION);
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    RequestUserActivationOption.prototype = new ConnectionOptions();
    RequestUserActivationOption.prototype.contstructor = RequestUserActivationOption;
    module.RequestUserActivationOption = RequestUserActivationOption;


    function AddUserOption(data) {
        this.pathname = common.buildPath(api.user.ADD);
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    AddUserOption.prototype = new ConnectionOptions();
    AddUserOption.prototype.contstructor = AddUserOption;
    module.AddUserOption = AddUserOption;


    function ActivateUserOption(data) {
        this.pathname = common.buildPath(api.user.ACTIVATE);
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    ActivateUserOption.prototype = new ConnectionOptions();
    ActivateUserOption.prototype.contstructor = ActivateUserOption;
    module.ActivateUserOption = ActivateUserOption;

    return module;
}
