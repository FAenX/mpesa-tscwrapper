import {MpesaService, LipaNaMpesaPayload} from './mpesa-service';
import dotenv from 'dotenv';

dotenv.config();

const MPESA_CONSUMER_KEY = "randomness";
const MPESA_CONSUMER_SECRET = "randomness";

class PaymentService {
  private mpesa = new MpesaService(MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET)
  constructor() {}

  async lipaNaMpesa(payload: LipaNaMpesaPayload) {
    return await this.mpesa.lipaNaMpesaOnline(payload);
  }
}

const payload: LipaNaMpesaPayload = {
    Amount: "20",
    PhoneNumber: '254712345675',
    AccountReference: `Name`,
    TransactionDesc: 'Remark',
    Timestamp: '20200712',
    TransactionType: 'CustomerPayBillOnline',
    PartyA: '254712345675',
    PartyB: "174379",
    CallBackURL: "http://url.com/mpesa-callback",
    Password: "some password",
    BusinessShortCode: "174379"
}

const testLipaNaMpesa =async ()=>{
    const lipaNaMpesa = new PaymentService()
    lipaNaMpesa.lipaNaMpesa(payload)
        .then(res=>console.log(res.data))
        .catch(e=>console.log(e.response.statusText))
}

testLipaNaMpesa()

