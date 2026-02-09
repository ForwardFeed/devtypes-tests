import type {IsIndexedList} from "@devtypes/list"
// Examples from the documentation
type A = IsIndexedList< number[] >;                 // true
type B = IsIndexedList< ReadonlyArray< string > >;  // true
type C = IsIndexedList< Set< boolean > >;           // false
