import './configs/config-accounts';
import './configs/config-roles';
import './configs/config-cron';
import './configs/config-apollo-server';
import initElectron from './init-electron';
import fixtures from './seed';

fixtures();

initElectron();
