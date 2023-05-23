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
export class Order {
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
    this.serviceName = 'Order';
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
      instance = new Order(
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
      //appendnew_flow_Order_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Order');

    //appendnew_flow_Order_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Order');

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
          bh = await this.sd_sSdnqps9adtltujy(bh, parentSpanInst);
          //appendnew_next_sd_giYkhpe90mWjoQtE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_giYkhpe90mWjoQtE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Order_HttpIn
  }
  //   service flows_Order

  //appendnew_flow_Order_start

  async sd_sSdnqps9adtltujy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sSdnqps9adtltujy',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.INVOICE_PROT}invoice`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OnDeC8x2HkIlqWx9(bh, parentSpanInst);
      //appendnew_next_sd_sSdnqps9adtltujy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sSdnqps9adtltujy',
        spanInst,
        'sd_sSdnqps9adtltujy'
      );
    }
  }

  async sd_OnDeC8x2HkIlqWx9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OnDeC8x2HkIlqWx9',
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
      bh = await this.sd_HVpRgb5HnHD35cNB(bh, parentSpanInst);
      //appendnew_next_sd_OnDeC8x2HkIlqWx9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OnDeC8x2HkIlqWx9',
        spanInst,
        'sd_OnDeC8x2HkIlqWx9'
      );
    }
  }

  async sd_HVpRgb5HnHD35cNB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HVpRgb5HnHD35cNB',
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
      //appendnew_next_sd_HVpRgb5HnHD35cNB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HVpRgb5HnHD35cNB',
        spanInst,
        'sd_HVpRgb5HnHD35cNB'
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
  //appendnew_flow_Order_Catch
}
