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
import * as SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX from './Order_service'; //_splitter_
//append_imports_end
export class Order_Api {
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
    this.serviceName = 'Order_Api';
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
      instance = new Order_Api(
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
      //appendnew_flow_Order_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Order_Api');

    //appendnew_flow_Order_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Order_Api');

    this.app['post'](
      `${this.serviceBasePath}/order`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_8MILvtLw89p1E1LB(bh, parentSpanInst);
          //appendnew_next_sd_1kilCP5h0mrEMiXc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1kilCP5h0mrEMiXc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/place-order`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_37gnqonpWydyHQTk(bh, parentSpanInst);
          //appendnew_next_sd_D3Ps4p8kCe7LlcgP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D3Ps4p8kCe7LlcgP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/payment_link`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_XnORGDYUNa5PHmRl(bh, parentSpanInst);
          //appendnew_next_sd_SLbuegc1uLp6Li1X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SLbuegc1uLp6Li1X');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getStatus`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ELkYr3uTvo41EvJH(bh, parentSpanInst);
          //appendnew_next_sd_nhpcXibQaO6GTpTI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nhpcXibQaO6GTpTI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/payment_all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_hUXSHhmHg5z0IgdK(bh, parentSpanInst);
          //appendnew_next_sd_8LW9CAwoFm4mfDYW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8LW9CAwoFm4mfDYW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Order_Api_HttpIn
  }
  //   service flows_Order_Api

  //appendnew_flow_Order_Api_start

  async sd_8MILvtLw89p1E1LB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8MILvtLw89p1E1LB',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance: SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service =
        SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance.createOrder(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_9YnYipznWwTSUE13(bh, parentSpanInst);
      //appendnew_next_sd_8MILvtLw89p1E1LB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8MILvtLw89p1E1LB',
        spanInst,
        'sd_8MILvtLw89p1E1LB'
      );
    }
  }

  async sd_9YnYipznWwTSUE13(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9YnYipznWwTSUE13');
    }
  }

  async sd_37gnqonpWydyHQTk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_37gnqonpWydyHQTk',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance: SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service =
        SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance.createPlaceOrder(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_aUqAwUumsBSxciSU(bh, parentSpanInst);
      //appendnew_next_sd_37gnqonpWydyHQTk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_37gnqonpWydyHQTk',
        spanInst,
        'sd_37gnqonpWydyHQTk'
      );
    }
  }

  async sd_aUqAwUumsBSxciSU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aUqAwUumsBSxciSU');
    }
  }

  async sd_XnORGDYUNa5PHmRl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XnORGDYUNa5PHmRl',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qLNbyqrCjOK6hZSC(bh, parentSpanInst);
      //appendnew_next_sd_XnORGDYUNa5PHmRl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XnORGDYUNa5PHmRl',
        spanInst,
        'sd_XnORGDYUNa5PHmRl'
      );
    }
  }

  async sd_qLNbyqrCjOK6hZSC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qLNbyqrCjOK6hZSC',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance: SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service =
        SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance.paymentLink_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_CLnUkvVdvyokkuUT(bh, parentSpanInst);
      //appendnew_next_sd_qLNbyqrCjOK6hZSC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qLNbyqrCjOK6hZSC',
        spanInst,
        'sd_qLNbyqrCjOK6hZSC'
      );
    }
  }

  async sd_CLnUkvVdvyokkuUT(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CLnUkvVdvyokkuUT');
    }
  }

  async sd_ELkYr3uTvo41EvJH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ELkYr3uTvo41EvJH',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance: SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service =
        SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance.fetchStatus(spanInst);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AexAusdRXubJqxxh(bh, parentSpanInst);
      //appendnew_next_sd_ELkYr3uTvo41EvJH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ELkYr3uTvo41EvJH',
        spanInst,
        'sd_ELkYr3uTvo41EvJH'
      );
    }
  }

  async sd_AexAusdRXubJqxxh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultStatus);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AexAusdRXubJqxxh');
    }
  }

  async sd_hUXSHhmHg5z0IgdK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hUXSHhmHg5z0IgdK',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance: SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service =
        SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHX.Order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_OoWI5iRXtn8rEFHXInstance.getAllPayment(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_p4Av5gJYIqinAoCr(bh, parentSpanInst);
      //appendnew_next_sd_hUXSHhmHg5z0IgdK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hUXSHhmHg5z0IgdK',
        spanInst,
        'sd_hUXSHhmHg5z0IgdK'
      );
    }
  }

  async sd_p4Av5gJYIqinAoCr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.allPaymentData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p4Av5gJYIqinAoCr');
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
  //appendnew_flow_Order_Api_Catch
}
