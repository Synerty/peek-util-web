import { DeviceSizeE, PlatformI } from '@synerty/peek-util';
export declare class Platform implements PlatformI {
    static isNativeScript(): boolean;
    static isWeb(): boolean;
    static deviceSize(): DeviceSizeE;
}
