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
export class addProduct_service {
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
    this.serviceName = 'addProduct_service';
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
      instance = new addProduct_service(
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
      //appendnew_flow_addProduct_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addProduct_service');

    //appendnew_flow_addProduct_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: addProduct_service');
    //appendnew_flow_addProduct_service_HttpIn
  }
  //   service flows_addProduct_service

  async sd_tVrcW0BGgpOr82MF(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_tVrcW0BGgpOr82MF',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ITTGLKmLHSiFtGlt(bh, parentSpanInst);
      //appendnew_next_sd_tVrcW0BGgpOr82MF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tVrcW0BGgpOr82MF',
        spanInst,
        'sd_tVrcW0BGgpOr82MF'
      );
    }
  }

  //appendnew_flow_addProduct_service_start

  async sd_ITTGLKmLHSiFtGlt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ITTGLKmLHSiFtGlt',
      parentSpanInst
    );
    try {
      bh.local.isImage = bh.input.files?.image;
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Tfs2fEdJt5noVmcq(bh, parentSpanInst);
      //appendnew_next_sd_ITTGLKmLHSiFtGlt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ITTGLKmLHSiFtGlt',
        spanInst,
        'sd_ITTGLKmLHSiFtGlt'
      );
    }
  }

  async sd_Tfs2fEdJt5noVmcq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tfs2fEdJt5noVmcq',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.local.isImage,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DY4Q9RUgaxIotExa(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dv8sIqOrUEwx88wI(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tfs2fEdJt5noVmcq',
        spanInst,
        'sd_Tfs2fEdJt5noVmcq'
      );
    }
  }

  async sd_dv8sIqOrUEwx88wI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dv8sIqOrUEwx88wI',
      parentSpanInst
    );
    try {
      validateNode('_EN_r7ftmleuz2', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fuhyMpezTPnKK64w(bh, parentSpanInst);
      //appendnew_next_sd_dv8sIqOrUEwx88wI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dv8sIqOrUEwx88wI',
        spanInst,
        'sd_dv8sIqOrUEwx88wI'
      );
    }
  }

  async sd_fuhyMpezTPnKK64w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fuhyMpezTPnKK64w',
      parentSpanInst
    );
    try {
      bh.local.isValid = true;
      if (!bh.input.body.name) {
        bh.local.isValid = false;
        bh.local.message = 'empty field name';
      } else if (!bh.input.body.gram) {
        bh.local.isValid = false;
        bh.local.message = 'empty field price';
      } else if (!bh.input.body.description) {
        bh.local.isValid = false;
        bh.local.message = 'empty field description';
      } else if (!bh.input.body.category) {
        bh.local.isValid = false;
        bh.local.message = 'empty field category';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mNNu3mYojUndTkgy(bh, parentSpanInst);
      //appendnew_next_sd_fuhyMpezTPnKK64w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fuhyMpezTPnKK64w',
        spanInst,
        'sd_fuhyMpezTPnKK64w'
      );
    }
  }

  async sd_mNNu3mYojUndTkgy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mNNu3mYojUndTkgy',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_84MV6CWCmQQkZTMD(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DydvHAMpTWH2EnJ3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mNNu3mYojUndTkgy',
        spanInst,
        'sd_mNNu3mYojUndTkgy'
      );
    }
  }

  async sd_84MV6CWCmQQkZTMD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_84MV6CWCmQQkZTMD',
      parentSpanInst
    );
    try {
      const axios = require('axios');

      bh.local.findQuery = { name: bh.input.body.name };
      const key = bh.input.body.category;
      bh.local.collection = 'product';
      bh.input.body.image = bh.input.files.image;
      const api = 'https://api.exchangerate-api.com/v4/latest/USD';
      const metalpriceapi = 'https://api.metals.live/v1/spot';

      let metalprice = await axios.get(metalpriceapi);

      let currency = await axios.get(api);

      const result = metalprice.data.find((obj) => obj.hasOwnProperty(key));
      const price = result[key];
      let fromRate = currency.data.rates.USD;
      let toRate = currency.data.rates.INR;
      let convertedPrice = ((toRate / fromRate) * price).toFixed(2) / 31.1035;
      bh.input.body.price = convertedPrice * bh.input.body.gram;

      console.log(bh.input.body);

      bh.input.body._id = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zBzeKj9dSLf5EpSz(bh, parentSpanInst);
      //appendnew_next_sd_84MV6CWCmQQkZTMD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_84MV6CWCmQQkZTMD',
        spanInst,
        'sd_84MV6CWCmQQkZTMD'
      );
    }
  }

  async sd_zBzeKj9dSLf5EpSz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zBzeKj9dSLf5EpSz',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_Bd4DJQTzXivkt0hw',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xwz3WsDccT1wCulB(bh, parentSpanInst);
      //appendnew_next_sd_zBzeKj9dSLf5EpSz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zBzeKj9dSLf5EpSz',
        spanInst,
        'sd_zBzeKj9dSLf5EpSz'
      );
    }
  }

  async sd_xwz3WsDccT1wCulB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xwz3WsDccT1wCulB',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xwz3WsDccT1wCulB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xwz3WsDccT1wCulB',
        spanInst,
        'sd_xwz3WsDccT1wCulB'
      );
    }
  }

  async sd_DydvHAMpTWH2EnJ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DydvHAMpTWH2EnJ3',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.local.message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DydvHAMpTWH2EnJ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DydvHAMpTWH2EnJ3',
        spanInst,
        'sd_DydvHAMpTWH2EnJ3'
      );
    }
  }

  async sd_DY4Q9RUgaxIotExa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DY4Q9RUgaxIotExa',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'must need image',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DY4Q9RUgaxIotExa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DY4Q9RUgaxIotExa',
        spanInst,
        'sd_DY4Q9RUgaxIotExa'
      );
    }
  }

  async sd_8kCcnsiRYhBbcAUK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8kCcnsiRYhBbcAUK',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8kCcnsiRYhBbcAUK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8kCcnsiRYhBbcAUK',
        spanInst,
        'sd_8kCcnsiRYhBbcAUK'
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
      (await this.sd_33dpmMiyg5XuKo47(bh, parentSpanInst))
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
  async sd_33dpmMiyg5XuKo47(bh, parentSpanInst) {
    const nodes = ['sd_BsdnO1vdnlj542Mi'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8kCcnsiRYhBbcAUK(bh, parentSpanInst);
      //appendnew_next_sd_33dpmMiyg5XuKo47
      return true;
    }
    return false;
  }
  //appendnew_flow_addProduct_service_Catch
}
