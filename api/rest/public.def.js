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
    var url = require('url');
    var api = require('./api');
    var ConnectionOptions = require('./iot.connection.def')(config);

    var module = {};

    /**
     * Connection attributes to redirect to Intel Itendtity Main Page
     */
    function HealthOption() {
        this.pathname = api.HEALTH;
        this.token = null;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    HealthOption.prototype = new ConnectionOptions();
    HealthOption.prototype.constructor = HealthOption;
    module.HealthOption = HealthOption;

    function ExternalInfoOption() {
        this.pathname = '';
        this.token = null;
        ConnectionOptions.call(this);
        var urlT =  {
            hostname: 'ipinfo.io',
            port: 80,
            protocol: 'http'
        };
        this.url = url.format(urlT);
        this.method = 'GET';
    }
    ExternalInfoOption.prototype = new ConnectionOptions();
    ExternalInfoOption.prototype.constructor = ExternalInfoOption;
    module.ExternalInfoOption = ExternalInfoOption;

    function TimeOption() {
        this.pathname = api.TIME;
        this.token = null;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    TimeOption.prototype = new ConnectionOptions();
    TimeOption.prototype.constructor = TimeOption;
    module.TimeOption = TimeOption;

    return module;
}
