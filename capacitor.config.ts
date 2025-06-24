import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ballfrog.v2.picker",
  appName: "Ballfrog",
  webDir: "dist",
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true,
    },
    CapacitorUpdater: {
      appId: "com.daniel.test",
      autoUpdate: true,
      directUpdate: true,
      // This is NOT the same as the app version. This is used for CapGo plugin.
      // Bump the major version whenever a native module is added or removed or updated,
      // so we do not crash the old versions of the app.
      version: "3.0.2",
      keepUrlPathAfterReload: true,
    },
  },
  server: {
    androidScheme: "https",
  },
  android: {
    adjustMarginsForEdgeToEdge: "force",
  },
  ios: {
    handleApplicationNotifications: false,
  },
};

export default config;
