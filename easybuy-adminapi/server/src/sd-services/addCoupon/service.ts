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
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class service {
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
    this.serviceName = 'service';
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
      instance = new service(
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
      //appendnew_flow_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: service');

    //appendnew_flow_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: service');
    //appendnew_flow_service_HttpIn
  }
  //   service flows_service

  async addCouponService(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addCouponService',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XwC8glk5Q9zXXsLE(bh, parentSpanInst);
      //appendnew_next_addCouponService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2D0J4EoULYFyPGm5',
        spanInst,
        'addCouponService'
      );
    }
  }

  async getCouponService(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getCouponService',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oBKGYzfYnVbjcJfU(bh, parentSpanInst);
      //appendnew_next_getCouponService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ONBF29y0ZyACeqSQ',
        spanInst,
        'getCouponService'
      );
    }
  }

  //appendnew_flow_service_start

  async sd_XwC8glk5Q9zXXsLE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XwC8glk5Q9zXXsLE',
      parentSpanInst
    );
    try {
      bh.local.collection = 'coupon';
      bh.local.findCoupon = { couponcode: bh.input.body.couponcode };
      console.log(bh.input.body.couponcode);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_82bS2oh3Lmcytfgw(bh, parentSpanInst);
      //appendnew_next_sd_XwC8glk5Q9zXXsLE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XwC8glk5Q9zXXsLE',
        spanInst,
        'sd_XwC8glk5Q9zXXsLE'
      );
    }
  }

  async sd_82bS2oh3Lmcytfgw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_82bS2oh3Lmcytfgw',
      parentSpanInst
    );
    try {
      bh.local.coupons = await MongoPersistance.getInstance().find(
        'sd_lWTIBAUI8umrFcfl',
        bh.local.collection,
        bh.local.findCoupon,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YU32BtvXZ2qkXQCS(bh, parentSpanInst);
      //appendnew_next_sd_82bS2oh3Lmcytfgw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_82bS2oh3Lmcytfgw',
        spanInst,
        'sd_82bS2oh3Lmcytfgw'
      );
    }
  }

  async sd_YU32BtvXZ2qkXQCS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YU32BtvXZ2qkXQCS',
      parentSpanInst
    );
    try {
      if (bh.local.coupons.length === 0) {
        bh.local.isCoupon = false;
        bh.local.isCouponCode = 200;
        bh.local.isCouponMsg = 'coupon added successfully';
      } else {
        bh.local.isCoupon = true;
        bh.local.isCouponCode = 404;
        bh.local.isCouponMsg = 'coupon already added';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nNcNx1IxH2Rbr9k2(bh, parentSpanInst);
      //appendnew_next_sd_YU32BtvXZ2qkXQCS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YU32BtvXZ2qkXQCS',
        spanInst,
        'sd_YU32BtvXZ2qkXQCS'
      );
    }
  }

  async sd_nNcNx1IxH2Rbr9k2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nNcNx1IxH2Rbr9k2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['false'](
          bh.local.isCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UEUAPsvpuZnqv4Rb(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nNcNx1IxH2Rbr9k2',
        spanInst,
        'sd_nNcNx1IxH2Rbr9k2'
      );
    }
  }

  async sd_UEUAPsvpuZnqv4Rb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UEUAPsvpuZnqv4Rb',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_lWTIBAUI8umrFcfl',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_UEUAPsvpuZnqv4Rb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UEUAPsvpuZnqv4Rb',
        spanInst,
        'sd_UEUAPsvpuZnqv4Rb'
      );
    }
  }

  async sd_oBKGYzfYnVbjcJfU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oBKGYzfYnVbjcJfU',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      bh.local.collection = 'coupon';
      bh.local.query = { couponcode: bh.input.params.couponcode };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8TLnPc02SQYSf7tR(bh, parentSpanInst);
      //appendnew_next_sd_oBKGYzfYnVbjcJfU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oBKGYzfYnVbjcJfU',
        spanInst,
        'sd_oBKGYzfYnVbjcJfU'
      );
    }
  }

  async sd_8TLnPc02SQYSf7tR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8TLnPc02SQYSf7tR',
      parentSpanInst
    );
    try {
      bh.local.couponData = await MongoPersistance.getInstance().find(
        'sd_5DxcwTS42BtTpoen',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FKVYuY7tQxh7B7uA(bh, parentSpanInst);
      //appendnew_next_sd_8TLnPc02SQYSf7tR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8TLnPc02SQYSf7tR',
        spanInst,
        'sd_8TLnPc02SQYSf7tR'
      );
    }
  }

  async sd_FKVYuY7tQxh7B7uA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FKVYuY7tQxh7B7uA',
      parentSpanInst
    );
    try {
      if (bh.local.couponData.length === 0) {
        bh.local.noCoupon = true;
      } else {
        bh.local.noCoupon = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_07mst6wWjxvgMjR8(bh, parentSpanInst);
      //appendnew_next_sd_FKVYuY7tQxh7B7uA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FKVYuY7tQxh7B7uA',
        spanInst,
        'sd_FKVYuY7tQxh7B7uA'
      );
    }
  }

  async sd_07mst6wWjxvgMjR8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_07mst6wWjxvgMjR8',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.noCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mHbI4pU2Vp07IbYH(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.noCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lloyDllOmDUmU6Qx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_07mst6wWjxvgMjR8',
        spanInst,
        'sd_07mst6wWjxvgMjR8'
      );
    }
  }

  async sd_mHbI4pU2Vp07IbYH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mHbI4pU2Vp07IbYH',
      parentSpanInst
    );
    try {
      bh.local.response = {
        response: 'sorry! no coupon found',
        statusCode: 404,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mHbI4pU2Vp07IbYH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mHbI4pU2Vp07IbYH',
        spanInst,
        'sd_mHbI4pU2Vp07IbYH'
      );
    }
  }

  async sd_lloyDllOmDUmU6Qx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lloyDllOmDUmU6Qx',
      parentSpanInst
    );
    try {
      bh.local.response = {
        response: bh.local.couponData[0],
        statusCode: 200,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_lloyDllOmDUmU6Qx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lloyDllOmDUmU6Qx',
        spanInst,
        'sd_lloyDllOmDUmU6Qx'
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
  //appendnew_flow_service_Catch
}
