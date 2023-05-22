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
  RouterStateSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class phoneNumberExist {
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

  //   service flows_phoneNumberExist

  async canActivate(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { status: false },
      });

      bh = await this.sd_hwlqHM0McwnoIPsF(bh);
      //appendnew_next_canActivate
      return bh.local.status;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_izJdyUvskOcmZwdW');
    }
  }

  //appendnew_flow_phoneNumberExist_start

  async sd_hwlqHM0McwnoIPsF(bh) {
    try {
      bh.local.userPhoneNumber = JSON.parse(
        localStorage.getItem('userPhoneNumber')
      );

      bh = await this.sd_k7vFNOd1Lp23LgJn(bh);
      //appendnew_next_sd_hwlqHM0McwnoIPsF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hwlqHM0McwnoIPsF');
    }
  }

  async sd_k7vFNOd1Lp23LgJn(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.userPhoneNumber,
          'number',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xI0L1SFg0tyB9GDB(bh);
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
        bh = await this.sd_TQsoBNEfvwnPAwQX(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k7vFNOd1Lp23LgJn');
    }
  }

  async sd_xI0L1SFg0tyB9GDB(bh) {
    try {
      bh.local.status = true;

      //appendnew_next_sd_xI0L1SFg0tyB9GDB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xI0L1SFg0tyB9GDB');
    }
  }

  async sd_TQsoBNEfvwnPAwQX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/home');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);

      //appendnew_next_sd_TQsoBNEfvwnPAwQX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TQsoBNEfvwnPAwQX');
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
  //appendnew_flow_phoneNumberExist_Catch
}
