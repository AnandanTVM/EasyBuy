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
import * as SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhm from './Auth_services'; //_splitter_
//append_imports_end
export class Auth_api {
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
    this.serviceName = 'Auth_api';
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
      instance = new Auth_api(
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
      //appendnew_flow_Auth_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth_api');

    //appendnew_flow_Auth_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth_api');

    this.app['post'](
      `${this.serviceBasePath}/employee/login`,
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
          bh = await this.sd_cvyeD74GOyad90z5(bh, parentSpanInst);
          //appendnew_next_sd_xQLVER6Sg3F8sJUo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xQLVER6Sg3F8sJUo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/employee/logout`,
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
          bh = await this.sd_atrIBGBq42lERyKw(bh, parentSpanInst);
          //appendnew_next_sd_BuARfJb56rvyk17k
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BuARfJb56rvyk17k');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Auth_api_HttpIn
  }
  //   service flows_Auth_api

  //appendnew_flow_Auth_api_start

  async sd_cvyeD74GOyad90z5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cvyeD74GOyad90z5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhmInstance: SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhm.Auth_services =
        SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhm.Auth_services.getInstance();
      bh = await SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhmInstance.employeeLoginStart(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_DaoIrv7DwoUuwIr8(bh, parentSpanInst);
      //appendnew_next_sd_cvyeD74GOyad90z5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cvyeD74GOyad90z5',
        spanInst,
        'sd_cvyeD74GOyad90z5'
      );
    }
  }

  async sd_DaoIrv7DwoUuwIr8(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DaoIrv7DwoUuwIr8');
    }
  }

  async sd_atrIBGBq42lERyKw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_atrIBGBq42lERyKw',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhmInstance: SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhm.Auth_services =
        SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhm.Auth_services.getInstance();
      bh = await SSD_SERVICE_ID_sd_D0vBXXyV2jcV6yhmInstance.employeeLogoutStart(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_0J7TAe12CMwB3qVq(bh, parentSpanInst);
      //appendnew_next_sd_atrIBGBq42lERyKw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_atrIBGBq42lERyKw',
        spanInst,
        'sd_atrIBGBq42lERyKw'
      );
    }
  }

  async sd_0J7TAe12CMwB3qVq(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0J7TAe12CMwB3qVq');
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
  //appendnew_flow_Auth_api_Catch
}
