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

var fileToTest = "../api/rest/iot.invitation.js";

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
        GetAllInvitationsOption:{},
        CreateInvitationOption:{},
        GetInvitationsOption:{},
        DeleteInvitationsOption:{},
        AcceptInvitationOption:{}
    };
    var httpClientMock = {
        httpRequest : {},
        httpClient: {}
    };

    it('Shall Get all invitations >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {accountId : "aid",
                    userToken: "user Token"
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.GetAllInvitationsOption = function (invitation) {
            assert.deepEqual(invitation, data, "The Data is not oki");
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
        toTest.adminDef.invitation = Option;
        toTest.getAllInvitations(data, callBack);
    });
    it('Shall create invitation >', function(done) {

        var optData = {
            method: 'POST',
            host: "myhost",
            body: "mybody"
        };

        var data = {accountId : "aid",
                    userToken: "user Token",
                    body: { data: "message" }
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.CreateInvitationOption = function (invitation) {
            assert.deepEqual(invitation, data, "The Data is not oki");
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
        toTest.adminDef.invitation = Option;
        toTest.createInvitation(data, callBack);
    });
    it('Shall get invitations sent to specific user >', function(done) {

        var optData = {
            method: 'GET',
            host: "myhost",
            body: "mybody"
        };

        var data = {accountId : "aid",
                    email: "test@intel.com",
                    userToken: "user Token"
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.GetInvitationsOption = function (invitation) {
            assert.deepEqual(invitation, data, "The Data is not oki");
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
        toTest.adminDef.invitation = Option;
        toTest.getInvitations(data, callBack);
    });
    it('Shall delete invitations >', function(done) {

        var optData = {
            method: 'DELETE',
            host: "myhost",
            body: "mybody"
        };

        var data = {accountId : "aid",
                    email: "test@intel.com",
                    userToken: "user Token"
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.DeleteInvitationsOption = function (invitation) {
            assert.deepEqual(invitation, data, "The Data is not oki");
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
        toTest.adminDef.invitation = Option;
        toTest.deleteInvitations(data, callBack);
    });
    it('Shall accept invitations >', function(done) {

        var optData = {
            method: 'PUT',
            host: "myhost",
            body: "mybody"
        };

        var data = {accountId : "aid",
                    email: "test@intel.com",
                    invitedId: "iid",
                    userToken: "user Token"
        };
        var reData = {
            x : 10,
            y : 220,
            ar : ["222", "223"]
        };

        Option.AcceptInvitationOption = function (invitation) {
            assert.deepEqual(invitation, data, "The Data is not oki");
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
        toTest.adminDef.invitation = Option;
        toTest.acceptInvitation(data, callBack);
    });
});