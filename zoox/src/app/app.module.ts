import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { CidadesComponent } from './cidades/cidades.component';
import { EstadosComponent } from './estados/estados.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { EstadoModule } from './estados/estado.module';
import { CidadeModule } from './cidades/cidade.module';
import { Interceptor } from './interceptor/interceptor';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { HeaderComponent } from './header/header.component';
registerLocaleData(ptBr);
moment.locale('pt-br');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //BarraNavegacaoComponent,
    CidadesComponent,
    EstadosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    EstadoModule,
    CidadeModule,
    NgxDatatableModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
