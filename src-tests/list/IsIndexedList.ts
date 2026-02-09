import type {IsIndexedList} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = IsIndexedList< number[] >;                 // true
type B = IsIndexedList< ReadonlyArray< string > >;  // true
type C = IsIndexedList< Set< boolean > >;           // false

// Manually written content.
