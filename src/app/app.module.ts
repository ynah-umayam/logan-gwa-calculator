import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ButtonComponent } from './components/button/button.component';
import { FileSizePipe } from './utils/file-size.pipe';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardTrackerComponent } from './components/wizard/wizard-tracker/wizard-tracker.component';
import { GradeCreditTableComponent } from './components/grade-credit-table/grade-credit-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropDirective } from './utils/drag-drop.directive';

const components = [
  HeaderComponent,
  FileUploadComponent,
  ButtonComponent,
  WizardComponent,
  WizardTrackerComponent,
  GradeCreditTableComponent,
];
@NgModule({
  declarations: [AppComponent, FileSizePipe, DragDropDirective, ...components],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
