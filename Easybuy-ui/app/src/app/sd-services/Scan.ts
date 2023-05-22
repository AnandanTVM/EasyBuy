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
import { BarcodeReader, BarcodeScanner } from 'dynamsoft-javascript-barcode'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class Scan {
  public scanner: any;

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

  //   service flows_Scan

  async scan(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_DYZpjbScaIqQQbO3(bh);
      //appendnew_next_scan
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FjImFQsv1VcX66QF');
    }
  }

  //appendnew_flow_Scan_start

  async sd_DYZpjbScaIqQQbO3(bh) {
    try {
      bh.local.scanner = this.scanner;

      bh = await this.sd_7XMH1JphxvFbnce4(bh);
      //appendnew_next_sd_DYZpjbScaIqQQbO3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DYZpjbScaIqQQbO3');
    }
  }

  async sd_7XMH1JphxvFbnce4(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.scanner,
          undefined,
          undefined,
          undefined
        )
      ) {
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
        bh = await this.sd_CcjNHJSfItAkFCDe(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7XMH1JphxvFbnce4');
    }
  }

  async sd_CcjNHJSfItAkFCDe(bh) {
    try {
      bh.local.BarcodeReader = BarcodeReader;
      bh.local.BarcodeScanner = BarcodeScanner;

      bh = await this.sd_1w7xoStxvH4AAQzC(bh);
      //appendnew_next_sd_CcjNHJSfItAkFCDe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CcjNHJSfItAkFCDe');
    }
  }

  async sd_1w7xoStxvH4AAQzC(bh) {
    try {
      bh.local.BARCODE_READER = bh.system.environment.properties.BARCODE_READER;

      bh = await this.sd_LziYPpVhliX5kTWA(bh);
      //appendnew_next_sd_1w7xoStxvH4AAQzC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1w7xoStxvH4AAQzC');
    }
  }

  async sd_LziYPpVhliX5kTWA(bh) {
    try {
      // console.log(bh.local.BARCODE_READER,"BARCODE_READER")
      // console.log(bh.local.BarcodeReader,"BarcodeReader")
      // console.log(bh.local.BarcodeScanner,"BarcodeScanner")
      BarcodeReader.license = bh.local.BARCODE_READER;
      BarcodeReader.engineResourcePath =
        'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/';

      bh.local.scanner = await bh.local.BarcodeScanner.createInstance();

      let scanSettings = await bh.local.scanner.getScanSettings();
      scanSettings.whenToPlaySoundforSuccessfulRead = 'unique';
      await bh.local.scanner.updateScanSettings(scanSettings);

      bh.local.scanner.setVideoFit('cover');
      // let settings = await bh.local.scanner.getRuntimeSettings()
      //                 settings.region = {
      //                     regionLeft: 20,
      //                     regionTop: 20,
      //                     regionRight: 80,
      //                     regionBottom: 40,
      //                     regionMeasuredByPercentage: 1
      //                 };
      // await bh.local.scanner.updateRuntimeSettings(settings);

      bh = await this.sd_dM2ee0yvoqs9rbKm(bh);
      //appendnew_next_sd_LziYPpVhliX5kTWA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LziYPpVhliX5kTWA');
    }
  }

  async sd_dM2ee0yvoqs9rbKm(bh) {
    try {
      this.scanner = bh.local.scanner;

      //appendnew_next_sd_dM2ee0yvoqs9rbKm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dM2ee0yvoqs9rbKm');
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
  //appendnew_flow_Scan_Catch
}
