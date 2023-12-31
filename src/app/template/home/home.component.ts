import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateMsgs } from 'src/app/config/i18n/pt_BR';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  knowMoreCliked = false;
  textoBotao = 'Saiba Mais'

  constructor(
    private tranlateService: TranslateService
  ) {
    this.tranlateService.setTranslation('pt_BR', TranslateMsgs.mensagens, true);
    this.tranlateService.use('pt_BR')
   }

  ngOnInit(): void {
  }

  // knowMore() {
  //   this.knowMoreCliked = !this.knowMoreCliked;

  //   if(this.knowMoreCliked) {
  //     this.textoBotao = "Perfil"
  //   } else {
  //     this.textoBotao = "Saiba Mais"
  //   }
  // }

  openWhatsApp() {
    const phoneNumber = this.tranlateService.instant('msg.what-app.number');
    const message = this.tranlateService.instant('msg.what-app.message');
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(urlWhatsApp, '_blank');
  }

}
