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
export class dashboard_service {
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
    this.serviceName = 'dashboard_service';
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
      instance = new dashboard_service(
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
      //appendnew_flow_dashboard_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: dashboard_service');

    //appendnew_flow_dashboard_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: dashboard_service');
    //appendnew_flow_dashboard_service_HttpIn
  }
  //   service flows_dashboard_service

  async sd_FkCeRscXRM3oPD0A(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_FkCeRscXRM3oPD0A',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M4vHyrwa7HOfuc7p(bh, parentSpanInst);
      //appendnew_next_sd_FkCeRscXRM3oPD0A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FkCeRscXRM3oPD0A',
        spanInst,
        'sd_FkCeRscXRM3oPD0A'
      );
    }
  }

  //appendnew_flow_dashboard_service_start

  async sd_M4vHyrwa7HOfuc7p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M4vHyrwa7HOfuc7p',
      parentSpanInst
    );
    try {
      console.log('hellooooo');
      bh.local.collection = 'orders';
      bh.local.queryCount = [
        {
          $match: {
            empId: bh.input.params.id,
          },
        },
        {
          $group: {
            _id: '$customerNumber',
            // count: { $sum: 1 }
          },
        },
        {
          $group: {
            _id: null,
            count: { $sum: 1 },
          },
        },
      ];

      bh.local.queryEarnings = [
        {
          $match: {
            empId: bh.input.params.id,
          },
        },
        {
          $group: {
            _id: null,
            totalEarnings: { $sum: '$totalAmount' },
          },
        },
      ];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4KNIJWZRFcTfsvHk(bh, parentSpanInst);
      //appendnew_next_sd_M4vHyrwa7HOfuc7p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M4vHyrwa7HOfuc7p',
        spanInst,
        'sd_M4vHyrwa7HOfuc7p'
      );
    }
  }

  async sd_4KNIJWZRFcTfsvHk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4KNIJWZRFcTfsvHk',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_ORRTtHi0etM9AAps',
        bh.local.collection,
        bh.local.queryCount,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OYXliB9251tOFWK9(bh, parentSpanInst);
      //appendnew_next_sd_4KNIJWZRFcTfsvHk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4KNIJWZRFcTfsvHk',
        spanInst,
        'sd_4KNIJWZRFcTfsvHk'
      );
    }
  }

  async sd_OYXliB9251tOFWK9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OYXliB9251tOFWK9',
      parentSpanInst
    );
    try {
      bh.local.earningsResult = await MongoPersistance.getInstance().aggregate(
        'sd_ORRTtHi0etM9AAps',
        bh.local.collection,
        bh.local.queryEarnings,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cW8fo9JyukOdfVvB(bh, parentSpanInst);
      //appendnew_next_sd_OYXliB9251tOFWK9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OYXliB9251tOFWK9',
        spanInst,
        'sd_OYXliB9251tOFWK9'
      );
    }
  }

  async sd_cW8fo9JyukOdfVvB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cW8fo9JyukOdfVvB',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const api = 'https://api.exchangerate-api.com/v4/latest/USD';
      const metalpriceapi = 'https://api.metals.live/v1/spot';

      let metalprice = await axios.get(metalpriceapi);
      console.log(metalprice.data);

      let currency = await axios.get(api);

      // const price = result[key]
      let fromRate = currency.data.rates.USD;
      let toRate = currency.data.rates.INR;
      // let convertedPrice =
      //     (((toRate / fromRate) * price).toFixed(2))/31.1035;

      const gold =
        ((toRate / fromRate) * metalprice.data[0].gold).toFixed(2) / 31.1035;
      const silver =
        ((toRate / fromRate) * metalprice.data[1].silver).toFixed(2) / 31.1035;
      const platinum =
        ((toRate / fromRate) * metalprice.data[2].platinum).toFixed(2) /
        31.1035;

      bh.local.response = {
        statusCode: 200,
        clients: bh.local.result[0]?.count,
        earnings: bh.local.earningsResult[0]?.totalEarnings,
        gold,
        silver,
        platinum,
      };

      console.log('bh.local.result');
      console.log(bh.local.result);
      console.log('bh.local.result');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cW8fo9JyukOdfVvB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cW8fo9JyukOdfVvB',
        spanInst,
        'sd_cW8fo9JyukOdfVvB'
      );
    }
  }

  async sd_ZwRl5ORsEGKqRp6L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZwRl5ORsEGKqRp6L',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: 401,
        message: 'something went wrong',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZwRl5ORsEGKqRp6L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZwRl5ORsEGKqRp6L',
        spanInst,
        'sd_ZwRl5ORsEGKqRp6L'
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
      (await this.sd_NEwxS5rtbJtdkZQi(bh, parentSpanInst))
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
  async sd_NEwxS5rtbJtdkZQi(bh, parentSpanInst) {
    const nodes = ['sd_Aw45Cat5RckiXfqv', 'sd_3ZCwK3AO86upqqe4'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ZwRl5ORsEGKqRp6L(bh, parentSpanInst);
      //appendnew_next_sd_NEwxS5rtbJtdkZQi
      return true;
    }
    return false;
  }
  //appendnew_flow_dashboard_service_Catch
}
