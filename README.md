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
    MPESA_CONSUMER_KEY,  
    MPESA_CONSUMER_SECRET,
    MPESA_SHORT_CODE,
    MPESA_PASSWORD,
    MPESA_CALLBACK_URL
)
```

``` javascript
let response = mpesaService.lipaNaMpesaOnline(
     Amount: '500',
     PartyA: '254700123456',
     PhoneNumber: '254700123456',
     AccountReference: 'YOUR RANDOM REFERENCE CODE',
     TransactionDesc: 'description',
).then(res=>res).catch(err=>err)
```  
