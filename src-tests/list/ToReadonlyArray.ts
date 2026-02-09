import type {ToReadonlyArray} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = ToReadonlyArray< number[] >;       // ReadonlyArray< number >
type B = ToReadonlyArray< Set< string > >;  // ReadonlyArray< string >

// Test automatically generated from examples.
const A: A = ReadonlyArray< number >
const B: B = ReadonlyArray< string >

// Manually written content.
