---
id: overview2
title: Overview2
sidebar_label: Overview2 🚧
custom_edit_url: null
---

This page is divided in three subpages: Vehicles, Vehicles overview and Devices.

## Vehicles

Similar to the [Overview](overview.md) page, all the vehicles are listed in sortable orders. This type of view is more suitable for small displays. The command list is available for each line on the right side. Multiple selected lines have their commands on the bottom. By clicking on the device ID (green if connected, red if disconnected) in the device column you are linked to that device's info.

## Vehicles overview

This page shows all the relevant information about the trackers and their connection status. Its graphic structure is more suitable than the [Overview](overview.md) page for events with many competitors as it avoids the continuous scrolling up and down along a vertical list.

![Overview Page](/img/screenshots/overview2.png)

### Buttons

The **Sorting** button can order the list of devices by::

- _**Competitor's number**_
- _**Starting order**_
- _**Position age**_

The **Connected** button shows the connection status.

### Colors meaning

Each time the page refreshes (automatically), the competitor's box will be:

- Green if position age is <30sec.
- Light green if 30 to 75 sec.
- Yellow if 75 to 150 sec.
- Orange if 150 to 300 sec.
- Red if >5 min.

The outer border is blue if speed = 0 Km/h = not moving
Moving the cursor on an icon shows its name

### Competitor's info

Clicking on the competitor's box opens a detail box with info such as competitor's race number, competitor's name, coordinates, time since last transmission, current speed and associated device(s) if any.  
The _**Request position**_ button sends an update request to that tracker.

![Competitor's info](/img/screenshots/overview2-selected.png)

## Devices

In this subpage are listed the devices showing their profile (if any) and their connection status. Clicking on a device line, you access the details of that device.
Beside the usual information, a battery level diagram is displayed at the bottom. A time range (last 6h up to last 7 days) can be selected.
On the very bottom a notes section allows the recording of information related to that specific device. These info will remain associated to the device for future use.
