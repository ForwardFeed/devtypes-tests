import type {RequireFrom} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type User = { id: number; name: string; email?: string; phone?: string };
type UserID = RequireFrom< User, 'id' >;  // { id: number }

// Manually written content.
