import type {IfEquals} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = IfEquals< string, string, number, boolean >;  // number
type B = IfEquals< string, number, number, boolean >;  // boolean

// Test automatically generated from examples.
const A: A = number
const B: B = boolean

// Manually written content.
