---
id: connections
title: Connections 
sidebar_label: Connections 🚧
custom_edit_url: null
---

This page allows the monitoring of trackers regardless if they're assigned or not to an event. It shows and counts the number of trackers which are actually connected to GPRS and those with a valid GPS position.  

![Connections Page](/img/screenshots/connections.png)
## Description
A filter allows to check ALL trackers or the ones assigned to each active event.  
This page does **not** refresh automatically, therefore use the Refresh button or activate the 30 sec. auto refresh option.
## Fields
The columns, whose content can be ordered by clicking on their names at the top, show:
* _**N**_: device ID
* _**IMEI**_: unique IMEI code
* _**Profile**_: special settings of that device (if any)
* _**Vehicle**_: number and name of competitor (if assigned) 
* _**Conn.**_: connection status (Red = disconnected, Green = online)
* _**Position**_: last transmitted position and time/date of it
* _**Bat**_: level of internal battery and if connected to external power supply/charger (this info is updated each 5 minutes)
## Functions
If the user is logged in, three buttons will allow the transmission of commands to the device:
* _**Req.Pos.**_: to update the position
* _**Reset**_: to restart the device  (might take up to 1 minute)
* _**Power off**_: to turn off the tracker  **Note**: if turned off, the tracker cannot be reached again from remote