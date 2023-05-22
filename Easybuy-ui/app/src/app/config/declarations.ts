import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-invoiceComponent
import { invoiceComponent } from '../components/Invoice/invoice.component';
//CORE_REFERENCE_IMPORT-phoneNumberExist
import { phoneNumberExist } from '../canActivate/phoneNumberExist.canActivate';
//CORE_REFERENCE_IMPORT-isEmployeeLoggedIn
import { isEmployeeLoggedIn } from '../canActivate/isEmployeeLoggedIn.canActivate';
//CORE_REFERENCE_IMPORT-getuserData
import { getuserData } from '../sd-services/getuserData';
//CORE_REFERENCE_IMPORT-carrtItemComponent
import { carrtItemComponent } from '../components/Components/CartItem/carrtItem.component';
//CORE_REFERENCE_IMPORT-Scan
import { Scan } from '../sd-services/Scan';
//CORE_REFERENCE_IMPORT-ProductComponent
import { ProductComponent } from '../components/Components/Product/Product.component';
//CORE_REFERENCE_IMPORT-SubNavbarComponent
import { SubNavbarComponent } from '../components/Components/SubNavbar/SubNavbar.component';
//CORE_REFERENCE_IMPORT-CartComponent
import { CartComponent } from '../components/Cart/Cart.component';
//CORE_REFERENCE_IMPORT-CustomerListComponent
import { CustomerListComponent } from '../components/CustomerList/CustomerList.component';
//CORE_REFERENCE_IMPORT-ProfileComponent
import { ProfileComponent } from '../components/Profile/Profile.component';
//CORE_REFERENCE_IMPORT-ScanComponent
import { ScanComponent } from '../components/Scan/Scan.component';
//CORE_REFERENCE_IMPORT-BoardingComponent
import { BoardingComponent } from '../components/Boarding/Boarding.component';
//CORE_REFERENCE_IMPORT-PageLayoutComponent
import { PageLayoutComponent } from '../components/Layout/PageLayout.component';
//CORE_REFERENCE_IMPORT-NavbarComponent
import { NavbarComponent } from '../components/Components/Navbar/Navbar.component';
//CORE_REFERENCE_IMPORT-LoginComponent
import { LoginComponent } from '../components/Login/Login.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Home/Home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-invoiceComponent
  invoiceComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-carrtItemComponent
  carrtItemComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProductComponent
  ProductComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SubNavbarComponent
  SubNavbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CartComponent
  CartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CustomerListComponent
  CustomerListComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProfileComponent
  ProfileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ScanComponent
  ScanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-BoardingComponent
  BoardingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-PageLayoutComponent
  PageLayoutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-NavbarComponent
  NavbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoginComponent
  LoginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-phoneNumberExist
  phoneNumberExist,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-isEmployeeLoggedIn
  isEmployeeLoggedIn,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-getuserData
  getuserData,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-Scan
  Scan,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'ui',
    component: PageLayoutComponent,
    canActivate: [isEmployeeLoggedIn],
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'scan',
        component: ScanComponent,
        canActivate: [phoneNumberExist],
      },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'invoice', component: invoiceComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isEmployeeLoggedIn],
  },
  { path: 'boarding', component: BoardingComponent },
  { path: '', redirectTo: '/boarding', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
