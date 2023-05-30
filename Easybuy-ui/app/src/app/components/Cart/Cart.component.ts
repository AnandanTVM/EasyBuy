/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Cart',
  templateUrl: './Cart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CartComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_fMJI52IasnqLbnVf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, {
      coupon: undefined,
      total: undefined,
      discount: undefined,
      grandTotal: undefined,
      couponValue: undefined,
      verify: 'none',
    });

    //append_listeners
  }

  sd_fMJI52IasnqLbnVf(bh) {
    try {
      bh = this.sd_tGcfL9mhDSEccqFZ(bh);
      //appendnew_next_sd_fMJI52IasnqLbnVf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fMJI52IasnqLbnVf');
    }
  }

  changeCount(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_yJ3nbOf87MBsmlcg(bh);
      //appendnew_next_changeCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pcqv1qnHv5S2I53g');
    }
  }

  sendLink(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_yYE5w35IzD6ZwHMq(bh);
      //appendnew_next_sendLink
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZcOXUOIqFXBT8atb');
    }
  }

  applyCoupon(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_NY5Tt0S9dYll09dn(bh);
      //appendnew_next_applyCoupon
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DQG5Rg7srYLlHe6G');
    }
  }

  //appendnew_flow_CartComponent_start

  sd_tGcfL9mhDSEccqFZ(bh) {
    try {
      this.page.carts = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_sKnaNVIT8cCEUWkC(bh);
      //appendnew_next_sd_tGcfL9mhDSEccqFZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tGcfL9mhDSEccqFZ');
    }
  }

  sd_sKnaNVIT8cCEUWkC(bh) {
    try {
      this.page.coupon = JSON.parse(localStorage.getItem('coupon'));

      bh = this.sd_8rWlThcTPSk7AezS(bh);
      //appendnew_next_sd_sKnaNVIT8cCEUWkC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sKnaNVIT8cCEUWkC');
    }
  }

  sd_8rWlThcTPSk7AezS(bh) {
    try {
      const page = this.page;
      page.total = page?.carts?.reduce((acc, cartItem) => {
        acc = acc + cartItem.count * cartItem.rate;
        return acc;
      }, 0);

      page.total = page.total?.toFixed(2);

      if (page.coupon) {
        page.grandTotal =
          page?.total - page.total * (page.coupon?.percentage / 100);
      } else {
        page.coupon = {
          percentage: 0,
        };
        page.grandTotal = page?.total;
      }

      // page.grandTotal=page.grandTotal.toFixed(2)

      //appendnew_next_sd_8rWlThcTPSk7AezS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8rWlThcTPSk7AezS');
    }
  }

  sd_yJ3nbOf87MBsmlcg(bh) {
    try {
      bh.local.carts = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_SL9A5DFrickjDU60(bh);
      //appendnew_next_sd_yJ3nbOf87MBsmlcg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yJ3nbOf87MBsmlcg');
    }
  }

  sd_SL9A5DFrickjDU60(bh) {
    try {
      const page = this.page;
      bh.local.remove = false;
      if (bh.local.carts) {
        bh.local.carts = bh.local.carts.map((product) => {
          if (product.productId == bh.input.event.productId) {
            if (bh.input.event.operation == '+') {
              product.count = product.count + 1;
            } else {
              if (product.count - 1) {
                product.count = product.count - 1;
              } else {
                bh.local.remove = true;
              }
            }
          }
          return product;
        });
      }

      console.log(bh.input.event);

      bh = this.sd_PQCHkN0EMhytq4pj(bh);
      //appendnew_next_sd_SL9A5DFrickjDU60
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SL9A5DFrickjDU60');
    }
  }

  sd_PQCHkN0EMhytq4pj(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.remove,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_uQblh2eJjXujapgN(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.remove,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oliIWNNl7IxMw8GJ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PQCHkN0EMhytq4pj');
    }
  }

  sd_uQblh2eJjXujapgN(bh) {
    try {
      const page = this.page;

      bh.local.carts = bh.local.carts.filter((product) => {
        if (product.productId != bh.input.event.productId) {
          return true;
        }
      });

      bh = this.sd_oliIWNNl7IxMw8GJ(bh);
      //appendnew_next_sd_uQblh2eJjXujapgN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQblh2eJjXujapgN');
    }
  }

  sd_oliIWNNl7IxMw8GJ(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.carts));

      bh = this.sd_tGcfL9mhDSEccqFZ(bh);
      //appendnew_next_sd_oliIWNNl7IxMw8GJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oliIWNNl7IxMw8GJ');
    }
  }

  sd_yYE5w35IzD6ZwHMq(bh) {
    try {
      bh.local.carts = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_5bIx0cZ5DVZGBPLj(bh);
      //appendnew_next_sd_yYE5w35IzD6ZwHMq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yYE5w35IzD6ZwHMq');
    }
  }

  sd_5bIx0cZ5DVZGBPLj(bh) {
    try {
      bh.local.employeeData = JSON.parse(localStorage.getItem('employeeData'));

      bh = this.sd_fwrNotQk7SCyirGF(bh);
      //appendnew_next_sd_5bIx0cZ5DVZGBPLj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5bIx0cZ5DVZGBPLj');
    }
  }

  sd_fwrNotQk7SCyirGF(bh) {
    try {
      bh.local.userPhoneNumber = JSON.parse(
        localStorage.getItem('userPhoneNumber')
      );

      bh = this.sd_gqmfN2eLGzlVnj3C(bh);
      //appendnew_next_sd_fwrNotQk7SCyirGF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fwrNotQk7SCyirGF');
    }
  }

  sd_gqmfN2eLGzlVnj3C(bh) {
    try {
      bh.local.coupon = JSON.parse(localStorage.getItem('coupon'));

      bh = this.sd_Wio5wsYGWvmXEUpB(bh);
      //appendnew_next_sd_gqmfN2eLGzlVnj3C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gqmfN2eLGzlVnj3C');
    }
  }

  sd_Wio5wsYGWvmXEUpB(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_B55fi9rCcStvBlym(bh);
      //appendnew_next_sd_Wio5wsYGWvmXEUpB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wio5wsYGWvmXEUpB');
    }
  }

  sd_B55fi9rCcStvBlym(bh) {
    try {
      const page = this.page;
      console.log(bh.local.carts);
      bh.local.carts = bh.local.carts.map((cartItem) => {
        return {
          productid: cartItem.productId,
          count: cartItem.count,
        };
      });
      console.log(bh.local.carts);
      console.log(bh.local.employeeData);

      bh.local.body = {
        employeeId: bh.local.employeeData.employeeid,
        userPhoneNumber: bh.local.userPhoneNumber,
        product: bh.local.carts,
        couponcode: bh.local.coupon?.couponcode,
      };

      bh.local.url = `${bh.local.backendUrl}/place-order`;
      console.log(bh.local.body);

      document.getElementById('cart-container').style.display = 'none';
      document.getElementById('loading').style.display = 'flex';

      bh = this.placeOrderReq(bh);
      //appendnew_next_sd_B55fi9rCcStvBlym
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B55fi9rCcStvBlym');
    }
  }

  async placeOrderReq(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_lzLoT21CqrPmNnDa(bh);
      //appendnew_next_placeOrderReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F6VH95gcjVloGbOm');
    }
  }

  sd_lzLoT21CqrPmNnDa(bh) {
    try {
      localStorage.removeItem('cartItems');

      bh = this.sd_lHmAuz5oVpjPEUN0(bh);
      //appendnew_next_sd_lzLoT21CqrPmNnDa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzLoT21CqrPmNnDa');
    }
  }

  sd_lHmAuz5oVpjPEUN0(bh) {
    try {
      localStorage.removeItem('userPhoneNumber');

      bh = this.sd_QT776AQa48jorxmO(bh);
      //appendnew_next_sd_lHmAuz5oVpjPEUN0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lHmAuz5oVpjPEUN0');
    }
  }

  sd_QT776AQa48jorxmO(bh) {
    try {
      localStorage.removeItem('coupon');

      bh = this.sd_LFzuFR9StdsciGnH(bh);
      //appendnew_next_sd_QT776AQa48jorxmO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QT776AQa48jorxmO');
    }
  }

  sd_LFzuFR9StdsciGnH(bh) {
    try {
      const page = this.page;
      document.getElementById('loading').style.display = 'none';
      document.getElementById('success').style.display = 'flex';

      //appendnew_next_sd_LFzuFR9StdsciGnH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LFzuFR9StdsciGnH');
    }
  }

  async sd_NY5Tt0S9dYll09dn(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          this.page.couponValue,
          'undefined',
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['empty'](
          this.page.couponValue,
          undefined,
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['null'](
          this.page.couponValue,
          undefined,
          undefined,
          undefined
        )
      ) {
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
        bh = await this.sd_I3TJSnz1iMiHzGjG(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NY5Tt0S9dYll09dn');
    }
  }

  sd_I3TJSnz1iMiHzGjG(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_drTz7IzQuJ03elOD(bh);
      //appendnew_next_sd_I3TJSnz1iMiHzGjG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I3TJSnz1iMiHzGjG');
    }
  }

  sd_drTz7IzQuJ03elOD(bh) {
    try {
      const page = this.page;

      bh.local.url = `${bh.local.backendUrl}/get-coupon/${page.couponValue}`;

      console.log(bh.local.url, 'url');

      bh = this.sd_8wTdG82wHqwthKFW(bh);
      //appendnew_next_sd_drTz7IzQuJ03elOD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_drTz7IzQuJ03elOD');
    }
  }

  async sd_8wTdG82wHqwthKFW(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_3uU4UeAGKnhBzj89(bh);
      //appendnew_next_sd_8wTdG82wHqwthKFW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8wTdG82wHqwthKFW');
    }
  }

  sd_3uU4UeAGKnhBzj89(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'result');

      page.verify = 'block';

      bh = this.sd_GRjYUxtyjm0gaywq(bh);
      //appendnew_next_sd_3uU4UeAGKnhBzj89
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3uU4UeAGKnhBzj89');
    }
  }

  sd_GRjYUxtyjm0gaywq(bh) {
    try {
      localStorage.setItem('coupon', JSON.stringify(bh.local.result.message));

      bh = this.sd_tGcfL9mhDSEccqFZ(bh);
      //appendnew_next_sd_GRjYUxtyjm0gaywq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GRjYUxtyjm0gaywq');
    }
  }

  sd_muS3dsU0dZmv2Crt(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('bh.error.error.response', 'ok', {
          duration: 1000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_muS3dsU0dZmv2Crt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_muS3dsU0dZmv2Crt');
    }
  }

  sd_OE6sFWz9PGLCVMet(bh) {
    try {
      const page = this.page;
      console.log(bh.error);

      document.getElementById('cart-container').style.display = 'block';
      document.getElementById('loading').style.display = 'none';

      //appendnew_next_sd_OE6sFWz9PGLCVMet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OE6sFWz9PGLCVMet');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_PpdEotEDavykbNoS(bh) ||
      this.sd_1v4343ZRV3LVMejg(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_PpdEotEDavykbNoS(bh) {
    const nodes = ['sd_8wTdG82wHqwthKFW'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_muS3dsU0dZmv2Crt(bh);
      //appendnew_next_sd_PpdEotEDavykbNoS
      return true;
    }
    return false;
  }
  sd_1v4343ZRV3LVMejg(bh) {
    const nodes = ['sd_F6VH95gcjVloGbOm'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_OE6sFWz9PGLCVMet(bh);
      //appendnew_next_sd_1v4343ZRV3LVMejg
      return true;
    }
    return false;
  }
  //appendnew_flow_CartComponent_Catch
}
