import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateMsgs } from 'src/app/config/i18n/pt_BR';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.scss']
})
export class ProofComponent implements OnInit {

  showToolTipe: boolean = false;

  cards = [
    { iconSrc: '../../../assets/icon/html.png', alt: 'html-icon', translationKey: 'msg.proof.html', tooltipTextKey: 'msg.proof.tootipe-html', showTooltip: false},
    { iconSrc: '../../../assets/icon/css.png', alt: 'CSS-icon', translationKey: 'msg.proof.css', tooltipTextKey: 'msg.proof.tootipe-css', showTooltip: false},
    { iconSrc: '../../../assets/icon/js.png', alt: 'JS-icon', translationKey: 'msg.proof.js', tooltipTextKey: 'msg.proof.tootipe-js', showTooltip: false},
    { iconSrc: '../../../assets/icon/ts.png', alt: 'TS-con', translationKey: 'msg.proof.ts', tooltipTextKey: 'msg.proof.tootipe-ts', showTooltip: false},
    { iconSrc: '../../../assets/icon/angular.png', alt: 'angular-icon', translationKey: 'msg.proof.angular', tooltipTextKey: 'msg.proof.tootipe-angular', showTooltip: false},
    { iconSrc: '../../../assets/icon/jira.png', alt: 'jira-icon', translationKey: 'msg.proof.jira', tooltipTextKey: 'msg.proof.tootipe-jira', showTooltip: false},
    { iconSrc: '../../../assets/icon/conflu.png', alt: 'confluence-icon', translationKey: 'msg.proof.confluence', tooltipTextKey: 'msg.proof.tootipe-confluence', showTooltip: false},
    { iconSrc: '../../../assets/icon/boots.png', alt: 'bootstrap-icon', translationKey: 'msg.proof.bootstrap', tooltipTextKey: 'msg.proof.tootipe-bootstrap', showTooltip: false},
    { iconSrc: '../../../assets/icon/git.png', alt: 'git-icon', translationKey: 'msg.proof.git', tooltipTextKey: 'msg.proof.tootipe-git', showTooltip: false},
    { iconSrc: '../../../assets/icon/gitHub.png', alt: 'gitHub-icon', translationKey: 'msg.proof.git-hub', tooltipTextKey: 'msg.proof.tootipe-git-hub', showTooltip: false},
  ]

  constructor(private tranlateService: TranslateService) {}

  ngOnInit(): void {
  }

  showMsgInfo(card: any) {
    card.tooltipText = this.tranlateService.instant(card.tooltipTextKey);
    card.showTooltip = true;
  }

  closeMsgInfo(card: any) {
    card.showTooltip = false;
  }
}
