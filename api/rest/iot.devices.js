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
    var async = require('async');
    
    var module = {};
    
    module.httpClient = require('../../lib/httpClient');
    module.adminDef = require('./admin.def')(config);

    /**
     *  @description Gets a list of all devices for an account through API: GET:/v1/api/accounts/{accountId}/devices
     *  @param data.userToken contains the access token
     *  @param data.deviceId id of the device which sends the data
     */
    module.getDevices = function(data, callback) {
        var getDevicesOpt = new module.adminDef.devices.GetDevicesOption(data);
        return module.httpClient.httpRequest(getDevicesOpt, callback);
    };


    /**
     *  @description Creates a device through API: POST:/v1/api/accounts/{accountId}/devices
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the device which sends the data
     *  @param data.body the description of the device as described in the API spec
     */
    module.createDevice = function(data, callback) {
        var createDeviceOpt = new module.adminDef.devices.CreateDeviceOption(data);
        return module.httpClient.httpRequest(createDeviceOpt, callback);
    };


    /**
     *  @description Gets details of a device through API: GET:/v1/api/accounts/{accountId}/devices/{deviceId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the device which sends the data
     *  @param data.deviceId the id of the device
     */
    module.getDeviceDetails = function(data, callback) {
        var getDeviceDetailsOpt = new module.adminDef.devices.GetDeviceDetailsOption(data);
        return module.httpClient.httpRequest(getDeviceDetailsOpt, callback);
    };


    /**
     *  @description Updates details of a device through API: PUT:/v1/api/accounts/{accountId}/devices/{deviceId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the device which sends the data
     *  @param data.deviceId the id of the device
     *  @param data.body the detail to update as described in the API spec
     */
    module.updateDeviceDetails = function(data, callback) {
        var updateDeviceDetailsOpt = new module.adminDef.devices.UpdateDeviceDetailsOption(data);
        return module.httpClient.httpRequest(updateDeviceDetailsOpt, callback);
    };


    /**
     *  @description Delete device through API: DELETE:/v1/api/accounts/{accountId}/devices/{deviceId}
     *  @param data.userToken contains the access token
     *  @param data.accountId id of the device which sends the data
     *  @param data.deviceId the id of the device
     */
    module.deleteDevice = function(data, callback) {
        var deleteDeviceOpt = new module.adminDef.devices.DeleteDeviceOption(data);
        return module.httpClient.httpRequest(deleteDeviceOpt, callback);
    };


    /**
     *  @description Activate device through API: DELETE:/v1/api/devices/{deviceId}/activation
     *  @param data.userToken contains the access token
     *  @param data.deviceId the id of the device
     *  @param data.accountId the id of the account
     *  @param data.body contains the activation code as described in API spec
     */
    module.activateDevice = function(data, callback) {
        var activateDeviceOpt = new module.adminDef.devices.ActivateDeviceOption(data);
        return module.httpClient.httpRequest(activateDeviceOpt, callback);
    };


    /**
     *  @description Add component to device through API: POST:/v1/api/accounts/{accountId}/devices/{deviceId}/components
     *  @param data.userToken contains the access token
     *  @param data.deviceId the id of the device
     *  @param data.accouontId the id of the account
     *  @param data.body contains the component definition as described in API spec
     */
    module.addDeviceComponent = function(data, callback) {
        var addDeviceComponentOpt = new module.adminDef.devices.AddDeviceComponentOption(data);
        return module.httpClient.httpRequest(addDeviceComponentOpt, callback);
    };


    /**
     *  @description Delete component of device through API: DELETE:/v1/api/accounts/{accountId}/devices/{deviceId}/components/{cid}
     *  @param data.userToken contains the access token
     *  @param data.deviceId the id of the device
     *  @param data.accountId the id of the account
     *  @param data.cid the id of the commponent
     */
    module.deleteDeviceComponent = function(data, callback) {
        var deleteDeviceComponentOpt = new module.adminDef.devices.DeleteDeviceComponentOption(data);
        return module.httpClient.httpRequest(deleteDeviceComponentOpt, callback);
    };


    /**
     *  @description Get a list of all tags from devices for the specified account through API: GET:/v1/api/accounts/{accountId}/devices/tags
     *  @param data.userToken contains the access token
     *  @param data.accouontId the id of the account
     */
    module.getDeviceTags = function(data, callback) {
        var getDeviceTagsOpt = new module.adminDef.devices.getDeviceTagsOpt(data);
        return module.httpClient.httpRequest(getDeviceTagsOpt, callback);
    }


    /**
     *  @description Get a list of all devices's attribute for the specified account through API: GET:/v1/api/accounts/{accountId}/devices/attributes
     *  @param data.userToken contains the access token
     *  @param data.accouontId the id of the account
     */
    module.getDeviceAttributes = function(data, callback) {
        var getDeviceAttributesOpt = new module.adminDef.devices.GetDevicesAttrOption(data);
        return module.httpClient.httpRequest(getDeviceAttributesOpt, callback);
    }


    /**
     *  @description Counts devices's based on filters. API: POST:/v1/api/accounts/{accountId}/devices/count
     *  @param data.userToken contains the access token
     *  @param data.accouontId the id of the account
     *  @param data.body contains the filters as described in API spec
     */
    module.countDevices = function(data, callback) {
        var countDevicesOpt = new module.adminDef.devices.CountsDevicesOption(data);
        return module.httpClient.httpRequest(countDevicesOpt, callback);
    }


    /**
     *  @description Search devices's based on filters. API: POST: /v1/api/accounts/{accountId}/devices/search
     *  @param data.userToken contains the access token
     *  @param data.accouontId the id of the account
     *  @param data.body contains the filters as described in API spec
     */
    module.searchDevices = function(data, callback) {
        var searchDevicesOpt = new module.adminDef.devices.SearchDevicesOption(data);
        return module.httpClient.httpRequest(searchDevicesOpt, callback);
    }


    /*
     * The following methods should be executed only with device-token not with user/admin token 
     *
     */


    /**
     * It passes to a callback the access token
     */
    module.registerDevice = function(data, callback) {
        var devOpt = new module.adminDef.devices.DeviceActivateOption(data);
        return module.httpClient.httpRequest(devOpt, callback);
    };
    /**
     * @description It will put a data to analytics UI using device id at data.
     * @param data the data contain the device id and metadata at body to sent
     * @param callback
     */
    module.updateMetadataDevice = function(data, callback) {
        var metaDataOpt = new module.adminDef.devices.DeviceMetadataOption(data);
        return module.httpClient.httpRequest(metaDataOpt, callback);
    };

    module.submitData = function (data, callback) {
        var submitDataOpt = new module.adminDef.devices.DeviceSubmitDataOption(data);
        return module.httpClient.httpRequest(submitDataOpt, callback);
    };

    /**
     * @description Gets a device from analytics UI using device id in data.
     * @param data contains device id and metadata in body to sent
     * @param callback
     */

    module.getDevice = function(data, callback) {
        var metaDataOpt = new module.adminDef.devices.DeviceGetOption(data);
        return module.httpClient.httpRequest(metaDataOpt, callback);
    };



    /**
     * The function will Register all components to Analytics using POST
     * if the body is an Array it will send individual post since the bulk api is
     * not ready
     * @param data
     * @param callback
     */
    module.registerComponents = function (data, callback) {
        var tmp = data.body;
        delete data.body;
        //TODO this shall be replace with Parallel
        // when the bulk operation be ready.
        if (!Array.isArray(tmp)) {
            tmp = [tmp];
        }
        async.parallel(tmp.map(function (comp) {
            var tempData = JSON.parse(JSON.stringify(data));
            tempData.body = comp;
            return function (done) {
                var compOpt = new module.adminDef.devices.DeviceComponentOption(tempData);
                module.httpClient.httpRequest(compOpt, function(err, response) {
                    done(err, response);
                });
            };
        }),
        function (err, response) {
            callback(err, response);
        });
    };

    return module;
}
