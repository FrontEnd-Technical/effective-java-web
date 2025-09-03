export const index_menu = [
  {
    title: "1 Introduction",
    items: [],
  },
  {
    title: "2 Creating and Destroying Objects",
    items: [
      {
        title:
          "Item 1: Consider static factory methods instead of constructors",
        path: "/articles/item1",
      },
      {
        title:
          "Item 2: Consider a builder when faced with many constructor parameters",
        path: "/articles/item2",
      },
      {
        title:
          "Item 3: Enforce the singleton property with a private constructor or an enum type",
        path: "/articles/item3",
      },
      {
        title: "Item 4: Enforce noninstantiability with a private constructor",
        path: "/articles/item4",
      },
      {
        title: "Item 5: Prefer dependency injection to hardwiring resources",
        path: "/articles/item5",
      },
      {
        title: "Item 6: Avoid creating unnecessary objects",
        path: "/articles/item6",
      },
      {
        title: "Item 7: Eliminate obsolete object references",
        path: "/articles/item7",
      },
      {
        title: "Item 8: Avoid finalizers and cleaners",
        path: "/articles/item8",
      },
      {
        title: "Item 9: Prefer try-with-resources to try-finally",
        path: "/articles/item9",
      },
    ],
  },
  {
    title: "3 Methods Common to All Objects",
    items: [
      {
        title: "Item 10: Obey the general contract when overriding equals",
        path: "/articles/item10",
      },
      {
        title: "Item 11: Always override hashCode when you override equals",
        path: "/articles/item11",
      },
      {
        title: "Item 12: Always override toString",
        path: "/articles/item12",
      },
      {
        title: "Item 13: Override clone judiciously",
        path: "/articles/item13",
      },
      {
        title: "Item 14: Consider implementing Comparable",
        path: "/articles/item14",
      },
    ],
  },
  {
    title: "4 Classes and Interfaces",
    items: [
      {
        title: "Item 15: Minimize the accessibility of classes and members",
        path: "/articles/item15",
      },
      {
        title:
          "Item 16: In public classes, use accessor methods, not public fields",
        path: "/articles/item16",
      },
      { title: "Item 17: Minimize mutability", path: "/articles/item17" },
      {
        title: "Item 18: Favor composition over inheritance",
        path: "/articles/item18",
      },
      {
        title:
          "Item 19: Design and document for inheritance or else prohibit it",
        path: "/articles/item19",
      },
      {
        title: "Item 20: Prefer interfaces to abstract classes",
        path: "/articles/item20",
      },
      {
        title: "Item 21: Design interfaces for posterity",
        path: "/articles/item21",
      },
      {
        title: "Item 22: Use interfaces only to define types",
        path: "/articles/item22",
      },
      {
        title: "Item 23: Prefer class hierarchies to tagged classes",
        path: "/articles/item23",
      },
      {
        title: "Item 24: Favor static member classes over nonstatic",
        path: "/articles/item24",
      },
      {
        title: "Item 25: Limit source files to a single top-level class",
        path: "/articles/item25",
      },
    ],
  },

  {
    title: "5 Generics",
    items: [
      {
        title: "Item 26: Don’t use raw types",
        path: "/articles/item26",
      },
      {
        title: "Item 27: Eliminate unchecked warnings",
        path: "/articles/item27",
      },
      {
        title: "Item 28: Prefer lists to arrays",
        path: "/articles/item28",
      },
      {
        title: "Item 29: Favor generic types",
        path: "/articles/item29",
      },
      {
        title: "Item 30: Favor generic methods",
        path: "/articles/item30",
      },
      {
        title: "Item 31: Use bounded wildcards to increase API flexibility",
        path: "/articles/item31",
      },
      {
        title: "Item 32: Combine generics and varargs judiciously",
        path: "/articles/item32",
      },
      {
        title: "Item 33: Consider typesafe heterogeneous containers",
        path: "/articles/item33",
      },
    ],
  },

  {
    title: "6 Enums and Annotations",
    items: [
      {
        title: "Item 34: Use enums instead of int constants",
        path: "/articles/item34",
      },
      {
        title: "Item 35: Use instance fields instead of ordinals",
        path: "/articles/item35",
      },
      {
        title: "Item 36: Use EnumSet instead of bit fields",
        path: "/articles/item36",
      },
      {
        title: "Item 37: Use EnumMap instead of ordinal indexing",
        path: "/articles/item37",
      },
      {
        title: "Item 38: Emulate extensible enums with interfaces",
        path: "/articles/item38",
      },
      {
        title: "Item 39: Prefer annotations to naming patterns",
        path: "/articles/item39",
      },
      {
        title: "Item 40: Consistently use the Override annotation",
        path: "/articles/item40",
      },
      {
        title: "Item 41: Use marker interfaces to define types",
        path: "/articles/item41",
      },
    ],
  },
  {
    title: "7 Lambdas and Streams",
    items: [
      {
        title: "Item 42: Prefer lambdas to anonymous classes",
        path: "/articles/item42",
      },
      {
        title: "Item 43: Prefer method references to lambdas",
        path: "/articles/item43",
      },
      {
        title: "Item 44: Favor the use of standard functional interfaces",
        path: "/articles/item44",
      },
      {
        title: "Item 45: Use streams judiciously",
        path: "/articles/item45",
      },
      {
        title: "Item 46: Prefer side-effect-free functions in streams",
        path: "/articles/item46",
      },
      {
        title: "Item 47: Prefer Collection to Stream as a return type",
        path: "/articles/item47",
      },
      {
        title: "Item 48: Use caution when making streams parallel",
        path: "/articles/item48",
      },
    ],
  },
  {
    title: "8 Methods",
    items: [
      {
        title: "Item 49: Check parameters for validity",
        path: "/articles/item49",
      },
      {
        title: "Item 50: Make defensive copies when needed",
        path: "/articles/item50",
      },
      {
        title: "Item 51: Design method signatures carefully",
        path: "/articles/item51",
      },
      {
        title: "Item 52: Use overloading judiciously",
        path: "/articles/item52",
      },
      {
        title: "Item 53: Use varargs judiciously",
        path: "/articles/item53",
      },
      {
        title: "Item 54: Return empty collections or arrays, not nulls",
        path: "/articles/item54",
      },
      {
        title: "Item 55: Return optionals judiciously",
        path: "/articles/item55",
      },
      {
        title: "Item 56: Write doc comments for all exposed API elements",
        path: "/articles/item56",
      },
    ],
  },
  {
    title: "9 General Programming",
    items: [
      {
        title: "Item 57: Minimize the scope of local variables",
        path: "/articles/item57",
      },
      {
        title: "Item 58: Prefer for-each loops to traditional for loops",
        path: "/articles/item58",
      },
      {
        title: "Item 59: Know and use the libraries",
        path: "/articles/item59",
      },
      {
        title: "Item 60: Avoid float and double if exact answers are required",
        path: "/articles/item60",
      },
      {
        title: "Item 61: Prefer primitive types to boxed primitives",
        path: "/articles/item61",
      },
      {
        title: "Item 62: Avoid strings where other types are more appropriate",
        path: "/articles/item62",
      },
      {
        title: "Item 63: Beware the performance of string concatenation",
        path: "/articles/item63",
      },
      {
        title: "Item 64: Refer to objects by their interfaces",
        path: "/articles/item64",
      },
      {
        title: "Item 65: Prefer interfaces to reflection",
        path: "/articles/item65",
      },
      {
        title: "Item 66: Use native methods judiciously",
        path: "/articles/item66",
      },
      {
        title: "Item 67: Optimize judiciously",
        path: "/articles/item67",
      },
      {
        title: "Item 68: Adhere to generally accepted naming conventions",
        path: "/articles/item68",
      },
    ],
  },
  {
    title: "10 Exceptions",
    items: [
      {
        title: "Item 69: Use exceptions only for exceptional conditions",
        path: "/articles/item69",
      },
      {
        title:
          "Item 70: Use checked exceptions for recoverable conditions and runtime exceptions for programming errors",
        path: "/articles/item70",
      },
      {
        title: "Item 71: Avoid unnecessary use of checked exceptions",
        path: "/articles/item71",
      },
      {
        title: "Item 72: Favor the use of standard exceptions",
        path: "/articles/item72",
      },
      {
        title: "Item 73: Throw exceptions appropriate to the abstraction",
        path: "/articles/item73",
      },
      {
        title: "Item 74: Document all exceptions thrown by each method",
        path: "/articles/item74",
      },
      {
        title:
          "Item 75: Include failure-capture information in detail messages",
        path: "/articles/item75",
      },
      {
        title: "Item 76: Strive for failure atomicity",
        path: "/articles/item76",
      },
      {
        title: "Item 77: Don’t ignore exceptions",
        path: "/articles/item77",
      },
    ],
  },
  {
    title: "11 Concurrency",
    items: [
      {
        title: "Item 78: Synchronize access to shared mutable data",
        path: "/articles/item78",
      },
      {
        title: "Item 79: Avoid excessive synchronization",
        path: "/articles/item79",
      },
      {
        title: "Item 80: Prefer executors, tasks, and streams to threads",
        path: "/articles/item80",
      },
      {
        title: "Item 81: Prefer concurrency utilities to wait and notify",
        path: "/articles/item81",
      },
      {
        title: "Item 82: Document thread safety",
        path: "/articles/item82",
      },
      {
        title: "Item 83: Use lazy initialization judiciously",
        path: "/articles/item83",
      },
      {
        title: "Item 84: Don’t depend on the thread scheduler",
        path: "/articles/item84",
      },
    ],
  },
  {
    title: "12 Serialization",
    items: [
      {
        title: "Item 85: Prefer alternatives to Java serialization",
        path: "/articles/item85",
      },
      {
        title: "Item 86: Implement Serializable with great caution",
        path: "/articles/item86",
      },
      {
        title: "Item 87: Consider using a custom serialized form",
        path: "/articles/item87",
      },
      {
        title: "Item 88: Write readObject methods defensively",
        path: "/articles/item88",
      },
      {
        title:
          "Item 89: For instance control, prefer enum types to readResolve",
        path: "/articles/item89",
      },
      {
        title:
          "Item 90: Consider serialization proxies instead of serialized instances",
        path: "/articles/item90",
      },
    ],
  },
];
