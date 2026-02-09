import type {IsJSONSerializable} from "@devtypes/guard"
// Examples from the documentation
type A = IsJSONSerializable< { a: string; b: number[] } >;   // true
type B = IsJSONSerializable< { a: string; b: undefined } >;  // false
type C = IsJSONSerializable< ()=>void >;                     // false
type D = IsJSONSerializable< ( string | undefined )[] >;     // false
type Recurse = { direct: Recurse, union: number | Recurse }
type E = IsJSONSerializable< Recurse >;                      // false
