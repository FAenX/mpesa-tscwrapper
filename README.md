# mpesa-tscwrapper

Wrapper for Mpesa Daraja Api using typescript

``` javascript
npm intall --save mpesa-tsc
yarn add mpesa-tsc  
```

``` javascript
import {Mpesa} from 'mpesa-tsc'
```

``` javascript
let mpesaService = new Mpesa(
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
