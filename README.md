# OISP SDK for Node.js

## SparkPlugB standard support added

1. SparkplugB standard uses MQTT protocol to exchange data

Current implementation of library handles sending following requests

- Node Birth message
- Device Birth Message
- Data message

Node Birth/Device Birth and Data message have same format with change in contents of metrics.

Data message looks like below:

``` bash
    var cid = "0c574252-31d5-4b76-bce6-53f2c56b544d";
    var DataMessage = {
            timestamp: 12345,
            metrics: [{
                name : "temp",
                alias : cid,
                timestamp : 12345,
                dataType : "float",
                value: 123
            }],
            seq: 1
         };
    ```
