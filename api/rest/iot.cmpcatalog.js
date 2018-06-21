/*
Copyright (c) 2017, Intel Corporation

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
    var module = {};
    
    module.httpClient = require('../../lib/httpClient');
    module.CatalogDef = require('./cmpcatalog.def')(config);
    /*
     * The following methods should be executed only with device-token not with user/admin token 
     *
     */
    module.getCatalog = function (data, callback) {
        var catalog = new module.CatalogDef.GetCatalogOption(data);
        return module.httpClient.httpRequest(catalog, callback);
    };

    module.getCatalogWithFullPath = function (data, callback) {
        var catalog = new module.CatalogDef.CatalogFullOption(data);
        return module.httpClient.httpRequest(catalog, callback);
    };

    module.createCatalog = function (data, callback) {
        var createCatalogOpt = new module.CatalogDef.CreateCatalogOption(data);
        return module.httpClient.httpRequest(createCatalogOpt, callback);
    };

    module.getCatalogDetail = function (data, callback) {
        var getCatalogDetailOpt = new module.CatalogDef.GetCatalogDetailOption(data);
        return module.httpClient.httpRequest(getCatalogDetailOpt, callback);
    };

    module.getCatalogDetailWithFullPath = function (data, callback) {
        var getCatalogDetailOpt = new module.CatalogDef.GetCatalogDetailFullOption(data);
        return module.httpClient.httpRequest(getCatalogDetailOpt, callback);
    };

    module.updateCatalog = function (data, callback) {
        var updateCatalogOpt = new module.CatalogDef.UpdateCatalogOption(data);
        return module.httpClient.httpRequest(updateCatalogOpt, callback);
    };
    
    return module;
}
