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

var fileToTest = "../api/rest/users.def.js";

describe(fileToTest, function() {
    var logger = {
        info : function() {},
        error : function()  {},
        debug : function() {}
    };
    console.debug = function() {
        return "Bearer" + token;
    };
    function makeTokenBearer (token) {
        return "Bearer " + token;
    };
    it('Shall Return the GetUserInfoOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000,
                    user: {
                        userId: '/v1/api/users/{userId}'
                    }
                }
            },

        };
        var data = {
            userId: 20000,
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.GetUserInfoOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/20000", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        done();
    });
    it('Shall Return the UpdateUserInfoOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            userId: 20000,
            alertId: 75,
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.UpdateUserInfoOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/20000", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "PUT", "The verb is incorrect");
        done();
    });
    it('Shall Return the DeleteUserOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            deleteUserId: 20000,
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.DeleteUserOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/20000", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "DELETE", "The verb is incorrect");
        done();
    });
    it('Shall Return the RequestUserPasswordChangeOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.RequestUserPasswordChangeOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/forgot_password", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        done();
    });
    it('Shall Return the UpdateUserPasswordOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.UpdateUserPasswordOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/forgot_password", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "PUT", "The verb is incorrect");
        done();
    });
    it('Shall Return the ChangeUserPasswordOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            username: "test",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.ChangeUserPasswordOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/test/change_password", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "PUT", "The verb is incorrect");
        done();
    });
    it('Shall Return the RequestUserActivationOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.RequestUserActivationOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/request_user_activation", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        done();
    });
    it('Shall Return the AddUserOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.AddUserOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        done();
    });
    it('Shall Return the ActivateUserOption for Request  >', function(done) {
        var config = {
            connector: {
                rest: {
                    protocol: "http",
                    host: "myapi",
                    port: 1000
                }
            },

        };
        var data = {
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.ActivateUserOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/users/activate", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        done();
    });
});
