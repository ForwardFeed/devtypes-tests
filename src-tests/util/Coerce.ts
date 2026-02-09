import type {Coerce} from "@devtypes/util"

// Examples automatically extracted from the documentation.
type A = Coerce< string, string | number >;   // string
type B = Coerce< number, string | number >;   // number
type C = Coerce< boolean, string | number >;  // string | number

// Test automatically generated from examples.
const A: A = string
const B: B = number
const C: C = string | number

// Manually written content.
