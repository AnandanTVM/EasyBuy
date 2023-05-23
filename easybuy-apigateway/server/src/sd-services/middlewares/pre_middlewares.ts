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
//append_imports_end
export class pre_middlewares {
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
    this.serviceName = 'pre_middlewares';
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
      instance = new pre_middlewares(
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
      //appendnew_flow_pre_middlewares_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: pre_middlewares');

    //appendnew_flow_pre_middlewares_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: pre_middlewares');
    //appendnew_flow_pre_middlewares_HttpIn
  }
  //   service flows_pre_middlewares

  async api_Request_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'api_Request_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MCGyoDgnWxM0Ej5F(bh, parentSpanInst);
      //appendnew_next_api_Request_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ssMY2VoOAJfypBH0',
        spanInst,
        'api_Request_start'
      );
    }
  }

  //appendnew_flow_pre_middlewares_start

  async sd_MCGyoDgnWxM0Ej5F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MCGyoDgnWxM0Ej5F',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.request.method,
          'get',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kfrErzRLXD38OePl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['se'](
          bh.local.request.method,
          'post',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_i9wQZJlltnksyp2V(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MCGyoDgnWxM0Ej5F',
        spanInst,
        'sd_MCGyoDgnWxM0Ej5F'
      );
    }
  }

  async sd_kfrErzRLXD38OePl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kfrErzRLXD38OePl',
      parentSpanInst
    );
    try {
      const axios = require('axios');

      bh.local.response = await axios.get(bh.local.request.URL);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_kfrErzRLXD38OePl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kfrErzRLXD38OePl',
        spanInst,
        'sd_kfrErzRLXD38OePl'
      );
    }
  }

  async sd_i9wQZJlltnksyp2V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i9wQZJlltnksyp2V',
      parentSpanInst
    );
    try {
      const axios = require('axios');

      bh.local.response = await axios.post(bh.local.request.URL, bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_i9wQZJlltnksyp2V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i9wQZJlltnksyp2V',
        spanInst,
        'sd_i9wQZJlltnksyp2V'
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
  //appendnew_flow_pre_middlewares_Catch
}
