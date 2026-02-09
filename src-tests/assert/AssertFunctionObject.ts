import type {AssertFunctionObject} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertFunctionObject< { a(): void; b(): number } >;  // ✓
type B = AssertFunctionObject< { a: number } >;               // ✗ TS error

// Manually written content.
