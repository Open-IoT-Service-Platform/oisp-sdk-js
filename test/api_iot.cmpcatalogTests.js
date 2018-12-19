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

var fileToTest = "../api/rest/iot.cmpcatalog.js";

describe(fileToTest, function() {
    var config = {
        connector: {
            rest: {
                protocol: "http",
                host: "myapi",
                port: 1000
            }
        },
    };
    var toTest = require(fileToTest)(config);
    var logger  = {
        info : function() {},
        error : function() {},
        debug : function() {}
    };
    console.debug = function() {
        console.log(arguments);
    };

    var Option = {
        GetCatalogOption: {},
        CatalogFullOption: {},
        CreateCatalogOption: {},
        GetCatalogDetailOption: {},
        GetCatalogDetailFullOption: {},
        UpdateCatalogOption: {}
    };

    var httpClientMock = {
        httpRequest : {},
        httpClient: {}
    };
    var responseData = {
        statusCode : 200,
        data : ""
    };

    it('Shall get list component types for an account >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.GetCatalogOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.getCatalog(data, callBack);
    });

    it('Shall get list component types for an account with full path >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.CatalogFullOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.getCatalogWithFullPath(data, callBack);
    });

    it('Shall create a new component type and control the Response from device Registration >', function(done) {

        var optData = {
            method: 'POST',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.CreateCatalogOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.createCatalog(data, callBack);
    });

    it('Shall get component detail >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.GetCatalogDetailOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.getCatalogDetail(data, callBack);
    });

    it('Shall get component detail with full path >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.GetCatalogDetailFullOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.getCatalogDetailWithFullPath(data, callBack);
    });


    it('Shall update component type>', function(done) {

        var optData = {
            method: 'PUT',
            host: "myhost",
            body: "mybody"
        };

        var data = {
            body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.UpdateCatalogOption = function (catalog) {
            assert.deepEqual(catalog, data, "The Data is not oki");
            return optData;
        };
        httpClientMock.httpRequest = function (opt, cb) {
            assert.deepEqual(opt, optData, "the option object were missed");
            cb(reData);
        };
        var callBack = function (response) {
            assert.isNotNull(response, "The Response were missing");
            assert.deepEqual(response, reData, "The Data were missing");
            done();
        };
        toTest.httpClient = httpClientMock;
        toTest.CatalogDef = Option;
        toTest.updateCatalog(data, callBack);
    });
});
