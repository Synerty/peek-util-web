import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/angular-font-awesome';
import { Sound } from '@synerty/peek-util';
export declare class WebSound implements Sound {
    private audio;
    constructor(soundFilePath: string);
    play(): Promise<void>;
}
export declare class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules: (typeof AngularFontAwesomeModule)[];
    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule: typeof RouterModule;
    /**
     * Create a new sound object, that can be played.
     */
    static createSound(soundFilePath: string): Sound;
}
