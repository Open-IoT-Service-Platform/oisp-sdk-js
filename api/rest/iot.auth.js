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

    /**
     *  @description Get user token through API:POST/v1/api/auth/token
     *  @param data.body.email the user email
     *  @param data.body.password the user password
     */
    module.getAuthToken = function(data, callback) {
        var getAuthTokenOpt = new module.userAdminDef.auth.GetAuthTokenOption(data);
        return module.httpClient.httpRequest(getAuthTokenOpt, callback);
    };


    /**
     *  @description Get user token through API:GET/v1/api/auth/tokenInfo
     *  @param data.token the access token
     */
    module.getAuthTokenInfo = function(data, callback) {
        var getAuthTokenInfoOpt = new module.userAdminDef.auth.GetAuthTokenInfoOption(data);
        return module.httpClient.httpRequest(getAuthTokenInfoOpt, callback);
    };


    /**
     *  @description Get information about the JWT owner through API:GET/v1/api/auth/me
     *  @param data contains the auth token
     */
    module.getAuthUserInfo = function(data, callback) {
        var getAuthUserInfoOpt = new module.userAdminDef.auth.GetAuthUserInfoOption(data);
        return module.httpClient.httpRequest(getAuthUserInfoOpt, callback);
    };


    /**
     *  @description Refresh access token through API:PUT/v1/api/auth/refresh
     *  @param data.token the access token
     *  @param data.body.refreshToken the refresh token
     */
    module.refreshAuthToken = function(data, callback) {
        var refreshAuthTokenOpt = new module.userAdminDef.auth.RefreshAuthTokenOption(data);
        return module.httpClient.httpRequest(refreshAuthTokenOpt, callback);
    };

    return module;
}
