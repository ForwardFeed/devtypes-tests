import type {ToReadonlyArray} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = ToReadonlyArray< number[] >;       // ReadonlyArray< number >
type B = ToReadonlyArray< Set< string > >;  // ReadonlyArray< string >

// Manually written content.
