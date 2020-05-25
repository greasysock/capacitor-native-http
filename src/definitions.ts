declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorNativeHttpPlugin: CapacitorNativeHttpPluginPlugin;
  }
}

export interface CapacitorNativeHttpPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
