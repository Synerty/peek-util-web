import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AngularFontAwesomeModule} from 'angular-font-awesome/dist/angular-font-awesome';
import {Sound} from '@synerty/peek-util';

export class WebSound implements Sound {
  private audio: any;

  constructor(soundFilePath: string) {
    this.audio = new Audio(soundFilePath);
  }

  play(): Promise<void> {
    try {
      const optionalPromise = this.audio.play();
      if (optionalPromise != null)
        return optionalPromise;

    } catch (e) {
      return Promise.reject(e.toString());
    }
    return Promise.resolve();
  }

}

export class PeekModuleFactory {
  /**
   * Provide a cross platform Browser module
   */
  static readonly FormsModules = [FormsModule, AngularFontAwesomeModule];

  /**
   * Provide a cross platform Router module
   */
  static readonly RouterModule = RouterModule;

  /**
   * Create a new sound object, that can be played.
   */
  static createSound(soundFilePath: string): Sound {
    return new WebSound(soundFilePath);
  }
}

