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
  selector: 'bh-SubNavbar',
  templateUrl: './SubNavbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class SubNavbarComponent {
  @Input('subNavTitle')
  public subNavTitle: any = undefined;
  @Input('IconUrl')
  public IconUrl: any = undefined;
  @Input('textColor')
  public textColor: any = undefined;
  @Input('goto')
  public goto: any = undefined;
  @Input('backgroundColor')
  public backgroundColor: any = undefined;
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
      this.sd_8sAuVMWz8jl2QT13(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8sAuVMWz8jl2QT13(bh) {
    try {
      bh = this.sd_RzS97LYGg8cM2Usj(bh);
      //appendnew_next_sd_8sAuVMWz8jl2QT13
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8sAuVMWz8jl2QT13');
    }
  }

  goBack(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_RP0f37fpoDtDDrXt(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uBO7tmHli7rIhExE');
    }
  }

  //appendnew_flow_SubNavbarComponent_start

  sd_RzS97LYGg8cM2Usj(bh) {
    try {
      //appendnew_next_sd_RzS97LYGg8cM2Usj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RzS97LYGg8cM2Usj');
    }
  }

  sd_RP0f37fpoDtDDrXt(bh) {
    try {
      const page = this.page; // bh.local.location.back()

      window.history.back();

      //appendnew_next_sd_RP0f37fpoDtDDrXt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RP0f37fpoDtDDrXt');
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
  //appendnew_flow_SubNavbarComponent_Catch
}
