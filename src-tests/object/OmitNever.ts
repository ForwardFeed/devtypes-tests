import type {OmitNever} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: string; b: never; c: number; d: never };
type Result = OmitNever< Obj >;  // { a: string; c: number }

// Test automatically generated from examples.
const Result: Result = { a: string; c: number }

// Manually written content.
