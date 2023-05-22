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
  selector: 'bh-Product',
  templateUrl: './Product.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProductComponent {
  @Input('product')
  public product: any = undefined;
  @Output('cancelProduct')
  public cancelProduct: any = new EventEmitter<any>();
  @Output('changeCount')
  public changeCount: any = new EventEmitter<any>();
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
      this.sd_DZVhFFFTdM2Fw40e(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DZVhFFFTdM2Fw40e(bh) {
    try {
      bh = this.sd_mqjGan12odfyv6VY(bh);
      //appendnew_next_sd_DZVhFFFTdM2Fw40e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZVhFFFTdM2Fw40e');
    }
  }

  removeProduct(productId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { productId: productId };
      bh.local = {};

      bh = this.sd_qd3hGLzszT4bPJZK(bh);
      //appendnew_next_removeProduct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ImRDb7yLMnf49hBE');
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

      bh = this.sd_zayazj7lYbejt51W(bh);
      //appendnew_next_changeProductCount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FeSgbjcogz1NPICz');
    }
  }

  addToCart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_87DM7vH3ufaL2oLl(bh);
      //appendnew_next_addToCart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KxAG0YltYEsGROT2');
    }
  }

  //appendnew_flow_ProductComponent_start

  sd_mqjGan12odfyv6VY(bh) {
    try {
      //appendnew_next_sd_mqjGan12odfyv6VY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mqjGan12odfyv6VY');
    }
  }

  sd_qd3hGLzszT4bPJZK(bh) {
    try {
      bh.pageOutput.cancelProduct.emit(bh.input.productId);

      //appendnew_next_sd_qd3hGLzszT4bPJZK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qd3hGLzszT4bPJZK');
    }
  }

  sd_zayazj7lYbejt51W(bh) {
    try {
      const page = this.page;
      bh.local.operation = {
        operation: bh.input.operation,
        productId: bh.input.productId,
      };

      bh = this.sd_CaKMW7spAdQW572V(bh);
      //appendnew_next_sd_zayazj7lYbejt51W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zayazj7lYbejt51W');
    }
  }

  sd_CaKMW7spAdQW572V(bh) {
    try {
      bh.pageOutput.changeCount.emit(bh.local.operation);

      //appendnew_next_sd_CaKMW7spAdQW572V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CaKMW7spAdQW572V');
    }
  }

  sd_87DM7vH3ufaL2oLl(bh) {
    try {
      const page = this.page;
      console.log(bh.pageInput.product);
      console.log(bh);

      bh.local.product = bh.pageInput.product;

      bh = this.sd_oegt35CunD4syGvm(bh);
      //appendnew_next_sd_87DM7vH3ufaL2oLl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_87DM7vH3ufaL2oLl');
    }
  }

  sd_oegt35CunD4syGvm(bh) {
    try {
      bh.local.cartItems = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_iBNXHphdO23SKxKT(bh);
      //appendnew_next_sd_oegt35CunD4syGvm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oegt35CunD4syGvm');
    }
  }

  async sd_iBNXHphdO23SKxKT(bh) {
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
        bh = this.sd_4pjTA4cDeNvqokwC(bh);
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
        bh = await this.sd_DCFtGgvTCYjGlvDM(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iBNXHphdO23SKxKT');
    }
  }

  sd_4pjTA4cDeNvqokwC(bh) {
    try {
      const page = this.page;
      bh.local.product = [bh.local.product];

      bh = this.sd_VrW5k87vqbaVjWdL(bh);
      //appendnew_next_sd_4pjTA4cDeNvqokwC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4pjTA4cDeNvqokwC');
    }
  }

  sd_VrW5k87vqbaVjWdL(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.product));

      bh = this.sd_Fp51eoQc7WG1aYhz(bh);
      //appendnew_next_sd_VrW5k87vqbaVjWdL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VrW5k87vqbaVjWdL');
    }
  }

  sd_Fp51eoQc7WG1aYhz(bh) {
    try {
      let outputVariables = this.removeProduct(bh.pageInput.product.productId);

      //appendnew_next_sd_Fp51eoQc7WG1aYhz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fp51eoQc7WG1aYhz');
    }
  }

  sd_DCFtGgvTCYjGlvDM(bh) {
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

      bh = this.sd_4O2LLLyPevHEfrAr(bh);
      //appendnew_next_sd_DCFtGgvTCYjGlvDM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DCFtGgvTCYjGlvDM');
    }
  }

  sd_4O2LLLyPevHEfrAr(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Fp51eoQc7WG1aYhz(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_cvdLjA11i7Gvdo4G(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4O2LLLyPevHEfrAr');
    }
  }

  sd_cvdLjA11i7Gvdo4G(bh) {
    try {
      const page = this.page;
      console.log(bh.local.cartItems);
      bh.local.cartItems.push(bh.local.product);

      bh = this.sd_WUjr35uDnFEUac0n(bh);
      //appendnew_next_sd_cvdLjA11i7Gvdo4G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cvdLjA11i7Gvdo4G');
    }
  }

  sd_WUjr35uDnFEUac0n(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.cartItems));

      bh = this.sd_Fp51eoQc7WG1aYhz(bh);
      //appendnew_next_sd_WUjr35uDnFEUac0n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WUjr35uDnFEUac0n');
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
  //appendnew_flow_ProductComponent_Catch
}
