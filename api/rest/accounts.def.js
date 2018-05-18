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

    function CreateAccountOption(data) {
        this.pathname = common.buildPath(api.accounts.CREATE);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    CreateAccountOption.prototype = new ConnectionOptions();
    CreateAccountOption.prototype.constructor = CreateAccountOption;
    module.CreateAccountOption = CreateAccountOption;


    function GetAccountInfoOption(data) {
        this.pathname = common.buildPath(api.accounts.ACCOUNT_ID, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetAccountInfoOption.prototype = new ConnectionOptions();
    GetAccountInfoOption.prototype.constructor = GetAccountInfoOption;
    module.GetAccountInfoOption = GetAccountInfoOption;


    function UpdateAccountOption(data) {
        this.pathname = common.buildPath(api.accounts.ACCOUNT_ID, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateAccountOption.prototype = new ConnectionOptions();
    UpdateAccountOption.prototype.constructor = UpdateAccountOption;
    module.UpdateAccountOption = UpdateAccountOption;


    function DeleteAccountOption(data) {
        this.pathname = common.buildPath(api.accounts.ACCOUNT_ID, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'DELETE';
        this.body = null;
    }
    DeleteAccountOption.prototype = new ConnectionOptions();
    DeleteAccountOption.prototype.constructor = DeleteAccountOption;
    module.DeleteAccountOption = DeleteAccountOption;


    function GetAccountActivationCodeOption(data) {
        this.pathname = common.buildPath(api.accounts.ACTIVATION_CODE, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetAccountActivationCodeOption.prototype = new ConnectionOptions();
    GetAccountActivationCodeOption.prototype.constructor = GetAccountActivationCodeOption;
    module.GetAccountActivationCodeOption = GetAccountActivationCodeOption;


    function RefreshAccountActivationCodeOption(data) {
        this.pathname = common.buildPath(api.accounts.REFRESH, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = null;
    }
    RefreshAccountActivationCodeOption.prototype = new ConnectionOptions();
    RefreshAccountActivationCodeOption.prototype.constructor = RefreshAccountActivationCodeOption;
    module.RefreshAccountActivationCodeOption = RefreshAccountActivationCodeOption;


    function ChangeAccountUserOption(data) {
        this.pathname = common.buildPath(api.accounts.USER_ID, [data.accountId, data.userId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    ChangeAccountUserOption.prototype = new ConnectionOptions();
    ChangeAccountUserOption.prototype.constructor = ChangeAccountUserOption;
    module.ChangeAccountUserOption = ChangeAccountUserOption;


    function GetAccountUsersOption(data) {
        this.pathname = common.buildPath(api.accounts.USERS, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetAccountUsersOption.prototype = new ConnectionOptions();
    GetAccountUsersOption.prototype.constructor = GetAccountUsersOption;
    module.GetAccountUsersOption = GetAccountUsersOption;

    return module;
}
