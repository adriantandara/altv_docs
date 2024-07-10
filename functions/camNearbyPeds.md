---
title: Camera Nearby Peds
---

# Camera Nearby Peds

The function `setupCameraForNearbyPeds()` sets up a scripted camera to focus on pedestrians that are within a close proximity to the player.

:::tip
This script is for beginners starting with alt:V development. For support, join their [Discord server](https://discord.gg/qNHqyPFHew) where the community can help.
:::

#### Code

```typescript
import * as alt from 'alt-client';
import * as natives from 'natives';

function setupCameraForNearbyPeds() {
    const player = alt.Player.local;
    const playerPos = player.pos;

    alt.Ped.streamedIn.forEach((ped) => {
        const distance = playerPos.distanceTo(ped.pos);

        if (distance < 3) {
            const forwardVector = natives.getEntityForwardVector(ped.scriptID);

            const camForwardPos = new alt.Vector3(ped.pos.x + forwardVector.x, ped.pos.y + forwardVector.y, ped.pos.z + 0.7);

            const camera = natives.createCam('DEFAULT_SCRIPTED_CAMERA', true);

            natives.setCamCoord(camera, camForwardPos.x, camForwardPos.y, camForwardPos.z);

            natives.pointCamAtPedBone(camera, ped.scriptID, 31086, 0, 0, 0, false);

            natives.setCamFov(camera, 60);

            natives.setEntityAlpha(player.scriptID, 0, false);

            natives.renderScriptCams(true, true, 1000, true, false, 0);
        }
    });
}
```
