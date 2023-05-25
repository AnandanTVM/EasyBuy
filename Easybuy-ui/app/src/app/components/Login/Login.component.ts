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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_YmaRKlBWymI5tDba(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YmaRKlBWymI5tDba(bh) {
    try {
      bh = this.sd_lf5L442puyKyI4Bq(bh);
      //appendnew_next_sd_YmaRKlBWymI5tDba
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YmaRKlBWymI5tDba');
    }
  }

  login(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_Tu4jIqEQTZq2ctV4(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ORiy0So4quwGLeD5');
    }
  }

  logg(loginForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { loginForm: loginForm };
      bh.local = {};

      bh = this.sd_0fqvQNcYSeQcDBuU(bh);
      //appendnew_next_logg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8umBNzFPADbpVCaB');
    }
  }

  //appendnew_flow_LoginComponent_start

  sd_lf5L442puyKyI4Bq(bh) {
    try {
      const page = this.page;
      bh.local.credentials = {
        EmployeeId: '',
        Password: '',
      };

      bh = this.sd_RY47kgUNHIZKLOjK(bh);
      //appendnew_next_sd_lf5L442puyKyI4Bq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lf5L442puyKyI4Bq');
    }
  }

  sd_RY47kgUNHIZKLOjK(bh) {
    try {
      this.page.credentials = bh.local.credentials;

      //appendnew_next_sd_RY47kgUNHIZKLOjK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RY47kgUNHIZKLOjK');
    }
  }

  sd_Tu4jIqEQTZq2ctV4(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_bNa4MVXSFaqAsiRy(bh);
      //appendnew_next_sd_Tu4jIqEQTZq2ctV4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tu4jIqEQTZq2ctV4');
    }
  }

  sd_bNa4MVXSFaqAsiRy(bh) {
    try {
      const page = this.page;
      console.log(page.credentials, bh.local.backendUrl, 'credentials');
      bh.local.body = {
        employeeid: page.credentials.EmployeeId,
        password: page.credentials.Password,
      };

      bh.local.url = bh.local.backendUrl + '/employee/login';

      console.log(bh.local.url, 'url');

      console.log(bh.local.body, 'body');
      // {{BASE_URL}}/employee/login

      bh = this.sd_EEUVUARXxR2413YT(bh);
      //appendnew_next_sd_bNa4MVXSFaqAsiRy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bNa4MVXSFaqAsiRy');
    }
  }

  async sd_EEUVUARXxR2413YT(bh) {
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

      bh = this.sd_krSNlEEHEQYLAto7(bh);
      //appendnew_next_sd_EEUVUARXxR2413YT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EEUVUARXxR2413YT');
    }
  }

  sd_krSNlEEHEQYLAto7(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'result');

      bh = this.sd_V0BZYbMwiwddz5Oo(bh);
      //appendnew_next_sd_krSNlEEHEQYLAto7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_krSNlEEHEQYLAto7');
    }
  }

  sd_V0BZYbMwiwddz5Oo(bh) {
    try {
      localStorage.setItem(
        'employeeData',
        JSON.stringify(bh.local.result.data)
      );

      bh = this.sd_YdxsJJes6d3nl5gC(bh);
      //appendnew_next_sd_V0BZYbMwiwddz5Oo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V0BZYbMwiwddz5Oo');
    }
  }

  async sd_YdxsJJes6d3nl5gC(bh) {
    try {
      const getuserDataInstance: getuserData =
        this.__page_injector__.get(getuserData);

      let outputVariables = await getuserDataInstance.getUserData(undefined);
      this.page.userData = outputVariables.input.userData;

      bh = this.sd_Fcc6zAGpETqlH7SO(bh);
      //appendnew_next_sd_YdxsJJes6d3nl5gC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YdxsJJes6d3nl5gC');
    }
  }

  async sd_Fcc6zAGpETqlH7SO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_Fcc6zAGpETqlH7SO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fcc6zAGpETqlH7SO');
    }
  }

  sd_0fqvQNcYSeQcDBuU(bh) {
    try {
      const page = this.page;
      console.log(bh.input.loginForm, 'loginForm');

      //appendnew_next_sd_0fqvQNcYSeQcDBuU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0fqvQNcYSeQcDBuU');
    }
  }

  sd_s17i3CpiAPwChwat(bh) {
    try {
      const page = this.page;
      console.log(bh.error, 'login error');

      document.getElementById('loginError').innerText =
        bh.error.error?.message || 'something went wrong';

      //appendnew_next_sd_s17i3CpiAPwChwat
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s17i3CpiAPwChwat');
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
      this.sd_5LQGOdnshQ7Pv5YZ(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_5LQGOdnshQ7Pv5YZ(bh) {
    const nodes = ['sd_EEUVUARXxR2413YT'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_s17i3CpiAPwChwat(bh);
      //appendnew_next_sd_5LQGOdnshQ7Pv5YZ
      return true;
    }
    return false;
  }
  //appendnew_flow_LoginComponent_Catch
}
