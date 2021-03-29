---
id: overview
title: Overview 
sidebar_label: Overview 🚧
custom_edit_url: null
---
:::caution

Questa pagina sarà sostituita!

:::
This page allows the main management of the tracking devices, monitoring their movement/speed, connection status, GPS position, battery level and possible states the device could be in. 
It also possible to customize the [Map2D](map2d) icons with colors and activate the auto/request position option.

![Overview Page](/img/screenshots/overview.png)
## Table
* _**GPRS Connection**_ status (upon request, using the function _Highlight Disconnected_ in the right sidebar)
* _**Checkbox**_ to select the competitor
* _**Colorbox**_ to change the color of the border of the competitor's icon on the [Map2D](map2d) page
* _**#**_: race number assigned to the competitor
* _**Name**_: competitor’s name
* _**Device**_: (main) tracking device ID assigned to the competitor
* _**Pos.**_: position validity (✓ or X)
* _**Speed**_: speed the competitor is traveling at
* _**dt**_: time since the last transmitted position
* _**st**_: status(es)
* _**Bat**_: level of the tracking device's battery.

### Device statuses
* <span class="badge off">off</span> The device has been turned off manually.
* <span class="badge collected">coll</span> Sporttraxx has got the device back. 
* <span class="badge sos">SOS</span> The competitor issued an SOS alarm.
* <span class="badge nmv">NMV</span> The tracker does not detect any movement.
* <span class="badge out">out</span> The competitor has retired.
* <span class="badge lowbat">lowbat</span> The battery level is dangerously low.

Each column can be sorted by clicking on its name on the top.  
If alias trackers are used, an additional battery column will be automatically displayed.  
The overview page will automatically fill its lines with the competitor’ details, as soon as they connect to GPRS for the first time.  
Lines shown in faded grey are related to vehicles put in hidden mode in the [Map2D](map2d) page, in order to keep them hidden to the public (not logged users).  
When moving the cursor on the _**Pos.**_ cell, the actual coordinates of the last transmission are shown. By clicking on it, a link to Google Maps will be opened and the GPS coordinates will be available in 2 more different formats.
## Right sidebar
### Auto req.pos. button
If activated, the browser will send a request position command to all trackers once every 4 minutes.  
**Note**:  this option could significantly affect the battery duration of the trackers, forcing them to transmit even if they are stationary or in sleep mode.
### Filters 
Hide devices in the table according to their status(es).
### Actions
* _**Refresh**_: manual refresh of the table. Does not affect the sorted sequence in the columns
* _**Highlight Disconnected**_: shows GPRS connection status by means of a green/red dot in the very first column
* _**Copy devices**_: copies selected device(s) IDs in the system's clipboard
* _**Request position**_: sends a position request to selected device(s)
* _**Request I/O**_:  sends a request of status of connected accessories
* _**Toggle collected**_: assigns a _collected_ status to the selected device
* _**Reset states**_: resets the status(es) of the selected device
* _**Hide**_:  hides the selected device from the list and in the [Map2D](map2d) page until its next transmission (if any)
* _**Reset**_:  sends a GSM + GPS reset to the selected device
* _**Power off**_:  turns off the selected device. **Note**: if turned off, the device cannot be reached again
### Links
* _**Map**_: link to the [Map](map) page that allows manual intervention on the map position of the tracking devices.
