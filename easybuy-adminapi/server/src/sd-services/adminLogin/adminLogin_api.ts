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
import * as SSD_SERVICE_ID_sd_JqXhLhjkY7BLUwS2 from './adminLogin_service'; //_splitter_
//append_imports_end
export class adminLogin_api {
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
    this.serviceName = 'adminLogin_api';
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
      instance = new adminLogin_api(
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
      //appendnew_flow_adminLogin_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: adminLogin_api');

    //appendnew_flow_adminLogin_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: adminLogin_api');

    this.app['post'](
      `${this.serviceBasePath}/admin/login`,
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
          bh = await this.sd_G7cxXwQWsMl97a0B(bh, parentSpanInst);
          //appendnew_next_sd_ekQDKixpmTBvypJu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ekQDKixpmTBvypJu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_adminLogin_api_HttpIn
  }
  //   service flows_adminLogin_api

  //appendnew_flow_adminLogin_api_start

  async sd_G7cxXwQWsMl97a0B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G7cxXwQWsMl97a0B',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_JqXhLhjkY7BLUwS2Instance: SSD_SERVICE_ID_sd_JqXhLhjkY7BLUwS2.adminLogin_service =
        SSD_SERVICE_ID_sd_JqXhLhjkY7BLUwS2.adminLogin_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_JqXhLhjkY7BLUwS2Instance.adminLoginStart(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AHKwScCf0rmA6DLN(bh, parentSpanInst);
      //appendnew_next_sd_G7cxXwQWsMl97a0B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G7cxXwQWsMl97a0B',
        spanInst,
        'sd_G7cxXwQWsMl97a0B'
      );
    }
  }

  async sd_AHKwScCf0rmA6DLN(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AHKwScCf0rmA6DLN');
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
  //appendnew_flow_adminLogin_api_Catch
}
