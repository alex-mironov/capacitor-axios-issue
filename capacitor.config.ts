import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitor.axiosissue',
  appName: 'capacitor-axios',
  webDir: 'dist',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  }
};

export default config;
