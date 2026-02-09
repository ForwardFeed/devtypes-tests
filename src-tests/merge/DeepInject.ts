import type {DeepInject} from "@devtypes/merge"
// Examples automatically extracted from the documentation.
type Nested = { level_1: { level_2: { } } };
type Metadata = { metadata?: string };
type DeepInjected = DeepInject< Nested, Metadata >;
// { level_1: { level_2: { metadata?: string }, metadata?: string }, metadata?: string }
// Manually written content.
