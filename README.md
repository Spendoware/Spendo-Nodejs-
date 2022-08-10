# Spendo-Nodejs-

NodeJS wrapper for making request to Spendoware API


## Installation

```bash
npm install --save spendoware
```

## Library setup

```javascript
const { Spendo, serviceTypes } = require('spendoware');
```

## Usage
Send whatsapp otp sample code

```javascript
const response = await Spendo({
        serviceType: serviceTypes.SEND_WHATSAPP_OTP,
        apiKey: '<YOUR_API_KEY>',
        data: {
                "language": "en",
                "name": "Samiul Haqq",
                "otp": "123456",
                "phoneNumber":  "01711223344",
            }
    })
    
    console.log(response);
```

## serviceTypes

```javascript
const { serviceTypes } = require('spendoware');
```

```javascript
serviceTypes.SEND_SMS,
serviceTypes.SEND_BULK_SMS,
serviceTypes.SEND_WHATSAPP_MESSAGE,
serviceTypes.SEND_WHATSAPP_OTP,
serviceTypes.SEND_VOICE_OTP,
serviceTypes.VERIFY_BVN_OTP,
serviceTypes.VERIFY_NIN_OTP
```

## Response

```javascript
{
    "success": true,
    "message": "OTP sent successfully",
    "code": 1,
    "data": {
        "otp": "123456",
        "phoneNumber": "01711223344",
        "name": "Samiul Haqq",
        "language": "en"
    }
}
```

## Error

```javascript
{
    "success": false,
    "message": "OTP sent failed",
    "code": 0,
    "data": null
}
```


## Author
[Samiu Salihu] (https://github.com/realhaqq)


## Acknowledgements
[Spendo Technologies Inc.](https://spendoware.com)


