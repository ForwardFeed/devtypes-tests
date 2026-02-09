import type {ExtractFrom} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type User = { id: number; name: string; email?: string; phone?: string };
type Contact = ExtractFrom< User, 'email' | 'phone' >;
// { email?: string; phone?: string }

// Manually written content.
