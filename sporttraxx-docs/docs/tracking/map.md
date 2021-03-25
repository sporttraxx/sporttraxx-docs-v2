---
id: map
title: Map 
sidebar_label: Map
custom_edit_url: null
---

This page allows manual intervention on the icons shown on the [Map2D](map2d) page.  

![Map Page](/img/screenshots/map.png)

Competitors' icons may be dragged manually to a new location, with the option of showing them green if moving (a random speed value of 60/70 km/h) or blue if stopped. 

## Functions
### Reload
Update all actual positions.  **Note**: this page DOES NOT refresh automatically. So each time you use it, first **update** the positions.
### Zoom all 
Concentrate all vehicles in that map window. 

## Use
### Move a vehicle
1. The _Moving_ checkbox on the side decides if a new manually assigned position is shown moving or static;
2. Find the vehicle in the **Devices** box on the right and select it;
3. Zoom in, drag that vehicle to its new position and release it;

The vehicle will now have jumped to its new manually assigned position in the [Map2D](map2d) page.  
A manually relocated position is not shown in the [Track Analysis](trackanalysis) history.
Vehicles without a valid GPS position are shown at 0,0 coordinates in front of the Gulf of Guinea.

### Make a hidden vehicle reappear
To make a vehicle appear again in the Map page, after it was hidden:
1. Center the map on the position you want the vehicle to appear again;
2. Find the hidden vehicle in the **Hidden devices** box and select it.

The vehicle will appear in the center of the map. Eventually relocate it manually to a more suitable position.    

**Note**: the icons cannot show more than 2 digits. In case of doubts click on the icon and check the number in the vehicle's box.  

**Important note**: manual interventions on non-transmitting vehicles are allowed **ONLY** if its position is confirmed through a reliable source. **Do never relocate a vehicle where you might only believe it is**.
