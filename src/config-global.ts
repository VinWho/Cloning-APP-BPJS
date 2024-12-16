import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'BPJS KESEHATAN - REGRISTRASI 3.6',
  appVersion: packageJson.version,
};
