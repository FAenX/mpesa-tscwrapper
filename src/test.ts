import {MpesaService, LipaNaMpesaPayload} from './mpesa-service';
import dotenv from 'dotenv';

dotenv.config();

const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY + '';
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET + '';

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

const lipaNaMpesa = new PaymentService().lipaNaMpesa(payload)
console.log(lipaNaMpesa)