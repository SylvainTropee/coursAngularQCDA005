import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6demo1 } from './mod6demo1';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Mod6demo1', () => {
  let component: Mod6demo1;
  let fixture: ComponentFixture<Mod6demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [Mod6demo1, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod6demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* ============================
     TESTS GÉNÉRAUX
     ============================ */

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit initialiser le formulaire', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.controls['email']).toBeTruthy();
    expect(component.form.controls['password']).toBeTruthy();
    expect(component.form.controls['birthdate']).toBeTruthy();
    expect(component.form.controls['newsletter']).toBeTruthy();
    expect(component.form.controls['job']).toBeTruthy();
    expect(component.form.controls['note']).toBeTruthy();
  });

  /* ============================
     VALIDATEURS EMAIL
     ============================ */

  it('email doit être requis', () => {
    const email = component.form.get('email');
    email?.setValue(null);
    expect(email?.hasError('required')).toBeTrue();
  });

  it('email doit être invalide si format incorrect', () => {
    const email = component.form.get('email');
    email?.setValue('toto');
    expect(email?.hasError('email')).toBeTrue();
  });

  it('email valide si format correct', () => {
    const email = component.form.get('email');
    email?.setValue('test@mail.com');
    expect(email?.valid).toBeTrue();
  });

  /* ============================
     VALIDATEURS PASSWORD
     ============================ */

  it('password doit être requis', () => {
    const password = component.form.get('password');
    password?.setValue(null);
    expect(password?.hasError('required')).toBeTrue();
  });

  it('password invalide si pattern incorrect', () => {
    const password = component.form.get('password');
    password?.setValue('abc');
    expect(password?.hasError('pattern')).toBeTrue();
  });

  it('password valide si pattern respecté', () => {
    const password = component.form.get('password');
    password?.setValue('Abcdef12');
    expect(password?.valid).toBeTrue();
  });

  /* ============================
     VALIDATEUR DATE PERSONNALISÉ
     ============================ */

  it('birthdate invalide si date future', () => {
    const birthdate = component.form.get('birthdate');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    birthdate?.setValue(futureDate.toISOString().split('T')[0]);
    expect(birthdate?.hasError('greaterThan')).toBeTrue();
  });

  it('birthdate valide si date passée', () => {
    const birthdate = component.form.get('birthdate');
    birthdate?.setValue('2000-01-01');
    expect(birthdate?.valid).toBeTrue();
  });

  /* ============================
     VALIDATEURS JOB & NOTE
     ============================ */

  it('job invalide si valeur hors pattern', () => {
    const job = component.form.get('job');
    job?.setValue('manager');
    expect(job?.hasError('pattern')).toBeTrue();
  });

  it('note invalide si < 0', () => {
    const note = component.form.get('note');
    note?.setValue(-1);
    expect(note?.hasError('min')).toBeTrue();
  });

  it('note invalide si > 10', () => {
    const note = component.form.get('note');
    note?.setValue(11);
    expect(note?.hasError('max')).toBeTrue();
  });

  /* ============================
     SUBMISSION
     ============================ */

  it('onSubmit doit logguer les valeurs si formulaire valide', () => {
    spyOn(console, 'log');

    component.form.setValue({
      email: 'test@mail.com',
      password: 'Abcdef12',
      birthdate: '2000-01-01',
      newsletter: true,
      job: 'dev',
      note: 5
    });

    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.form.value);
  });

  it('onSubmit doit logguer une erreur si formulaire invalide', () => {
    spyOn(console, 'log');
    component.form.get('email')?.setValue(null);

    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith("C'est pas bon !");
  });

  /* ============================
     TEMPLATE DRIVEN (checkName)
     ============================ */

  it('checkName doit détecter un champ vide', () => {
    spyOn(console, 'log');

    component.name = '   ';
    component.checkName(new Event('input'));

    expect(console.log).toHaveBeenCalledWith('Champs requis');
  });
});
