
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Contest
 * 
 */
export type Contest = $Result.DefaultSelection<Prisma.$ContestPayload>
/**
 * Model ContestParticipant
 * 
 */
export type ContestParticipant = $Result.DefaultSelection<Prisma.$ContestParticipantPayload>
/**
 * Model ContestChallenge
 * 
 */
export type ContestChallenge = $Result.DefaultSelection<Prisma.$ContestChallengePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
  EXPERT: 'EXPERT'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const SubmissionStatus: {
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  PENDING: 'PENDING'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contest`: Exposes CRUD operations for the **Contest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contests
    * const contests = await prisma.contest.findMany()
    * ```
    */
  get contest(): Prisma.ContestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestParticipant`: Exposes CRUD operations for the **ContestParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestParticipants
    * const contestParticipants = await prisma.contestParticipant.findMany()
    * ```
    */
  get contestParticipant(): Prisma.ContestParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestChallenge`: Exposes CRUD operations for the **ContestChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestChallenges
    * const contestChallenges = await prisma.contestChallenge.findMany()
    * ```
    */
  get contestChallenge(): Prisma.ContestChallengeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Challenge: 'Challenge',
    Submission: 'Submission',
    Contest: 'Contest',
    ContestParticipant: 'ContestParticipant',
    ContestChallenge: 'ContestChallenge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "challenge" | "submission" | "contest" | "contestParticipant" | "contestChallenge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Contest: {
        payload: Prisma.$ContestPayload<ExtArgs>
        fields: Prisma.ContestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findFirst: {
            args: Prisma.ContestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findMany: {
            args: Prisma.ContestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          create: {
            args: Prisma.ContestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          createMany: {
            args: Prisma.ContestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          update: {
            args: Prisma.ContestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          deleteMany: {
            args: Prisma.ContestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          aggregate: {
            args: Prisma.ContestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContest>
          }
          groupBy: {
            args: Prisma.ContestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestCountArgs<ExtArgs>
            result: $Utils.Optional<ContestCountAggregateOutputType> | number
          }
        }
      }
      ContestParticipant: {
        payload: Prisma.$ContestParticipantPayload<ExtArgs>
        fields: Prisma.ContestParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          findFirst: {
            args: Prisma.ContestParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          findMany: {
            args: Prisma.ContestParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>[]
          }
          create: {
            args: Prisma.ContestParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          createMany: {
            args: Prisma.ContestParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContestParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          update: {
            args: Prisma.ContestParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ContestParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContestParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestParticipantPayload>
          }
          aggregate: {
            args: Prisma.ContestParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestParticipant>
          }
          groupBy: {
            args: Prisma.ContestParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ContestParticipantCountAggregateOutputType> | number
          }
        }
      }
      ContestChallenge: {
        payload: Prisma.$ContestChallengePayload<ExtArgs>
        fields: Prisma.ContestChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          findFirst: {
            args: Prisma.ContestChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          findMany: {
            args: Prisma.ContestChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>[]
          }
          create: {
            args: Prisma.ContestChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          createMany: {
            args: Prisma.ContestChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContestChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          update: {
            args: Prisma.ContestChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          deleteMany: {
            args: Prisma.ContestChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContestChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestChallengePayload>
          }
          aggregate: {
            args: Prisma.ContestChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestChallenge>
          }
          groupBy: {
            args: Prisma.ContestChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ContestChallengeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    challenge?: ChallengeOmit
    submission?: SubmissionOmit
    contest?: ContestOmit
    contestParticipant?: ContestParticipantOmit
    contestChallenge?: ContestChallengeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    contests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    contests?: boolean | UserCountOutputTypeCountContestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestParticipantWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    submissions: number
    contests: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ChallengeCountOutputTypeCountSubmissionsArgs
    contests?: boolean | ChallengeCountOutputTypeCountContestsArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountContestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestChallengeWhereInput
  }


  /**
   * Count Type ContestCountOutputType
   */

  export type ContestCountOutputType = {
    participants: number
    challenges: number
  }

  export type ContestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ContestCountOutputTypeCountParticipantsArgs
    challenges?: boolean | ContestCountOutputTypeCountChallengesArgs
  }

  // Custom InputTypes
  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCountOutputType
     */
    select?: ContestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestParticipantWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestChallengeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    bio: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    bio: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    avatar: number
    bio: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    bio?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    bio?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    bio?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    avatar: string | null
    bio: string | null
    score: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    bio?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    contests?: boolean | User$contestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    bio?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "avatar" | "bio" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    contests?: boolean | User$contestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      contests: Prisma.$ContestParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.UserRole
      avatar: string | null
      bio: string | null
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contests<T extends User$contestsArgs<ExtArgs> = {}>(args?: Subset<T, User$contestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly score: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.contests
   */
  export type User$contestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    where?: ContestParticipantWhereInput
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    cursor?: ContestParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestParticipantScalarFieldEnum | ContestParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    points: number | null
    flag: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    points: number | null
    flag: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    difficulty: number
    points: number
    flag: number
    hints: number
    files: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points?: true
    flag?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points?: true
    flag?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points?: true
    flag?: true
    hints?: true
    files?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: number
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints: JsonValue | null
    files: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points?: boolean
    flag?: boolean
    hints?: boolean
    files?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissions?: boolean | Challenge$submissionsArgs<ExtArgs>
    contests?: boolean | Challenge$contestsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>



  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points?: boolean
    flag?: boolean
    hints?: boolean
    files?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "difficulty" | "points" | "flag" | "hints" | "files" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Challenge$submissionsArgs<ExtArgs>
    contests?: boolean | Challenge$contestsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      contests: Prisma.$ContestChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      category: string
      difficulty: $Enums.Difficulty
      points: number
      flag: string
      hints: Prisma.JsonValue | null
      files: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Challenge$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contests<T extends Challenge$contestsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$contestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'Int'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly category: FieldRef<"Challenge", 'String'>
    readonly difficulty: FieldRef<"Challenge", 'Difficulty'>
    readonly points: FieldRef<"Challenge", 'Int'>
    readonly flag: FieldRef<"Challenge", 'String'>
    readonly hints: FieldRef<"Challenge", 'Json'>
    readonly files: FieldRef<"Challenge", 'Json'>
    readonly isActive: FieldRef<"Challenge", 'Boolean'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.submissions
   */
  export type Challenge$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Challenge.contests
   */
  export type Challenge$contestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    where?: ContestChallengeWhereInput
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    cursor?: ContestChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestChallengeScalarFieldEnum | ContestChallengeScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    flag: string | null
    status: $Enums.SubmissionStatus | null
    submittedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    flag: string | null
    status: $Enums.SubmissionStatus | null
    submittedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    flag: number
    status: number
    submittedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    flag?: true
    status?: true
    submittedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    flag?: true
    status?: true
    submittedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    flag?: true
    status?: true
    submittedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    userId: number
    challengeId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    flag?: boolean
    status?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>



  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    flag?: boolean
    status?: boolean
    submittedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challengeId" | "flag" | "status" | "submittedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      challengeId: number
      flag: string
      status: $Enums.SubmissionStatus
      submittedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'Int'>
    readonly userId: FieldRef<"Submission", 'Int'>
    readonly challengeId: FieldRef<"Submission", 'Int'>
    readonly flag: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Contest
   */

  export type AggregateContest = {
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  export type ContestAvgAggregateOutputType = {
    id: number | null
  }

  export type ContestSumAggregateOutputType = {
    id: number | null
  }

  export type ContestMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContestAvgAggregateInputType = {
    id?: true
  }

  export type ContestSumAggregateInputType = {
    id?: true
  }

  export type ContestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contest to aggregate.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contests
    **/
    _count?: true | ContestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestMaxAggregateInputType
  }

  export type GetContestAggregateType<T extends ContestAggregateArgs> = {
        [P in keyof T & keyof AggregateContest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContest[P]>
      : GetScalarType<T[P], AggregateContest[P]>
  }




  export type ContestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithAggregationInput | ContestOrderByWithAggregationInput[]
    by: ContestScalarFieldEnum[] | ContestScalarFieldEnum
    having?: ContestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestCountAggregateInputType | true
    _avg?: ContestAvgAggregateInputType
    _sum?: ContestSumAggregateInputType
    _min?: ContestMinAggregateInputType
    _max?: ContestMaxAggregateInputType
  }

  export type ContestGroupByOutputType = {
    id: number
    title: string
    description: string
    startTime: Date
    endTime: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  type GetContestGroupByPayload<T extends ContestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestGroupByOutputType[P]>
            : GetScalarType<T[P], ContestGroupByOutputType[P]>
        }
      >
    >


  export type ContestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | Contest$participantsArgs<ExtArgs>
    challenges?: boolean | Contest$challengesArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>



  export type ContestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["contest"]>
  export type ContestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Contest$participantsArgs<ExtArgs>
    challenges?: boolean | Contest$challengesArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contest"
    objects: {
      participants: Prisma.$ContestParticipantPayload<ExtArgs>[]
      challenges: Prisma.$ContestChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      startTime: Date
      endTime: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contest"]>
    composites: {}
  }

  type ContestGetPayload<S extends boolean | null | undefined | ContestDefaultArgs> = $Result.GetResult<Prisma.$ContestPayload, S>

  type ContestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestCountAggregateInputType | true
    }

  export interface ContestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contest'], meta: { name: 'Contest' } }
    /**
     * Find zero or one Contest that matches the filter.
     * @param {ContestFindUniqueArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestFindUniqueArgs>(args: SelectSubset<T, ContestFindUniqueArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestFindUniqueOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestFindFirstArgs>(args?: SelectSubset<T, ContestFindFirstArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contest.findMany()
     * 
     * // Get first 10 Contests
     * const contests = await prisma.contest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestWithIdOnly = await prisma.contest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestFindManyArgs>(args?: SelectSubset<T, ContestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contest.
     * @param {ContestCreateArgs} args - Arguments to create a Contest.
     * @example
     * // Create one Contest
     * const Contest = await prisma.contest.create({
     *   data: {
     *     // ... data to create a Contest
     *   }
     * })
     * 
     */
    create<T extends ContestCreateArgs>(args: SelectSubset<T, ContestCreateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contests.
     * @param {ContestCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestCreateManyArgs>(args?: SelectSubset<T, ContestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contest.
     * @param {ContestDeleteArgs} args - Arguments to delete one Contest.
     * @example
     * // Delete one Contest
     * const Contest = await prisma.contest.delete({
     *   where: {
     *     // ... filter to delete one Contest
     *   }
     * })
     * 
     */
    delete<T extends ContestDeleteArgs>(args: SelectSubset<T, ContestDeleteArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contest.
     * @param {ContestUpdateArgs} args - Arguments to update one Contest.
     * @example
     * // Update one Contest
     * const contest = await prisma.contest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestUpdateArgs>(args: SelectSubset<T, ContestUpdateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contests.
     * @param {ContestDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestDeleteManyArgs>(args?: SelectSubset<T, ContestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestUpdateManyArgs>(args: SelectSubset<T, ContestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contest.
     * @param {ContestUpsertArgs} args - Arguments to update or create a Contest.
     * @example
     * // Update or create a Contest
     * const contest = await prisma.contest.upsert({
     *   create: {
     *     // ... data to create a Contest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contest we want to update
     *   }
     * })
     */
    upsert<T extends ContestUpsertArgs>(args: SelectSubset<T, ContestUpsertArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contest.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends ContestCountArgs>(
      args?: Subset<T, ContestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestAggregateArgs>(args: Subset<T, ContestAggregateArgs>): Prisma.PrismaPromise<GetContestAggregateType<T>>

    /**
     * Group by Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestGroupByArgs['orderBy'] }
        : { orderBy?: ContestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contest model
   */
  readonly fields: ContestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Contest$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Contest$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges<T extends Contest$challengesArgs<ExtArgs> = {}>(args?: Subset<T, Contest$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contest model
   */
  interface ContestFieldRefs {
    readonly id: FieldRef<"Contest", 'Int'>
    readonly title: FieldRef<"Contest", 'String'>
    readonly description: FieldRef<"Contest", 'String'>
    readonly startTime: FieldRef<"Contest", 'DateTime'>
    readonly endTime: FieldRef<"Contest", 'DateTime'>
    readonly isActive: FieldRef<"Contest", 'Boolean'>
    readonly createdAt: FieldRef<"Contest", 'DateTime'>
    readonly updatedAt: FieldRef<"Contest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contest findUnique
   */
  export type ContestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findUniqueOrThrow
   */
  export type ContestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findFirst
   */
  export type ContestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findFirstOrThrow
   */
  export type ContestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findMany
   */
  export type ContestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contests to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest create
   */
  export type ContestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to create a Contest.
     */
    data: XOR<ContestCreateInput, ContestUncheckedCreateInput>
  }

  /**
   * Contest createMany
   */
  export type ContestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contest update
   */
  export type ContestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to update a Contest.
     */
    data: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
    /**
     * Choose, which Contest to update.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest updateMany
   */
  export type ContestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
  }

  /**
   * Contest upsert
   */
  export type ContestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The filter to search for the Contest to update in case it exists.
     */
    where: ContestWhereUniqueInput
    /**
     * In case the Contest found by the `where` argument doesn't exist, create a new Contest with this data.
     */
    create: XOR<ContestCreateInput, ContestUncheckedCreateInput>
    /**
     * In case the Contest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
  }

  /**
   * Contest delete
   */
  export type ContestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter which Contest to delete.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest deleteMany
   */
  export type ContestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contests to delete
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to delete.
     */
    limit?: number
  }

  /**
   * Contest.participants
   */
  export type Contest$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    where?: ContestParticipantWhereInput
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    cursor?: ContestParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestParticipantScalarFieldEnum | ContestParticipantScalarFieldEnum[]
  }

  /**
   * Contest.challenges
   */
  export type Contest$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    where?: ContestChallengeWhereInput
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    cursor?: ContestChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestChallengeScalarFieldEnum | ContestChallengeScalarFieldEnum[]
  }

  /**
   * Contest without action
   */
  export type ContestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
  }


  /**
   * Model ContestParticipant
   */

  export type AggregateContestParticipant = {
    _count: ContestParticipantCountAggregateOutputType | null
    _avg: ContestParticipantAvgAggregateOutputType | null
    _sum: ContestParticipantSumAggregateOutputType | null
    _min: ContestParticipantMinAggregateOutputType | null
    _max: ContestParticipantMaxAggregateOutputType | null
  }

  export type ContestParticipantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    contestId: number | null
    score: number | null
  }

  export type ContestParticipantSumAggregateOutputType = {
    id: number | null
    userId: number | null
    contestId: number | null
    score: number | null
  }

  export type ContestParticipantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    contestId: number | null
    score: number | null
    joinedAt: Date | null
  }

  export type ContestParticipantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    contestId: number | null
    score: number | null
    joinedAt: Date | null
  }

  export type ContestParticipantCountAggregateOutputType = {
    id: number
    userId: number
    contestId: number
    score: number
    joinedAt: number
    _all: number
  }


  export type ContestParticipantAvgAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    score?: true
  }

  export type ContestParticipantSumAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    score?: true
  }

  export type ContestParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    score?: true
    joinedAt?: true
  }

  export type ContestParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    score?: true
    joinedAt?: true
  }

  export type ContestParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    score?: true
    joinedAt?: true
    _all?: true
  }

  export type ContestParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestParticipant to aggregate.
     */
    where?: ContestParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestParticipants to fetch.
     */
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestParticipants
    **/
    _count?: true | ContestParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestParticipantMaxAggregateInputType
  }

  export type GetContestParticipantAggregateType<T extends ContestParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateContestParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestParticipant[P]>
      : GetScalarType<T[P], AggregateContestParticipant[P]>
  }




  export type ContestParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestParticipantWhereInput
    orderBy?: ContestParticipantOrderByWithAggregationInput | ContestParticipantOrderByWithAggregationInput[]
    by: ContestParticipantScalarFieldEnum[] | ContestParticipantScalarFieldEnum
    having?: ContestParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestParticipantCountAggregateInputType | true
    _avg?: ContestParticipantAvgAggregateInputType
    _sum?: ContestParticipantSumAggregateInputType
    _min?: ContestParticipantMinAggregateInputType
    _max?: ContestParticipantMaxAggregateInputType
  }

  export type ContestParticipantGroupByOutputType = {
    id: number
    userId: number
    contestId: number
    score: number
    joinedAt: Date
    _count: ContestParticipantCountAggregateOutputType | null
    _avg: ContestParticipantAvgAggregateOutputType | null
    _sum: ContestParticipantSumAggregateOutputType | null
    _min: ContestParticipantMinAggregateOutputType | null
    _max: ContestParticipantMaxAggregateOutputType | null
  }

  type GetContestParticipantGroupByPayload<T extends ContestParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ContestParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ContestParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    score?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestParticipant"]>



  export type ContestParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    contestId?: boolean
    score?: boolean
    joinedAt?: boolean
  }

  export type ContestParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contestId" | "score" | "joinedAt", ExtArgs["result"]["contestParticipant"]>
  export type ContestParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }

  export type $ContestParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contest: Prisma.$ContestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      contestId: number
      score: number
      joinedAt: Date
    }, ExtArgs["result"]["contestParticipant"]>
    composites: {}
  }

  type ContestParticipantGetPayload<S extends boolean | null | undefined | ContestParticipantDefaultArgs> = $Result.GetResult<Prisma.$ContestParticipantPayload, S>

  type ContestParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestParticipantCountAggregateInputType | true
    }

  export interface ContestParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestParticipant'], meta: { name: 'ContestParticipant' } }
    /**
     * Find zero or one ContestParticipant that matches the filter.
     * @param {ContestParticipantFindUniqueArgs} args - Arguments to find a ContestParticipant
     * @example
     * // Get one ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestParticipantFindUniqueArgs>(args: SelectSubset<T, ContestParticipantFindUniqueArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestParticipantFindUniqueOrThrowArgs} args - Arguments to find a ContestParticipant
     * @example
     * // Get one ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantFindFirstArgs} args - Arguments to find a ContestParticipant
     * @example
     * // Get one ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestParticipantFindFirstArgs>(args?: SelectSubset<T, ContestParticipantFindFirstArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantFindFirstOrThrowArgs} args - Arguments to find a ContestParticipant
     * @example
     * // Get one ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestParticipants
     * const contestParticipants = await prisma.contestParticipant.findMany()
     * 
     * // Get first 10 ContestParticipants
     * const contestParticipants = await prisma.contestParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestParticipantWithIdOnly = await prisma.contestParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestParticipantFindManyArgs>(args?: SelectSubset<T, ContestParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestParticipant.
     * @param {ContestParticipantCreateArgs} args - Arguments to create a ContestParticipant.
     * @example
     * // Create one ContestParticipant
     * const ContestParticipant = await prisma.contestParticipant.create({
     *   data: {
     *     // ... data to create a ContestParticipant
     *   }
     * })
     * 
     */
    create<T extends ContestParticipantCreateArgs>(args: SelectSubset<T, ContestParticipantCreateArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestParticipants.
     * @param {ContestParticipantCreateManyArgs} args - Arguments to create many ContestParticipants.
     * @example
     * // Create many ContestParticipants
     * const contestParticipant = await prisma.contestParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestParticipantCreateManyArgs>(args?: SelectSubset<T, ContestParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContestParticipant.
     * @param {ContestParticipantDeleteArgs} args - Arguments to delete one ContestParticipant.
     * @example
     * // Delete one ContestParticipant
     * const ContestParticipant = await prisma.contestParticipant.delete({
     *   where: {
     *     // ... filter to delete one ContestParticipant
     *   }
     * })
     * 
     */
    delete<T extends ContestParticipantDeleteArgs>(args: SelectSubset<T, ContestParticipantDeleteArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestParticipant.
     * @param {ContestParticipantUpdateArgs} args - Arguments to update one ContestParticipant.
     * @example
     * // Update one ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestParticipantUpdateArgs>(args: SelectSubset<T, ContestParticipantUpdateArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestParticipants.
     * @param {ContestParticipantDeleteManyArgs} args - Arguments to filter ContestParticipants to delete.
     * @example
     * // Delete a few ContestParticipants
     * const { count } = await prisma.contestParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestParticipantDeleteManyArgs>(args?: SelectSubset<T, ContestParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestParticipants
     * const contestParticipant = await prisma.contestParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestParticipantUpdateManyArgs>(args: SelectSubset<T, ContestParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContestParticipant.
     * @param {ContestParticipantUpsertArgs} args - Arguments to update or create a ContestParticipant.
     * @example
     * // Update or create a ContestParticipant
     * const contestParticipant = await prisma.contestParticipant.upsert({
     *   create: {
     *     // ... data to create a ContestParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ContestParticipantUpsertArgs>(args: SelectSubset<T, ContestParticipantUpsertArgs<ExtArgs>>): Prisma__ContestParticipantClient<$Result.GetResult<Prisma.$ContestParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantCountArgs} args - Arguments to filter ContestParticipants to count.
     * @example
     * // Count the number of ContestParticipants
     * const count = await prisma.contestParticipant.count({
     *   where: {
     *     // ... the filter for the ContestParticipants we want to count
     *   }
     * })
    **/
    count<T extends ContestParticipantCountArgs>(
      args?: Subset<T, ContestParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestParticipantAggregateArgs>(args: Subset<T, ContestParticipantAggregateArgs>): Prisma.PrismaPromise<GetContestParticipantAggregateType<T>>

    /**
     * Group by ContestParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ContestParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestParticipant model
   */
  readonly fields: ContestParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestParticipant model
   */
  interface ContestParticipantFieldRefs {
    readonly id: FieldRef<"ContestParticipant", 'Int'>
    readonly userId: FieldRef<"ContestParticipant", 'Int'>
    readonly contestId: FieldRef<"ContestParticipant", 'Int'>
    readonly score: FieldRef<"ContestParticipant", 'Int'>
    readonly joinedAt: FieldRef<"ContestParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContestParticipant findUnique
   */
  export type ContestParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ContestParticipant to fetch.
     */
    where: ContestParticipantWhereUniqueInput
  }

  /**
   * ContestParticipant findUniqueOrThrow
   */
  export type ContestParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ContestParticipant to fetch.
     */
    where: ContestParticipantWhereUniqueInput
  }

  /**
   * ContestParticipant findFirst
   */
  export type ContestParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ContestParticipant to fetch.
     */
    where?: ContestParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestParticipants to fetch.
     */
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestParticipants.
     */
    cursor?: ContestParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestParticipants.
     */
    distinct?: ContestParticipantScalarFieldEnum | ContestParticipantScalarFieldEnum[]
  }

  /**
   * ContestParticipant findFirstOrThrow
   */
  export type ContestParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ContestParticipant to fetch.
     */
    where?: ContestParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestParticipants to fetch.
     */
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestParticipants.
     */
    cursor?: ContestParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestParticipants.
     */
    distinct?: ContestParticipantScalarFieldEnum | ContestParticipantScalarFieldEnum[]
  }

  /**
   * ContestParticipant findMany
   */
  export type ContestParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ContestParticipants to fetch.
     */
    where?: ContestParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestParticipants to fetch.
     */
    orderBy?: ContestParticipantOrderByWithRelationInput | ContestParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestParticipants.
     */
    cursor?: ContestParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestParticipants.
     */
    skip?: number
    distinct?: ContestParticipantScalarFieldEnum | ContestParticipantScalarFieldEnum[]
  }

  /**
   * ContestParticipant create
   */
  export type ContestParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestParticipant.
     */
    data: XOR<ContestParticipantCreateInput, ContestParticipantUncheckedCreateInput>
  }

  /**
   * ContestParticipant createMany
   */
  export type ContestParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestParticipants.
     */
    data: ContestParticipantCreateManyInput | ContestParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestParticipant update
   */
  export type ContestParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestParticipant.
     */
    data: XOR<ContestParticipantUpdateInput, ContestParticipantUncheckedUpdateInput>
    /**
     * Choose, which ContestParticipant to update.
     */
    where: ContestParticipantWhereUniqueInput
  }

  /**
   * ContestParticipant updateMany
   */
  export type ContestParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestParticipants.
     */
    data: XOR<ContestParticipantUpdateManyMutationInput, ContestParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ContestParticipants to update
     */
    where?: ContestParticipantWhereInput
    /**
     * Limit how many ContestParticipants to update.
     */
    limit?: number
  }

  /**
   * ContestParticipant upsert
   */
  export type ContestParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestParticipant to update in case it exists.
     */
    where: ContestParticipantWhereUniqueInput
    /**
     * In case the ContestParticipant found by the `where` argument doesn't exist, create a new ContestParticipant with this data.
     */
    create: XOR<ContestParticipantCreateInput, ContestParticipantUncheckedCreateInput>
    /**
     * In case the ContestParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestParticipantUpdateInput, ContestParticipantUncheckedUpdateInput>
  }

  /**
   * ContestParticipant delete
   */
  export type ContestParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
    /**
     * Filter which ContestParticipant to delete.
     */
    where: ContestParticipantWhereUniqueInput
  }

  /**
   * ContestParticipant deleteMany
   */
  export type ContestParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestParticipants to delete
     */
    where?: ContestParticipantWhereInput
    /**
     * Limit how many ContestParticipants to delete.
     */
    limit?: number
  }

  /**
   * ContestParticipant without action
   */
  export type ContestParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestParticipant
     */
    select?: ContestParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestParticipant
     */
    omit?: ContestParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ContestChallenge
   */

  export type AggregateContestChallenge = {
    _count: ContestChallengeCountAggregateOutputType | null
    _avg: ContestChallengeAvgAggregateOutputType | null
    _sum: ContestChallengeSumAggregateOutputType | null
    _min: ContestChallengeMinAggregateOutputType | null
    _max: ContestChallengeMaxAggregateOutputType | null
  }

  export type ContestChallengeAvgAggregateOutputType = {
    id: number | null
    contestId: number | null
    challengeId: number | null
  }

  export type ContestChallengeSumAggregateOutputType = {
    id: number | null
    contestId: number | null
    challengeId: number | null
  }

  export type ContestChallengeMinAggregateOutputType = {
    id: number | null
    contestId: number | null
    challengeId: number | null
  }

  export type ContestChallengeMaxAggregateOutputType = {
    id: number | null
    contestId: number | null
    challengeId: number | null
  }

  export type ContestChallengeCountAggregateOutputType = {
    id: number
    contestId: number
    challengeId: number
    _all: number
  }


  export type ContestChallengeAvgAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
  }

  export type ContestChallengeSumAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
  }

  export type ContestChallengeMinAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
  }

  export type ContestChallengeMaxAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
  }

  export type ContestChallengeCountAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
    _all?: true
  }

  export type ContestChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestChallenge to aggregate.
     */
    where?: ContestChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestChallenges to fetch.
     */
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestChallenges
    **/
    _count?: true | ContestChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestChallengeMaxAggregateInputType
  }

  export type GetContestChallengeAggregateType<T extends ContestChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateContestChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestChallenge[P]>
      : GetScalarType<T[P], AggregateContestChallenge[P]>
  }




  export type ContestChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestChallengeWhereInput
    orderBy?: ContestChallengeOrderByWithAggregationInput | ContestChallengeOrderByWithAggregationInput[]
    by: ContestChallengeScalarFieldEnum[] | ContestChallengeScalarFieldEnum
    having?: ContestChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestChallengeCountAggregateInputType | true
    _avg?: ContestChallengeAvgAggregateInputType
    _sum?: ContestChallengeSumAggregateInputType
    _min?: ContestChallengeMinAggregateInputType
    _max?: ContestChallengeMaxAggregateInputType
  }

  export type ContestChallengeGroupByOutputType = {
    id: number
    contestId: number
    challengeId: number
    _count: ContestChallengeCountAggregateOutputType | null
    _avg: ContestChallengeAvgAggregateOutputType | null
    _sum: ContestChallengeSumAggregateOutputType | null
    _min: ContestChallengeMinAggregateOutputType | null
    _max: ContestChallengeMaxAggregateOutputType | null
  }

  type GetContestChallengeGroupByPayload<T extends ContestChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ContestChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ContestChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestChallenge"]>



  export type ContestChallengeSelectScalar = {
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
  }

  export type ContestChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestId" | "challengeId", ExtArgs["result"]["contestChallenge"]>
  export type ContestChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ContestChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestChallenge"
    objects: {
      contest: Prisma.$ContestPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contestId: number
      challengeId: number
    }, ExtArgs["result"]["contestChallenge"]>
    composites: {}
  }

  type ContestChallengeGetPayload<S extends boolean | null | undefined | ContestChallengeDefaultArgs> = $Result.GetResult<Prisma.$ContestChallengePayload, S>

  type ContestChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestChallengeCountAggregateInputType | true
    }

  export interface ContestChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestChallenge'], meta: { name: 'ContestChallenge' } }
    /**
     * Find zero or one ContestChallenge that matches the filter.
     * @param {ContestChallengeFindUniqueArgs} args - Arguments to find a ContestChallenge
     * @example
     * // Get one ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestChallengeFindUniqueArgs>(args: SelectSubset<T, ContestChallengeFindUniqueArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestChallengeFindUniqueOrThrowArgs} args - Arguments to find a ContestChallenge
     * @example
     * // Get one ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeFindFirstArgs} args - Arguments to find a ContestChallenge
     * @example
     * // Get one ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestChallengeFindFirstArgs>(args?: SelectSubset<T, ContestChallengeFindFirstArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeFindFirstOrThrowArgs} args - Arguments to find a ContestChallenge
     * @example
     * // Get one ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestChallenges
     * const contestChallenges = await prisma.contestChallenge.findMany()
     * 
     * // Get first 10 ContestChallenges
     * const contestChallenges = await prisma.contestChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestChallengeWithIdOnly = await prisma.contestChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestChallengeFindManyArgs>(args?: SelectSubset<T, ContestChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestChallenge.
     * @param {ContestChallengeCreateArgs} args - Arguments to create a ContestChallenge.
     * @example
     * // Create one ContestChallenge
     * const ContestChallenge = await prisma.contestChallenge.create({
     *   data: {
     *     // ... data to create a ContestChallenge
     *   }
     * })
     * 
     */
    create<T extends ContestChallengeCreateArgs>(args: SelectSubset<T, ContestChallengeCreateArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestChallenges.
     * @param {ContestChallengeCreateManyArgs} args - Arguments to create many ContestChallenges.
     * @example
     * // Create many ContestChallenges
     * const contestChallenge = await prisma.contestChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestChallengeCreateManyArgs>(args?: SelectSubset<T, ContestChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContestChallenge.
     * @param {ContestChallengeDeleteArgs} args - Arguments to delete one ContestChallenge.
     * @example
     * // Delete one ContestChallenge
     * const ContestChallenge = await prisma.contestChallenge.delete({
     *   where: {
     *     // ... filter to delete one ContestChallenge
     *   }
     * })
     * 
     */
    delete<T extends ContestChallengeDeleteArgs>(args: SelectSubset<T, ContestChallengeDeleteArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestChallenge.
     * @param {ContestChallengeUpdateArgs} args - Arguments to update one ContestChallenge.
     * @example
     * // Update one ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestChallengeUpdateArgs>(args: SelectSubset<T, ContestChallengeUpdateArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestChallenges.
     * @param {ContestChallengeDeleteManyArgs} args - Arguments to filter ContestChallenges to delete.
     * @example
     * // Delete a few ContestChallenges
     * const { count } = await prisma.contestChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestChallengeDeleteManyArgs>(args?: SelectSubset<T, ContestChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestChallenges
     * const contestChallenge = await prisma.contestChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestChallengeUpdateManyArgs>(args: SelectSubset<T, ContestChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContestChallenge.
     * @param {ContestChallengeUpsertArgs} args - Arguments to update or create a ContestChallenge.
     * @example
     * // Update or create a ContestChallenge
     * const contestChallenge = await prisma.contestChallenge.upsert({
     *   create: {
     *     // ... data to create a ContestChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestChallenge we want to update
     *   }
     * })
     */
    upsert<T extends ContestChallengeUpsertArgs>(args: SelectSubset<T, ContestChallengeUpsertArgs<ExtArgs>>): Prisma__ContestChallengeClient<$Result.GetResult<Prisma.$ContestChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeCountArgs} args - Arguments to filter ContestChallenges to count.
     * @example
     * // Count the number of ContestChallenges
     * const count = await prisma.contestChallenge.count({
     *   where: {
     *     // ... the filter for the ContestChallenges we want to count
     *   }
     * })
    **/
    count<T extends ContestChallengeCountArgs>(
      args?: Subset<T, ContestChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestChallengeAggregateArgs>(args: Subset<T, ContestChallengeAggregateArgs>): Prisma.PrismaPromise<GetContestChallengeAggregateType<T>>

    /**
     * Group by ContestChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ContestChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestChallenge model
   */
  readonly fields: ContestChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestChallenge model
   */
  interface ContestChallengeFieldRefs {
    readonly id: FieldRef<"ContestChallenge", 'Int'>
    readonly contestId: FieldRef<"ContestChallenge", 'Int'>
    readonly challengeId: FieldRef<"ContestChallenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContestChallenge findUnique
   */
  export type ContestChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ContestChallenge to fetch.
     */
    where: ContestChallengeWhereUniqueInput
  }

  /**
   * ContestChallenge findUniqueOrThrow
   */
  export type ContestChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ContestChallenge to fetch.
     */
    where: ContestChallengeWhereUniqueInput
  }

  /**
   * ContestChallenge findFirst
   */
  export type ContestChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ContestChallenge to fetch.
     */
    where?: ContestChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestChallenges to fetch.
     */
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestChallenges.
     */
    cursor?: ContestChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestChallenges.
     */
    distinct?: ContestChallengeScalarFieldEnum | ContestChallengeScalarFieldEnum[]
  }

  /**
   * ContestChallenge findFirstOrThrow
   */
  export type ContestChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ContestChallenge to fetch.
     */
    where?: ContestChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestChallenges to fetch.
     */
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestChallenges.
     */
    cursor?: ContestChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestChallenges.
     */
    distinct?: ContestChallengeScalarFieldEnum | ContestChallengeScalarFieldEnum[]
  }

  /**
   * ContestChallenge findMany
   */
  export type ContestChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ContestChallenges to fetch.
     */
    where?: ContestChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestChallenges to fetch.
     */
    orderBy?: ContestChallengeOrderByWithRelationInput | ContestChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestChallenges.
     */
    cursor?: ContestChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestChallenges.
     */
    skip?: number
    distinct?: ContestChallengeScalarFieldEnum | ContestChallengeScalarFieldEnum[]
  }

  /**
   * ContestChallenge create
   */
  export type ContestChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestChallenge.
     */
    data: XOR<ContestChallengeCreateInput, ContestChallengeUncheckedCreateInput>
  }

  /**
   * ContestChallenge createMany
   */
  export type ContestChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestChallenges.
     */
    data: ContestChallengeCreateManyInput | ContestChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestChallenge update
   */
  export type ContestChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestChallenge.
     */
    data: XOR<ContestChallengeUpdateInput, ContestChallengeUncheckedUpdateInput>
    /**
     * Choose, which ContestChallenge to update.
     */
    where: ContestChallengeWhereUniqueInput
  }

  /**
   * ContestChallenge updateMany
   */
  export type ContestChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestChallenges.
     */
    data: XOR<ContestChallengeUpdateManyMutationInput, ContestChallengeUncheckedUpdateManyInput>
    /**
     * Filter which ContestChallenges to update
     */
    where?: ContestChallengeWhereInput
    /**
     * Limit how many ContestChallenges to update.
     */
    limit?: number
  }

  /**
   * ContestChallenge upsert
   */
  export type ContestChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestChallenge to update in case it exists.
     */
    where: ContestChallengeWhereUniqueInput
    /**
     * In case the ContestChallenge found by the `where` argument doesn't exist, create a new ContestChallenge with this data.
     */
    create: XOR<ContestChallengeCreateInput, ContestChallengeUncheckedCreateInput>
    /**
     * In case the ContestChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestChallengeUpdateInput, ContestChallengeUncheckedUpdateInput>
  }

  /**
   * ContestChallenge delete
   */
  export type ContestChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
    /**
     * Filter which ContestChallenge to delete.
     */
    where: ContestChallengeWhereUniqueInput
  }

  /**
   * ContestChallenge deleteMany
   */
  export type ContestChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestChallenges to delete
     */
    where?: ContestChallengeWhereInput
    /**
     * Limit how many ContestChallenges to delete.
     */
    limit?: number
  }

  /**
   * ContestChallenge without action
   */
  export type ContestChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestChallenge
     */
    select?: ContestChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestChallenge
     */
    omit?: ContestChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestChallengeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    bio: 'bio',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    difficulty: 'difficulty',
    points: 'points',
    flag: 'flag',
    hints: 'hints',
    files: 'files',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    flag: 'flag',
    status: 'status',
    submittedAt: 'submittedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const ContestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum]


  export const ContestParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contestId: 'contestId',
    score: 'score',
    joinedAt: 'joinedAt'
  };

  export type ContestParticipantScalarFieldEnum = (typeof ContestParticipantScalarFieldEnum)[keyof typeof ContestParticipantScalarFieldEnum]


  export const ContestChallengeScalarFieldEnum: {
    id: 'id',
    contestId: 'contestId',
    challengeId: 'challengeId'
  };

  export type ContestChallengeScalarFieldEnum = (typeof ContestChallengeScalarFieldEnum)[keyof typeof ContestChallengeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    bio: 'bio'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ChallengeOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    category: 'category',
    flag: 'flag'
  };

  export type ChallengeOrderByRelevanceFieldEnum = (typeof ChallengeOrderByRelevanceFieldEnum)[keyof typeof ChallengeOrderByRelevanceFieldEnum]


  export const SubmissionOrderByRelevanceFieldEnum: {
    flag: 'flag'
  };

  export type SubmissionOrderByRelevanceFieldEnum = (typeof SubmissionOrderByRelevanceFieldEnum)[keyof typeof SubmissionOrderByRelevanceFieldEnum]


  export const ContestOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ContestOrderByRelevanceFieldEnum = (typeof ContestOrderByRelevanceFieldEnum)[keyof typeof ContestOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    score?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    submissions?: SubmissionListRelationFilter
    contests?: ContestParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    contests?: ContestParticipantOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    score?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    submissions?: SubmissionListRelationFilter
    contests?: ContestParticipantListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    score?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: IntFilter<"Challenge"> | number
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    category?: StringFilter<"Challenge"> | string
    difficulty?: EnumDifficultyFilter<"Challenge"> | $Enums.Difficulty
    points?: IntFilter<"Challenge"> | number
    flag?: StringFilter<"Challenge"> | string
    hints?: JsonNullableFilter<"Challenge">
    files?: JsonNullableFilter<"Challenge">
    isActive?: BoolFilter<"Challenge"> | boolean
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    submissions?: SubmissionListRelationFilter
    contests?: ContestChallengeListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    hints?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    contests?: ContestChallengeOrderByRelationAggregateInput
    _relevance?: ChallengeOrderByRelevanceInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    category?: StringFilter<"Challenge"> | string
    difficulty?: EnumDifficultyFilter<"Challenge"> | $Enums.Difficulty
    points?: IntFilter<"Challenge"> | number
    flag?: StringFilter<"Challenge"> | string
    hints?: JsonNullableFilter<"Challenge">
    files?: JsonNullableFilter<"Challenge">
    isActive?: BoolFilter<"Challenge"> | boolean
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    submissions?: SubmissionListRelationFilter
    contests?: ContestChallengeListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    hints?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Challenge"> | number
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    category?: StringWithAggregatesFilter<"Challenge"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Challenge"> | $Enums.Difficulty
    points?: IntWithAggregatesFilter<"Challenge"> | number
    flag?: StringWithAggregatesFilter<"Challenge"> | string
    hints?: JsonNullableWithAggregatesFilter<"Challenge">
    files?: JsonNullableWithAggregatesFilter<"Challenge">
    isActive?: BoolWithAggregatesFilter<"Challenge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: IntFilter<"Submission"> | number
    userId?: IntFilter<"Submission"> | number
    challengeId?: IntFilter<"Submission"> | number
    flag?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    _relevance?: SubmissionOrderByRelevanceInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: IntFilter<"Submission"> | number
    challengeId?: IntFilter<"Submission"> | number
    flag?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Submission"> | number
    userId?: IntWithAggregatesFilter<"Submission"> | number
    challengeId?: IntWithAggregatesFilter<"Submission"> | number
    flag?: StringWithAggregatesFilter<"Submission"> | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type ContestWhereInput = {
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    id?: IntFilter<"Contest"> | number
    title?: StringFilter<"Contest"> | string
    description?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    isActive?: BoolFilter<"Contest"> | boolean
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    updatedAt?: DateTimeFilter<"Contest"> | Date | string
    participants?: ContestParticipantListRelationFilter
    challenges?: ContestChallengeListRelationFilter
  }

  export type ContestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: ContestParticipantOrderByRelationAggregateInput
    challenges?: ContestChallengeOrderByRelationAggregateInput
    _relevance?: ContestOrderByRelevanceInput
  }

  export type ContestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    title?: StringFilter<"Contest"> | string
    description?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    isActive?: BoolFilter<"Contest"> | boolean
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    updatedAt?: DateTimeFilter<"Contest"> | Date | string
    participants?: ContestParticipantListRelationFilter
    challenges?: ContestChallengeListRelationFilter
  }, "id">

  export type ContestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContestCountOrderByAggregateInput
    _avg?: ContestAvgOrderByAggregateInput
    _max?: ContestMaxOrderByAggregateInput
    _min?: ContestMinOrderByAggregateInput
    _sum?: ContestSumOrderByAggregateInput
  }

  export type ContestScalarWhereWithAggregatesInput = {
    AND?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    OR?: ContestScalarWhereWithAggregatesInput[]
    NOT?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contest"> | number
    title?: StringWithAggregatesFilter<"Contest"> | string
    description?: StringWithAggregatesFilter<"Contest"> | string
    startTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Contest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
  }

  export type ContestParticipantWhereInput = {
    AND?: ContestParticipantWhereInput | ContestParticipantWhereInput[]
    OR?: ContestParticipantWhereInput[]
    NOT?: ContestParticipantWhereInput | ContestParticipantWhereInput[]
    id?: IntFilter<"ContestParticipant"> | number
    userId?: IntFilter<"ContestParticipant"> | number
    contestId?: IntFilter<"ContestParticipant"> | number
    score?: IntFilter<"ContestParticipant"> | number
    joinedAt?: DateTimeFilter<"ContestParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }

  export type ContestParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type ContestParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_contestId?: ContestParticipantUserIdContestIdCompoundUniqueInput
    AND?: ContestParticipantWhereInput | ContestParticipantWhereInput[]
    OR?: ContestParticipantWhereInput[]
    NOT?: ContestParticipantWhereInput | ContestParticipantWhereInput[]
    userId?: IntFilter<"ContestParticipant"> | number
    contestId?: IntFilter<"ContestParticipant"> | number
    score?: IntFilter<"ContestParticipant"> | number
    joinedAt?: DateTimeFilter<"ContestParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }, "id" | "userId_contestId">

  export type ContestParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
    _count?: ContestParticipantCountOrderByAggregateInput
    _avg?: ContestParticipantAvgOrderByAggregateInput
    _max?: ContestParticipantMaxOrderByAggregateInput
    _min?: ContestParticipantMinOrderByAggregateInput
    _sum?: ContestParticipantSumOrderByAggregateInput
  }

  export type ContestParticipantScalarWhereWithAggregatesInput = {
    AND?: ContestParticipantScalarWhereWithAggregatesInput | ContestParticipantScalarWhereWithAggregatesInput[]
    OR?: ContestParticipantScalarWhereWithAggregatesInput[]
    NOT?: ContestParticipantScalarWhereWithAggregatesInput | ContestParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContestParticipant"> | number
    userId?: IntWithAggregatesFilter<"ContestParticipant"> | number
    contestId?: IntWithAggregatesFilter<"ContestParticipant"> | number
    score?: IntWithAggregatesFilter<"ContestParticipant"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"ContestParticipant"> | Date | string
  }

  export type ContestChallengeWhereInput = {
    AND?: ContestChallengeWhereInput | ContestChallengeWhereInput[]
    OR?: ContestChallengeWhereInput[]
    NOT?: ContestChallengeWhereInput | ContestChallengeWhereInput[]
    id?: IntFilter<"ContestChallenge"> | number
    contestId?: IntFilter<"ContestChallenge"> | number
    challengeId?: IntFilter<"ContestChallenge"> | number
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type ContestChallengeOrderByWithRelationInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    contest?: ContestOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type ContestChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contestId_challengeId?: ContestChallengeContestIdChallengeIdCompoundUniqueInput
    AND?: ContestChallengeWhereInput | ContestChallengeWhereInput[]
    OR?: ContestChallengeWhereInput[]
    NOT?: ContestChallengeWhereInput | ContestChallengeWhereInput[]
    contestId?: IntFilter<"ContestChallenge"> | number
    challengeId?: IntFilter<"ContestChallenge"> | number
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id" | "contestId_challengeId">

  export type ContestChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    _count?: ContestChallengeCountOrderByAggregateInput
    _avg?: ContestChallengeAvgOrderByAggregateInput
    _max?: ContestChallengeMaxOrderByAggregateInput
    _min?: ContestChallengeMinOrderByAggregateInput
    _sum?: ContestChallengeSumOrderByAggregateInput
  }

  export type ContestChallengeScalarWhereWithAggregatesInput = {
    AND?: ContestChallengeScalarWhereWithAggregatesInput | ContestChallengeScalarWhereWithAggregatesInput[]
    OR?: ContestChallengeScalarWhereWithAggregatesInput[]
    NOT?: ContestChallengeScalarWhereWithAggregatesInput | ContestChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContestChallenge"> | number
    contestId?: IntWithAggregatesFilter<"ContestChallenge"> | number
    challengeId?: IntWithAggregatesFilter<"ContestChallenge"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    contests?: ContestParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    contests?: ContestParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    contests?: ContestParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    contests?: ContestParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    contests?: ContestChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    contests?: ContestChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    contests?: ContestChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    contests?: ContestChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: number
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: number
    userId: number
    challengeId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: number
    userId: number
    challengeId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestCreateInput = {
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ContestParticipantCreateNestedManyWithoutContestInput
    challenges?: ContestChallengeCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ContestParticipantUncheckedCreateNestedManyWithoutContestInput
    challenges?: ContestChallengeUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ContestParticipantUpdateManyWithoutContestNestedInput
    challenges?: ContestChallengeUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ContestParticipantUncheckedUpdateManyWithoutContestNestedInput
    challenges?: ContestChallengeUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyInput = {
    id?: number
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantCreateInput = {
    score?: number
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutContestsInput
    contest: ContestCreateNestedOneWithoutParticipantsInput
  }

  export type ContestParticipantUncheckedCreateInput = {
    id?: number
    userId: number
    contestId: number
    score?: number
    joinedAt?: Date | string
  }

  export type ContestParticipantUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestsNestedInput
    contest?: ContestUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ContestParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantCreateManyInput = {
    id?: number
    userId: number
    contestId: number
    score?: number
    joinedAt?: Date | string
  }

  export type ContestParticipantUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestChallengeCreateInput = {
    contest: ContestCreateNestedOneWithoutChallengesInput
    challenge: ChallengeCreateNestedOneWithoutContestsInput
  }

  export type ContestChallengeUncheckedCreateInput = {
    id?: number
    contestId: number
    challengeId: number
  }

  export type ContestChallengeUpdateInput = {
    contest?: ContestUpdateOneRequiredWithoutChallengesNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutContestsNestedInput
  }

  export type ContestChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContestChallengeCreateManyInput = {
    id?: number
    contestId: number
    challengeId: number
  }

  export type ContestChallengeUpdateManyMutationInput = {

  }

  export type ContestChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ContestParticipantListRelationFilter = {
    every?: ContestParticipantWhereInput
    some?: ContestParticipantWhereInput
    none?: ContestParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContestChallengeListRelationFilter = {
    every?: ContestChallengeWhereInput
    some?: ContestChallengeWhereInput
    none?: ContestChallengeWhereInput
  }

  export type ContestChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelevanceInput = {
    fields: ChallengeOrderByRelevanceFieldEnum | ChallengeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    hints?: SortOrder
    files?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[]
    notIn?: $Enums.SubmissionStatus[]
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type SubmissionOrderByRelevanceInput = {
    fields: SubmissionOrderByRelevanceFieldEnum | SubmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[]
    notIn?: $Enums.SubmissionStatus[]
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type ContestOrderByRelevanceInput = {
    fields: ContestOrderByRelevanceFieldEnum | ContestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContestScalarRelationFilter = {
    is?: ContestWhereInput
    isNot?: ContestWhereInput
  }

  export type ContestParticipantUserIdContestIdCompoundUniqueInput = {
    userId: number
    contestId: number
  }

  export type ContestParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
  }

  export type ContestParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type ContestParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    score?: SortOrder
  }

  export type ContestChallengeContestIdChallengeIdCompoundUniqueInput = {
    contestId: number
    challengeId: number
  }

  export type ContestChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
  }

  export type ContestChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
  }

  export type ContestChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
  }

  export type ContestChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
  }

  export type ContestChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ContestParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput> | ContestParticipantCreateWithoutUserInput[] | ContestParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutUserInput | ContestParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ContestParticipantCreateManyUserInputEnvelope
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ContestParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput> | ContestParticipantCreateWithoutUserInput[] | ContestParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutUserInput | ContestParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ContestParticipantCreateManyUserInputEnvelope
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput> | ContestParticipantCreateWithoutUserInput[] | ContestParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutUserInput | ContestParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ContestParticipantUpsertWithWhereUniqueWithoutUserInput | ContestParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestParticipantCreateManyUserInputEnvelope
    set?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    disconnect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    delete?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    update?: ContestParticipantUpdateWithWhereUniqueWithoutUserInput | ContestParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestParticipantUpdateManyWithWhereWithoutUserInput | ContestParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput> | ContestParticipantCreateWithoutUserInput[] | ContestParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutUserInput | ContestParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ContestParticipantUpsertWithWhereUniqueWithoutUserInput | ContestParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContestParticipantCreateManyUserInputEnvelope
    set?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    disconnect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    delete?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    update?: ContestParticipantUpdateWithWhereUniqueWithoutUserInput | ContestParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContestParticipantUpdateManyWithWhereWithoutUserInput | ContestParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
  }

  export type SubmissionCreateNestedManyWithoutChallengeInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ContestChallengeCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput> | ContestChallengeCreateWithoutChallengeInput[] | ContestChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutChallengeInput | ContestChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: ContestChallengeCreateManyChallengeInputEnvelope
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ContestChallengeUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput> | ContestChallengeCreateWithoutChallengeInput[] | ContestChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutChallengeInput | ContestChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: ContestChallengeCreateManyChallengeInputEnvelope
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubmissionUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeInput | SubmissionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeInput | SubmissionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeInput | SubmissionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestChallengeUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput> | ContestChallengeCreateWithoutChallengeInput[] | ContestChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutChallengeInput | ContestChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: ContestChallengeUpsertWithWhereUniqueWithoutChallengeInput | ContestChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ContestChallengeCreateManyChallengeInputEnvelope
    set?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    disconnect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    delete?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    update?: ContestChallengeUpdateWithWhereUniqueWithoutChallengeInput | ContestChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ContestChallengeUpdateManyWithWhereWithoutChallengeInput | ContestChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeInput | SubmissionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeInput | SubmissionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeInput | SubmissionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestChallengeUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput> | ContestChallengeCreateWithoutChallengeInput[] | ContestChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutChallengeInput | ContestChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: ContestChallengeUpsertWithWhereUniqueWithoutChallengeInput | ContestChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ContestChallengeCreateManyChallengeInputEnvelope
    set?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    disconnect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    delete?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    update?: ContestChallengeUpdateWithWhereUniqueWithoutChallengeInput | ContestChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ContestChallengeUpdateManyWithWhereWithoutChallengeInput | ContestChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutSubmissionsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutSubmissionsInput
    upsert?: ChallengeUpsertWithoutSubmissionsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutSubmissionsInput, ChallengeUpdateWithoutSubmissionsInput>, ChallengeUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ContestParticipantCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput> | ContestParticipantCreateWithoutContestInput[] | ContestParticipantUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutContestInput | ContestParticipantCreateOrConnectWithoutContestInput[]
    createMany?: ContestParticipantCreateManyContestInputEnvelope
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
  }

  export type ContestChallengeCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput> | ContestChallengeCreateWithoutContestInput[] | ContestChallengeUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutContestInput | ContestChallengeCreateOrConnectWithoutContestInput[]
    createMany?: ContestChallengeCreateManyContestInputEnvelope
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
  }

  export type ContestParticipantUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput> | ContestParticipantCreateWithoutContestInput[] | ContestParticipantUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutContestInput | ContestParticipantCreateOrConnectWithoutContestInput[]
    createMany?: ContestParticipantCreateManyContestInputEnvelope
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
  }

  export type ContestChallengeUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput> | ContestChallengeCreateWithoutContestInput[] | ContestChallengeUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutContestInput | ContestChallengeCreateOrConnectWithoutContestInput[]
    createMany?: ContestChallengeCreateManyContestInputEnvelope
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
  }

  export type ContestParticipantUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput> | ContestParticipantCreateWithoutContestInput[] | ContestParticipantUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutContestInput | ContestParticipantCreateOrConnectWithoutContestInput[]
    upsert?: ContestParticipantUpsertWithWhereUniqueWithoutContestInput | ContestParticipantUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestParticipantCreateManyContestInputEnvelope
    set?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    disconnect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    delete?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    update?: ContestParticipantUpdateWithWhereUniqueWithoutContestInput | ContestParticipantUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestParticipantUpdateManyWithWhereWithoutContestInput | ContestParticipantUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
  }

  export type ContestChallengeUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput> | ContestChallengeCreateWithoutContestInput[] | ContestChallengeUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutContestInput | ContestChallengeCreateOrConnectWithoutContestInput[]
    upsert?: ContestChallengeUpsertWithWhereUniqueWithoutContestInput | ContestChallengeUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestChallengeCreateManyContestInputEnvelope
    set?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    disconnect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    delete?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    update?: ContestChallengeUpdateWithWhereUniqueWithoutContestInput | ContestChallengeUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestChallengeUpdateManyWithWhereWithoutContestInput | ContestChallengeUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
  }

  export type ContestParticipantUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput> | ContestParticipantCreateWithoutContestInput[] | ContestParticipantUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestParticipantCreateOrConnectWithoutContestInput | ContestParticipantCreateOrConnectWithoutContestInput[]
    upsert?: ContestParticipantUpsertWithWhereUniqueWithoutContestInput | ContestParticipantUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestParticipantCreateManyContestInputEnvelope
    set?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    disconnect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    delete?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    connect?: ContestParticipantWhereUniqueInput | ContestParticipantWhereUniqueInput[]
    update?: ContestParticipantUpdateWithWhereUniqueWithoutContestInput | ContestParticipantUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestParticipantUpdateManyWithWhereWithoutContestInput | ContestParticipantUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
  }

  export type ContestChallengeUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput> | ContestChallengeCreateWithoutContestInput[] | ContestChallengeUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ContestChallengeCreateOrConnectWithoutContestInput | ContestChallengeCreateOrConnectWithoutContestInput[]
    upsert?: ContestChallengeUpsertWithWhereUniqueWithoutContestInput | ContestChallengeUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ContestChallengeCreateManyContestInputEnvelope
    set?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    disconnect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    delete?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    connect?: ContestChallengeWhereUniqueInput | ContestChallengeWhereUniqueInput[]
    update?: ContestChallengeUpdateWithWhereUniqueWithoutContestInput | ContestChallengeUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ContestChallengeUpdateManyWithWhereWithoutContestInput | ContestChallengeUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContestsInput = {
    create?: XOR<UserCreateWithoutContestsInput, UserUncheckedCreateWithoutContestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ContestCreateWithoutParticipantsInput, ContestUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutParticipantsInput
    connect?: ContestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContestsNestedInput = {
    create?: XOR<UserCreateWithoutContestsInput, UserUncheckedCreateWithoutContestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsInput
    upsert?: UserUpsertWithoutContestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestsInput, UserUpdateWithoutContestsInput>, UserUncheckedUpdateWithoutContestsInput>
  }

  export type ContestUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ContestCreateWithoutParticipantsInput, ContestUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutParticipantsInput
    upsert?: ContestUpsertWithoutParticipantsInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutParticipantsInput, ContestUpdateWithoutParticipantsInput>, ContestUncheckedUpdateWithoutParticipantsInput>
  }

  export type ContestCreateNestedOneWithoutChallengesInput = {
    create?: XOR<ContestCreateWithoutChallengesInput, ContestUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: ContestCreateOrConnectWithoutChallengesInput
    connect?: ContestWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutContestsInput = {
    create?: XOR<ChallengeCreateWithoutContestsInput, ChallengeUncheckedCreateWithoutContestsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContestsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type ContestUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<ContestCreateWithoutChallengesInput, ContestUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: ContestCreateOrConnectWithoutChallengesInput
    upsert?: ContestUpsertWithoutChallengesInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutChallengesInput, ContestUpdateWithoutChallengesInput>, ContestUncheckedUpdateWithoutChallengesInput>
  }

  export type ChallengeUpdateOneRequiredWithoutContestsNestedInput = {
    create?: XOR<ChallengeCreateWithoutContestsInput, ChallengeUncheckedCreateWithoutContestsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContestsInput
    upsert?: ChallengeUpsertWithoutContestsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutContestsInput, ChallengeUpdateWithoutContestsInput>, ChallengeUncheckedUpdateWithoutContestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[]
    notIn?: $Enums.SubmissionStatus[]
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[]
    notIn?: $Enums.SubmissionStatus[]
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type SubmissionCreateWithoutUserInput = {
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: number
    challengeId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestParticipantCreateWithoutUserInput = {
    score?: number
    joinedAt?: Date | string
    contest: ContestCreateNestedOneWithoutParticipantsInput
  }

  export type ContestParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    contestId: number
    score?: number
    joinedAt?: Date | string
  }

  export type ContestParticipantCreateOrConnectWithoutUserInput = {
    where: ContestParticipantWhereUniqueInput
    create: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput>
  }

  export type ContestParticipantCreateManyUserInputEnvelope = {
    data: ContestParticipantCreateManyUserInput | ContestParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: IntFilter<"Submission"> | number
    userId?: IntFilter<"Submission"> | number
    challengeId?: IntFilter<"Submission"> | number
    flag?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type ContestParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ContestParticipantWhereUniqueInput
    update: XOR<ContestParticipantUpdateWithoutUserInput, ContestParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ContestParticipantCreateWithoutUserInput, ContestParticipantUncheckedCreateWithoutUserInput>
  }

  export type ContestParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ContestParticipantWhereUniqueInput
    data: XOR<ContestParticipantUpdateWithoutUserInput, ContestParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ContestParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ContestParticipantScalarWhereInput
    data: XOR<ContestParticipantUpdateManyMutationInput, ContestParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ContestParticipantScalarWhereInput = {
    AND?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
    OR?: ContestParticipantScalarWhereInput[]
    NOT?: ContestParticipantScalarWhereInput | ContestParticipantScalarWhereInput[]
    id?: IntFilter<"ContestParticipant"> | number
    userId?: IntFilter<"ContestParticipant"> | number
    contestId?: IntFilter<"ContestParticipant"> | number
    score?: IntFilter<"ContestParticipant"> | number
    joinedAt?: DateTimeFilter<"ContestParticipant"> | Date | string
  }

  export type SubmissionCreateWithoutChallengeInput = {
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutChallengeInput = {
    id?: number
    userId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput>
  }

  export type SubmissionCreateManyChallengeInputEnvelope = {
    data: SubmissionCreateManyChallengeInput | SubmissionCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ContestChallengeCreateWithoutChallengeInput = {
    contest: ContestCreateNestedOneWithoutChallengesInput
  }

  export type ContestChallengeUncheckedCreateWithoutChallengeInput = {
    id?: number
    contestId: number
  }

  export type ContestChallengeCreateOrConnectWithoutChallengeInput = {
    where: ContestChallengeWhereUniqueInput
    create: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type ContestChallengeCreateManyChallengeInputEnvelope = {
    data: ContestChallengeCreateManyChallengeInput | ContestChallengeCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutChallengeInput, SubmissionUncheckedUpdateWithoutChallengeInput>
    create: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutChallengeInput, SubmissionUncheckedUpdateWithoutChallengeInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutChallengeInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ContestChallengeUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ContestChallengeWhereUniqueInput
    update: XOR<ContestChallengeUpdateWithoutChallengeInput, ContestChallengeUncheckedUpdateWithoutChallengeInput>
    create: XOR<ContestChallengeCreateWithoutChallengeInput, ContestChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type ContestChallengeUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ContestChallengeWhereUniqueInput
    data: XOR<ContestChallengeUpdateWithoutChallengeInput, ContestChallengeUncheckedUpdateWithoutChallengeInput>
  }

  export type ContestChallengeUpdateManyWithWhereWithoutChallengeInput = {
    where: ContestChallengeScalarWhereInput
    data: XOR<ContestChallengeUpdateManyMutationInput, ContestChallengeUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ContestChallengeScalarWhereInput = {
    AND?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
    OR?: ContestChallengeScalarWhereInput[]
    NOT?: ContestChallengeScalarWhereInput | ContestChallengeScalarWhereInput[]
    id?: IntFilter<"ContestChallenge"> | number
    contestId?: IntFilter<"ContestChallenge"> | number
    challengeId?: IntFilter<"ContestChallenge"> | number
  }

  export type UserCreateWithoutSubmissionsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contests?: ContestParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contests?: ContestParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ChallengeCreateWithoutSubmissionsInput = {
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contests?: ContestChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contests?: ContestChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutSubmissionsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contests?: ContestParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contests?: ContestParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeUpsertWithoutSubmissionsInput = {
    update: XOR<ChallengeUpdateWithoutSubmissionsInput, ChallengeUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutSubmissionsInput, ChallengeUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contests?: ContestChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contests?: ContestChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ContestParticipantCreateWithoutContestInput = {
    score?: number
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutContestsInput
  }

  export type ContestParticipantUncheckedCreateWithoutContestInput = {
    id?: number
    userId: number
    score?: number
    joinedAt?: Date | string
  }

  export type ContestParticipantCreateOrConnectWithoutContestInput = {
    where: ContestParticipantWhereUniqueInput
    create: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput>
  }

  export type ContestParticipantCreateManyContestInputEnvelope = {
    data: ContestParticipantCreateManyContestInput | ContestParticipantCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type ContestChallengeCreateWithoutContestInput = {
    challenge: ChallengeCreateNestedOneWithoutContestsInput
  }

  export type ContestChallengeUncheckedCreateWithoutContestInput = {
    id?: number
    challengeId: number
  }

  export type ContestChallengeCreateOrConnectWithoutContestInput = {
    where: ContestChallengeWhereUniqueInput
    create: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput>
  }

  export type ContestChallengeCreateManyContestInputEnvelope = {
    data: ContestChallengeCreateManyContestInput | ContestChallengeCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type ContestParticipantUpsertWithWhereUniqueWithoutContestInput = {
    where: ContestParticipantWhereUniqueInput
    update: XOR<ContestParticipantUpdateWithoutContestInput, ContestParticipantUncheckedUpdateWithoutContestInput>
    create: XOR<ContestParticipantCreateWithoutContestInput, ContestParticipantUncheckedCreateWithoutContestInput>
  }

  export type ContestParticipantUpdateWithWhereUniqueWithoutContestInput = {
    where: ContestParticipantWhereUniqueInput
    data: XOR<ContestParticipantUpdateWithoutContestInput, ContestParticipantUncheckedUpdateWithoutContestInput>
  }

  export type ContestParticipantUpdateManyWithWhereWithoutContestInput = {
    where: ContestParticipantScalarWhereInput
    data: XOR<ContestParticipantUpdateManyMutationInput, ContestParticipantUncheckedUpdateManyWithoutContestInput>
  }

  export type ContestChallengeUpsertWithWhereUniqueWithoutContestInput = {
    where: ContestChallengeWhereUniqueInput
    update: XOR<ContestChallengeUpdateWithoutContestInput, ContestChallengeUncheckedUpdateWithoutContestInput>
    create: XOR<ContestChallengeCreateWithoutContestInput, ContestChallengeUncheckedCreateWithoutContestInput>
  }

  export type ContestChallengeUpdateWithWhereUniqueWithoutContestInput = {
    where: ContestChallengeWhereUniqueInput
    data: XOR<ContestChallengeUpdateWithoutContestInput, ContestChallengeUncheckedUpdateWithoutContestInput>
  }

  export type ContestChallengeUpdateManyWithWhereWithoutContestInput = {
    where: ContestChallengeScalarWhereInput
    data: XOR<ContestChallengeUpdateManyMutationInput, ContestChallengeUncheckedUpdateManyWithoutContestInput>
  }

  export type UserCreateWithoutContestsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContestsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatar?: string | null
    bio?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestsInput, UserUncheckedCreateWithoutContestsInput>
  }

  export type ContestCreateWithoutParticipantsInput = {
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenges?: ContestChallengeCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutParticipantsInput = {
    id?: number
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenges?: ContestChallengeUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutParticipantsInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutParticipantsInput, ContestUncheckedCreateWithoutParticipantsInput>
  }

  export type UserUpsertWithoutContestsInput = {
    update: XOR<UserUpdateWithoutContestsInput, UserUncheckedUpdateWithoutContestsInput>
    create: XOR<UserCreateWithoutContestsInput, UserUncheckedCreateWithoutContestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestsInput, UserUncheckedUpdateWithoutContestsInput>
  }

  export type UserUpdateWithoutContestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestUpsertWithoutParticipantsInput = {
    update: XOR<ContestUpdateWithoutParticipantsInput, ContestUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ContestCreateWithoutParticipantsInput, ContestUncheckedCreateWithoutParticipantsInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutParticipantsInput, ContestUncheckedUpdateWithoutParticipantsInput>
  }

  export type ContestUpdateWithoutParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: ContestChallengeUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: ContestChallengeUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateWithoutChallengesInput = {
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ContestParticipantCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutChallengesInput = {
    id?: number
    title: string
    description: string
    startTime: Date | string
    endTime: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ContestParticipantUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutChallengesInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutChallengesInput, ContestUncheckedCreateWithoutChallengesInput>
  }

  export type ChallengeCreateWithoutContestsInput = {
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutContestsInput = {
    id?: number
    title: string
    description: string
    category: string
    difficulty: $Enums.Difficulty
    points: number
    flag: string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutContestsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutContestsInput, ChallengeUncheckedCreateWithoutContestsInput>
  }

  export type ContestUpsertWithoutChallengesInput = {
    update: XOR<ContestUpdateWithoutChallengesInput, ContestUncheckedUpdateWithoutChallengesInput>
    create: XOR<ContestCreateWithoutChallengesInput, ContestUncheckedCreateWithoutChallengesInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutChallengesInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutChallengesInput, ContestUncheckedUpdateWithoutChallengesInput>
  }

  export type ContestUpdateWithoutChallengesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ContestParticipantUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ContestParticipantUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ChallengeUpsertWithoutContestsInput = {
    update: XOR<ChallengeUpdateWithoutContestsInput, ChallengeUncheckedUpdateWithoutContestsInput>
    create: XOR<ChallengeCreateWithoutContestsInput, ChallengeUncheckedCreateWithoutContestsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutContestsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutContestsInput, ChallengeUncheckedUpdateWithoutContestsInput>
  }

  export type ChallengeUpdateWithoutContestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutContestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    points?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    hints?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type SubmissionCreateManyUserInput = {
    id?: number
    challengeId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type ContestParticipantCreateManyUserInput = {
    id?: number
    contestId: number
    score?: number
    joinedAt?: Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ContestParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyChallengeInput = {
    id?: number
    userId: number
    flag: string
    status: $Enums.SubmissionStatus
    submittedAt?: Date | string
  }

  export type ContestChallengeCreateManyChallengeInput = {
    id?: number
    contestId: number
  }

  export type SubmissionUpdateWithoutChallengeInput = {
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestChallengeUpdateWithoutChallengeInput = {
    contest?: ContestUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type ContestChallengeUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
  }

  export type ContestChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contestId?: IntFieldUpdateOperationsInput | number
  }

  export type ContestParticipantCreateManyContestInput = {
    id?: number
    userId: number
    score?: number
    joinedAt?: Date | string
  }

  export type ContestChallengeCreateManyContestInput = {
    id?: number
    challengeId: number
  }

  export type ContestParticipantUpdateWithoutContestInput = {
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestsNestedInput
  }

  export type ContestParticipantUncheckedUpdateWithoutContestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestParticipantUncheckedUpdateManyWithoutContestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestChallengeUpdateWithoutContestInput = {
    challenge?: ChallengeUpdateOneRequiredWithoutContestsNestedInput
  }

  export type ContestChallengeUncheckedUpdateWithoutContestInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContestChallengeUncheckedUpdateManyWithoutContestInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}