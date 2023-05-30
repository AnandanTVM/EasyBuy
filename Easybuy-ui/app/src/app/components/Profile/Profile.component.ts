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
import { getuserData } from 'app/sd-services/getuserData'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Profile',
  templateUrl: './Profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProfileComponent {
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
      this.sd_jZ3OpMvU6kiDwiVE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jZ3OpMvU6kiDwiVE(bh) {
    try {
      bh = this.sd_6rNqYDFFjlNuAhG3(bh);
      //appendnew_next_sd_jZ3OpMvU6kiDwiVE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jZ3OpMvU6kiDwiVE');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_pRMPzfjO5NcWqqIG(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywsg8F2p8YSdfrjJ');
    }
  }

  //appendnew_flow_ProfileComponent_start

  sd_6rNqYDFFjlNuAhG3(bh) {
    try {
      const getuserDataInstance: getuserData =
        this.__page_injector__.get(getuserData);
      this.page.userData = getuserDataInstance['userData'];

      bh = this.sd_3BHkjd7D1OEblJl1(bh);
      //appendnew_next_sd_6rNqYDFFjlNuAhG3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6rNqYDFFjlNuAhG3');
    }
  }

  sd_3BHkjd7D1OEblJl1(bh) {
    try {
      bh = this.profileItems(bh);
      //appendnew_next_sd_3BHkjd7D1OEblJl1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BHkjd7D1OEblJl1');
    }
  }

  profileItems(bh) {
    try {
      const page = this.page;
      bh.local.profile = [
        'Personal Details',
        'Settings',
        'Contact',
        'Help &FAQs',
        'Sign out',
      ];

      bh = this.sd_9fLMWJuXSbsei4NM_1(bh);
      //appendnew_next_profileItems
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQwjFC6hVJHOPmkv');
    }
  }

  sd_9fLMWJuXSbsei4NM_1(bh) {
    try {
      const page = this.page;
      bh.local.settingList = [
        {
          img: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1684923081/easybuy/details_naaxha.svg',
          settings: 'Personal details',
          function: '',
        },
        {
          img: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1684923083/easybuy/contact_poy6w4.svg',
          settings: 'Contact',
          function: '',
        },
        {
          img: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1684923081/easybuy/info_km7obo.svg',
          settings: 'Help & FAQs',
          function: '',
        },
        {
          img: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1684923082/easybuy/settings_rto2ce.svg',
          settings: 'Settings',
          function: '',
        },
        {
          img: 'https://res.cloudinary.com/ddmc9b1yx/image/upload/v1684923081/easybuy/logout_llxlca.svg',
          settings: 'Sign Out',
          function: 'logout()',
        },
      ];

      bh = this.sd_yq0oZdp4PKfP8flW_1(bh);
      //appendnew_next_sd_9fLMWJuXSbsei4NM_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0A5E0EXFrXOGS0XI');
    }
  }

  sd_yq0oZdp4PKfP8flW_1(bh) {
    try {
      this.page.settingList = bh.local.settingList;

      //appendnew_next_sd_yq0oZdp4PKfP8flW_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bT6RIblRWLkNZBBq');
    }
  }

  sd_pRMPzfjO5NcWqqIG(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_lQ4xqcE9PiRAGJew(bh);
      //appendnew_next_sd_pRMPzfjO5NcWqqIG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pRMPzfjO5NcWqqIG');
    }
  }

  sd_lQ4xqcE9PiRAGJew(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local.backendUrl}/employee/logout`;

      bh = this.sd_VDbXXUV3Pnf3xamq(bh);
      //appendnew_next_sd_lQ4xqcE9PiRAGJew
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lQ4xqcE9PiRAGJew');
    }
  }

  async sd_VDbXXUV3Pnf3xamq(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_9rpWp5qIfluyeX8x(bh);
      //appendnew_next_sd_VDbXXUV3Pnf3xamq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VDbXXUV3Pnf3xamq');
    }
  }

  sd_9rpWp5qIfluyeX8x(bh) {
    try {
      localStorage.removeItem('employeeData');

      bh = this.sd_I36PRPeuFtNglPsm(bh);
      //appendnew_next_sd_9rpWp5qIfluyeX8x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9rpWp5qIfluyeX8x');
    }
  }

  async sd_I36PRPeuFtNglPsm(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_I36PRPeuFtNglPsm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I36PRPeuFtNglPsm');
    }
  }

  sd_PUTU5FN77oTPMcXq(bh) {
    try {
      const page = this.page;
      console.log(bh.error);

      //appendnew_next_sd_PUTU5FN77oTPMcXq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PUTU5FN77oTPMcXq');
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
      this.sd_ykpeHW8VfJfmCM3r(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_ykpeHW8VfJfmCM3r(bh) {
    const nodes = ['sd_VDbXXUV3Pnf3xamq'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_PUTU5FN77oTPMcXq(bh);
      //appendnew_next_sd_ykpeHW8VfJfmCM3r
      return true;
    }
    return false;
  }
  //appendnew_flow_ProfileComponent_Catch
}
