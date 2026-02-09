import type {IsIndexedList} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = IsIndexedList< number[] >;                 // true
type B = IsIndexedList< ReadonlyArray< string > >;  // true
type C = IsIndexedList< Set< boolean > >;           // false

// Test automatically generated from examples.
const A: A = true
const B: B = true
const C: C = false

// Manually written content.
