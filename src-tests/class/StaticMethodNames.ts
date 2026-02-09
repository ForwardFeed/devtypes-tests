import type {StaticMethodNames} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Utils { static create() {} static format() {} }
type StaticMethods = StaticMethodNames< typeof Utils >; // 'create' | 'format'

// Manually written content.
