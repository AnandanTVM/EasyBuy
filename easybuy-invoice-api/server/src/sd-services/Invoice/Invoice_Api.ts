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
import * as SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBt from './Invoice_service'; //_splitter_
//append_imports_end
export class Invoice_Api {
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
    this.serviceName = 'Invoice_Api';
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
      instance = new Invoice_Api(
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
      //appendnew_flow_Invoice_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Invoice_Api');

    //appendnew_flow_Invoice_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Invoice_Api');

    this.app['post'](
      `${this.serviceBasePath}/invoice`,
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
          bh = await this.sd_tH32xMQw3ZJlXs7X(bh, parentSpanInst);
          //appendnew_next_sd_RPdi62bNHJBIGS8w
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RPdi62bNHJBIGS8w');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/invoice/:id`,
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
          bh = await this.sd_fLvmzNHE2wgG4BAg(bh, parentSpanInst);
          //appendnew_next_sd_hcdBZAqnbpcY0SHE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hcdBZAqnbpcY0SHE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Invoice_Api_HttpIn
  }
  //   service flows_Invoice_Api

  //appendnew_flow_Invoice_Api_start

  async sd_tH32xMQw3ZJlXs7X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tH32xMQw3ZJlXs7X',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBtInstance: SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBt.Invoice_service =
        SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBt.Invoice_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBtInstance.sendInvoice_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_kKWaMZtpFYo5WyVH(bh, parentSpanInst);
      //appendnew_next_sd_tH32xMQw3ZJlXs7X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tH32xMQw3ZJlXs7X',
        spanInst,
        'sd_tH32xMQw3ZJlXs7X'
      );
    }
  }

  async sd_kKWaMZtpFYo5WyVH(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kKWaMZtpFYo5WyVH');
    }
  }

  async sd_fLvmzNHE2wgG4BAg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fLvmzNHE2wgG4BAg',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBtInstance: SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBt.Invoice_service =
        SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBt.Invoice_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_1Q8BK98F6gaC7aBtInstance.getInvoice_Api(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_CX3Kvm6G4GTCbbzA(bh, parentSpanInst);
      //appendnew_next_sd_fLvmzNHE2wgG4BAg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fLvmzNHE2wgG4BAg',
        spanInst,
        'sd_fLvmzNHE2wgG4BAg'
      );
    }
  }

  async sd_CX3Kvm6G4GTCbbzA(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CX3Kvm6G4GTCbbzA');
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
  //appendnew_flow_Invoice_Api_Catch
}
