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
import { validateNode } from '../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import * as SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvy from './service'; //_splitter_
//append_imports_end
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
      //appendnew_flow_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');

    //appendnew_flow_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

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
          bh = await this.sd_BFCjW3DdxAOyrhTp(bh, parentSpanInst);
          //appendnew_next_sd_h1ZUGZI3TkMb1EKV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_h1ZUGZI3TkMb1EKV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-coupon/:couponcode`,
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
          bh = await this.sd_gtxPhy5l8RQHXno7(bh, parentSpanInst);
          //appendnew_next_sd_NZUc18RQHqyyVUAK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NZUc18RQHqyyVUAK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async sd_BFCjW3DdxAOyrhTp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BFCjW3DdxAOyrhTp',
      parentSpanInst
    );
    try {
      validateNode('_EN_5e8542yqxo', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DrxMVGill3wLNciN(bh, parentSpanInst);
      //appendnew_next_sd_BFCjW3DdxAOyrhTp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BFCjW3DdxAOyrhTp',
        spanInst,
        'sd_BFCjW3DdxAOyrhTp'
      );
    }
  }

  async sd_DrxMVGill3wLNciN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DrxMVGill3wLNciN',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvyInstance: SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvy.service =
        SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvy.service.getInstance();
      bh = await SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvyInstance.addCouponService(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_peXkISLTPJ18iSjR(bh, parentSpanInst);
      //appendnew_next_sd_DrxMVGill3wLNciN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DrxMVGill3wLNciN',
        spanInst,
        'sd_DrxMVGill3wLNciN'
      );
    }
  }

  async sd_peXkISLTPJ18iSjR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_peXkISLTPJ18iSjR',
      parentSpanInst
    );
    try {
      console.log('hiiiii');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_v2Lk6FHYrRk8tahE(bh, parentSpanInst);
      //appendnew_next_sd_peXkISLTPJ18iSjR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_peXkISLTPJ18iSjR',
        spanInst,
        'sd_peXkISLTPJ18iSjR'
      );
    }
  }

  async sd_v2Lk6FHYrRk8tahE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.isCouponCode).send(bh.local.isCouponMsg);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v2Lk6FHYrRk8tahE');
    }
  }

  async sd_aIA8rYJcAJqk2Dry(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aIA8rYJcAJqk2Dry',
      parentSpanInst
    );
    try {
      let instancePath = bh.error.error[0].instancePath.split('');
      let spliced = instancePath.splice(1, instancePath.length);
      let str = spliced.join('');
      bh.local.errMsg = str + ' ' + bh.error.error[0].message;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AL3XuWB7XUgJVVqS(bh, parentSpanInst);
      //appendnew_next_sd_aIA8rYJcAJqk2Dry
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aIA8rYJcAJqk2Dry',
        spanInst,
        'sd_aIA8rYJcAJqk2Dry'
      );
    }
  }

  async sd_AL3XuWB7XUgJVVqS(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.errMsg);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AL3XuWB7XUgJVVqS');
    }
  }

  async sd_gtxPhy5l8RQHXno7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gtxPhy5l8RQHXno7',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvyInstance: SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvy.service =
        SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvy.service.getInstance();
      bh = await SSD_SERVICE_ID_sd_cUEheVlMRjOpDQvyInstance.getCouponService(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_5MOyESNrIeMPAXUF(bh, parentSpanInst);
      //appendnew_next_sd_gtxPhy5l8RQHXno7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gtxPhy5l8RQHXno7',
        spanInst,
        'sd_gtxPhy5l8RQHXno7'
      );
    }
  }

  async sd_5MOyESNrIeMPAXUF(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5MOyESNrIeMPAXUF');
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
      false ||
      (await this.sd_ivpKEq2804u4j3RZ(bh, parentSpanInst))
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
  async sd_ivpKEq2804u4j3RZ(bh, parentSpanInst) {
    const nodes = ['sd_lkToXN55d62jcQSV'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_aIA8rYJcAJqk2Dry(bh, parentSpanInst);
      //appendnew_next_sd_ivpKEq2804u4j3RZ
      return true;
    }
    return false;
  }
  //appendnew_flow_api_Catch
}
