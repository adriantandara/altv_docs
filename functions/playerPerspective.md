---
title: Player Perspective
---

# Player Perspective

The function `setCameraOnPlayer()` sets up a camera that follows the local player from a specific angle.

:::tip
This script is for beginners starting with alt:V development. For support, join their [Discord server](https://discord.gg/qNHqyPFHew) where the community can help.
:::

## Parameters

| Parameter   | Type     | Description                                             |
| ----------- | -------- | ------------------------------------------------------- |
| `camHeight` | `number` | The height offset of the camera relative to the player. |

## Code

```typescript
import * as alt from 'alt-client';
import * as game from 'natives';

function setCameraOnPlayer(camHeight: number) {
    const player = alt.Player.local;

    const forwardVector = game.getEntityForwardVector(player.scriptID);

    const camForwardPos = new alt.Vector3(player.pos.x + forwardVector.x, player.pos.y + forwardVector.y, player.pos.z + camHeight);

    const camera = game.createCam('DEFAULT_SCRIPTED_CAMERA', true);

    game.setCamCoord(camera, camForwardPos.x, camForwardPos.y, camForwardPos.z);

    game.pointCamAtPedBone(camera, player.scriptID, 31086, 0, 0, 0, false);

    game.setCamFov(camera, 60);

    game.renderScriptCams(true, true, 16.6667, true, false, 0);
}
```
