import * as _ from "lodash";
import { NgModule, forwardRef } from "@angular/core";
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { UpgradeAdapter } from "@angular/upgrade";
import { HttpModule, RequestOptions, XHRBackend } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MomentModule } from "angular2-moment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from "@angular/router";
import { NgPipesModule } from "ngx-pipes";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NguUtilityModule } from "ngu-utility/ngu-utility.module";
import { AgmCoreModule } from "@agm/core";
import { ClickOutsideModule } from "ng-click-outside";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { SidebarModule } from "ng-sidebar";
import { FileUploadModule } from "ng2-file-upload";

import { AppComponent } from "./app.component";



const appRouting: Routes = [
    { path: "**", redirectTo: "/login" }
];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "/i18n/", ".json");
}
 

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
        MomentModule,
        NgbModule.forRoot(),
        HttpModule,
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
        ReactiveFormsModule,
        NgPipesModule,
        NguUtilityModule,
        ClickOutsideModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        SidebarModule.forRoot(),
        FileUploadModule
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerGestureConfig
        },
    ],
    entryComponents: [
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}


