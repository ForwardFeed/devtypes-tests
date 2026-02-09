import type {Flat} from "@devtypes/transform"

// Examples automatically extracted from the documentation.
type Nested = ( number[] | string[] )[];
type Flat_ = Flat< Nested >;  // ( number | string )[]

// Manually written content.
