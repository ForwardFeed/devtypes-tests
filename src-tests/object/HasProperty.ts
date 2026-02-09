import type {HasProperty} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: string; b?: number };
type Has_a = HasProperty< Obj, 'a' >;  // true
type Has_c = HasProperty< Obj, 'c' >;  // false

// Test automatically generated from examples.
const Has_a: Has_a = true
const Has_c: Has_c = false

// Manually written content.
