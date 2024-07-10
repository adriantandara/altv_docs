---
title: Ground Coords
---

# Ground Coords

The function `getGroundCoords()` retrieves the ground coordinates (x, y, z) for a given 3D vector position. It iterates through a specified number of attempts (`tries`) to accurately determine the ground level at the specified `(x, y)` coordinates.

:::tip
This script is for beginners starting with alt:V development. For support, join their [Discord server](https://discord.gg/qNHqyPFHew) where the community can help.
:::

#### Parameters

| Parameter | Type          | Description                                                      |
| --------- | ------------- | ---------------------------------------------------------------- |
| `vector`  | `alt.Vector3` | The 3D vector representing the `(x, y, z)` coordinates to check. |
| `tries`   | `number`      | The number of attempts to find the ground level.                 |

#### Code

```typescript
import * as alt from 'alt-client';
import * as game from 'natives';

async function getGroundCoords(vector: alt.Vector3, tries: number): Promise<alt.Vector3 | null> {
    let groundZ;

    for (let i = 0; i < tries; ++i) {
        groundZ = game.getGroundZFor3dCoord(vector.x, vector.y, 1000, 0, false, false);

        if (groundZ) return new alt.Vector3(vector.x, vector.y, groundZ[1]);

        for (let z = 1500; z >= 0; z -= 100) {
            game.setFocusPosAndVel(vector.x, vector.y, z, 0, 0, 0);

            game.requestCollisionAtCoord(vector.x, vector.y, z);

            game.requestAdditionalCollisionAtCoord(vector.x, vector.y, z);

            await alt.Utils.wait(50);
        }

        groundZ = game.getGroundZFor3dCoord(vector.x, vector.y, 1000, 0, false, false);

        if (groundZ) return new alt.Vector3(vector.x, vector.y, groundZ[1]);

        game.clearFocus();
    }
    return null;
}
```
