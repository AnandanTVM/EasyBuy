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
import * as SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NA from '../middlewares/pre_middlewares'; //_splitter_
import * as SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhc from '../middlewares/Post_middlewares'; //_splitter_
//append_imports_end
export class Invoice {
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
    this.serviceName = 'Invoice';
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
      instance = new Invoice(
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
      //appendnew_flow_Invoice_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Invoice');

    //appendnew_flow_Invoice_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Invoice');

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
          bh = await this.sd_zMERDKDYC3Yd8QxP(bh, parentSpanInst);
          //appendnew_next_sd_cI7evrp3UPzjAsYs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cI7evrp3UPzjAsYs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

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
          bh = await this.sd_EiwrXAsJW7zanjSK(bh, parentSpanInst);
          //appendnew_next_sd_UOsNsl5p76mtD7ZA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UOsNsl5p76mtD7ZA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Invoice_HttpIn
  }
  //   service flows_Invoice

  //appendnew_flow_Invoice_start

  async sd_zMERDKDYC3Yd8QxP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zMERDKDYC3Yd8QxP',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'get',
        URL: `${process.env.INVOICE_PROT}invoice/${bh.input.params.id}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jQdGJKRZckVgar5e(bh, parentSpanInst);
      //appendnew_next_sd_zMERDKDYC3Yd8QxP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zMERDKDYC3Yd8QxP',
        spanInst,
        'sd_zMERDKDYC3Yd8QxP'
      );
    }
  }

  async sd_jQdGJKRZckVgar5e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jQdGJKRZckVgar5e',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NAInstance: SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NA.pre_middlewares =
        SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NA.pre_middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NAInstance.api_Request_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_poILT2Yv2ho7BNTv(bh, parentSpanInst);
      //appendnew_next_sd_jQdGJKRZckVgar5e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jQdGJKRZckVgar5e',
        spanInst,
        'sd_jQdGJKRZckVgar5e'
      );
    }
  }

  async sd_poILT2Yv2ho7BNTv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_poILT2Yv2ho7BNTv',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhcInstance: SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhc.Post_middlewares =
        SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhc.Post_middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhcInstance.httpOut_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_poILT2Yv2ho7BNTv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_poILT2Yv2ho7BNTv',
        spanInst,
        'sd_poILT2Yv2ho7BNTv'
      );
    }
  }

  async sd_EiwrXAsJW7zanjSK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EiwrXAsJW7zanjSK',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.INVOICE_PROT}invoice`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4nCg4pUMf3esEl9r(bh, parentSpanInst);
      //appendnew_next_sd_EiwrXAsJW7zanjSK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EiwrXAsJW7zanjSK',
        spanInst,
        'sd_EiwrXAsJW7zanjSK'
      );
    }
  }

  async sd_4nCg4pUMf3esEl9r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4nCg4pUMf3esEl9r',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NAInstance: SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NA.pre_middlewares =
        SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NA.pre_middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_oRvQXaA1cV6Qs9NAInstance.api_Request_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AvUxFhvuVLDuKa7q(bh, parentSpanInst);
      //appendnew_next_sd_4nCg4pUMf3esEl9r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4nCg4pUMf3esEl9r',
        spanInst,
        'sd_4nCg4pUMf3esEl9r'
      );
    }
  }

  async sd_AvUxFhvuVLDuKa7q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AvUxFhvuVLDuKa7q',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhcInstance: SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhc.Post_middlewares =
        SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhc.Post_middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_zIkw7O66hUnZvIhcInstance.httpOut_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AvUxFhvuVLDuKa7q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AvUxFhvuVLDuKa7q',
        spanInst,
        'sd_AvUxFhvuVLDuKa7q'
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
  //appendnew_flow_Invoice_Catch
}
