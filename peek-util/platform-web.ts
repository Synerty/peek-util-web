import {DeviceSizeE, PlatformI} from '@synerty/peek-util';

export class Platform implements PlatformI {
  static isNativeScript(): boolean {
    return false;
  }

  static isWeb(): boolean {
    return true;
  }

  static deviceSize(): DeviceSizeE {
    return DeviceSizeE.default;
  }

}
