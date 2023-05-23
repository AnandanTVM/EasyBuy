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
import * as SSD_SERVICE_ID_sd_17cqdBJAntu5OVtB from './dashboard_service'; //_splitter_
//append_imports_end
export class dashboard_api {
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
    this.serviceName = 'dashboard_api';
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
      instance = new dashboard_api(
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
      //appendnew_flow_dashboard_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: dashboard_api');

    //appendnew_flow_dashboard_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: dashboard_api');

    this.app['get'](
      `${this.serviceBasePath}/dashboard/:id`,
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
          bh = await this.sd_65U9yKxg7IEsXgWh(bh, parentSpanInst);
          //appendnew_next_sd_9AncCV2265i2HG2N
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9AncCV2265i2HG2N');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_dashboard_api_HttpIn
  }
  //   service flows_dashboard_api

  //appendnew_flow_dashboard_api_start

  async sd_65U9yKxg7IEsXgWh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_65U9yKxg7IEsXgWh',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_17cqdBJAntu5OVtBInstance: SSD_SERVICE_ID_sd_17cqdBJAntu5OVtB.dashboard_service =
        SSD_SERVICE_ID_sd_17cqdBJAntu5OVtB.dashboard_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_17cqdBJAntu5OVtBInstance.sd_FkCeRscXRM3oPD0A(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_VPMbjSgKOEVyzQaz(bh, parentSpanInst);
      //appendnew_next_sd_65U9yKxg7IEsXgWh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_65U9yKxg7IEsXgWh',
        spanInst,
        'sd_65U9yKxg7IEsXgWh'
      );
    }
  }

  async sd_VPMbjSgKOEVyzQaz(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VPMbjSgKOEVyzQaz');
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
  //appendnew_flow_dashboard_api_Catch
}
