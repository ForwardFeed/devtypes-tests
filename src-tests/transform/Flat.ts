import type {Flat} from "@devtypes/transform"

// Examples automatically extracted from the documentation.
type Nested = ( number[] | string[] )[];
type Flat = Flat< Nested >;  // ( number | string )[]

// Test automatically generated from examples.
const Flat: Flat = ( number | string )[]

// Manually written content.
