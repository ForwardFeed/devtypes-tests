import type {PartialClass} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class User { id: number; name: string; email: string; }
type PartialUser = PartialClass< User >;
// { id?: number; name?: string; email?: string; }

// Manually written content.
