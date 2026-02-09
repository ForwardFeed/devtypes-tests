import type {ClassProperties} from "@devtypes/class"
// Examples automatically extracted from the documentation.
class User { id: number; name: string; email: string; }
type UserProperties = ClassProperties< User >;
// { id: number; name: string; email: string; }
// Manually written content.
