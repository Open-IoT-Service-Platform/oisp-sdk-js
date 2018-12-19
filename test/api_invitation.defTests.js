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

var assert =  require('chai').assert;
var url = require('url');

var fileToTest = "../api/rest/invitation.def.js";

describe(fileToTest, function() {
    var logger  = {
        info : function() {},
        error : function() {},
        debug : function() {}
    };
    console.debug = function() {
        console.log(arguments);
    };
    function makeTokenBearer (token) {
        return "Bearer " + token;
    }

    it('Shall Return the GetAllInvitationsOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    proxy: {
                        host: "myprox",
                        port: 2222
                    },
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            }
        };
        var data = {
            accountId: 20000,
            userToken: "This is Mytoken"
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.GetAllInvitationsOption(data);
        var urlD = url.parse(deTest.url);
        assert.equal(urlD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urlD.port, config.connector.rest.port, "the port were missing");
        assert.equal(urlD.pathname, "/v1/api/accounts/20000/invites", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken),
            "The Authorization Header has not set");
        done();
    });
    it('Shall Return the CreateInvitationOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    proxy: {
                        host: "myprox",
                        port: 2222
                    },
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            }
        };
        var data = {
            accountId: 20000,
            userToken: "This is Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.CreateInvitationOption(data);
        var urlD = url.parse(deTest.url);
        assert.equal(urlD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urlD.port, config.connector.rest.port, "the port were missing");
        assert.equal(urlD.pathname, "/v1/api/accounts/20000/invites", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken),
            "The Authorization Header has not set");
        done();
    });
    it('Shall Return the GetInvitationsOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    proxy: {
                        host: "myprox",
                        port: 2222
                    },
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            }
        };
        var data = {
            accountId: 20000,
            email: "test@intel.com",
            userToken: "This is Mytoken"
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.GetInvitationsOption(data);
        var urlD = url.parse(deTest.url);
        assert.equal(urlD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urlD.port, config.connector.rest.port, "the port were missing");
        assert.equal(urlD.pathname, "/v1/api/invites/test@intel.com", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken),
            "The Authorization Header has not set");
        done();
    });
    it('Shall Return the DeleteInvitationsOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    proxy: {
                        host: "myprox",
                        port: 2222
                    },
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            }
        };
        var data = {
            accountId: 20000,
            email: "test@intel.com",
            userToken: "This is Mytoken"
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.DeleteInvitationsOption(data);
        var urlD = url.parse(deTest.url);
        assert.equal(urlD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urlD.port, config.connector.rest.port, "the port were missing");
        assert.equal(urlD.pathname, "/v1/api/accounts/20000/invites/test@intel.com", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "DELETE", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken),
            "The Authorization Header has not set");
        done();
    });
    it('Shall Return the AcceptInvitationOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    proxy: {
                        host: "myprox",
                        port: 2222
                    },
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            }
        };
        var data = {
            accountId: 20000,
            inviteId: "iid",
            userToken: "This is Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.AcceptInvitationOption(data);
        var urlD = url.parse(deTest.url);
        assert.equal(urlD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urlD.port, config.connector.rest.port, "the port were missing");
        assert.equal(urlD.pathname, "/v1/api/invites/iid/status", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "PUT", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken),
            "The Authorization Header has not set");
        done();
    });
});