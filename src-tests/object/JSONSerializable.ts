import type {JSONSerializable} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type A = JSONSerializable< { a: string; b: number[] } >;   // { a: string; b: number[] }
type B = JSONSerializable< { a: string; b: undefined } >;  // never
type C = JSONSerializable< ()=>void >;                     // never
type D = JSONSerializable< ( string | undefined )[] >;     // never

// Test automatically generated from examples.
const A: A = { a: string; b: number[] }
const B: B = never
const C: C = never
const D: D = never

// Manually written content.
