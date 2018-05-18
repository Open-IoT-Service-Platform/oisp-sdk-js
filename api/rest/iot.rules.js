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
    var module = {};
        
    module.httpClient = require('../../lib/httpClient');
    module.adminDef = require('./admin.def')(config);

    /**
     *  @description Create a rule through API: POST:/v1/api/accounts/{accountId}/rules
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.body the description of the rule as described in the API spec
     */
    module.createRule = function(data, callback) {
        var createRuleOpt = new module.adminDef.rules.CreateRuleOption(data);
        return module.httpClient.httpRequest(createRuleOpt, callback);
    };

    /**
     *  @description Delete a rule through API: DELETE:/v1/api/accounts/{accountId}/rules/delete_rule_with_alerts/{ruleId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     */
    module.deleteRule = function(data, callback) {
        var deleteRuleOpt = new module.adminDef.rules.DeleteRuleOption(data);
        return module.httpClient.httpRequest(deleteRuleOpt, callback);
    };


    /**
     *  @description Get list of rules through API: GET:/v1/api/accounts/{accountId}/rules
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     */
    module.getRules = function(data, callback) {
        var getRulesOpt = new module.adminDef.rules.GetRulesOption(data);
        return module.httpClient.httpRequest(getRulesOpt, callback);
    };


    /**
     *  @description Update a rule through API: PUT:/v1/api/accounts/{accountId}/rules/{ruleId}
     *  If rule doesn't exist it create a new one. Cannot be used for update of a draft rule.
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     *  @param data.body the description of the rule as described in the API spec
     */
    module.updateRule = function(data, callback) {
        var updateRuleOpt = new module.adminDef.rules.UpdateRuleOption(data);
        return module.httpClient.httpRequest(updateRuleOpt, callback);
    };

    /**
     *  @description Get details of a rule through API: GET:/v1/api/accounts/{accountId}/rules/{ruleId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     */
    module.getRuleDetails = function(data, callback) {
        var getRuleDetailsOpt = new module.adminDef.rules.GetRuleDetailsOption(data);
        return module.httpClient.httpRequest(getRuleDetailsOpt, callback);
    };


    /**
     *  @description Update the status of a rule through API: PUT /v1/api/accounts/{accountId}/rules/{ruleId}/status
     *  Cannot be used for changing the status of draft rule. Status value should be one of the following: ["Active", "Archived", "On-hold"]
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     *  @param data.body the description of the status as described in the API spec
     */
    module.updateRuleStatus = function(data, callback) {
        var updateRuleStatusOpt = new module.adminDef.rules.UpdateRuleStatusOption(data);
        return module.httpClient.httpRequest(updateRuleStatusOpt, callback);
    };

    /**
     *  @description Create a rule as draft through API: PUT:/v1/api/accounts/{accountId}/rules/draft
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.body the description of the rule as described in the API spec
     */
    module.createDraftRule = function(data, callback) {
        var createDraftRuleOpt = new module.adminDef.rules.CreateDraftRuleOption(data);
        return module.httpClient.httpRequest(createDraftRuleOpt, callback);
    };

    /**
     *  @description Delete a draft rule through API: DELETE: /v1/api/accounts/{accountId}/rules/draft/{ruleId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     */
    module.deleteDraftRule = function(data, callback) {
        var deleteDraftRuleOpt = new module.adminDef.rules.DeleteDraftRuleOption(data);
        return module.httpClient.httpRequest(deleteDraftRuleOpt, callback);
    };


    /**
     *  @description Clone a rule through API: POST: /v1/api/accounts/{accountId}/rules/clone/{ruleId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.ruleId the id of the rule
     */
    module.cloneRule = function(data, callback) {
        var cloneRuleOpt = new module.adminDef.rules.CloneRuleOption(data);
        return module.httpClient.httpRequest(cloneRuleOpt, callback);
    };

    return module;
}
