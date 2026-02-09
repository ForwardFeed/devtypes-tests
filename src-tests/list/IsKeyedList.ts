import type {IsKeyedList} from "@devtypes/list"
// Examples automatically extracted from the documentation.
type A = IsKeyedList< Record< string, number > >;  // true
type B = IsKeyedList< Map< number, string > >;     // true
type C = IsKeyedList< number[] >;                  // false
// Manually written content.
