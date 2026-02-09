import type {WritableProperties} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Profile { readonly id: number; bio: string; avatarUrl: string; }
type WritablePropsObj = WritableProperties< Profile >;
// { bio: string; avatarUrl: string; }

// Manually written content.
