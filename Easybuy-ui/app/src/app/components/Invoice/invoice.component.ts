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
//append_imports_end

@Component({
  selector: 'bh-invoice',
  templateUrl: './invoice.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class invoiceComponent {
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
      this.sd_a7eFNQK3Xmhe4Nzh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { email: '', name: '' });

    //append_listeners
  }

  sd_a7eFNQK3Xmhe4Nzh(bh) {
    try {
      bh = this.sd_kqoX3sG0xlLTHUc5(bh);
      //appendnew_next_sd_a7eFNQK3Xmhe4Nzh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a7eFNQK3Xmhe4Nzh');
    }
  }

  sendInvoice(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_8HiKVRFvW90g1Kpo(bh);
      //appendnew_next_sendInvoice
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8INTktWBVBwSwDa9');
    }
  }

  printInvoice(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Lm397VaWSyQW2XIE(bh);
      //appendnew_next_printInvoice
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BkRQvgOxr9S183Ru');
    }
  }

  //appendnew_flow_invoiceComponent_start

  sd_kqoX3sG0xlLTHUc5(bh) {
    try {
      bh.local.purchaseId = JSON.parse(localStorage.getItem('purchaseId'));

      bh = this.sd_u77hYQLcqIrmyAkb(bh);
      //appendnew_next_sd_kqoX3sG0xlLTHUc5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kqoX3sG0xlLTHUc5');
    }
  }

  sd_u77hYQLcqIrmyAkb(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_gdWXxIYoV6csgwRi(bh);
      //appendnew_next_sd_u77hYQLcqIrmyAkb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u77hYQLcqIrmyAkb');
    }
  }

  sd_gdWXxIYoV6csgwRi(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local.backendUrl}/invoice/${bh.local.purchaseId}`;

      page.invoiceNumber = bh.local.purchaseId;

      const timestamp =
        parseInt(bh.local.purchaseId.substring(0, 8), 16) * 1000;
      const date = new Date(timestamp);

      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();

      page.date = `${month} ${day}, ${year}`;

      bh = this.sd_AhIt3SUWtXDJwcov(bh);
      //appendnew_next_sd_gdWXxIYoV6csgwRi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gdWXxIYoV6csgwRi');
    }
  }

  async sd_AhIt3SUWtXDJwcov(bh) {
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

      bh = this.sd_CigOR6RUbnwfcKS4(bh);
      //appendnew_next_sd_AhIt3SUWtXDJwcov
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AhIt3SUWtXDJwcov');
    }
  }

  sd_CigOR6RUbnwfcKS4(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'result arrived');

      bh.local.result.message[0].products =
        bh.local.result.message[0]?.products?.map((product) => {
          product.price = product.price.toFixed(2);
          product.totalPrice = product.totalPrice.toFixed(2);
          return product;
        });

      bh.local.result.message[0].totalAmount =
        bh.local.result.message[0]?.totalAmount.toFixed(2);
      page.data = bh.local.result.message[0];

      console.log(page.data, 'pagedata');

      bh = this.sd_1EsGYypDz2klVTOj(bh);
      //appendnew_next_sd_CigOR6RUbnwfcKS4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CigOR6RUbnwfcKS4');
    }
  }

  sd_1EsGYypDz2klVTOj(bh) {
    try {
      //appendnew_next_sd_1EsGYypDz2klVTOj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1EsGYypDz2klVTOj');
    }
  }

  sd_8HiKVRFvW90g1Kpo(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_zpJtUdWMxIBgzDQo(bh);
      //appendnew_next_sd_8HiKVRFvW90g1Kpo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HiKVRFvW90g1Kpo');
    }
  }

  sd_zpJtUdWMxIBgzDQo(bh) {
    try {
      const page = this.page;
      document.getElementById('invoiceOperations').style.display = 'none';
      let invoice = document.documentElement.innerHTML;

      // let img = new Image();
      // img.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(invoice);

      bh.local.data = {
        invoice: invoice,
        email: page.email,
      };

      bh.local.url = `${bh.local.backendUrl}/invoice`;

      bh = this.sendInvoicerequest(bh);
      //appendnew_next_sd_zpJtUdWMxIBgzDQo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zpJtUdWMxIBgzDQo');
    }
  }

  async sendInvoicerequest(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.data,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_qvnPI7ZbnHBaHJtp(bh);
      //appendnew_next_sendInvoicerequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BetG4oms67TPSFKL');
    }
  }

  sd_qvnPI7ZbnHBaHJtp(bh) {
    try {
      const page = this.page;
      document.getElementById('invoiceOperations').style.display = 'block';

      //appendnew_next_sd_qvnPI7ZbnHBaHJtp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qvnPI7ZbnHBaHJtp');
    }
  }

  sd_Lm397VaWSyQW2XIE(bh) {
    try {
      const page = this.page;
      window.print();

      //appendnew_next_sd_Lm397VaWSyQW2XIE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lm397VaWSyQW2XIE');
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
      this.sd_muIWGTUTAmHJDtsM(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_muIWGTUTAmHJDtsM(bh) {
    const nodes = ['sd_BetG4oms67TPSFKL'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_qvnPI7ZbnHBaHJtp(bh);
      //appendnew_next_sd_muIWGTUTAmHJDtsM
      return true;
    }
    return false;
  }
  //appendnew_flow_invoiceComponent_Catch
}
