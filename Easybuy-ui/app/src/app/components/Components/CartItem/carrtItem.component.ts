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
  selector: 'bh-carrtItem',
  templateUrl: './carrtItem.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class carrtItemComponent {
  @Input('cart')
  public cart: any = undefined;
  @Input('value')
  public value: any = undefined;
  @Input('product')
  public product: any = undefined;
  @Output('changeCount')
  public changeCount: any = new EventEmitter<any>();
  @Output('cancelProduct')
  public cancelProduct: any = new EventEmitter<any>();
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
      this.sd_uaTUTKhetY0l4Fv4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uaTUTKhetY0l4Fv4(bh) {
    try {
      bh = this.sd_baJ2CV8EskJErTiL(bh);
      //appendnew_next_sd_uaTUTKhetY0l4Fv4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaTUTKhetY0l4Fv4');
    }
  }

  changeCartCount(
    operation: any = undefined,
    productId: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { operation: operation, productId: productId };
      bh.local = {};

      bh = this.sd_c7ZPISyvr1Aw10Wq(bh);
      //appendnew_next_changeCartCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srZtqE1hLTdSBxIa');
    }
  }

  removeProduct(productId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { productId: productId };
      bh.local = {};

      bh = this.sd_6hrPyJ2541SqccQF(bh);
      //appendnew_next_removeProduct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8uPRdMIIG4ml0Cm1');
    }
  }

  changeProductCount(
    operation: any = undefined,
    productId: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { operation: operation, productId: productId };
      bh.local = {};

      bh = this.sd_RVQV6K8j5ruWLxWi(bh);
      //appendnew_next_changeProductCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qWTJFcf3X25hDcQ7');
    }
  }

  addToCart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_0nIFTLEGsE1Uti6u(bh);
      //appendnew_next_addToCart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RspHmhSmEj6sveRa');
    }
  }

  //appendnew_flow_carrtItemComponent_start

  sd_baJ2CV8EskJErTiL(bh) {
    try {
      const page = this.page;
      console.log(bh.pageInput.value);

      page.show = bh.pageInput.value;

      bh = this.sd_2E5pNaOCcSbA5Jez(bh);
      //appendnew_next_sd_baJ2CV8EskJErTiL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_baJ2CV8EskJErTiL');
    }
  }

  sd_2E5pNaOCcSbA5Jez(bh) {
    try {
      //appendnew_next_sd_2E5pNaOCcSbA5Jez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2E5pNaOCcSbA5Jez');
    }
  }

  sd_c7ZPISyvr1Aw10Wq(bh) {
    try {
      const page = this.page;
      bh.local.operation = {
        operation: bh.input.operation,
        productId: bh.input.productId,
      };

      bh = this.sd_rlRzsU0Q686DUAhg(bh);
      //appendnew_next_sd_c7ZPISyvr1Aw10Wq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c7ZPISyvr1Aw10Wq');
    }
  }

  sd_rlRzsU0Q686DUAhg(bh) {
    try {
      bh.pageOutput.changeCount.emit(bh.local.operation);

      //appendnew_next_sd_rlRzsU0Q686DUAhg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rlRzsU0Q686DUAhg');
    }
  }

  sd_6hrPyJ2541SqccQF(bh) {
    try {
      bh.pageOutput.cancelProduct.emit(bh.input.productId);

      //appendnew_next_sd_6hrPyJ2541SqccQF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6hrPyJ2541SqccQF');
    }
  }

  sd_RVQV6K8j5ruWLxWi(bh) {
    try {
      const page = this.page;
      bh.local.operation = {
        operation: bh.input.operation,
        productId: bh.input.productId,
      };

      bh = this.sd_YeQGJ2LHPlsufOx1(bh);
      //appendnew_next_sd_RVQV6K8j5ruWLxWi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RVQV6K8j5ruWLxWi');
    }
  }

  sd_YeQGJ2LHPlsufOx1(bh) {
    try {
      bh.pageOutput.changeCount.emit(bh.local.operation);

      //appendnew_next_sd_YeQGJ2LHPlsufOx1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YeQGJ2LHPlsufOx1');
    }
  }

  sd_0nIFTLEGsE1Uti6u(bh) {
    try {
      const page = this.page;
      console.log(bh.pageInput.product);
      console.log(bh);

      bh.local.product = bh.pageInput.product;

      bh = this.sd_sXRxCaBw66Ddmewr(bh);
      //appendnew_next_sd_0nIFTLEGsE1Uti6u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0nIFTLEGsE1Uti6u');
    }
  }

  sd_sXRxCaBw66Ddmewr(bh) {
    try {
      bh.local.cartItems = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_bWNoWELHEXu70PHH(bh);
      //appendnew_next_sd_sXRxCaBw66Ddmewr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sXRxCaBw66Ddmewr');
    }
  }

  async sd_bWNoWELHEXu70PHH(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.local.cartItems,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_QXJYCJH5qwKBH5oF(bh);
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
        bh = await this.sd_CgvPv50lLcb4pwbr(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bWNoWELHEXu70PHH');
    }
  }

  sd_QXJYCJH5qwKBH5oF(bh) {
    try {
      const page = this.page;
      bh.local.product = [bh.local.product];

      bh = this.sd_9L8Gkc4DwbpV5AlQ(bh);
      //appendnew_next_sd_QXJYCJH5qwKBH5oF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QXJYCJH5qwKBH5oF');
    }
  }

  sd_9L8Gkc4DwbpV5AlQ(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.product));

      bh = this.sd_tVUZyJxoyWRFYChp(bh);
      //appendnew_next_sd_9L8Gkc4DwbpV5AlQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9L8Gkc4DwbpV5AlQ');
    }
  }

  sd_tVUZyJxoyWRFYChp(bh) {
    try {
      let outputVariables = this.removeProduct(bh.pageInput.product.productId);

      //appendnew_next_sd_tVUZyJxoyWRFYChp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tVUZyJxoyWRFYChp');
    }
  }

  sd_CgvPv50lLcb4pwbr(bh) {
    try {
      const page = this.page;
      bh.local.cartItems;
      bh.pageInput.product;

      bh.local.exist = false;
      bh.local.cartItems.map((product) => {
        if (product.productId == bh.pageInput.product.productId) {
          bh.local.exist = true;
        }
      });

      bh = this.sd_HkO8UAv4bxezKPZn(bh);
      //appendnew_next_sd_CgvPv50lLcb4pwbr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CgvPv50lLcb4pwbr');
    }
  }

  sd_HkO8UAv4bxezKPZn(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_tVUZyJxoyWRFYChp(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2lXUZ4iurIplLcnX(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HkO8UAv4bxezKPZn');
    }
  }

  sd_2lXUZ4iurIplLcnX(bh) {
    try {
      const page = this.page;
      console.log(bh.local.cartItems);
      bh.local.cartItems.push(bh.local.product);

      bh = this.sd_VqBlLuGB1xaPaYci(bh);
      //appendnew_next_sd_2lXUZ4iurIplLcnX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2lXUZ4iurIplLcnX');
    }
  }

  sd_VqBlLuGB1xaPaYci(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.cartItems));

      bh = this.sd_tVUZyJxoyWRFYChp(bh);
      //appendnew_next_sd_VqBlLuGB1xaPaYci
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VqBlLuGB1xaPaYci');
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
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_carrtItemComponent_Catch
}
