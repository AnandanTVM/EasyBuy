let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Order_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'Order_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new Order_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_Order_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Order_service');

    //appendnew_flow_Order_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Order_service');
    //appendnew_flow_Order_service_HttpIn
  }
  //   service flows_Order_service

  async createOrder(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createOrder',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sKZEpg2Lcpzxyf7h(bh, parentSpanInst);
      //appendnew_next_createOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W0jb99e3SDDuGPwT',
        spanInst,
        'createOrder'
      );
    }
  }

  async createPlaceOrder(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createPlaceOrder',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OvxQSueyt0VP7pq2(bh, parentSpanInst);
      //appendnew_next_createPlaceOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_INYpElB6JFKWicC0',
        spanInst,
        'createPlaceOrder'
      );
    }
  }

  async paymentLink_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'paymentLink_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mnvl8BUp5724h8zF(bh, parentSpanInst);
      //appendnew_next_paymentLink_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wimz3oLAKbgRhAZ6',
        spanInst,
        'paymentLink_start'
      );
    }
  }

  async fetchStatus(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchStatus',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Eom7enxfdhb6skvm(bh, parentSpanInst);
      //appendnew_next_fetchStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ns50FEcgidkSsDHs',
        spanInst,
        'fetchStatus'
      );
    }
  }

  async getAllPayment(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getAllPayment',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tURX9dKreOTTv8nv(bh, parentSpanInst);
      //appendnew_next_getAllPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EZW6UqYxr9r4SINL',
        spanInst,
        'getAllPayment'
      );
    }
  }

  //appendnew_flow_Order_service_start

  async sd_sKZEpg2Lcpzxyf7h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKZEpg2Lcpzxyf7h',
      parentSpanInst
    );
    try {
      bh.local.collection = 'orders';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jwEAGCZ9GGY1zidG(bh, parentSpanInst);
      //appendnew_next_sd_sKZEpg2Lcpzxyf7h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKZEpg2Lcpzxyf7h',
        spanInst,
        'sd_sKZEpg2Lcpzxyf7h'
      );
    }
  }

  async sd_jwEAGCZ9GGY1zidG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jwEAGCZ9GGY1zidG',
      parentSpanInst
    );
    try {
      console.log(bh.input.body, 'heyyyyy');
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      instance.paymentLink
        .create({
          amount: 500,
          currency: 'INR',
          accept_partial: true,
          first_min_partial_amount: 100,
          description: 'For XYZ purpose',
          customer: {
            contact: `+91${bh.input.body.userPhoneNumber}`,
          },
          notify: {
            sms: true,
            email: false,
            whatsapp: true,
          },
          reminder_enable: true,
          notes: {
            policy_name: 'Jeevan Bima',
          },
          callback_url: 'https://google.com',
          callback_method: 'get',
        })
        .then((response) => {
          console.log(response);
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h1zWCBvVjFRPm8pT(bh, parentSpanInst);
      //appendnew_next_sd_jwEAGCZ9GGY1zidG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jwEAGCZ9GGY1zidG',
        spanInst,
        'sd_jwEAGCZ9GGY1zidG'
      );
    }
  }

  async sd_h1zWCBvVjFRPm8pT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h1zWCBvVjFRPm8pT',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_KxxXysykAV7hiPzw',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UvRfjdHvQRQptRH3(bh, parentSpanInst);
      //appendnew_next_sd_h1zWCBvVjFRPm8pT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h1zWCBvVjFRPm8pT',
        spanInst,
        'sd_h1zWCBvVjFRPm8pT'
      );
    }
  }

  async sd_UvRfjdHvQRQptRH3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UvRfjdHvQRQptRH3',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        body: 'order created successfully!',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_UvRfjdHvQRQptRH3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UvRfjdHvQRQptRH3',
        spanInst,
        'sd_UvRfjdHvQRQptRH3'
      );
    }
  }

  async sd_toQJu3fzKDAwNtjY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_toQJu3fzKDAwNtjY',
      parentSpanInst
    );
    try {
      bh.local.response = bh.error;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_toQJu3fzKDAwNtjY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_toQJu3fzKDAwNtjY',
        spanInst,
        'sd_toQJu3fzKDAwNtjY'
      );
    }
  }

  async sd_OvxQSueyt0VP7pq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OvxQSueyt0VP7pq2',
      parentSpanInst
    );
    try {
      // bh.local.collection = 'orders';

      const arr = bh.input.body.product.map((p) => p.productid);

      bh.local.query = { _id: { $in: arr } };
      bh.local.collection = 'product';
      bh.local.orderCollection = 'orders';
      bh.local.couponCollection = 'coupon';
      bh.local.findQuery = { couponcode: bh.input.body.couponcode };

      bh.local.filter = {
        projection: {
          price: 1,
        },
      };
      // bh.local.result = arr
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hsAWeAbCea6hdUIm(bh, parentSpanInst);
      //appendnew_next_sd_OvxQSueyt0VP7pq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OvxQSueyt0VP7pq2',
        spanInst,
        'sd_OvxQSueyt0VP7pq2'
      );
    }
  }

  async sd_hsAWeAbCea6hdUIm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hsAWeAbCea6hdUIm',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_KxxXysykAV7hiPzw',
        bh.local.collection,
        bh.local.query,
        bh.local.filter
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FOsGPdWIHGGmXA9i(bh, parentSpanInst);
      //appendnew_next_sd_hsAWeAbCea6hdUIm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hsAWeAbCea6hdUIm',
        spanInst,
        'sd_hsAWeAbCea6hdUIm'
      );
    }
  }

  async sd_FOsGPdWIHGGmXA9i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FOsGPdWIHGGmXA9i',
      parentSpanInst
    );
    try {
      let arr = bh.input.body.product.map((x) => {
        bh.local.result.find((y) => {
          if (x.productid == y._id) {
            x.price = y.price;
          }
        });
        return x;
      });

      bh.local.total = arr.reduce((acc, curr) => {
        acc = acc + curr.price * curr.count;
        return acc;
      }, 0);

      bh.local.orderCreated = {
        customerNumber: bh.input.body.userPhoneNumber,
        empId: bh.input.body.employeeId,
        totalAmount: bh.local.total,
        product: arr,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RyHxkn3mM03ojwVc(bh, parentSpanInst);
      //appendnew_next_sd_FOsGPdWIHGGmXA9i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FOsGPdWIHGGmXA9i',
        spanInst,
        'sd_FOsGPdWIHGGmXA9i'
      );
    }
  }

  async sd_RyHxkn3mM03ojwVc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RyHxkn3mM03ojwVc',
      parentSpanInst
    );
    try {
      bh.local.couponFind = await MongoPersistance.getInstance().find(
        'sd_KxxXysykAV7hiPzw',
        bh.local.couponCollection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EAwKd0POgk9hA73G(bh, parentSpanInst);
      //appendnew_next_sd_RyHxkn3mM03ojwVc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RyHxkn3mM03ojwVc',
        spanInst,
        'sd_RyHxkn3mM03ojwVc'
      );
    }
  }

  async sd_EAwKd0POgk9hA73G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EAwKd0POgk9hA73G',
      parentSpanInst
    );
    try {
      console.log(bh.local.couponFind);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.check(bh, parentSpanInst);
      //appendnew_next_sd_EAwKd0POgk9hA73G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EAwKd0POgk9hA73G',
        spanInst,
        'sd_EAwKd0POgk9hA73G'
      );
    }
  }

  async check(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('check', parentSpanInst);
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.couponFind,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vT9yTOhfVzbRebuU(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nfKIcROGnml7DKiw(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1dXzTSJPrxwT8jT9',
        spanInst,
        'check'
      );
    }
  }

  async sd_vT9yTOhfVzbRebuU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vT9yTOhfVzbRebuU',
      parentSpanInst
    );
    try {
      const discountPercentage = bh.local.couponFind[0]?.percentage;

      const totalAmount = bh.local.orderCreated.totalAmount;
      const discoutedPrice =
        totalAmount - (discountPercentage / 100) * totalAmount;

      bh.local.orderCreated.totalAmount = discoutedPrice;
      bh.local.orderCreated.couponDetails = bh.local.couponFind[0]?.percentage;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dLjaMZvXzPtf5h90(bh, parentSpanInst);
      //appendnew_next_sd_vT9yTOhfVzbRebuU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vT9yTOhfVzbRebuU',
        spanInst,
        'sd_vT9yTOhfVzbRebuU'
      );
    }
  }

  async sd_dLjaMZvXzPtf5h90(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dLjaMZvXzPtf5h90',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      // instance.paymentLink.create({
      //   amount: Math.round(bh.local.orderCreated.totalAmount),
      //   currency: "INR",
      //   accept_partial: true,
      //   first_min_partial_amount: 100,
      //   description: "For XYZ purpose",
      //   customer: {
      //     contact: `+91${bh.input.body.userPhoneNumber}`
      //   },
      //   notify: {
      //     sms: true,
      //     email: false,
      //     whatsapp: true
      //   },
      //   reminder_enable: true,
      //   notes: {
      //     policy_name: "Jeevan Bima"
      //   },
      //   callback_url: "https://google.com",
      //   callback_method: "get"
      // }).then((response) => {
      //   console.log(response)
      //   bh.local.result = response;
      // })

      const resp = await instance.paymentLink.create({
        amount: Math.round(bh.local.orderCreated.totalAmount),
        currency: 'INR',
        accept_partial: true,
        first_min_partial_amount: 100,
        description: 'For XYZ purpose',
        customer: {
          contact: `+91${bh.input.body.userPhoneNumber}`,
        },
        notify: {
          sms: true,
          email: false,
          whatsapp: true,
        },
        reminder_enable: true,
        notes: {
          policy_name: 'Jeevan Bima',
        },
        callback_url: 'https://google.com',
        callback_method: 'get',
      });

      bh.local.razorresp = resp;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_96uwzGy0LPvvMLsW(bh, parentSpanInst);
      //appendnew_next_sd_dLjaMZvXzPtf5h90
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dLjaMZvXzPtf5h90',
        spanInst,
        'sd_dLjaMZvXzPtf5h90'
      );
    }
  }

  async sd_96uwzGy0LPvvMLsW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_96uwzGy0LPvvMLsW',
      parentSpanInst
    );
    try {
      bh.local.orderCreated.paymentStatus = bh.local.razorresp.status;
      bh.local.orderCreated.paymentid = bh.local.razorresp.id;

      // bh.local.orderCreated.product.forEach((x)=>{
      //     x.productid = ObjectId(x.productid)
      // })

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fXaPLJ979vQK6InX(bh, parentSpanInst);
      //appendnew_next_sd_96uwzGy0LPvvMLsW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_96uwzGy0LPvvMLsW',
        spanInst,
        'sd_96uwzGy0LPvvMLsW'
      );
    }
  }

  async sd_fXaPLJ979vQK6InX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fXaPLJ979vQK6InX',
      parentSpanInst
    );
    try {
      bh.local.insertresp = await MongoPersistance.getInstance().insertOne(
        'sd_KxxXysykAV7hiPzw',
        bh.local.orderCollection,
        bh.local.orderCreated,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_glvzyS3Aim4tZguT(bh, parentSpanInst);
      //appendnew_next_sd_fXaPLJ979vQK6InX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fXaPLJ979vQK6InX',
        spanInst,
        'sd_fXaPLJ979vQK6InX'
      );
    }
  }

  async sd_glvzyS3Aim4tZguT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_glvzyS3Aim4tZguT',
      parentSpanInst
    );
    try {
      bh.local.result = bh.local.orderCreated;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_glvzyS3Aim4tZguT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_glvzyS3Aim4tZguT',
        spanInst,
        'sd_glvzyS3Aim4tZguT'
      );
    }
  }

  async sd_nfKIcROGnml7DKiw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nfKIcROGnml7DKiw',
      parentSpanInst
    );
    try {
      bh.local.orderCreated.couponDetails = 0;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dLjaMZvXzPtf5h90(bh, parentSpanInst);
      //appendnew_next_sd_nfKIcROGnml7DKiw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nfKIcROGnml7DKiw',
        spanInst,
        'sd_nfKIcROGnml7DKiw'
      );
    }
  }

  async sd_Mnvl8BUp5724h8zF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mnvl8BUp5724h8zF',
      parentSpanInst
    );
    try {
      console.log('heyyyyy');
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      instance.paymentLink
        .create({
          amount: 500,
          currency: 'INR',
          accept_partial: true,
          first_min_partial_amount: 100,
          description: 'For XYZ purpose',
          customer: {
            name: 'Gaurav Kumar',
            email: 'muhammedrishal025@gmail.com',
            contact: '+918590265058',
          },
          notify: {
            sms: true,
            email: false,
            whatsapp: true,
          },
          reminder_enable: true,
          notes: {
            policy_name: 'Jeevan Bima',
          },
          callback_url: 'https://example-callback-url.com/',
          callback_method: 'get',
        })
        .then((response) => {
          console.log(response);
        });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Mnvl8BUp5724h8zF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mnvl8BUp5724h8zF',
        spanInst,
        'sd_Mnvl8BUp5724h8zF'
      );
    }
  }

  async sd_Eom7enxfdhb6skvm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Eom7enxfdhb6skvm',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      bh.local.resultStatus = await instance.paymentLink.fetch(
        'plink_Ln3IBLtTfIslTw'
      );
      console.log(bh.local.resultStatus);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Eom7enxfdhb6skvm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Eom7enxfdhb6skvm',
        spanInst,
        'sd_Eom7enxfdhb6skvm'
      );
    }
  }

  async sd_tURX9dKreOTTv8nv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tURX9dKreOTTv8nv',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      bh.local.allPaymentData = await instance.paymentLink.all();
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_tURX9dKreOTTv8nv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tURX9dKreOTTv8nv',
        spanInst,
        'sd_tURX9dKreOTTv8nv'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_YpCd3oOPOKaVdUGq(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_YpCd3oOPOKaVdUGq(bh, parentSpanInst) {
    const nodes = ['sd_hPw3YDcFCVuCLedU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_toQJu3fzKDAwNtjY(bh, parentSpanInst);
      //appendnew_next_sd_YpCd3oOPOKaVdUGq
      return true;
    }
    return false;
  }
  //appendnew_flow_Order_service_Catch
}
