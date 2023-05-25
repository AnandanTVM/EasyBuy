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
  selector: 'bh-Navbar',
  templateUrl: './Navbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class NavbarComponent {
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
      this.sd_7lTfrt6Cf9D18M6X_1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7lTfrt6Cf9D18M6X_1(bh) {
    try {
      bh = this.sd_9mrdYckLuTxBlVwN_1(bh);
      //appendnew_next_sd_7lTfrt6Cf9D18M6X_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KC1iOswxwofo37mc');
    }
  }

  //appendnew_flow_NavbarComponent_start

  sd_9mrdYckLuTxBlVwN_1(bh) {
    try {
      const page = this.page;
      bh.local.navbarValue = [
        {
          Link: '/ui/home',
          img: 'https://res.cloudinary.com/ddtcmyvhx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684931545/profile_4_edbhg1.jpg?_s=public-apps',
        },
        {
          Link: '/ui/home',
          img: 'https://res.cloudinary.com/ddtcmyvhx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684931545/profile_4_edbhg1.jpg?_s=public-apps',
        },
        {
          Link: '/ui/scan',
          img: 'https://res.cloudinary.com/ddtcmyvhx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684931437/profile_3_efmv9q.jpg?_s=public-apps',
        },
        {
          Link: '/ui/customer-list',
          img: 'https://res.cloudinary.com/ddtcmyvhx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684930655/profile_2_ospmsp.jpg?_s=public-apps',
        },
        {
          Link: '/ui/profile',
          img: 'https://res.cloudinary.com/ddtcmyvhx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684930521/profile_1_peovp6.jpg?_s=public-apps',
        },
      ];

      bh = this.sd_2lZeTT5zUUUj7P3O_1(bh);
      //appendnew_next_sd_9mrdYckLuTxBlVwN_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QFh2XH6cVfFhFBxN');
    }
  }

  sd_2lZeTT5zUUUj7P3O_1(bh) {
    try {
      this.page.navBar = bh.local.navbarValue;

      //appendnew_next_sd_2lZeTT5zUUUj7P3O_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WK4zRfaPiiUxgDzT');
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
  //appendnew_flow_NavbarComponent_Catch
}
