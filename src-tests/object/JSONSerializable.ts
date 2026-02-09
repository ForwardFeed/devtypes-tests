import type {JSONSerializable} from "@devtypes/object"
// Examples from the documentation
type A = JSONSerializable< { a: string; b: number[] } >;   // { a: string; b: number[] }
type B = JSONSerializable< { a: string; b: undefined } >;  // never
type C = JSONSerializable< ()=>void >;                     // never
type D = JSONSerializable< ( string | undefined )[] >;     // never
