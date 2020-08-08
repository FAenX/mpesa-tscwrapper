# mpesa-tscwrapper

Wrapper for Mpesa Daraja Api using typescript

It is still being developed,
It currently only does lipa na mpesa for sandbox applications.

Just a heads up !!

``` javascript
npm intall --save mpesa-tsc
yarn add mpesa-tsc  
```

``` javascript
import {MpesaService} from 'mpesa-tsc'
```

``` javascript
let mpesaService = new MpesaService(
    CONSUMER_KEY,  /* get this from mpesa */
    CONSUMER_SECRET,
    SANDBOX_SHORT_CODE,
    'random password',
    CALLBACK_URL /* to get responses from mpesa */
)
```

``` javascript
let response = mpesaService.lipaNaMpesaOnline({
     Amount: '500',
     PartyA: '254700123456',
     PhoneNumber: '254700123456',
     AccountReference: 'YOUR RANDOM REFERENCE CODE',
     TransactionDesc: 'description',
})
```  
