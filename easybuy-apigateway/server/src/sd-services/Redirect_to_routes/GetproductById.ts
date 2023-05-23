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
export class GetproductById {
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
    this.serviceName = 'GetproductById';
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
      instance = new GetproductById(
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
      //appendnew_flow_GetproductById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: GetproductById');

    //appendnew_flow_GetproductById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: GetproductById');

    this.app['get'](
      `${this.serviceBasePath}/product/:id`,
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
          bh = await this.sd_1INGEd8SIz6cGz97(bh, parentSpanInst);
          //appendnew_next_sd_2typK9KfQlWd2dQL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2typK9KfQlWd2dQL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_GetproductById_HttpIn
  }
  //   service flows_GetproductById

  //appendnew_flow_GetproductById_start

  async sd_1INGEd8SIz6cGz97(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1INGEd8SIz6cGz97',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'get',
        URL: `${process.env.GET_PRODUCT_BYID_PROT}product/${bh.input.params.id}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JM8RU7nNVrWGm4DG(bh, parentSpanInst);
      //appendnew_next_sd_1INGEd8SIz6cGz97
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1INGEd8SIz6cGz97',
        spanInst,
        'sd_1INGEd8SIz6cGz97'
      );
    }
  }

  async sd_JM8RU7nNVrWGm4DG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JM8RU7nNVrWGm4DG',
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
      bh = await this.sd_3gjv1mw5w7wKiE9c(bh, parentSpanInst);
      //appendnew_next_sd_JM8RU7nNVrWGm4DG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JM8RU7nNVrWGm4DG',
        spanInst,
        'sd_JM8RU7nNVrWGm4DG'
      );
    }
  }

  async sd_3gjv1mw5w7wKiE9c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3gjv1mw5w7wKiE9c',
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
      //appendnew_next_sd_3gjv1mw5w7wKiE9c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3gjv1mw5w7wKiE9c',
        spanInst,
        'sd_3gjv1mw5w7wKiE9c'
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
  //appendnew_flow_GetproductById_Catch
}
