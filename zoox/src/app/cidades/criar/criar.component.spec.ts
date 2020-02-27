import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CidadeCriarComponent } from './criar.component';
import { CidadeService } from '../cidade.services';
import { EstadoService } from '../../estados/estado.service';


describe('CidadeCriarComponent', () => {
  let component: CidadeCriarComponent;
  let fixture: ComponentFixture<CidadeCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
