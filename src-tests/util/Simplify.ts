import type {Simplify} from "@devtypes/util"
// Examples from the documentation
type Complex = { a: string } & { b: number } & { c: boolean };
type Simple = Simplify< Complex >;
// { a: string; b: number; c: boolean }
