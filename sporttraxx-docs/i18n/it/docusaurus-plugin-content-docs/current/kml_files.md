---
id: kml_files
title: How to prepare maps files and competitors lists
sidebar_label: How to prepare maps files and competitors lists
custom_edit_url: null
---

## Maps

The maps files for the tracking module must respect following requirements:

Extension: **_.kml_**

**Race tracks**

|Segment|Color|Width|Transparency|
|:---:|:---:|:---:|:---:|
|Special stages|Red|2,0|75%|
Road sections|Blue|2,0|75%|


**Waypoints** 

|Waypoint|What to do|
|:---:|:---:|
|Standard|use Sporttraxx library (available [here](/documents/example.kml))|
|Cross Country|specify the waypoint validation range and Sporttraxx will prepare the .kml file|


## Vehicles

Fill [this](/documents/rally_ev.xlsx) excel file provided by Sporttraxx. Refer to this [example](/documents/rally_ev_example.xlsx) file to see which fields are required.  

For tracking ONLY, use yellow fields, for tracking and timing, use all fields.

Vehicles with valid racing number are shown as circles around racing number on the maps. Their names will appear when clicking on them in the [Map2D](tracking/map2d).  
Vehicles without a racing number (service vehicles visible only to authorized users) are shown as squares around a 3 letters name. When editing the name, respect spacing between letters (C O C for Clerk of Course).

For the nationalities of drivers and codrivers, only use the 'Country codes' sheet inside the excel file with the list of ISO 3166-1 alpha-3 codes. Do **not** use different codes.

Do **not** leave blank lines.

**_.kml_** and **_.xls_** files must be sent to Sporttraxx not later than 48 hours before the start of the event.

Printable version of this document [here](/documents/kml_files.odt).