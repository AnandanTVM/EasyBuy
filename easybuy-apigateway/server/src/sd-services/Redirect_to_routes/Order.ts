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
          bh = await this.sd_tswfRuBnC5i60Ku4(bh, parentSpanInst);
          //appendnew_next_sd_W84M1B0kAGWznk1c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_W84M1B0kAGWznk1c');
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

  async sd_tswfRuBnC5i60Ku4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tswfRuBnC5i60Ku4',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.ORDER_PORT}place-order`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DjXmf24cyM12gdb8(bh, parentSpanInst);
      //appendnew_next_sd_tswfRuBnC5i60Ku4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tswfRuBnC5i60Ku4',
        spanInst,
        'sd_tswfRuBnC5i60Ku4'
      );
    }
  }

  async sd_DjXmf24cyM12gdb8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DjXmf24cyM12gdb8',
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
      bh = await this.sd_NnNKo1XOy0UPDX1E(bh, parentSpanInst);
      //appendnew_next_sd_DjXmf24cyM12gdb8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DjXmf24cyM12gdb8',
        spanInst,
        'sd_DjXmf24cyM12gdb8'
      );
    }
  }

  async sd_NnNKo1XOy0UPDX1E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NnNKo1XOy0UPDX1E',
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
      //appendnew_next_sd_NnNKo1XOy0UPDX1E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NnNKo1XOy0UPDX1E',
        spanInst,
        'sd_NnNKo1XOy0UPDX1E'
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
