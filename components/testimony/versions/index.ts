import type { ComponentType } from "react";
import TestimonyBodyV1_0 from "./v1.0";
import TestimonyBodyV1_1 from "./v1.1";
import TestimonyBodyV1_2 from "./v1.2";
import TestimonyBodyV1_3 from "./v1.3";
import TestimonyBodyV1_4 from "./v1.4";
import TestimonyBodyV1_5 from "./v1.5";
import TestimonyBodyV1_6 from "./v1.6";
import TestimonyBodyV1_7 from "./v1.7";

// Frozen bodies for superseded versions. When a new version is cut, the
// outgoing body is copied here as v<old>.tsx and registered below, so
// /testimony/v<old> keeps rendering the text that was there when it was that
// version, while /testimony and /testimony/v<new> move on.
export const FROZEN_BODIES: Record<
    string,
    ComponentType<{ version: string; isCurrent: boolean }>
> = {
    "1.0": TestimonyBodyV1_0,
    "1.1": TestimonyBodyV1_1,
    "1.2": TestimonyBodyV1_2,
    "1.3": TestimonyBodyV1_3,
    "1.4": TestimonyBodyV1_4,
    "1.5": TestimonyBodyV1_5,
    "1.6": TestimonyBodyV1_6,
    "1.7": TestimonyBodyV1_7,
};
