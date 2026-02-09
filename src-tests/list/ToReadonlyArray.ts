import type {ToReadonlyArray} from "@devtypes/list"
// Examples from the documentation
type A = ToReadonlyArray< number[] >;       // ReadonlyArray< number >
type B = ToReadonlyArray< Set< string > >;  // ReadonlyArray< string >
