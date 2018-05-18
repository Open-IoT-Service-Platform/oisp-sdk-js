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


    function CreateRuleOption(data) {
        this.pathname = common.buildPath(api.rules.CREATE, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    CreateRuleOption.prototype = new ConnectionOptions();
    CreateRuleOption.prototype.constructor = CreateRuleOption;
    module.CreateRuleOption = CreateRuleOption;


    function DeleteRuleOption(data) {
        this.pathname = common.buildPath(api.rules.DELETE, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'DELETE';
        this.body = JSON.stringify(data.body);
    }
    DeleteRuleOption.prototype = new ConnectionOptions();
    DeleteRuleOption.prototype.constructor = DeleteRuleOption;
    module.DeleteRuleOption = DeleteRuleOption;


    function GetRulesOption(data) {
        this.pathname = common.buildPath(api.rules.GET_ALL, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetRulesOption.prototype = new ConnectionOptions();
    GetRulesOption.prototype.constructor = GetRulesOption;
    module.GetRulesOption = GetRulesOption;


    function UpdateRuleOption(data) {
        this.pathname = common.buildPath(api.rules.UPDATE, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateRuleOption.prototype = new ConnectionOptions();
    UpdateRuleOption.prototype.constructor = UpdateRuleOption;
    module.UpdateRuleOption = UpdateRuleOption;


    function GetRuleDetailsOption(data) {
        this.pathname = common.buildPath(api.rules.GET_DETAILS, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetRuleDetailsOption.prototype = new ConnectionOptions();
    GetRuleDetailsOption.prototype.constructor = GetRuleDetailsOption;
    module.GetRuleDetailsOption = GetRuleDetailsOption;


    function UpdateRuleStatusOption(data) {
        this.pathname = common.buildPath(api.rules.UPDATE_STATUS, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateRuleStatusOption.prototype = new ConnectionOptions();
    UpdateRuleStatusOption.prototype.constructor = UpdateRuleStatusOption;
    module.UpdateRuleStatusOption = UpdateRuleStatusOption;


    function CreateDraftRuleOption(data) {
        this.pathname = common.buildPath(api.rules.CREATE_DRAFT, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    CreateDraftRuleOption.prototype = new ConnectionOptions();
    CreateDraftRuleOption.prototype.constructor = CreateDraftRuleOption;
    module.CreateDraftRuleOption = CreateDraftRuleOption;


    function DeleteDraftRuleOption(data) {
        this.pathname = common.buildPath(api.rules.DELETE_DRAFT, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'DELETE';
        this.body = null
    }
    DeleteDraftRuleOption.prototype = new ConnectionOptions();
    DeleteDraftRuleOption.prototype.constructor = DeleteDraftRuleOption;
    module.DeleteDraftRuleOption = DeleteDraftRuleOption;


    function CloneRuleOption(data) {
        this.pathname = common.buildPath(api.rules.CLONE, [data.accountId, data.ruleId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = null;
    }
    CloneRuleOption.prototype = new ConnectionOptions();
    CloneRuleOption.prototype.constructor = CloneRuleOption;
    module.CloneRuleOption = CloneRuleOption;

    return module;
}
