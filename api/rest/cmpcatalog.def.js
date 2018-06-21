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
    var api = require('./api');
    var ConnectionOptions = require('./iot.connection.def')(config);
    var common = require('../../lib/common');

    var module = {};

    function GetCatalogOption(data) {
        this.pathname = api.cmpcatalog.GET_CATALOG;
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    GetCatalogOption.prototype = new ConnectionOptions();
    GetCatalogOption.prototype.constructor = GetCatalogOption;
    module.GetCatalogOption = GetCatalogOption;

    function CatalogFullOption(data) {
        this.pathname = common.buildPath(api.cmpcatalog.GET_CATALOG_FULL, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    CatalogFullOption.prototype = new ConnectionOptions();
    CatalogFullOption.prototype.constructor = CatalogFullOption;
    module.CatalogFullOption = CatalogFullOption;

    function CreateCatalogOption(data) {
        this.pathname = common.buildPath(api.cmpcatalog.CREATE_CATALOG_FULL, data.accountId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'POST';
        this.body = JSON.stringify(data.body);
    }
    CreateCatalogOption.prototype = new ConnectionOptions();
    CreateCatalogOption.prototype.constructor = CreateCatalogOption;
    module.CreateCatalogOption = CreateCatalogOption;

    function GetCatalogDetailOption(data) {
        this.pathname =  common.buildPath(api.cmpcatalog.GET_COMPONENT, data.componentId);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    GetCatalogDetailOption.prototype = new ConnectionOptions();
    GetCatalogDetailOption.prototype.constructor = GetCatalogDetailOption;
    module.GetCatalogDetailOption = GetCatalogDetailOption;

    function GetCatalogDetailFullOption(data) {
        this.pathname =  common.buildPath(api.cmpcatalog.GET_COMPONENT_FULL, [data.accountId, data.componentId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'GET';
    }
    GetCatalogDetailFullOption.prototype = new ConnectionOptions();
    GetCatalogDetailFullOption.prototype.constructor = GetCatalogDetailFullOption;
    module.GetCatalogDetailFullOption = GetCatalogDetailFullOption;

    function UpdateCatalogOption(data) {
        this.pathname = common.buildPath(api.cmpcatalog.UPDATE_COMPONENT_FULL, [data.accountId, data.componentId]);
        this.token = data.userToken;
        ConnectionOptions.call(this);
        this.method = 'PUT';
        this.body = JSON.stringify(data.body);
    }
    UpdateCatalogOption.prototype = new ConnectionOptions();
    UpdateCatalogOption.prototype.constructor = UpdateCatalogOption;
    module.UpdateCatalogOption = UpdateCatalogOption;

    return module;
}
