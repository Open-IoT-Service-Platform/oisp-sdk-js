/*
 Copyright (c) 2018, Intel Corporation

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

    function GetAllInvitationsOption(data) {
        this.pathname = common.buildPath(api.invitation.GET_ALL, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    GetAllInvitationsOption.prototype = new ConnectionOptions();
    GetAllInvitationsOption.prototype.constructor = GetAllInvitationsOption;
    module.GetAllInvitationsOption = GetAllInvitationsOption;

    function CreateInvitationOption(data) {
        this.pathname = common.buildPath(api.invitation.CREATE, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    CreateInvitationOption.prototype = new ConnectionOptions();
    CreateInvitationOption.prototype.constructor = CreateInvitationOption;
    module.CreateInvitationOption = CreateInvitationOption;

    function GetInvitationsOption(data) {
        this.pathname = common.buildPath(api.invitation.GET, [data.email]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    GetInvitationsOption.prototype = new ConnectionOptions();
    GetInvitationsOption.prototype.constructor = GetInvitationsOption;
    module.GetInvitationsOption = GetInvitationsOption;

    function DeleteInvitationsOption(data) {
        this.pathname = common.buildPath(api.invitation.DELETE, [data.accountId, data.email]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'DELETE';
    }
    DeleteInvitationsOption.prototype = new ConnectionOptions();
    DeleteInvitationsOption.prototype.constructor = DeleteInvitationsOption;
    module.DeleteInvitationsOption = DeleteInvitationsOption;

    function AcceptInvitationOption(data) {
        this.pathname = common.buildPath(api.invitation.ACCEPT, data.inviteId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    AcceptInvitationOption.prototype = new ConnectionOptions();
    AcceptInvitationOption.prototype.constructor = AcceptInvitationOption;
    module.AcceptInvitationOption = AcceptInvitationOption;

    return module;
}
