export type Payload = {
    Amount: string,
    PhoneNumber: string,
    AccountReference: string,
    TransactionDesc: string

}

export type CallBack = {
    Body: {
        stkCallback: {
        MerchantRequestID: string,
        CheckoutRequestID: string,
        ResultCode: 0,
        ResultDesc: string,
        CallbackMetadata?: unknown
        },
    },
}

export type LipaNaMpesaPayload = {
    BusinessShortCode: string,
    Password: string,
    Timestamp: string,
    TransactionType: string,
    Amount: string,
    PartyA: string,
    PartyB: string,
    PhoneNumber: string,
    CallBackURL: string,
    AccountReference: string,
    TransactionDesc: string
}

export type PaymentResponse = {
    MerchantRequestID: string,
    CheckoutRequestID: string,
    ResponseCode: string,
    ResponseDescription: string,
    CustomerMessage: string
}

