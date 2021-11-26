---
id: sop
title: SOP (Sporttraxx Operating Protocol)
sidebar_label: SOP 🚧
custom_edit_url: null
---

The Operating protocol is the sequence of actions that a Sporttraxx technician is supposed
to follow when running a tracking service at an event. A list of these actions in their proper
order is available and should be used as a checklist.

Only the respect of these actions will allow the [SPI (Sporttraxx Performance Indicator)](spi) to
provide a likely statistics and be used as a quality target.

## In the days before the event

Collect/set up the GPS files of the event’s route, in .kml format with the following specifications:

#### Rallies and offroad motorsports

- Start/finish points
- Special Stages
- Road sections
- Radio points
- Check points
- Service/regrouping points

#### Horse Endurance

- Start/finish points
- Phases
- Check points

#### Other sports

- Start/finish points
- Routes
- Checkpoints and any other relevant point

If a GSM test was run earlier, produce a screenshot, using the [TrackAnalysis 2](trackanalysis2), that shows
the different levels of GPRS coverage along the race route by highlighting in red the critical
areas. That file should be used, during the event to understand the behaviour of the trackers.

## The day before the event

After the assignment of the trackers to the competitor’s numbers and the service vehicle’s
acronyms, turn on all the trackers in an open space to check the GPRS connection, the GPS
positions and the actual battery levels of the trackers. Turn off the trackers from remote. Check that
they are all OFF. Charge those trackers that have shown a lower battery level.

## The day of the event

Choose the most convenient location for the distribution/installation of the trackers.
Turn on the trackers in the starting order sequence, at least 15 minutes before the actual start of
each competitor. Using a mobile phone/tablet check the connection status of each tracker.
The connection can be eventually checked relying on the tracker’s LED flashing mode. Restart those trackers which do not come online. After the third attempt, proceed with swapping the critical tracker(s) with a spare device, updating immediately the database.
Sign as **OUT** those trackers that will not take the start, only based upon a reliable information.
Switch off the trackers of the competitors that have been marked as **OUT**.

**Important**: the [SPI (Sporttraxx Performance Indicator)](spi) is based on the connection status,
during the whole event, of all the active trackers assigned to competitors. Therefore the highest
attention must be paid in marking asap as **OUT** any non-starters and any retired competitor,
during the event, as soon as that retired status is known.
The SPI will not consider the **OUT** marked competitors.

## During the event

There are several tools in the Sporttraxx platform, that allow to monitor the connection status of
the trackers.

In the [Overview](overview), the DT column shows the **delay since the last transmission**. When
moving, a tracker should send a position each 5 to 7 seconds. When stopped, it also stops the
transmission till the next movement. That is meant to save battery.
If the **auto req. Pos.** option has been activated, that PC will poll each 4 minutes all the
trackers, forcing also the stopped ones, to confirm their actual position. That option might affect
significantly the overall battery consumption.
A missing **Battery level** icon might warn about a disconnected tracker. Just check the DT of
that tracker. If it was last moving and the delay is > 20 seconds, it might predict a
disconnection. If it was last not moving, it is normal to not have new updates of position.
Since the battery level is updated each 5 minutes, a missing battery level might be related to a
missed transmission of that level. With the next update the battery level will be back. Also a
sudden different value of battery level (normally red low level) can be related to a wrong reading
of the battery tension. With the following update, the level will go back to the previous levels.

In any case, you can use manually the **highlight disconnected** command, in front of each
tracker’s line, a green (connected) or a red (disconnected) dot is shown. Till the next refresh of
the page.

### Time out

Before the system is showing a tracker as disconnected, a timeout of a couple of minutes will run. That will avoid to show as disconnected a tracker which is only temporarily “suffering” in a difficult area. After that timeout, the tracker will be considered as disconnected (red dot).

### Overview 2

In the [Overview 2](overview2), the colour of the device ID shows all the time the connection status,
without the need for a specific request: red for **disconnected**, green for **online**. With a DT value
shown in the next column.
In the upper right corner the **SPI** is shown as a % value, updated every minute. Clicking on that
box, a diagram of the previous hours is shown.

## End of the event

The procedures to be followed at the end of the event and the collection of the trackers depend
significantly from the organization on site.

**Here's a suggestion**:
Each tracker collected should be reported as collected using the [Manage](manage) page. That adds the
blue status icon in the overview page to that tracker. After that, turn off the device. That
procedures will show both the **COLLECTED** icon and the **OFF** icon in the overview page.

As an alternative, if not having a smartphone or tablet available in order to use the [Manage](manage) page, you can
press the **SOS** button before turning off the tracker. That creates the combination of SOS icon
and OFF icon in the overview. A reliable information that the tracker is in your hands.
