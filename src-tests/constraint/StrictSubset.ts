import type {StrictSubset} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type User = { id: number; name: string; email?: string; phone?: string };
type UserSubset = StrictSubset< User, 'id', 'email' | 'phone' >;
// { id: number; email?: string; phone?: string }

// Manually written content.
