import {Mpesa, LipaNaMpesaPayload} from './mpesa-service';
import dotenv from 'dotenv';

dotenv.config();

const MPESA_CONSUMER_KEY = "randomness";
const MPESA_CONSUMER_SECRET = "randomness";
const BusinessShortCode = '174379';
const Password = 'password';
const CallBackURL = "https://calbackurl";

class PaymentService {
  private mpesa = new Mpesa(
    MPESA_CONSUMER_KEY, 
    MPESA_CONSUMER_SECRET,
    BusinessShortCode,
    Password,
    CallBackURL
  )
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
    PartyB: BusinessShortCode,
    CallBackURL,
    Password,
    BusinessShortCode
}

const testLipaNaMpesa =async ()=>{
    const lipaNaMpesa = new PaymentService()
    lipaNaMpesa.lipaNaMpesa(payload)
        .then(res=>console.log(res.data))
        .catch(e=>console.log(e.response.statusText))
}

testLipaNaMpesa()

