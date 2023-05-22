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

  gotoScan(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_aM1w0sD8kfrb2bNW(bh);
      //appendnew_next_gotoScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XwRbDoPq89pHCBbR');
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

      bh.local.statistics = [
        {
          imageUrl: '/Web/Icons/Earning.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Earning',
              value: '₹' + bh.local.response.earnings.toFixed(2),
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/Clients.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Clients',
              value: bh.local.response.clients,
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/PriceGraph.svg',
          fxFlex: '100',
          details: [
            {
              tittle: 'Gold',
              value: '₹' + bh.local.response.gold.toFixed(2),
            },
            {
              tittle: 'Silver',
              value: '₹' + bh.local.response.silver.toFixed(2),
            },
            {
              tittle: 'Platinum',
              value: '₹' + bh.local.response.platinum.toFixed(2),
            },
          ],
        },
      ];

      console.log(page.userData, 'userdata');
      console.log('response');
      console.log(bh.local.response);
      console.log('response');

      bh = this.sd_xXkRTz1m9f0JjOXD(bh);
      //appendnew_next_sd_JkpIfNfcSWww6PtI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JkpIfNfcSWww6PtI');
    }
  }

  sd_xXkRTz1m9f0JjOXD(bh) {
    try {
      this.page.statistics = bh.local.statistics;

      //appendnew_next_sd_xXkRTz1m9f0JjOXD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xXkRTz1m9f0JjOXD');
    }
  }

  sd_aM1w0sD8kfrb2bNW(bh) {
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

      bh = this.sd_hvDLK6DZJLFBUldB(bh);
      //appendnew_next_sd_aM1w0sD8kfrb2bNW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aM1w0sD8kfrb2bNW');
    }
  }

  sd_hvDLK6DZJLFBUldB(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WZb8ssVdQ1gPIyv9(bh);
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
      return this.errorHandler(bh, e, 'sd_hvDLK6DZJLFBUldB');
    }
  }

  sd_WZb8ssVdQ1gPIyv9(bh) {
    try {
      localStorage.setItem(
        'userPhoneNumber',
        JSON.stringify(this.page.phoneNumber)
      );

      bh = this.sd_OkJIavllgUU1n0M1(bh);
      //appendnew_next_sd_WZb8ssVdQ1gPIyv9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WZb8ssVdQ1gPIyv9');
    }
  }

  async sd_OkJIavllgUU1n0M1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/scan');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_OkJIavllgUU1n0M1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OkJIavllgUU1n0M1');
    }
  }

  sd_ykUzjkqZLV19dnXi(bh) {
    try {
      const page = this.page;
      bh.local.statistics = [
        {
          imageUrl: '/Web/Icons/Earning.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Earning',
              value: 'N/A',
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/Clients.svg',
          fxFlex: '46',
          details: [
            {
              tittle: 'Clients',
              value: 'N/A',
            },
          ],
        },
        {
          imageUrl: '/Web/Icons/PriceGraph.svg',
          fxFlex: '100',
          details: [
            {
              tittle: 'Gold',
              value: 'N/A',
            },
            {
              tittle: 'Silver',
              value: 'N/A',
            },
            {
              tittle: 'Platinum',
              value: 'N/A',
            },
          ],
        },
      ];

      bh = this.sd_xXkRTz1m9f0JjOXD(bh);
      //appendnew_next_sd_ykUzjkqZLV19dnXi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ykUzjkqZLV19dnXi');
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
      this.sd_cWx3T0wkeaF90Xc9(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_cWx3T0wkeaF90Xc9(bh) {
    const nodes = ['sd_Ha6huPWSnuDcK5kK'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_ykUzjkqZLV19dnXi(bh);
      //appendnew_next_sd_cWx3T0wkeaF90Xc9
      return true;
    }
    return false;
  }
  //appendnew_flow_HomeComponent_Catch
}
