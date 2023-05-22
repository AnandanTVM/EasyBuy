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
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-CustomerList',
  templateUrl: './CustomerList.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CustomerListComponent {
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
      this.sd_39NrMEvzsFL0i3EB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_39NrMEvzsFL0i3EB(bh) {
    try {
      bh = this.sd_RhgNBPEPRAOgxrtV(bh);
      //appendnew_next_sd_39NrMEvzsFL0i3EB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_39NrMEvzsFL0i3EB');
    }
  }

  gotoInvoice(Id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { Id: Id };
      bh.local = {};

      bh = this.sd_nXtjso9Hj9EQqCin(bh);
      //appendnew_next_gotoInvoice
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6m24YOPttcGRENOb');
    }
  }

  //appendnew_flow_CustomerListComponent_start

  sd_RhgNBPEPRAOgxrtV(bh) {
    try {
      bh.local.backendUrl = bh.system.environment.properties.backendUrl;

      bh = this.sd_sgwAlQZPEyN6fcrv(bh);
      //appendnew_next_sd_RhgNBPEPRAOgxrtV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RhgNBPEPRAOgxrtV');
    }
  }

  sd_sgwAlQZPEyN6fcrv(bh) {
    try {
      bh.local.employeeData = JSON.parse(localStorage.getItem('employeeData'));

      bh = this.sd_hbQdxVpROxWFNQ1u(bh);
      //appendnew_next_sd_sgwAlQZPEyN6fcrv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sgwAlQZPEyN6fcrv');
    }
  }

  sd_hbQdxVpROxWFNQ1u(bh) {
    try {
      const page = this.page;
      console.log(bh.local.employeeData.employeeid);
      bh.local.url = `${bh.local?.backendUrl}/customer-list/${bh.local.employeeData.employeeid}`;

      bh = this.sd_Vbo8JBBxy3ap2Jea(bh);
      //appendnew_next_sd_hbQdxVpROxWFNQ1u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hbQdxVpROxWFNQ1u');
    }
  }

  async sd_Vbo8JBBxy3ap2Jea(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_xqwYQv97OZxgX007(bh);
      //appendnew_next_sd_Vbo8JBBxy3ap2Jea
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vbo8JBBxy3ap2Jea');
    }
  }

  sd_xqwYQv97OZxgX007(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'result');

      // data:image/jpeg;base64,${bh.local.response.result.image.data}`

      page.users = bh.local?.result
        ?.map((user) => {
          // console.log(user.payment?.payments[0]?.status,"status")
          user.productDetails.image = `data:image/jpeg;base64,${user?.productDetails?.image[0]?.buffer}`;
          user.totalAmount = user?.totalAmount?.toFixed(2);
          if (user.payment?.payments[0]?.status == 'captured') {
            user.color = 'green';
          } else if (user.payment?.payments[0]?.status == 'failure') {
            user.color = 'red';
          } else {
            user.color = 'orange';
          }
          const timestamp = new Date(
            parseInt(user._id.substring(0, 8), 16) * 1000
          );
          const hours = timestamp.getHours();
          const minutes = timestamp.getMinutes();
          let formattedHours = hours % 12;
          if (formattedHours === 0) {
            formattedHours = 12;
          }
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const timeString = `${formattedHours}:${
            minutes < 10 ? '0' : ''
          }${minutes} ${ampm}`;
          // console.log(timeString);
          user.time = timeString;
          return user;
        })
        .reverse();
      console.log(page.users);

      bh = this.sd_8NOXt2BLdzfCzBKj(bh);
      //appendnew_next_sd_xqwYQv97OZxgX007
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xqwYQv97OZxgX007');
    }
  }

  sd_8NOXt2BLdzfCzBKj(bh) {
    try {
      //appendnew_next_sd_8NOXt2BLdzfCzBKj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8NOXt2BLdzfCzBKj');
    }
  }

  sd_sabQEuuHPmj9gLfw(bh) {
    try {
      const page = this.page;
      console.log(bh.error, 'error');

      //appendnew_next_sd_sabQEuuHPmj9gLfw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sabQEuuHPmj9gLfw');
    }
  }

  sd_nXtjso9Hj9EQqCin(bh) {
    try {
      const page = this.page;
      bh.local.isInvoice = false;
      page.users.some((product) => {
        if (product._id == bh.input.Id) {
          if (product.color == 'green') {
            return (bh.local.isInvoice = true);
          }
        }
        // console.log(product.color,product._id,"prdouct")
      });

      bh = this.sd_B7okmLyBeZ7vP4f8(bh);
      //appendnew_next_sd_nXtjso9Hj9EQqCin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nXtjso9Hj9EQqCin');
    }
  }

  sd_B7okmLyBeZ7vP4f8(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isInvoice,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oOdRrfUJa3HlMZtE(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isInvoice,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_7kZaeO75AIhl8Wpm(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B7okmLyBeZ7vP4f8');
    }
  }

  sd_oOdRrfUJa3HlMZtE(bh) {
    try {
      localStorage.setItem('purchaseId', JSON.stringify(bh.input.Id));

      bh = this.sd_FCJhsqv5Xu6DTOLD(bh);
      //appendnew_next_sd_oOdRrfUJa3HlMZtE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oOdRrfUJa3HlMZtE');
    }
  }

  async sd_FCJhsqv5Xu6DTOLD(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ui/invoice');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_FCJhsqv5Xu6DTOLD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FCJhsqv5Xu6DTOLD');
    }
  }

  sd_7kZaeO75AIhl8Wpm(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('No invoice available', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      //appendnew_next_sd_7kZaeO75AIhl8Wpm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7kZaeO75AIhl8Wpm');
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
      this.sd_UQjh7TWH8eOh40Lg(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_UQjh7TWH8eOh40Lg(bh) {
    const nodes = ['sd_Vbo8JBBxy3ap2Jea'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_sabQEuuHPmj9gLfw(bh);
      //appendnew_next_sd_UQjh7TWH8eOh40Lg
      return true;
    }
    return false;
  }
  //appendnew_flow_CustomerListComponent_Catch
}
