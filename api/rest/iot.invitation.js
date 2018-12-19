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
    var module = {};
        
    module.httpClient = require('../../lib/httpClient');
    module.adminDef = require('./admin.def')(config);

    /**
     *  @description Get List of Invitations through API: GET:/v1/api/accounts/{accountId}/invites
     *  Get a list of users invited to the specific account 
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     */
    module.getAllInvitations = function(data, callback) {
        var getAllInvitationsOpt = new module.adminDef.invitation.GetAllInvitationsOption(data);
        return module.httpClient.httpRequest(getAllInvitationsOpt, callback);
    };

    /**
     *  @description Create Invitation through API: POST: /v1/api/accounts/{accountId}/invites
     *  Creation of invitation to the account for specific user (identified by email)
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.body the description of the rule as described in the API spec
     */
    module.createInvitation = function(data, callback) {
        var createInvitationOpt = new module.adminDef.invitation.CreateInvitationOption(data);
        return module.httpClient.httpRequest(createInvitationOpt, callback);
    };


    /**
     *  @description Get list of invitations sent to specific user through API: GET:/v1/api/accounts/{accountId}/invites/{email}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.email email of the specific user
     */
    module.getInvitations = function(data, callback) {
        var getInvitationsOpt = new module.adminDef.invitation.GetInvitationsOption(data);
        return module.httpClient.httpRequest(getInvitationsOpt, callback);
    };


    /**
     *  @description Delete invitations through API: DELETE: /v1/api/accounts/{accountId}/invites/{email}
     *  Delete invitations to an account for a specific user (identified by email).
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.email email of the specific user
     */
    module.deleteInvitations = function(data, callback) {
        var deleteInvitationsOpt = new module.adminDef.invitation.DeleteInvitationsOption(data);
        return module.httpClient.httpRequest(deleteInvitationsOpt, callback);
    };

    /**
     *  @description Accept Invitation through API: PUT: /v1/api/accounts/{accountId}/invites/{email}/{inviteId}/status
     *  Accept pending invitation for the specific account.
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the target account
     *  @param data.email the id of the rule
     *  @param data.invitedId the id of the invitation
     */
    module.acceptInvitation = function(data, callback) {
        var acceptInvitationOpt = new module.adminDef.invitation.AcceptInvitationOption(data);
        return module.httpClient.httpRequest(acceptInvitationOpt, callback);
    };

    return module;
}
