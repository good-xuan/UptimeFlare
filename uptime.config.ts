// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "UptimeFlare",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'cloady.com',
      name: 'cloady.com',
      method: 'GET',
      target: 'https://node-alpine1-dphzdghw-rapid-falcon-2.cloady.io/',
      expectedCodes: [401],
    },
    {
      id: 'llc',
      name: 'llc',
      method: 'GET',
      target: 'https://llc.taid.eu.cc',
    },
  ],
}
 
// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
const maintenances: MaintenanceConfig[] = []


// Don't edit this line
export { maintenances, pageConfig, workerConfig }
