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

var cbor = require('borc');

module.exports = function(config) {
    var common = require('../../lib/common');
    var api = require('./api');
    var ConnectionOptions = require('./iot.connection.def')(config);

    var module = {};

    function SubmitDataOption(data) {
        var isBinary = common.isBinary(data.body);
        this.pathname = common.buildPath(api.data.SEND, data.deviceId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        if ( isBinary ) {
            this.body = cbor.encode(data.body);
            this.headers["Content-type"] = "application/cbor";
        } else {
            this.body =  JSON.stringify(data.body);
            this.headers["Content-type"] = "application/json";
        }
    }
    SubmitDataOption.prototype = new ConnectionOptions();
    SubmitDataOption.prototype.constructor = SubmitDataOption;
    module.SubmitDataOption = SubmitDataOption;


    function SubmitDataAsUserOption(data) {
        var isBinary = common.isBinary(data.body);
        this.pathname = common.buildPath(api.data.SEND_AS_USER, [data.accountId, data.deviceId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        if ( isBinary ) {
            this.body = cbor.encode(data.body);
            this.headers["Content-type"] = "application/cbor";
        } else {
            this.body =  JSON.stringify(data.body);
            this.headers["Content-type"] = "application/json";
        }
    }
    SubmitDataAsUserOption.prototype = new ConnectionOptions();
    SubmitDataAsUserOption.prototype.constructor = SubmitDataAsUserOption;
    module.SubmitDataAsUserOption = SubmitDataAsUserOption;


    function SearchDataOption(data) {
        this.pathname = common.buildPath(api.data.SEARCH, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.encoding = null;
        this.body =  JSON.stringify(data.body);
    }
    SearchDataOption.prototype = new ConnectionOptions();
    SearchDataOption.prototype.constructor = SearchDataOption;
    module.SearchDataOption = SearchDataOption;


    function SearchDataAdvancedOption(data) {
        this.pathname = common.buildPath(api.data.SEARCH_ADVANCED, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.encoding = null;
        this.body =  JSON.stringify(data.body);
    }
    SearchDataAdvancedOption.prototype = new ConnectionOptions();
    SearchDataAdvancedOption.prototype.constructor = SearchDataAdvancedOption;
    module.SearchDataAdvancedOption = SearchDataAdvancedOption;

    return module;
}
