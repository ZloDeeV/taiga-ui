(window.webpackJsonp=window.webpackJsonp||[]).push([[1427],{uQne:function(t,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {AbstractTuiPortalHostComponent} from '@taiga-ui/cdk/abstract/portal-host';\nimport {AbstractTuiPortalService} from '@taiga-ui/cdk/abstract/portal-service';\n\nimport {CustomPortalService} from './custom-portal.service';\n\n@Component({\n    selector: 'custom-host',\n    templateUrl: './custom-host.template.html',\n    styleUrls: ['./custom-host.style.less'],\n    changeDetection,\n    providers: [{provide: AbstractTuiPortalService, useExisting: CustomPortalService}],\n})\nexport class CustomHostComponent extends AbstractTuiPortalHostComponent {}\n"}}]);