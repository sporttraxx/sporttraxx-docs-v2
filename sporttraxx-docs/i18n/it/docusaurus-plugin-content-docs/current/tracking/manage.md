---
id: manage
title: Manage 
sidebar_label: Manage
custom_edit_url: null
---

This page allows a very fast and direct management of the trackers associated with vehicles.  

![Manage Page](/img/screenshots/manage.png)

## Functions

### Home
Loopback link to this page.
### Race
Links directly to the race management page in the administration. Access to this page depends on your authorization level.

### Vehicles

This page manages the assignment of tracking devices to competitors.

![Vehicles page](/img/screenshots/vehicles.png)  

In the top right corner of this page, three buttons are available:
* _**Add vehicle**_: link to administration page, where a vehicle can be added to the system. Access to this page depends on your authorization level
* _**Import vehicles**_: link to administration page, where a file containing multiple vehicles can be imported. Access to this page depends on your authorization level
* _**Refresh**_: Refresh vehicles list

Selecting the vehicle’s name you are forwarded to the vehicle page in the main event’s administration. Here you can edit the name and assign a new tracker to the competitor. Access to this page depends on your authorization level.  

Clicking on a **+** button in the Device column, it opens a box where you can assign a device. You might be warned that that device is already assigned.

Clicking on a device number in the Device column allows you to change the assigned device with a new one. You might be asked if to swap or take over a tracker if already assigned to another vehicle.  

## Aliases 
You can assign up to 10 trackers to a vehicle which can be working at the same time.  Only the **last** incoming position will be shown on the map. Typical combination is **GSM+GSM** or **GSM+SAT**.
To add an alias, click on the **+** button in the **Aliases** column and type the device number of the additional tracker. You might be asked if to swap or take over a tracker if already assigned to another vehicle.