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
export class Admin {
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
    this.serviceName = 'Admin';
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
      instance = new Admin(
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
      //appendnew_flow_Admin_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Admin');

    //appendnew_flow_Admin_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Admin');

    this.app['post'](
      `${this.serviceBasePath}/admin/coupon`,
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
          bh = await this.sd_VaaZfZLzlh4DeaX1(bh, parentSpanInst);
          //appendnew_next_sd_1udtSKurOG2k2VPf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1udtSKurOG2k2VPf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-coupon/:id`,
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
          bh = await this.sd_chHSlL5nWT9kgYMP(bh, parentSpanInst);
          //appendnew_next_sd_l0tOG5UMvzmqT9Fl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l0tOG5UMvzmqT9Fl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin/employee`,
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
          bh = await this.sd_JLyYm55eaH8RXaxC(bh, parentSpanInst);
          //appendnew_next_sd_7dwiFDggpywZ2aaw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7dwiFDggpywZ2aaw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin/product`,
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
          bh = await this.sd_b7OWUoRphFNTREN1(bh, parentSpanInst);
          //appendnew_next_sd_dpJMDfOhAYAzpLiK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dpJMDfOhAYAzpLiK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

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
          bh = await this.sd_VMUvymVl5ZwDx0Su(bh, parentSpanInst);
          //appendnew_next_sd_1lgKlj1FRl7Isctp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1lgKlj1FRl7Isctp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Admin_HttpIn
  }
  //   service flows_Admin

  //appendnew_flow_Admin_start

  async sd_VaaZfZLzlh4DeaX1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VaaZfZLzlh4DeaX1',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.ADMIN_PORT}admin/coupon`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0EN2e8PUZTSZAm21(bh, parentSpanInst);
      //appendnew_next_sd_VaaZfZLzlh4DeaX1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VaaZfZLzlh4DeaX1',
        spanInst,
        'sd_VaaZfZLzlh4DeaX1'
      );
    }
  }

  async sd_0EN2e8PUZTSZAm21(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0EN2e8PUZTSZAm21',
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
      bh = await this.sd_OFN8SUaW6pN3UBuk(bh, parentSpanInst);
      //appendnew_next_sd_0EN2e8PUZTSZAm21
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0EN2e8PUZTSZAm21',
        spanInst,
        'sd_0EN2e8PUZTSZAm21'
      );
    }
  }

  async sd_OFN8SUaW6pN3UBuk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OFN8SUaW6pN3UBuk',
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
      //appendnew_next_sd_OFN8SUaW6pN3UBuk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OFN8SUaW6pN3UBuk',
        spanInst,
        'sd_OFN8SUaW6pN3UBuk'
      );
    }
  }

  async sd_chHSlL5nWT9kgYMP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_chHSlL5nWT9kgYMP',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'get',
        URL: `${process.env.ADMIN_PORT}get-coupon/${bh.input.params.id}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4poprBE42sm6Ecq4(bh, parentSpanInst);
      //appendnew_next_sd_chHSlL5nWT9kgYMP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_chHSlL5nWT9kgYMP',
        spanInst,
        'sd_chHSlL5nWT9kgYMP'
      );
    }
  }

  async sd_4poprBE42sm6Ecq4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4poprBE42sm6Ecq4',
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
      bh = await this.sd_PK5kRoxj2RLe6fy2(bh, parentSpanInst);
      //appendnew_next_sd_4poprBE42sm6Ecq4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4poprBE42sm6Ecq4',
        spanInst,
        'sd_4poprBE42sm6Ecq4'
      );
    }
  }

  async sd_PK5kRoxj2RLe6fy2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PK5kRoxj2RLe6fy2',
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
      //appendnew_next_sd_PK5kRoxj2RLe6fy2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PK5kRoxj2RLe6fy2',
        spanInst,
        'sd_PK5kRoxj2RLe6fy2'
      );
    }
  }

  async sd_JLyYm55eaH8RXaxC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JLyYm55eaH8RXaxC',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.ADMIN_PORT}admin/employee`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iFIequ2w2lky4OhC(bh, parentSpanInst);
      //appendnew_next_sd_JLyYm55eaH8RXaxC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JLyYm55eaH8RXaxC',
        spanInst,
        'sd_JLyYm55eaH8RXaxC'
      );
    }
  }

  async sd_iFIequ2w2lky4OhC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iFIequ2w2lky4OhC',
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
      bh = await this.sd_l8UymK9wsqsHbYWF(bh, parentSpanInst);
      //appendnew_next_sd_iFIequ2w2lky4OhC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iFIequ2w2lky4OhC',
        spanInst,
        'sd_iFIequ2w2lky4OhC'
      );
    }
  }

  async sd_l8UymK9wsqsHbYWF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l8UymK9wsqsHbYWF',
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
      //appendnew_next_sd_l8UymK9wsqsHbYWF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l8UymK9wsqsHbYWF',
        spanInst,
        'sd_l8UymK9wsqsHbYWF'
      );
    }
  }

  async sd_b7OWUoRphFNTREN1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b7OWUoRphFNTREN1',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.ADMIN_PORT}admin/product`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LlP76PYczG46T8sy(bh, parentSpanInst);
      //appendnew_next_sd_b7OWUoRphFNTREN1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b7OWUoRphFNTREN1',
        spanInst,
        'sd_b7OWUoRphFNTREN1'
      );
    }
  }

  async sd_LlP76PYczG46T8sy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LlP76PYczG46T8sy',
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
      bh = await this.sd_a3u94r9aF2FYAi1O(bh, parentSpanInst);
      //appendnew_next_sd_LlP76PYczG46T8sy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LlP76PYczG46T8sy',
        spanInst,
        'sd_LlP76PYczG46T8sy'
      );
    }
  }

  async sd_a3u94r9aF2FYAi1O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3u94r9aF2FYAi1O',
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
      //appendnew_next_sd_a3u94r9aF2FYAi1O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3u94r9aF2FYAi1O',
        spanInst,
        'sd_a3u94r9aF2FYAi1O'
      );
    }
  }

  async sd_VMUvymVl5ZwDx0Su(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VMUvymVl5ZwDx0Su',
      parentSpanInst
    );
    try {
      bh.local.request = {
        method: 'post',
        URL: `${process.env.ADMIN_PORT}admin/login`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_07ul4PbQyW8LTQKj(bh, parentSpanInst);
      //appendnew_next_sd_VMUvymVl5ZwDx0Su
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VMUvymVl5ZwDx0Su',
        spanInst,
        'sd_VMUvymVl5ZwDx0Su'
      );
    }
  }

  async sd_07ul4PbQyW8LTQKj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_07ul4PbQyW8LTQKj',
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
      bh = await this.sd_OuMno5Y5fbZnqVWm(bh, parentSpanInst);
      //appendnew_next_sd_07ul4PbQyW8LTQKj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_07ul4PbQyW8LTQKj',
        spanInst,
        'sd_07ul4PbQyW8LTQKj'
      );
    }
  }

  async sd_OuMno5Y5fbZnqVWm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OuMno5Y5fbZnqVWm',
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
      //appendnew_next_sd_OuMno5Y5fbZnqVWm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OuMno5Y5fbZnqVWm',
        spanInst,
        'sd_OuMno5Y5fbZnqVWm'
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
  //appendnew_flow_Admin_Catch
}
