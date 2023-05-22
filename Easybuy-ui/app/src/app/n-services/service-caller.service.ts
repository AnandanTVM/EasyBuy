//append_imports_start

import * as sd_cmZCN81jlvs8Ep2o from 'app/sd-services/getuserData'; //_splitter_
import * as sd_la6KIUXsIGgMIJgr from 'app/sd-services/Scan'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_cmZCN81jlvs8Ep2o: sd_cmZCN81jlvs8Ep2o.getuserData,
    private sd_la6KIUXsIGgMIJgr: sd_la6KIUXsIGgMIJgr.Scan
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
