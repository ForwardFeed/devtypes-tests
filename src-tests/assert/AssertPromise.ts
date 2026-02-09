import type {AssertPromise} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertPromise< Promise< number > >;  // ✓
type B = AssertPromise< number >;             // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
