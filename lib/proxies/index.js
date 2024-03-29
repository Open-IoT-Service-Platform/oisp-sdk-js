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

'use strict';

module.exports = function(config) {
    var module = {};
    
    var currentProxy;
    module.getProxyConnector = function() {
        try {
            if(!currentProxy) {
                var protocol = 'rest';
                var Proxy;
                Proxy = require("./iot." + protocol);
                currentProxy = Proxy.init(config);
            }
            return currentProxy;
        } catch(err) {
            // TODO
        }
    };

    var currentControl;
    module.getControlConnector = function(proxy) {
        try {
            if(!currentControl) {
                var Proxy = require("./iot.control." + proxy);
                currentControl = Proxy.init(config);
            }
            return currentControl;
        } catch(err) {
            // TODO
        }
    };

    var mqttProxy;
    module.getMQTTConnector = function() {
        try {
            if(!mqttProxy) {
                var protocol = 'mqtt';
                var Proxy;
                Proxy = require("./iot." + protocol);
                mqttProxy = Proxy.init(config);
            }
            return mqttProxy;
        } catch(err) {
            // TODO
        }
    };

    var spBProxy;
    module.getSpBConnector = function() {
        try {
            if(!spBProxy) {
                var protocol = 'spb.mqtt';
                var Proxy;
                Proxy = require("./iot." + protocol);
                spBProxy = Proxy.init(config);
            }
            return spBProxy;
        } catch(err) {
            // TODO
        }
    };
    
    return module;
}
