import type {DiscriminatedUnion} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type AnimalMap = {
  cat: { meows: boolean };
  dog: { barks: boolean };
};

type Animal = DiscriminatedUnion< 'type', AnimalMap >;
// { type: 'cat'; meows: boolean } | { type: 'dog'; barks: boolean }

// Manually written content.
