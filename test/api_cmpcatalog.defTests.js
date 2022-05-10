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

var fileToTest = "../api/rest/cmpcatalog.def.js";

describe(fileToTest, function() {
    function makeTokenBearer (token) {
        return "Bearer " + token;
    }
    it('Shall Return the DeviceCatalogOption for Request  >', function(done) {
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
            userToken: "Thisis Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.DeviceCatalogOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/cmpcatalog", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        done();
    });

    it('Shall Return the CatalogOption for Request  >', function(done) {
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
            userToken: "Thisis Mytoken",
            accountId: 20000,
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.CatalogOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/accounts/20000/cmpcatalog%3Ffull=true", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken));
        done();
    });

    it('Shall Return the CreateCatalogOption for Request  >', function(done) {
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
            userToken: "Thisis Mytoken",
            accountId: 20000,
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.CreateCatalogOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/accounts/20000/cmpcatalog", "path improper formed");
        console.log(deTest.body);
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "POST", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken));
        done();
    });

    it('Shall Return the DeviceCatalogDetailOption for Request  >', function(done) {
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
            componentId: 1000,
            userToken: "Thisis Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.DeviceCatalogDetailOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/cmpcatalog/1000%3Ffull=true", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        done();
    });

    it('Shall Return the CatalogDetailOption for Request  >', function(done) {
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
            accountId: 20000,
            componentId: 1000,
            userToken: "Thisis Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.CatalogDetailOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/accounts/20000/cmpcatalog/1000%3Ffull=true", "path improper formed");
        assert.equal(deTest.body, null);
        assert.equal(deTest.method, "GET", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken));
        done();
    });

    it('Shall Return the UpdateCatalogOption for Request  >', function(done) {
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
            accountId: 20000,
            componentId: 1000,
            userToken: "Thisis Mytoken",
            body: {
                a: 1,
                b: 2,
                c: [1,2,3]
            }
        };

        var toTest = require(fileToTest)(config);
        var deTest = new toTest.UpdateCatalogOption(data);
        var urD = url.parse(deTest.url);
        assert.equal(urD.hostname, config.connector.rest.host, "the host data is missing");
        assert.equal(urD.port,  config.connector.rest.port, "the port were missing");
        assert.equal(urD.pathname, "/v1/api/accounts/20000/cmpcatalog/1000", "path improper formed");
        assert.equal(deTest.body, JSON.stringify(data.body));
        assert.equal(deTest.method, "PUT", "The verb is incorrect");
        assert.isObject(deTest.headers, "Shall be an Object with a Key-Value for HTTP Header");
        assert.property(deTest.headers, "Content-type", "The content Type has not Set");
        assert.property(deTest.headers, "Authorization", "The Authorization Header has not set");
        assert.equal(deTest.headers["Authorization"], makeTokenBearer(data.userToken));
        done();
    });
});
