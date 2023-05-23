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
export class GetProduct_services {
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
    this.serviceName = 'GetProduct_services';
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
      instance = new GetProduct_services(
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
      //appendnew_flow_GetProduct_services_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: GetProduct_services');

    //appendnew_flow_GetProduct_services_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: GetProduct_services');
    //appendnew_flow_GetProduct_services_HttpIn
  }
  //   service flows_GetProduct_services

  async getProduct_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getProduct_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VAIuFlC02DV1qSjQ(bh, parentSpanInst);
      //appendnew_next_getProduct_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6WxBgaWx8glvoGSC',
        spanInst,
        'getProduct_start'
      );
    }
  }

  //appendnew_flow_GetProduct_services_start

  async sd_VAIuFlC02DV1qSjQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VAIuFlC02DV1qSjQ',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { _id: bh.input.params.id };
      console.log(bh.input.params);
      bh.local.collection = 'product';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zWXgFDOXUZKC5jX4(bh, parentSpanInst);
      //appendnew_next_sd_VAIuFlC02DV1qSjQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VAIuFlC02DV1qSjQ',
        spanInst,
        'sd_VAIuFlC02DV1qSjQ'
      );
    }
  }

  async sd_zWXgFDOXUZKC5jX4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zWXgFDOXUZKC5jX4',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_V3YXtbaLFEggrLWv',
        bh.local.collection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NtGwxNUiN1yYH9dV(bh, parentSpanInst);
      //appendnew_next_sd_zWXgFDOXUZKC5jX4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zWXgFDOXUZKC5jX4',
        spanInst,
        'sd_zWXgFDOXUZKC5jX4'
      );
    }
  }

  async sd_NtGwxNUiN1yYH9dV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NtGwxNUiN1yYH9dV',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.result.length,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qzweo16bfoTVvVXt(bh, parentSpanInst);
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
        bh = await this.sd_wq7A505tzkRSNwXH(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NtGwxNUiN1yYH9dV',
        spanInst,
        'sd_NtGwxNUiN1yYH9dV'
      );
    }
  }

  async sd_qzweo16bfoTVvVXt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qzweo16bfoTVvVXt',
      parentSpanInst
    );
    try {
      const product = bh.local.result[0];
      const imageData = {
        data: product.image[0].buffer.toString('base64'),
        contentType: product.image[0].mimetype,
      };

      const resp = {
        id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: imageData,
        weight: product.gram,
        category: product.category,
      };

      bh.local.response = {
        statusCode: 200,
        result: resp,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qzweo16bfoTVvVXt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qzweo16bfoTVvVXt',
        spanInst,
        'sd_qzweo16bfoTVvVXt'
      );
    }
  }

  async sd_wq7A505tzkRSNwXH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wq7A505tzkRSNwXH',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wq7A505tzkRSNwXH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wq7A505tzkRSNwXH',
        spanInst,
        'sd_wq7A505tzkRSNwXH'
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
  //appendnew_flow_GetProduct_services_Catch
}
