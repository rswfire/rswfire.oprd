import type { ComponentType } from "react";
import TestimonyBodyV1_0 from "./v1.0";

// Frozen bodies for superseded versions. When a new version is cut, the
// outgoing body is copied here as v<old>.tsx and registered below, so
// /testimony/v<old> keeps rendering the text that was there when it was that
// version, while /testimony and /testimony/v<new> move on.
export const FROZEN_BODIES: Record<
    string,
    ComponentType<{ version: string; isCurrent: boolean }>
> = {
    "1.0": TestimonyBodyV1_0,
};
