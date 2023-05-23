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
export class Login {
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
    this.serviceName = 'Login';
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
      instance = new Login(
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
      //appendnew_flow_Login_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Login');

    //appendnew_flow_Login_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Login');

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
          bh = await this.sd_ASFwphKVBfI5DL4r(bh, parentSpanInst);
          //appendnew_next_sd_umjXXCwElNEjgog1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_umjXXCwElNEjgog1');
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
          bh = await this.sd_LbdVUhcdq6hF5VHA(bh, parentSpanInst);
          //appendnew_next_sd_bVoAj2NUarWWpVuf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bVoAj2NUarWWpVuf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Login_HttpIn
  }
  //   service flows_Login

  //appendnew_flow_Login_start

  async sd_ASFwphKVBfI5DL4r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ASFwphKVBfI5DL4r',
      parentSpanInst
    );
    try {
      console.log(`${process.env.LOGIN_PORT}employee/login`);
      bh.local.request = {
        method: 'post',
        URL: `${process.env.LOGIN_PORT}employee/login`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HXuhilkWCHXFDgSk(bh, parentSpanInst);
      //appendnew_next_sd_ASFwphKVBfI5DL4r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ASFwphKVBfI5DL4r',
        spanInst,
        'sd_ASFwphKVBfI5DL4r'
      );
    }
  }

  async sd_HXuhilkWCHXFDgSk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HXuhilkWCHXFDgSk',
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
      bh = await this.sd_3hGJ620utfKqlqH2(bh, parentSpanInst);
      //appendnew_next_sd_HXuhilkWCHXFDgSk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HXuhilkWCHXFDgSk',
        spanInst,
        'sd_HXuhilkWCHXFDgSk'
      );
    }
  }

  async sd_3hGJ620utfKqlqH2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3hGJ620utfKqlqH2',
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
      //appendnew_next_sd_3hGJ620utfKqlqH2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3hGJ620utfKqlqH2',
        spanInst,
        'sd_3hGJ620utfKqlqH2'
      );
    }
  }

  async sd_LbdVUhcdq6hF5VHA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LbdVUhcdq6hF5VHA',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.LOGIN_PORT}employee/logout`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yRxhAKofC77jp8qI(bh, parentSpanInst);
      //appendnew_next_sd_LbdVUhcdq6hF5VHA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LbdVUhcdq6hF5VHA',
        spanInst,
        'sd_LbdVUhcdq6hF5VHA'
      );
    }
  }

  async sd_yRxhAKofC77jp8qI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yRxhAKofC77jp8qI',
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
      bh = await this.sd_WUTD0GPk9AKzRYxY(bh, parentSpanInst);
      //appendnew_next_sd_yRxhAKofC77jp8qI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yRxhAKofC77jp8qI',
        spanInst,
        'sd_yRxhAKofC77jp8qI'
      );
    }
  }

  async sd_WUTD0GPk9AKzRYxY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WUTD0GPk9AKzRYxY',
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
      //appendnew_next_sd_WUTD0GPk9AKzRYxY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WUTD0GPk9AKzRYxY',
        spanInst,
        'sd_WUTD0GPk9AKzRYxY'
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
  //appendnew_flow_Login_Catch
}
