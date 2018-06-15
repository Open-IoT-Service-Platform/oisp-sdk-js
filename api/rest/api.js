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

module.exports = {
    HEALTH:                 '/v1/api/health',
    TIME:                   '/v1/api/time'
}

module.exports.accounts = {
    CREATE:                 '/v1/api/accounts',
    ACCOUNT_ID:             '/v1/api/accounts/{accountId}',
    ACTIVATION_CODE:        '/v1/api/accounts/{accountId}/activationcode',
    REFRESH:                '/v1/api/accounts/{accountId}/activationcode/refresh',
    USER_ID:                '/v1/api/accounts/{accountId}/users/{userId}',
    USERS:                  '/v1/api/accounts/{accountId}/users'
}

module.exports.alerts = {
    GET_ALL:                '/v1/api/accounts/{accountId}/alerts/',
    DELETE_ALL:             '/v1/api/accounts/{accountId}/alerts/',
    GET:                    '/v1/api/accounts/{accountId}/alerts/{alertId}',
    DELETE:                 '/v1/api/accounts/{accountId}/alerts/{alertId}',
    RESET:                  '/v1/api/accounts/{accountId}/alerts/{alertId}/reset',
    UPDATE_STATUS:          '/v1/api/accounts/{accountId}/alerts/{alertId}/status/{statusName}',
    ADD_COMMENTS:           '/v1/api/accounts/{accountId}/alerts/{alertId}/comments'
}

module.exports.auth = {
    TOKEN:                  '/v1/api/auth/token',
    TOKEN_INFO:             '/v1/api/auth/tokenInfo',
    USER_INFO:              '/v1/api/auth/me'
}

module.exports.cmpcatalog = {
    CATALOG:                'v1/api/cmpcatalog',
    COMPONENT:              '/v1/api/cmpcatalog/{componentId}'
}

module.exports.control = {
    SEND_ACTUATION_COMMAND: '/v1/api/accounts/{accountId}/control',
    SAVE_COMMAND:           '/v1/api/accounts/{accountId}/control/commands/{commandName}',
    UPDATE_COMMAND:         '/v1/api/accounts/{accountId}/control/commands/{commandName}',
    DELETE_COMMAND :        '/v1/api/accounts/{accountId}/control/commands/{commandName}',
    GET_COMMANDS:           '/v1/api/accounts/{accountId}/control/commands/',
    ACTUATIONS:             '/v1/api/accounts/{accountid}/control/devices/{deviceid}'
}

module.exports.data = {
    SEND:                   '/v1/api/data/{deviceid}',
    SEARCH:                 '/v1/api/accounts/{accountId}/data/search',
    SEARCH_ADVANCED:        '/v1/api/accounts/{accountId}/data/search/advanced'
}

module.exports.device = {
    ACTIVATE:               '/v1/api/devices/{deviceid}/activation',
    ACTIVATE_FULL:          '/v1/api/accounts/{accountid}/devices/{deviceid}/activation',
    GET:                    '/v1/api/devices/{deviceid}',
    GET_ALL:                '/v1/api/accounts/{accountid}/devices',
    GET_DETAILS:            '/v1/api/accounts/{accountid}/devices/{deviceid}',
    UPDATE:                 '/v1/api/devices/{deviceid}',
    COMPONENTS:             '/v1/api/devices/{deviceid}/components',
    COMPONENTS_FULL:        '/v1/api/accounts/{accountid}/devices/{deviceid}/components',
    COMPONENTS_DELETE:      '/v1/api/accounts/{accountid}/devices/{deviceid}/components/{cid}',
    GET_TAGS:               '/v1/api/accounts/{accountid}/devices/tags',
    GET_ATTRIBUTES:         '/v1/api/accounts/{accountid}/devices/attributes',
    COUNTS_ADVANCED:        '/v1/api/accounts/{accountId}/devices/count',
    SEARCH_ADVANCED:        '/v1/api/accounts/{accountId}/devices/search'
}

module.exports.rules = {
    CREATE:                 '/v1/api/accounts/{accountId}/rules',
    DELETE:                 '/v1/api/accounts/{accountId}/rules/delete_rule_with_alerts/{ruleId}',
    GET_ALL:                '/v1/api/accounts/{accountId}/rules',
    UPDATE:                 '/v1/api/accounts/{accountId}/rules/{ruleId}',
    GET_DETAILS:            '/v1/api/accounts/{accountId}/rules/{ruleId}',
    UPDATE_STATUS:          '/v1/api/accounts/{accountId}/rules/{ruleId}/status',
    CREATE_DRAFT:           '/v1/api/accounts/{accountId}/rules/draft',
    DELETE_DRAFT:           '/v1/api/accounts/{accountId}/rules/draft/{ruleId}',
    CLONE:                  '/v1/api/accounts/{accountId}/rules/clone/{ruleId}'
}

module.exports.submit = {
    DATA:                   '/v1/api/data/{deviceid}'
}

module.exports.user = {
    ADD:                    '/v1/api/users',
    ACTIVATE:               '/v1/api/users/activate',
    GET:                    '/v1/api/users/{userId}',
    FORGOT_PASSWORD:        '/v1/api/users/forgot_password',
    CHANGE_PASSWORD:        '/v1/api/users/{email}/change_password',
    REQUEST_ACTIVATION:     '/v1/api/users/request_user_activation'
}

module.exports.invitation = {
    GET_ALL:                '/v1/api/accounts/{accountId}/invites',
    CREATE:                 '/v1/api/accounts/{accountId}/invites',
    GET:                    '/v1/api/accounts/{accountId}/invites/{email}',
    DELETE:                 '/v1/api/accounts/{accountId}/invites/{email}',
    ACCEPT:                 '/v1/api/accounts/{accountId}/invites/{email}/{inviteId}/status'
}