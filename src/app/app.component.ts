import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NgIf } from '@angular/common';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameEditorComponent, ProfileEditorComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-reactive-form';
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
