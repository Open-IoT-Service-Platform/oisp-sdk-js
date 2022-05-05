/*
 Copyright (c) 2022, Intel Corporation

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

var assert =  require('chai').assert,
    rewire = require('rewire');

var fileToTest = "../lib/proxies/iot.spb.mqtt.js";

describe(fileToTest, function() {
    var toTest = rewire(fileToTest);
    var conf ={
        "connector": {
            "rest": {
                "host": "frontend",
                "port": 4001,
                "protocol": "http",
                "strictSSL": false,
                "timeout": 30000,
                "proxy": {
                    "host": false,
                    "port": false
                }
            },
            "mqtt": {
                "host": "emqx",
                "port": 1883,
                "qos": 1,
                "retain": false,
                "secure": false,
                "strictSSL": false,
                "retries": 5,
                "sparkplugB": true,
                "version": "spBv1.0"
            }
        }
    };
    var deviceProfile ={
        groupId    : "account_id",
        edgeNodeId : "gateway_id",
        clientId   : "device_name",
        deviceId   : "device_id",         
        componentMetric : []
    };
    it('Shall send NodeBirth to Broker using MQTT with SpB specific format >', function(done) {
        var broker = {
            bind : function() {
                return true;
            },
            on : function() {
                return true;
            },
            unbind : function() {
                return true;
            },
            publish : function(topics,payload) {
                assert.equal (payload.seq,0,"Seq number of birth message is not 0")
                assert.equal(topics,"spBv1.0/account_id/NBIRTH/gateway_id/","NBIRTH message has wrong topic")
                return true;               
            },
            buildPath : function() {
                return true;
            }
        };

        var IoTKitSparkplugBCloudTest = new toTest.init(conf);
        IoTKitSparkplugBCloudTest.client = broker;
       
        IoTKitSparkplugBCloudTest.nodeBirth(deviceProfile,function(err) {
        })
        done();
    });

    it('Shall send DeviceBirth to Broker using MQTT with SpB specific format >', function(done) {
        var broker = {
            bind : function() {
                return true;
            },
            on : function() { 
                return true;
            },
            unbind : function() {
                return true;
            },
            publish : function(topics,payload) {
                assert.isAbove(payload.seq,0,"Seq number of birth message is not 0")
                assert.equal(topics,"spBv1.0/account_id/DBIRTH/gateway_id/device_id","NBIRTH message has wrong topic")
                return true;
                
            },
            buildPath : function() {
                return true;
            }
        };

        var IoTKitSparkplugBCloudTest = new toTest.init(conf);
        IoTKitSparkplugBCloudTest.client = broker;
       
        IoTKitSparkplugBCloudTest.deviceBirth(deviceProfile,function(err) {
        })
        done();
    });
    
    it('Shall send Data to Broker using MQTT with SpB specific format ', function(done) {
        var cid = "12398945"
        var broker = {
            bind : function() {
                return true;
            },
            on : function() {
                return true;
            },
            unbind : function() {
                return true;
            },
            publish : function(topics,payloads) {
                assert.equal(topics,"spBv1.0/account_id/DDATA/gateway_id/device_id","NBIRTH message has wrong topic")
                assert.isAtLeast(payloads.seq, 1,"Data metrics is changed");
                return true;               
            },
            buildPath : function() { 
                return true;
            }
        };
        var metrics= [{
            name : "temp",
            alias : cid,
            timestamp : 12345,
            dataType : "Uint64",
            value: 123
        }]
        var IoTKitSparkplugBCloudTest = new toTest.init(conf);
        IoTKitSparkplugBCloudTest.client = broker;
       
        IoTKitSparkplugBCloudTest.data(deviceProfile,metrics,function(err) {
        })
        done();
    });
    
});
