# mpesa-tscwrapper

Wrapper for Mpesa Daraja Api using typescript

It is still being developed,
It currently only does lipa na mpesa for sandbox applications.

Just a heads up !!

>`npm intall --save mpesa-tsc`
>`yarn add mpesa-tsc`
>`import {MpesaService} from 'mpesa-tsc'`

`let mpesaService = new MpesaService(`
    `MPESA_CONSUMER_KEY,`
    `MPESA_CONSUMER_SECRET,`
    `MPESA_SHORT_CODE,`
    `MPESA_PASSWORD,`
    `MPESA_CALLBACK_URL`
`)`

`let response = mpesaService.lipaNaMpesaOnline(`
      `Amount: '500',`
     `PartyA: '254700123456',`
     `PhoneNumber: '254700123456',`
     `AccountReference: 'YOUR RANDOM REFERENCE CODE',`
     `TransactionDesc: 'description',`
`)`
