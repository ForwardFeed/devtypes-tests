import type {ToArray} from "@devtypes/list"
// Examples from the documentation
type A = ToArray< number[] >;       // number[]
type B = ToArray< Set< string > >;  // string[]
