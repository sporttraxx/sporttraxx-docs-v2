---
id: map2d
title: Map2D
sidebar_label: Map2D
custom_edit_url: null
---
This page shows the live-tracking on different maps and allows some basic interactions with the tracking devices.  

![Map2D Page](/img/screenshots/map2d.png)
## Search bar
### Menu
Clicking on the menu icon in the search box opens a side menu with these options:
* _**Map Type**_: Allows the selection of different cartographic and satellite maps. Including an empty map to print/send screenshots with reduced file size
* _**Other settings**_: **Toggle places** shows on the map the actual locations of [Sporttraxx clocks](../hardware/clock) highlighting their “should be” position. That helps detecting wrong placements of timing equipment on the field. **Toggle ruler**  opens a ruler tool that allows measurements between points and heading indication (CAP), useful for quick helicopter interventions.
* _**Links**_: Links back to the [Overview](overview) page.
### Search field
To target and center the map to a specific competitor, type its number or name in the search field.
A competitor's box will be opened on the bottom of the map. Same can be accomplished by clicking on the competitor's icon in the map.
## Icons
Icons can have two different **shapes**:
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Round shaped, for competitors with racing number 
* <span class="outer-shape outer-square"><span class="shape square"><span class="second-shape second-square blue"><span class="number">101</span></span></span></span> Square shaped, for service vehicles with no racing number. Service vehicles are not visible to users not logged in with a password.

Also, vehicles set as “hidden” are not visible to public.  

The **color** of a competitor's icon is essential in understanding its current status:  

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot green"><span class="number">101</span></span></span></span>   Green when moving (speed > 7 km/h)

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Blue when stopped  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot yellow"><span class="number">101</span></span></span></span> Yellow when OK button was pressed (till manual reset)  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot red"><span class="number">101</span></span></span></span> Red when SOS button was pressed (till manual reset)  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot gray"><span class="number">101</span></span></span></span> Gray if the competitor has retired (till manual reset)  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot orange"><span class="number">101</span></span></span></span> Orange when car entered an ADA ( Approaching Dangerous Area)  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot light-blue"><span class="number">101</span></span></span></span> Pale blue when sending or receiving a GMW (Give Me Way) request

Icon’s **transparency** may be:  

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Bright color as long as the  position is updated (not older than 20 seconds)  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue-faded"><span class="number">101</span></span></span></span> Gradually fading when position is becoming old  (older than 20 seconds)  

**Note**:  make sure the time of your PC is synchronized with the GPS/internet time since the level of fading can be affected by a wrong synchronization. 

Depending on specific settings of the trackers, if not moving and therefore not transmitting, the transparency level might stay faded till a manual request position command.  
If the **Auto. rec. pos.** option has been selected in the Overview page, then all devices will be polled once every four minutes. That keeps the level of transparency within certain values. 

**Note**: forced transmissions might affect the battery duration of the devices.

## Competitor's box
![Bottom box](/img/screenshots/bottombar.png)
Displayed information are:
* _**Number and name of competitor/service vehicle**_
* _**Actual speed**_
* _**GPS validity**_ (Moving the pointer on it will show actual coordinates that can be copied in the clipboard)
* _**Age of last transmitted position**_
* A purple box called **NMV flag** shows a non-movement detected by the movement sensor in the tracker.

### Command buttons
* _**Toggle track**_: show/remove a tail with the last 300 transmitted positions
* _**Request position**_: request an update of the position. As a consequence of a NMV flag, requesting a position is forcing the tracker to confirm again the NMV status
* _**Req. Call/ACK**_: a callback request or an acknowledgment to an SOS message can be sent. **On GL300 only**, a vibration is also triggered

### Checkboxes
* _**SOS**_: shows a transmitted SOS request.  Can be reset by clicking on it
* _**OK**_: shows a transmitted OK info. Can be reset by clicking on it
* _**ADA**_: shows that the car activated the ADA alarm. The map will show approximately the affected area around the car’s icon. Can be reset by clicking on it
* _**GMW**_: shows the car when sending GMW request. Is automatically reset after 15 seconds
* _**OUT**_: by checking it, the icon will be turned into grey = out of race
* _**HIDDEN**_: by checking it, the icon will not be visible to public (not logged users)

Clicking on a different icon will replace the previous competitor's box.
## Hidden functions (key combinations)
* _**Switch between Google Maps and MapBox**_ :
By typing _**Shift + s m**_ the screen will switch to a different version of the [Map2D](map2d) page with different 3D map options
* _**Show GPRS connections**_:
By typing _**s c**_ the color of the icons will change to Green = connected or Red = disconnected
* _**Open Ruler**_:
By typing _**r**_ a ruler will be opened or closed on the map
* _**Open Menu**_:
By typing _**m**_ or _**.**_ the menu will be opened or closed on the map
* _**Toggle Track All**_:
By typing _**t t a**_ all the icons will leave a colored tail on the map, from that moment onwards
* _**Show IMEI**_:
By typing _**s i**_ all the icons will show the IMEI that last transmitted that position. Useful when using alias trackers which are transmitting in parallel mode