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
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class employee_service {
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
    this.serviceName = 'employee_service';
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
      instance = new employee_service(
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
      //appendnew_flow_employee_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: employee_service');

    //appendnew_flow_employee_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employee_service');
    //appendnew_flow_employee_service_HttpIn
  }
  //   service flows_employee_service

  async addEmployeeStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addEmployeeStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iilxqFezwTNhFhhX(bh, parentSpanInst);
      //appendnew_next_addEmployeeStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WjW9z909UnYoE4BM',
        spanInst,
        'addEmployeeStart'
      );
    }
  }

  //appendnew_flow_employee_service_start

  async sd_iilxqFezwTNhFhhX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iilxqFezwTNhFhhX',
      parentSpanInst
    );
    try {
      validateNode('_EN_9g8ji3ho3f', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nlwmpRUBBW7JI2cS(bh, parentSpanInst);
      //appendnew_next_sd_iilxqFezwTNhFhhX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iilxqFezwTNhFhhX',
        spanInst,
        'sd_iilxqFezwTNhFhhX'
      );
    }
  }

  async sd_nlwmpRUBBW7JI2cS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nlwmpRUBBW7JI2cS',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcryptjs');

      const salt = await bcrypt.genSalt(10);
      bh.local.hashedPassword = await bcrypt.hash(bh.input.body.password, salt);

      bh.local.queryData = {
        name: bh.input.body.name,
        employeeid: bh.input.body.employeeid,
        password: bh.local.hashedPassword,
      };

      bh.local.pipeline = [
        { $match: { employeeid: bh.local.queryData.employeeid } },
      ];

      bh.local.collection = 'employees';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B2zZgz10axFeIpxk(bh, parentSpanInst);
      //appendnew_next_sd_nlwmpRUBBW7JI2cS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nlwmpRUBBW7JI2cS',
        spanInst,
        'sd_nlwmpRUBBW7JI2cS'
      );
    }
  }

  async sd_B2zZgz10axFeIpxk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B2zZgz10axFeIpxk',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_0e8kKGbWBfVK6Tfz',
        bh.local.collection,
        bh.local.pipeline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yyjZZVcdtGB4I0lx(bh, parentSpanInst);
      //appendnew_next_sd_B2zZgz10axFeIpxk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B2zZgz10axFeIpxk',
        spanInst,
        'sd_B2zZgz10axFeIpxk'
      );
    }
  }

  async sd_yyjZZVcdtGB4I0lx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yyjZZVcdtGB4I0lx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NYiM0p0kQwzEZ4Hm(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dJY0QEXrHmZ8FRGC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yyjZZVcdtGB4I0lx',
        spanInst,
        'sd_yyjZZVcdtGB4I0lx'
      );
    }
  }

  async sd_NYiM0p0kQwzEZ4Hm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NYiM0p0kQwzEZ4Hm',
      parentSpanInst
    );
    try {
      bh.local.finalResult = await MongoPersistance.getInstance().insertOne(
        'sd_0e8kKGbWBfVK6Tfz',
        bh.local.collection,
        bh.local.queryData,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_q1888HsZs0aaPn7w(bh, parentSpanInst);
      //appendnew_next_sd_NYiM0p0kQwzEZ4Hm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NYiM0p0kQwzEZ4Hm',
        spanInst,
        'sd_NYiM0p0kQwzEZ4Hm'
      );
    }
  }

  async sd_q1888HsZs0aaPn7w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q1888HsZs0aaPn7w',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 201,
        data: bh.local.finalResult,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_q1888HsZs0aaPn7w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q1888HsZs0aaPn7w',
        spanInst,
        'sd_q1888HsZs0aaPn7w'
      );
    }
  }

  async sd_dJY0QEXrHmZ8FRGC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dJY0QEXrHmZ8FRGC',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 409,
        data: 'Already Exist',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_dJY0QEXrHmZ8FRGC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dJY0QEXrHmZ8FRGC',
        spanInst,
        'sd_dJY0QEXrHmZ8FRGC'
      );
    }
  }

  async sd_lFBFzMg7wzpiHWoP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lFBFzMg7wzpiHWoP',
      parentSpanInst
    );
    try {
      bh.local.errorMessage = bh.error.error.map((value: any) => {
        return value.message;
      });

      bh.local.response = {
        statusCode: 401,
        data: bh.local.errorMessage,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_lFBFzMg7wzpiHWoP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lFBFzMg7wzpiHWoP',
        spanInst,
        'sd_lFBFzMg7wzpiHWoP'
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
      false ||
      (await this.sd_UBFkuL36zoGfs1oM(bh, parentSpanInst))
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
  async sd_UBFkuL36zoGfs1oM(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_lFBFzMg7wzpiHWoP'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_lFBFzMg7wzpiHWoP(bh, parentSpanInst);
    //appendnew_next_sd_UBFkuL36zoGfs1oM
    return true;
  }
  //appendnew_flow_employee_service_Catch
}
