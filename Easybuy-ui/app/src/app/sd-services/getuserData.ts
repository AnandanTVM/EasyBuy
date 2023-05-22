/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class getuserData {
  public userData: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_getuserData

  async getUserData(userData: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          userData: userData,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_1txvHLIVu9I1otj1(bh);
      //appendnew_next_getUserData
      return (
        // formatting output variables
        {
          input: {
            userData: bh.input.userData,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7RJyLkLl7kzx7EEv');
    }
  }

  //appendnew_flow_getuserData_start

  async sd_1txvHLIVu9I1otj1(bh) {
    try {
      bh.local.userData = this.userData;

      bh = await this.sd_3EU68qFJd41I9m1L(bh);
      //appendnew_next_sd_1txvHLIVu9I1otj1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1txvHLIVu9I1otj1');
    }
  }

  async sd_3EU68qFJd41I9m1L(bh) {
    try {
      console.log(bh.local.userData, 'service userData2');

      bh = await this.sd_WU4HEXsVsSfkXXn9(bh);
      //appendnew_next_sd_3EU68qFJd41I9m1L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3EU68qFJd41I9m1L');
    }
  }

  async sd_WU4HEXsVsSfkXXn9(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.userData,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5qWCHwctdgSwP0u8(bh);
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
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WU4HEXsVsSfkXXn9');
    }
  }

  async sd_5qWCHwctdgSwP0u8(bh) {
    try {
      bh.local.userData = JSON.parse(localStorage.getItem('employeeData'));

      bh = await this.sd_pgNihVNOEG0eP3yO(bh);
      //appendnew_next_sd_5qWCHwctdgSwP0u8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5qWCHwctdgSwP0u8');
    }
  }

  async sd_pgNihVNOEG0eP3yO(bh) {
    try {
      console.log(bh.local.userData, 'service userdata');

      bh = await this.sd_PcBLTzwDkTWptPzw(bh);
      //appendnew_next_sd_pgNihVNOEG0eP3yO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pgNihVNOEG0eP3yO');
    }
  }

  async sd_PcBLTzwDkTWptPzw(bh) {
    try {
      this.userData = bh.local.userData;

      //appendnew_next_sd_PcBLTzwDkTWptPzw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PcBLTzwDkTWptPzw');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_getuserData_Catch
}
