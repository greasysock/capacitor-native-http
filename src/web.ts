import { WebPlugin } from '@capacitor/core';
import { CapacitorNativeHttpPluginPlugin } from './definitions';

export class CapacitorNativeHttpPluginWeb extends WebPlugin implements CapacitorNativeHttpPluginPlugin {
  constructor() {
    super({
      name: 'CapacitorNativeHttpPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorNativeHttpPlugin = new CapacitorNativeHttpPluginWeb();

export { CapacitorNativeHttpPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorNativeHttpPlugin);
