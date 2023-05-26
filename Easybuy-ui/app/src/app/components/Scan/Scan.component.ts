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
import { Scan } from 'app/sd-services/Scan'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Scan',
  templateUrl: './Scan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScanComponent {
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
      this.sd_zrAR33Ye7lx66Zgj_1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  start(barcodeText: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { barcodeText: barcodeText };
      bh.local = {};

      bh = this.sd_ATaSPl9akVKiBLlO(bh);
      //appendnew_next_start
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DGSaCEfOmCYbPzqH');
    }
  }

  cancelProduct(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_kaGPA56OPmxxhE3K(bh);
      //appendnew_next_cancelProduct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4loRw6sSG8LPvbVc');
    }
  }

  changeCount(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_F2yplR5HY7jiiN9U(bh);
      //appendnew_next_changeCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gNobqHCFhYTwWhFO');
    }
  }

  sd_zrAR33Ye7lx66Zgj_1(bh) {
    try {
      bh = this.sd_yGxv4THYziNBSaz7_1(bh);
      //appendnew_next_sd_zrAR33Ye7lx66Zgj_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vl3K71TByfHHZ5Uu');
    }
  }

  sd_8BKyQMXau1hrRhfl_1(bh) {
    try {
      bh = this.sd_lYWGr6AypaQgA5qs_1(bh);
      //appendnew_next_sd_8BKyQMXau1hrRhfl_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6dYGuT3fu7gPn46S');
    }
  }

  //appendnew_flow_ScanComponent_start

  sd_ATaSPl9akVKiBLlO(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_ELsIyr5sjW9fzkz2(bh);
      //appendnew_next_sd_ATaSPl9akVKiBLlO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ATaSPl9akVKiBLlO');
    }
  }

  sd_ELsIyr5sjW9fzkz2(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local.backendUrl}/product/${bh.input.barcodeText}`;

      bh = this.sd_vtAINFg4BIf2oPxo(bh);
      //appendnew_next_sd_ELsIyr5sjW9fzkz2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ELsIyr5sjW9fzkz2');
    }
  }

  async sd_vtAINFg4BIf2oPxo(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_d06T5jr0TioQgu99(bh);
      //appendnew_next_sd_vtAINFg4BIf2oPxo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vtAINFg4BIf2oPxo');
    }
  }

  sd_d06T5jr0TioQgu99(bh) {
    try {
      const page = this.page; // console.log(bh.input.barcodeText,typeof(bh.input.barcodeText))
      console.log(bh.local.response.result);
      let productObj = {
        productId: bh.input.barcodeText,
        imageUrl: `data:image/jpeg;base64,${bh.local.response.result.image.data}`,
        productName: bh.local.response.result.name,
        description: bh.local.response.result.description,
        weight: `${bh.local.response.result.weight}gm`,
        rate: bh.local.response.result.price.toFixed(2),
        count: 1,
      };
      if (page.products) {
        page.products.push(productObj);
      } else {
        page.products = [productObj];
      }

      //     {
      //     productId:bh.input.barcodeText,
      //     imageUrl:"/Web/Resource/cart1.png",
      //     productName:"Stone Necklace",
      //     description:"22ct Gold with Hall Mark k tis is snd dklfhjf ladjfksfja  dfkljksfj fjdksfjs fsjkldjsfs",
      //     weight:"56gm",
      //     rate:"125K",
      //     count:1
      // }

      bh = this.sd_8rpdaykBfCa3IvTX(bh);
      //appendnew_next_sd_d06T5jr0TioQgu99
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d06T5jr0TioQgu99');
    }
  }

  sd_8rpdaykBfCa3IvTX(bh) {
    try {
      this.page.products = this.page.products;

      //appendnew_next_sd_8rpdaykBfCa3IvTX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8rpdaykBfCa3IvTX');
    }
  }

  sd_kaGPA56OPmxxhE3K(bh) {
    try {
      const page = this.page;
      if (page.products) {
        page.products = page.products.filter((product) => {
          if (product.productId != bh.input.event) {
            return true;
          }
        });
      }

      //appendnew_next_sd_kaGPA56OPmxxhE3K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kaGPA56OPmxxhE3K');
    }
  }

  sd_F2yplR5HY7jiiN9U(bh) {
    try {
      const page = this.page;
      if (page.products) {
        page.products = page.products.map((product) => {
          if (product.productId == bh.input.event.productId) {
            if (bh.input.event.operation == '+') {
              product.count = product.count + 1;
            } else {
              product.count = product.count - 1;
            }
          }
          return product;
        });
      }

      // console.log(bh.input.event)

      //appendnew_next_sd_F2yplR5HY7jiiN9U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F2yplR5HY7jiiN9U');
    }
  }

  sd_0WbKbjwrzgtO4tLY(bh) {
    try {
      const page = this.page;
      bh.local.message = bh.error.error.message || 'something went wrong';

      bh = this.sd_ZzlXKX18eAiY1z8F(bh);
      //appendnew_next_sd_0WbKbjwrzgtO4tLY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0WbKbjwrzgtO4tLY');
    }
  }

  sd_ZzlXKX18eAiY1z8F(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.message, 'ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      //appendnew_next_sd_ZzlXKX18eAiY1z8F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZzlXKX18eAiY1z8F');
    }
  }

  sd_yGxv4THYziNBSaz7_1(bh) {
    try {
      bh = this.sd_OLogPnkIXIvbzjaW_1(bh);
      //appendnew_next_sd_yGxv4THYziNBSaz7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7siFBpQPqGWFbYvw');
    }
  }

  async sd_OLogPnkIXIvbzjaW_1(bh) {
    try {
      const ScanInstance: Scan = this.__page_injector__.get(Scan);

      let outputVariables = await ScanInstance.scan();

      bh = this.sd_ZkmyuIakzgpuH7Kt_1(bh);
      //appendnew_next_sd_OLogPnkIXIvbzjaW_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lXLibUdDo4sa8sBn');
    }
  }

  sd_ZkmyuIakzgpuH7Kt_1(bh) {
    try {
      const ScanInstance: Scan = this.__page_injector__.get(Scan);
      bh.local.scanner = ScanInstance['scanner'];

      bh = this.tempscanscript_1(bh);
      //appendnew_next_sd_ZkmyuIakzgpuH7Kt_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4W1f6obpo6LGDtIs');
    }
  }

  async tempscanscript_1(bh) {
    try {
      const page = this.page; // console.log(bh.local.scanner,"bh.local.scanner")

      bh.local.scanner.onUniqueRead = (txt, result) => {
        console.log(txt);
        this.start(txt);
      };

      await bh.local.scanner.setUIElement(
        (document.querySelector('.dce-video-container') as HTMLElement)
          .parentElement as HTMLElement
      );
      await bh.local.scanner.open();

      //appendnew_next_tempscanscript_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_09GxDfEx6WAb9Z71');
    }
  }

  sd_lYWGr6AypaQgA5qs_1(bh) {
    try {
      const ScanInstance: Scan = this.__page_injector__.get(Scan);
      bh.local.scanner = ScanInstance['scanner'];

      bh = this.sd_CQUQtKgQqR5cpSVV_1(bh);
      //appendnew_next_sd_lYWGr6AypaQgA5qs_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pjODkd9cQv0clqkk');
    }
  }

  async sd_CQUQtKgQqR5cpSVV_1(bh) {
    try {
      const page = this.page;
      // await bh.local.scanner.stopScanning();
      // await bh.local.scanner.stop();
      await bh.local.scanner.close();
      // await bh.local.scanner.setUIElement(null);
      // await bh.local.scanner.destroyContext();
      // bh.local.scanner = null;

      //appendnew_next_sd_CQUQtKgQqR5cpSVV_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3vDlXmlB2iDMDgF8');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_8BKyQMXau1hrRhfl_1(bh);
    }
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_lX5Xrxnz5gKzhMgK(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_lX5Xrxnz5gKzhMgK(bh) {
    const nodes = ['sd_vtAINFg4BIf2oPxo'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_0WbKbjwrzgtO4tLY(bh);
      //appendnew_next_sd_lX5Xrxnz5gKzhMgK
      return true;
    }
    return false;
  }
  //appendnew_flow_ScanComponent_Catch
}
