import axios from 'axios';
import moment from 'moment';
import dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line max-len
const MPESA_SANDBOX_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const MPESA_PRODUCTION_URL = '';
// eslint-disable-next-line max-len
const MPESA_SANDBOX_AUTH_URL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';



export interface LipaNaMpesaPayload {
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

export class MpesaService {
  private consumerKey: string
  private consumerSecret: string
  private BusinessShortCode: string;
  private Password: string;
  private CallBackURL: string;

  constructor(
    consumerKey: string, 
    consumerSecret: string,
    BusinessShortCode: string,
    Password: string,
    CallBackURL: string,

  ) {
    this.consumerKey = consumerKey;
    this.consumerSecret = consumerSecret;
    this.BusinessShortCode = BusinessShortCode;
    this.Password = Password;
    this.CallBackURL = CallBackURL;
  }

  private async authenticate() {
    const auth = 'Basic ' + Buffer.from(
      this.consumerKey + ':' + this.consumerSecret,
    ).toString('base64');
    const config = {headers: {'Authorization': auth}};
    const res = await axios.get(MPESA_SANDBOX_AUTH_URL, config);
    return res.data.access_token;
  }

  async lipaNaMpesaOnline(payload: Partial<LipaNaMpesaPayload>) {
    const Timestamp = moment().format('YYYYMMDDhhmmss');
    const password = Buffer.from(this.BusinessShortCode + this.Password + Timestamp)
      .toString('base64');

    const TransactionType: string = 'CustomerPayBillOnline';
    const ACCESS_TOKEN = await this.authenticate();
    const auth = 'Bearer ' + ACCESS_TOKEN;

    const data: LipaNaMpesaPayload = {
      BusinessShortCode: this.BusinessShortCode,
      Password: password,
      Timestamp,
      TransactionType,
      Amount: payload.Amount + '',
      PartyA: payload.PhoneNumber + '',
      PartyB: this.BusinessShortCode,
      PhoneNumber: payload.PhoneNumber + '',
      CallBackURL: this.CallBackURL,
      AccountReference: payload.AccountReference + '',
      TransactionDesc: payload.TransactionDesc + '',

    };

    const res = axios.post(
      MPESA_SANDBOX_URL,
      data,
      {headers: {'Authorization': auth}},
    );

    return await res.then(res=>{
      return res.data;
    })
      .catch(response=>{
        return {
          status: response.response.status,
          data: response.response.data,
        };
      });
  }
}

