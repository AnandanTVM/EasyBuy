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
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_N2o1h0j7eHq1pLnO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_N2o1h0j7eHq1pLnO(bh) {
    try {
      bh = this.sd_S4hucp4ZDxORguJE(bh);
      //appendnew_next_sd_N2o1h0j7eHq1pLnO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N2o1h0j7eHq1pLnO');
    }
  }

  gotoScan_1_2(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_aM1w0sD8kfrb2bNW_1_2(bh);
      //appendnew_next_gotoScan_1_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DgH7CK9b3qArMRh4');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_S4hucp4ZDxORguJE(bh) {
    try {
      const getuserDataInstance: getuserData =
        this.__page_injector__.get(getuserData);
      this.page.userData = getuserDataInstance['userData'];

      bh = this.sd_gVLh6gee5TPrxtk7(bh);
      //appendnew_next_sd_S4hucp4ZDxORguJE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S4hucp4ZDxORguJE');
    }
  }

  sd_gVLh6gee5TPrxtk7(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_1l91Kpg2m1xWQdfS(bh);
      //appendnew_next_sd_gVLh6gee5TPrxtk7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gVLh6gee5TPrxtk7');
    }
  }

  sd_1l91Kpg2m1xWQdfS(bh) {
    try {
      bh.local.employeeData = JSON.parse(localStorage.getItem('employeeData'));

      bh = this.sd_R1prXmuXbNVjTV5R(bh);
      //appendnew_next_sd_1l91Kpg2m1xWQdfS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1l91Kpg2m1xWQdfS');
    }
  }

  sd_R1prXmuXbNVjTV5R(bh) {
    try {
      bh.local.userPhoneNumber = JSON.parse(
        localStorage.getItem('userPhoneNumber')
      );

      bh = this.sd_3AsD6H2H09nUoEN4(bh);
      //appendnew_next_sd_R1prXmuXbNVjTV5R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R1prXmuXbNVjTV5R');
    }
  }

  sd_3AsD6H2H09nUoEN4(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local?.backendUrl}/dashboard/${bh.local?.employeeData?.employeeid}`;
      console.log(bh.local.userPhoneNumber, 'bh.local.userPhoneNumber');
      page.phoneNumber = bh.local.userPhoneNumber || '';

      bh = this.sd_Ha6huPWSnuDcK5kK(bh);
      //appendnew_next_sd_3AsD6H2H09nUoEN4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3AsD6H2H09nUoEN4');
    }
  }

  async sd_Ha6huPWSnuDcK5kK(bh) {
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

      bh = this.sd_JkpIfNfcSWww6PtI(bh);
      //appendnew_next_sd_Ha6huPWSnuDcK5kK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ha6huPWSnuDcK5kK');
    }
  }

  sd_JkpIfNfcSWww6PtI(bh) {
    try {
      const page = this.page;
      bh.local.response.earnings = bh.local.response?.earnings || 0;
      bh.local.response.clients = bh.local.response?.clients || 0;

      bh = this.sd_QcgOqOEPo1GmhDT3_5_3(bh);
      //appendnew_next_sd_JkpIfNfcSWww6PtI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JkpIfNfcSWww6PtI');
    }
  }

  sd_QcgOqOEPo1GmhDT3_5_3(bh) {
    try {
      const page = this.page;
      page.statistics = [
        {
          imageUrl: '/Web/Icons/Earning.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Earning',
              value: '₹' + 1000,
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/Clients.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Clients',
              value: 45722,
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/PriceGraph.svg',
          fxFlex: '100',
          details: [
            {
              tittle: 'Gold',
              value: '₹' + 4232,
            },
            {
              tittle: 'Silver',
              value: '₹' + 8686,
            },
            {
              tittle: 'Platinum',
              value: '₹' + 24336,
            },
          ],
        },
      ];

      //appendnew_next_sd_QcgOqOEPo1GmhDT3_5_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6LKVzMR5V608o76V');
    }
  }

  sd_aM1w0sD8kfrb2bNW_1_2(bh) {
    try {
      const page = this.page;
      console.log(page.phoneNumber);
      bh.local.isValid = false;
      let userPhoneNumber = `${page.phoneNumber}`;
      console.log(
        userPhoneNumber,
        typeof userPhoneNumber,
        userPhoneNumber.length
      );
      if (userPhoneNumber.length >= 10 && userPhoneNumber.length <= 13) {
        console.log('valid phone number');
        bh.local.isValid = true;
      } else {
        console.log('Invalid phone number');
        bh.local.isValid = false;
        document.getElementById('phoneNumberError').innerText =
          'Invalid phone number';
      }

      bh = this.sd_hvDLK6DZJLFBUldB_1_2(bh);
      //appendnew_next_sd_aM1w0sD8kfrb2bNW_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cNLs6AgHPXujTYuY');
    }
  }

  sd_hvDLK6DZJLFBUldB_1_2(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WZb8ssVdQ1gPIyv9_1_2(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cYhD2SEpp71kVDMR');
    }
  }

  sd_WZb8ssVdQ1gPIyv9_1_2(bh) {
    try {
      localStorage.setItem(
        'userPhoneNumber',
        JSON.stringify(this.page.phoneNumber)
      );

      bh = this.sd_OkJIavllgUU1n0M1_1_2(bh);
      //appendnew_next_sd_WZb8ssVdQ1gPIyv9_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bnlky7gsO1LHIWtx');
    }
  }

  async sd_OkJIavllgUU1n0M1_1_2(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/scan');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_OkJIavllgUU1n0M1_1_2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hUOVfquXfuJWzaGx');
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
      this.sd_VKYbxwlVA3mQAG86_5_3(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_VKYbxwlVA3mQAG86_5_3(bh) {
    const catchConnectedNodes = ['sd_6LKVzMR5V608o76V'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_QcgOqOEPo1GmhDT3_5_3(bh);
    //appendnew_next_sd_VKYbxwlVA3mQAG86_5_3
    return true;
  }
  //appendnew_flow_HomeComponent_Catch
}
