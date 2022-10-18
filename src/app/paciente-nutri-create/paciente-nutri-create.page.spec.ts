import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteNutriCreatePage } from './paciente-nutri-create.page';

describe('PacienteNutriCreatePage', () => {
  let component: PacienteNutriCreatePage;
  let fixture: ComponentFixture<PacienteNutriCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteNutriCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteNutriCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
