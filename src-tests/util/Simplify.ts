import type {Simplify} from "@devtypes/util"

// Examples automatically extracted from the documentation.
type Complex = { a: string } & { b: number } & { c: boolean };
type Simple = Simplify< Complex >;
// { a: string; b: number; c: boolean }

// Manually written content.
