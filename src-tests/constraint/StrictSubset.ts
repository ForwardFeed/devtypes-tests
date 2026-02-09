import type {StrictSubset} from "@devtypes/constraint"
// Examples from the documentation
type User = { id: number; name: string; email?: string; phone?: string };
type UserSubset = StrictSubset< User, 'id', 'email' | 'phone' >;
// { id: number; email?: string; phone?: string }
