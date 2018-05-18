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

    function GetAuthTokenOption(data) {
        this.pathname = common.buildPath(api.auth.TOKEN);
        this.token = null;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body =  JSON.stringify(data.body);
    }
    GetAuthTokenOption.prototype = new ConnectionOptions();
    GetAuthTokenOption.prototype.constructor = GetAuthTokenOption;
    module.GetAuthTokenOption = GetAuthTokenOption;


    function GetAuthTokenInfoOption(data) {
        this.pathname = common.buildPath(api.auth.TOKEN_INFO);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetAuthTokenInfoOption.prototype = new ConnectionOptions();
    GetAuthTokenInfoOption.prototype.constructor = GetAuthTokenInfoOption;
    module.GetAuthTokenInfoOption = GetAuthTokenInfoOption;


    function GetAuthUserInfoOption(data) {
        this.pathname = common.buildPath(api.auth.USER_INFO);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
        this.body = null;
    }
    GetAuthUserInfoOption.prototype = new ConnectionOptions();
    GetAuthUserInfoOption.prototype.constructor = GetAuthUserInfoOption;
    module.GetAuthUserInfoOption = GetAuthUserInfoOption;

    return module;
}
