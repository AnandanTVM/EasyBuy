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
export class Auth_services {
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
    this.serviceName = 'Auth_services';
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
      instance = new Auth_services(
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
      //appendnew_flow_Auth_services_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth_services');

    //appendnew_flow_Auth_services_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth_services');
    //appendnew_flow_Auth_services_HttpIn
  }
  //   service flows_Auth_services

  async employeeLoginStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'employeeLoginStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zJHYQwy54rnu5VV9(bh, parentSpanInst);
      //appendnew_next_employeeLoginStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5KaEXBIDgh7eJpuG',
        spanInst,
        'employeeLoginStart'
      );
    }
  }

  async employeeLogoutStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'employeeLogoutStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Inx0gKoIyyrIh2C5(bh, parentSpanInst);
      //appendnew_next_employeeLogoutStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G1DpjoIXMBY8hgKL',
        spanInst,
        'employeeLogoutStart'
      );
    }
  }

  //appendnew_flow_Auth_services_start

  async sd_zJHYQwy54rnu5VV9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zJHYQwy54rnu5VV9',
      parentSpanInst
    );
    try {
      // bh.local.data={
      //     employeeid:"easybuy007",
      //     password:"1234"
      // }
      bh.local.pipeline = [
        { $match: { employeeid: bh.input.body.employeeid } },
      ];

      bh.local.collection = 'employees';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DiRCZoy4pREZ7FID(bh, parentSpanInst);
      //appendnew_next_sd_zJHYQwy54rnu5VV9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zJHYQwy54rnu5VV9',
        spanInst,
        'sd_zJHYQwy54rnu5VV9'
      );
    }
  }

  async sd_DiRCZoy4pREZ7FID(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DiRCZoy4pREZ7FID',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_9JmGhyRuchpdYhpP',
        bh.local.collection,
        bh.local.pipeline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Sr22sc6juUHfnjoT(bh, parentSpanInst);
      //appendnew_next_sd_DiRCZoy4pREZ7FID
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DiRCZoy4pREZ7FID',
        spanInst,
        'sd_DiRCZoy4pREZ7FID'
      );
    }
  }

  async sd_Sr22sc6juUHfnjoT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Sr22sc6juUHfnjoT',
      parentSpanInst
    );
    try {
      // console.log("res",bh.local.result[0])
      const bcrypt = require('bcryptjs');

      bh.local.isEmployee = false;

      if (bh.local.result[0] === undefined) {
        bh.local.isEmployee = '';
      } else {
        if (
          await bcrypt.compare(
            bh.input.body.password,
            bh.local.result[0].password
          )
        ) {
          bh.local.isEmployee = true;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l33iSCYD0hSo19NF(bh, parentSpanInst);
      //appendnew_next_sd_Sr22sc6juUHfnjoT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Sr22sc6juUHfnjoT',
        spanInst,
        'sd_Sr22sc6juUHfnjoT'
      );
    }
  }

  async sd_l33iSCYD0hSo19NF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l33iSCYD0hSo19NF',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_eXnFixErWHis2ZHy(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_a3po8Gd1anpdWxVC(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sDxKTISS5es0STt6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l33iSCYD0hSo19NF',
        spanInst,
        'sd_l33iSCYD0hSo19NF'
      );
    }
  }

  async sd_eXnFixErWHis2ZHy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eXnFixErWHis2ZHy',
      parentSpanInst
    );
    try {
      bh.local.employee = {
        ...bh.input.body,
      };

      // console.log("session data",bh.local.employee)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e7YWKa86l0tVcmpF(bh, parentSpanInst);
      //appendnew_next_sd_eXnFixErWHis2ZHy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eXnFixErWHis2ZHy',
        spanInst,
        'sd_eXnFixErWHis2ZHy'
      );
    }
  }

  async sd_e7YWKa86l0tVcmpF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e7YWKa86l0tVcmpF',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.employee;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IJSMEM5A5tmJk6nL(bh, parentSpanInst);
      //appendnew_next_sd_e7YWKa86l0tVcmpF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e7YWKa86l0tVcmpF',
        spanInst,
        'sd_e7YWKa86l0tVcmpF'
      );
    }
  }

  async sd_IJSMEM5A5tmJk6nL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IJSMEM5A5tmJk6nL',
      parentSpanInst
    );
    try {
      let { password, ...data } = bh.local.result[0];

      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOGED_IN',
        data,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_IJSMEM5A5tmJk6nL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IJSMEM5A5tmJk6nL',
        spanInst,
        'sd_IJSMEM5A5tmJk6nL'
      );
    }
  }

  async sd_a3po8Gd1anpdWxVC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3po8Gd1anpdWxVC',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'INCORRECT_PASSWORD',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_a3po8Gd1anpdWxVC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3po8Gd1anpdWxVC',
        spanInst,
        'sd_a3po8Gd1anpdWxVC'
      );
    }
  }

  async sd_sDxKTISS5es0STt6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sDxKTISS5es0STt6',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 500,
        message: 'EMPLOYEE_NOT_FOUND',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sDxKTISS5es0STt6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sDxKTISS5es0STt6',
        spanInst,
        'sd_sDxKTISS5es0STt6'
      );
    }
  }

  async sd_Inx0gKoIyyrIh2C5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Inx0gKoIyyrIh2C5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CJnzIeqBCMmSWh5u(bh, parentSpanInst);
      //appendnew_next_sd_Inx0gKoIyyrIh2C5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Inx0gKoIyyrIh2C5',
        spanInst,
        'sd_Inx0gKoIyyrIh2C5'
      );
    }
  }

  async sd_CJnzIeqBCMmSWh5u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CJnzIeqBCMmSWh5u',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOG_OUT',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CJnzIeqBCMmSWh5u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CJnzIeqBCMmSWh5u',
        spanInst,
        'sd_CJnzIeqBCMmSWh5u'
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
  //appendnew_flow_Auth_services_Catch
}
