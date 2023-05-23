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
export class Invoice_service {
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
    this.serviceName = 'Invoice_service';
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
      instance = new Invoice_service(
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
      //appendnew_flow_Invoice_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Invoice_service');

    //appendnew_flow_Invoice_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Invoice_service');
    //appendnew_flow_Invoice_service_HttpIn
  }
  //   service flows_Invoice_service

  async getInvoice_Api(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getInvoice_Api',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5IJzFZe0cxXXrJMP(bh, parentSpanInst);
      //appendnew_next_getInvoice_Api
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h8Q566CQPFotQrZC',
        spanInst,
        'getInvoice_Api'
      );
    }
  }

  async sendInvoice_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sendInvoice_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendMail(bh, parentSpanInst);
      //appendnew_next_sendInvoice_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ELt4IopbavD6erkj',
        spanInst,
        'sendInvoice_start'
      );
    }
  }

  //appendnew_flow_Invoice_service_start

  async sd_5IJzFZe0cxXXrJMP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5IJzFZe0cxXXrJMP',
      parentSpanInst
    );
    try {
      console.log(bh.input.params);
      const { ObjectId } = require('mongodb');

      const idString = bh.input.params.id;

      if (ObjectId.isValid(idString)) {
        bh.local.isIdValid = true;
      } else {
        bh.local.isIdValid = false;
      }

      bh.local.collection = 'orders';
      bh.local.query = [
        { $match: { _id: ObjectId(idString) } },
        { $unwind: '$product' },
        {
          $lookup: {
            from: 'product',
            localField: 'product.productid',
            foreignField: '_id',
            as: 'productDetails',
          },
        },
        {
          $group: {
            _id: '$_id',
            customerNumber: { $first: '$customerNumber' },
            empId: { $first: '$empId' },
            totalAmount: { $first: '$totalAmount' },
            paymentStatus: { $first: '$paymentStatus' },
            paymentid: { $first: '$paymentid' },
            discountPercentage: { $first: '$couponDetails' },
            products: {
              $push: {
                productid: '$product.productid',
                count: '$product.count',
                price: '$product.price',
                productDetails: {
                  _id: { $arrayElemAt: ['$productDetails._id', 0] },
                  name: { $arrayElemAt: ['$productDetails.name', 0] },
                  gram: {
                    $toInt: { $arrayElemAt: ['$productDetails.gram', 0] },
                  },
                },
                totalPrice: {
                  $multiply: [
                    '$product.count',
                    // { $toInt: { $arrayElemAt: ["$productDetails.gram", 0] } },
                    '$product.price',
                  ],
                },
              },
            },
          },
        },
        // {
        //   $group: {
        //     _id: '$_id',
        //     customerNumber: { $first: '$customerNumber' },
        //     empId: { $first: '$empId' },
        //     totalAmount: { $first: '$totalAmount' },
        //     paymentStatus: { $first: '$paymentStatus' },
        //     paymentid: { $first: '$paymentid' },
        //     products: {
        //       $push: {
        //         productid: '$product.productid',
        //         count: '$product.count',
        //         price: '$product.price',
        //         productDetails: {
        //         //  $push: {
        //             _id: '$productDetails._id',
        //             name: '$productDetails.name',
        //             gram: '$productDetails.gram'
        //         //  }
        //         }
        //       }
        //     }
        //   }
        // }

        //   {
        //   $group: {
        //     _id: {
        //       id: "$_id",
        //       customerNumber: "$customerNumber",
        //       empId: "$empId",
        //       paymentStatus: "$paymentStatus",
        //       paymentid: "$paymentid"
        //     },
        //     products: {
        //       $push: {
        //         productid: "$productDetails._id",
        //         count: "$productDetails.count",
        //         price: "$productDetails.product.price",
        //         productDetails: {
        //           name: "$productDetails.product.name",
        //           gram: "$productDetails.gram"
        //         },
        //         total_price: {
        //           $multiply: ["$productDetails.count", "$productDetails.product.price"]
        //         }
        //       }
        //     },
        //     totalAmount: { $sum: { $multiply: ["$productDetails.count", "$productDetails.product.price"] } }
        //   }
        // },
        // {
        //   $addFields: {
        //     "products.total_price": {
        //       $sum: "$products.total_price"
        //     }
        //   }
        // },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dK29qcoGYVYWv0TV(bh, parentSpanInst);
      //appendnew_next_sd_5IJzFZe0cxXXrJMP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5IJzFZe0cxXXrJMP',
        spanInst,
        'sd_5IJzFZe0cxXXrJMP'
      );
    }
  }

  async sd_dK29qcoGYVYWv0TV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dK29qcoGYVYWv0TV',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isIdValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ATbp9YDI2SyEtJNf(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isIdValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sZWHxRWZhmaylv3K(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dK29qcoGYVYWv0TV',
        spanInst,
        'sd_dK29qcoGYVYWv0TV'
      );
    }
  }

  async sd_ATbp9YDI2SyEtJNf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ATbp9YDI2SyEtJNf',
      parentSpanInst
    );
    try {
      console.log('valid');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GO7o5StERblYGw94(bh, parentSpanInst);
      //appendnew_next_sd_ATbp9YDI2SyEtJNf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ATbp9YDI2SyEtJNf',
        spanInst,
        'sd_ATbp9YDI2SyEtJNf'
      );
    }
  }

  async sd_GO7o5StERblYGw94(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GO7o5StERblYGw94',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_4MRsM0YmbUtsiMmm',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GO7o5StERblYGw94
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GO7o5StERblYGw94',
        spanInst,
        'sd_GO7o5StERblYGw94'
      );
    }
  }

  async sd_sZWHxRWZhmaylv3K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sZWHxRWZhmaylv3K',
      parentSpanInst
    );
    try {
      console.log('not valid');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sZWHxRWZhmaylv3K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sZWHxRWZhmaylv3K',
        spanInst,
        'sd_sZWHxRWZhmaylv3K'
      );
    }
  }

  async sendMail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendMail', parentSpanInst);
    try {
      console.log(bh.input.body);

      const htmlMinifier = require('html-minifier').minify;
      const minifiedInvoice = htmlMinifier(bh.input.body.invoice, {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      const nodemailer = require('nodemailer');

      let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'easybuyapi@outlook.com',
          pass: 'brototype123',
        },
      });

      transporter.sendMail({
        from: 'easybuyapi@outlook.com',
        to: bh.input.body.email,
        subject: 'Invoice',
        text: 'Here is your invoice!',
        html: `<span>${bh.input.body.invoice}</span>`,
      });

      //  attachments: [{   // stream as an attachment
      //           filename: 'invoice.jpg',
      //           content: bh.input.body.invoice
      //       }]

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sendMail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w2bCxhoEdZO75gfO',
        spanInst,
        'sendMail'
      );
    }
  }

  async sd_ZhHKkDd80YcZZQat(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZhHKkDd80YcZZQat',
      parentSpanInst
    );
    try {
      console.log(bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZhHKkDd80YcZZQat
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZhHKkDd80YcZZQat',
        spanInst,
        'sd_ZhHKkDd80YcZZQat'
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
      (await this.sd_opWbztxJtLO4u8LQ(bh, parentSpanInst))
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
  async sd_opWbztxJtLO4u8LQ(bh, parentSpanInst) {
    const nodes = ['sd_w2bCxhoEdZO75gfO'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ZhHKkDd80YcZZQat(bh, parentSpanInst);
      //appendnew_next_sd_opWbztxJtLO4u8LQ
      return true;
    }
    return false;
  }
  //appendnew_flow_Invoice_service_Catch
}
