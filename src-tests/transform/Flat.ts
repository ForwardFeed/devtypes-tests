import type {Flat} from "@devtypes/transform"
// Examples from the documentation
type Nested = ( number[] | string[] )[];
type Flat = Flat< Nested >;  // ( number | string )[]
