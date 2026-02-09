import type {AwaitedReturnType} from "@devtypes/functional"

// Examples automatically extracted from the documentation.
type F1 = () => string;
type R1 = AwaitedReturnType< F1 >;  // string
type F2 = () => Promise< number >;
type R2 = AwaitedReturnType< F2 >;  // number

// Test automatically generated from examples.
const R1: R1 = string
const R2: R2 = number

// Manually written content.
