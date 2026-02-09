import type {HasRequiredProperty} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: string; b?: number; c: number | undefined };
type IsReq_a = HasRequiredProperty< Obj, 'a' >;  // true
type IsReq_b = HasRequiredProperty< Obj, 'b' >;  // false

// Test automatically generated from examples.
const IsReq_a: IsReq_a = true
const IsReq_b: IsReq_b = false

// Manually written content.
