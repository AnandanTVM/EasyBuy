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
export class GetUser_services {
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
    this.serviceName = 'GetUser_services';
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
      instance = new GetUser_services(
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
      //appendnew_flow_GetUser_services_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: GetUser_services');

    //appendnew_flow_GetUser_services_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: GetUser_services');
    //appendnew_flow_GetUser_services_HttpIn
  }
  //   service flows_GetUser_services

  async getUser_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getUser_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I24y9Ch12PRrCrcQ(bh, parentSpanInst);
      //appendnew_next_getUser_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0jjgIEvlurBhhXxl',
        spanInst,
        'getUser_start'
      );
    }
  }

  //appendnew_flow_GetUser_services_start

  async sd_I24y9Ch12PRrCrcQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I24y9Ch12PRrCrcQ',
      parentSpanInst
    );
    try {
      const regex = /^\d{10}$/;

      if (regex.test(bh.input.params.phone + '')) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }

      console.log('shinas');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iLAjHTbHIm4thnN1(bh, parentSpanInst);
      //appendnew_next_sd_I24y9Ch12PRrCrcQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I24y9Ch12PRrCrcQ',
        spanInst,
        'sd_I24y9Ch12PRrCrcQ'
      );
    }
  }

  async sd_iLAjHTbHIm4thnN1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iLAjHTbHIm4thnN1',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FL7vOEO7RX2H3vfa(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_r3zZ2gR6JQjk9OD5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iLAjHTbHIm4thnN1',
        spanInst,
        'sd_iLAjHTbHIm4thnN1'
      );
    }
  }

  async sd_FL7vOEO7RX2H3vfa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FL7vOEO7RX2H3vfa',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { mobile: bh.input.params.phone };
      bh.local.collection = 'customer';
      console.log(bh.local.findQuery);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ndddTkforYR4JLlO(bh, parentSpanInst);
      //appendnew_next_sd_FL7vOEO7RX2H3vfa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FL7vOEO7RX2H3vfa',
        spanInst,
        'sd_FL7vOEO7RX2H3vfa'
      );
    }
  }

  async sd_ndddTkforYR4JLlO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ndddTkforYR4JLlO',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_bznVYbBzndwxigWl',
        bh.local.collection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_13zT8OogjourUhVg(bh, parentSpanInst);
      //appendnew_next_sd_ndddTkforYR4JLlO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ndddTkforYR4JLlO',
        spanInst,
        'sd_ndddTkforYR4JLlO'
      );
    }
  }

  async sd_13zT8OogjourUhVg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_13zT8OogjourUhVg',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.result,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Oi4tk72cAs0p2kFc(bh, parentSpanInst);
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
        bh = await this.sd_OZQihdxZitbXfpd5(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_13zT8OogjourUhVg',
        spanInst,
        'sd_13zT8OogjourUhVg'
      );
    }
  }

  async sd_Oi4tk72cAs0p2kFc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Oi4tk72cAs0p2kFc',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Oi4tk72cAs0p2kFc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Oi4tk72cAs0p2kFc',
        spanInst,
        'sd_Oi4tk72cAs0p2kFc'
      );
    }
  }

  async sd_OZQihdxZitbXfpd5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OZQihdxZitbXfpd5',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OZQihdxZitbXfpd5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OZQihdxZitbXfpd5',
        spanInst,
        'sd_OZQihdxZitbXfpd5'
      );
    }
  }

  async sd_r3zZ2gR6JQjk9OD5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r3zZ2gR6JQjk9OD5',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'number is  not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_r3zZ2gR6JQjk9OD5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r3zZ2gR6JQjk9OD5',
        spanInst,
        'sd_r3zZ2gR6JQjk9OD5'
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
      false
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
  //appendnew_flow_GetUser_services_Catch
}
