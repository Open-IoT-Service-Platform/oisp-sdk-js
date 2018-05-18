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
    module.userAdminDef = require('./admin.def')(config);
    
    /** @description get user info through API:GET/v1/api/users/{userId}
     *  @param data.userToken contains access token
     *  @param data.userId contains the userId
     */
    module.getUserInfo = function(data, callback) {
        var getUserInfoOpt = new module.userAdminDef.users.GetUserInfoOption(data);
        return module.httpClient.httpRequest(getUserInfoOpt, callback);
    };


    /** @description update user info through API:PUT/v1/api/users/{userId}
     *  @param data.userToken contains the access token
     *  @param data.body contains attributes to be updated (see API spec for attributes)
     *  @param data.userId contains the userid of the target user
     */
    module.updateUserInfo = function(data, callback) {
        var updateUserInfoOpt = new module.userAdminDef.users.UpdateUserInfoOption(data);
        return module.httpClient.httpRequest(updateUserInfoOpt, callback);
    };


    /** @description delete user through API:DELETE/v1/api/users/{userId}
     *  @param data.userToken contains access token
     *  @param data.deleteUserId contains the userid to be deleted
     */
    module.deleteUser = function(data, callback) {
        var deleteUserOpt = new module.userAdminDef.users.DeleteUserOption(data);
        return module.httpClient.httpRequest(deleteUserOpt, callback);
    };


    /** @description request new token by email API:POST/v1/api/users/forgot_password
     *  @param data.body.email contains email of user for which change is requested
     */
    module.requestUserPasswordChange = function(data, callback) {
        var requestUserPasswordChangeOpt = new module.userAdminDef.users.RequestUserPasswordChangeOption(data);
        return module.httpClient.httpRequest(requestUserPasswordChangeOpt, callback);
    };


    /** @description update password with token API:PUT/v1/api/users/forgot_password
     *  @param data.body.token contains the token received from POST call above through email
     *  @param data.body.password the new password 
     */
    module.updateUserPassword = function(data, callback) {
        var updateUserPasswordOpt = new module.userAdminDef.users.UpdateUserPasswordOption(data);
        return module.httpClient.httpRequest(updateUserPasswordOpt, callback);
    };


    /** @description update password API:PUT/v1/api/users/{email}/change_password
     *  @param data.userToken contains access token
     *  @param data.body.currentpwd contains current password 
     *  @param data.body.password new password
     *  @param data.username contains email of user
     */
    module.changeUserPassword = function(data, callback) {
        var changeUserPasswordOpt = new module.userAdminDef.users.ChangeUserPasswordOption(data);
        return module.httpClient.httpRequest(changeUserPasswordOpt, callback);
    };


    /** @description reuqest user activation of user alread in DB API:POST/v1/api/users/request_user_activation
     *  @param data.body.email contains email of the user which is requested to be activated
     */
    module.requestUserActivation = function(data, callback) {
        var requestUserActivationOpt = new module.userAdminDef.users.RequestUserActivationOption(data);
        return module.httpClient.httpRequest(requestUserActivationOpt, callback);
    };


    /** @description addUser which is not yet in user DB API:POST/v1/api/users
     *  @param data.body contains user attributes, e.g. "password", "email", see api documentation
     */
    module.addUser = function(data, callback) {
        var addUserOpt = new module.userAdminDef.users.AddUserOption(data);
        return module.httpClient.httpRequest(addUserOpt, callback);
    };


    /** @description (re-)activateUser with a token received by email after activation request API:POST/v1/api/users/activate
     *  @param data.body.token token to activat the user
     */
    module.activateUser = function(data, callback) {
        var activateUserOpt = new module.userAdminDef.users.ActivateUserOption(data);
        return module.httpClient.httpRequest(activateUserOpt, callback);
    };

    return module;
}
