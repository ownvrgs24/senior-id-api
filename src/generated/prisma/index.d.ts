
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
 * Model senior_citizen_details
 * 
 */
export type senior_citizen_details = $Result.DefaultSelection<Prisma.$senior_citizen_detailsPayload>
/**
 * Model client_credential_assets
 * 
 */
export type client_credential_assets = $Result.DefaultSelection<Prisma.$client_credential_assetsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SEX_AT_BIRTH_ENUM: {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  OTHER: 'OTHER'
};

export type SEX_AT_BIRTH_ENUM = (typeof SEX_AT_BIRTH_ENUM)[keyof typeof SEX_AT_BIRTH_ENUM]


export const CIVIL_STATUS_ENUM: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  WIDOWED: 'WIDOWED',
  SEPARATED: 'SEPARATED',
  DIVORCED: 'DIVORCED',
  ANNULLED: 'ANNULLED'
};

export type CIVIL_STATUS_ENUM = (typeof CIVIL_STATUS_ENUM)[keyof typeof CIVIL_STATUS_ENUM]

}

export type SEX_AT_BIRTH_ENUM = $Enums.SEX_AT_BIRTH_ENUM

export const SEX_AT_BIRTH_ENUM: typeof $Enums.SEX_AT_BIRTH_ENUM

export type CIVIL_STATUS_ENUM = $Enums.CIVIL_STATUS_ENUM

export const CIVIL_STATUS_ENUM: typeof $Enums.CIVIL_STATUS_ENUM

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Senior_citizen_details
 * const senior_citizen_details = await prisma.senior_citizen_details.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Senior_citizen_details
   * const senior_citizen_details = await prisma.senior_citizen_details.findMany()
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
   * `prisma.senior_citizen_details`: Exposes CRUD operations for the **senior_citizen_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senior_citizen_details
    * const senior_citizen_details = await prisma.senior_citizen_details.findMany()
    * ```
    */
  get senior_citizen_details(): Prisma.senior_citizen_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client_credential_assets`: Exposes CRUD operations for the **client_credential_assets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Client_credential_assets
    * const client_credential_assets = await prisma.client_credential_assets.findMany()
    * ```
    */
  get client_credential_assets(): Prisma.client_credential_assetsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    senior_citizen_details: 'senior_citizen_details',
    client_credential_assets: 'client_credential_assets'
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
      modelProps: "senior_citizen_details" | "client_credential_assets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      senior_citizen_details: {
        payload: Prisma.$senior_citizen_detailsPayload<ExtArgs>
        fields: Prisma.senior_citizen_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.senior_citizen_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.senior_citizen_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          findFirst: {
            args: Prisma.senior_citizen_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.senior_citizen_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          findMany: {
            args: Prisma.senior_citizen_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>[]
          }
          create: {
            args: Prisma.senior_citizen_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          createMany: {
            args: Prisma.senior_citizen_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.senior_citizen_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          update: {
            args: Prisma.senior_citizen_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          deleteMany: {
            args: Prisma.senior_citizen_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.senior_citizen_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.senior_citizen_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$senior_citizen_detailsPayload>
          }
          aggregate: {
            args: Prisma.Senior_citizen_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenior_citizen_details>
          }
          groupBy: {
            args: Prisma.senior_citizen_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Senior_citizen_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.senior_citizen_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Senior_citizen_detailsCountAggregateOutputType> | number
          }
        }
      }
      client_credential_assets: {
        payload: Prisma.$client_credential_assetsPayload<ExtArgs>
        fields: Prisma.client_credential_assetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.client_credential_assetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.client_credential_assetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          findFirst: {
            args: Prisma.client_credential_assetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.client_credential_assetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          findMany: {
            args: Prisma.client_credential_assetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>[]
          }
          create: {
            args: Prisma.client_credential_assetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          createMany: {
            args: Prisma.client_credential_assetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.client_credential_assetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          update: {
            args: Prisma.client_credential_assetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          deleteMany: {
            args: Prisma.client_credential_assetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.client_credential_assetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.client_credential_assetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$client_credential_assetsPayload>
          }
          aggregate: {
            args: Prisma.Client_credential_assetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient_credential_assets>
          }
          groupBy: {
            args: Prisma.client_credential_assetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Client_credential_assetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.client_credential_assetsCountArgs<ExtArgs>
            result: $Utils.Optional<Client_credential_assetsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    senior_citizen_details?: senior_citizen_detailsOmit
    client_credential_assets?: client_credential_assetsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Models
   */

  /**
   * Model senior_citizen_details
   */

  export type AggregateSenior_citizen_details = {
    _count: Senior_citizen_detailsCountAggregateOutputType | null
    _avg: Senior_citizen_detailsAvgAggregateOutputType | null
    _sum: Senior_citizen_detailsSumAggregateOutputType | null
    _min: Senior_citizen_detailsMinAggregateOutputType | null
    _max: Senior_citizen_detailsMaxAggregateOutputType | null
  }

  export type Senior_citizen_detailsAvgAggregateOutputType = {
    recno: number | null
    age_upon_release: number | null
  }

  export type Senior_citizen_detailsSumAggregateOutputType = {
    recno: number | null
    age_upon_release: number | null
  }

  export type Senior_citizen_detailsMinAggregateOutputType = {
    recno: number | null
    record_id: string | null
    id_number: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    suffix: string | null
    age_upon_release: number | null
    full_address: string | null
    sex_at_birth: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | null
    place_of_birth: string | null
    civil_status: $Enums.CIVIL_STATUS_ENUM | null
    contact_number: string | null
    emergency_contact_name: string | null
    emergency_contact_number: string | null
    emergency_relationship: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    date_of_issuance: Date | null
  }

  export type Senior_citizen_detailsMaxAggregateOutputType = {
    recno: number | null
    record_id: string | null
    id_number: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    suffix: string | null
    age_upon_release: number | null
    full_address: string | null
    sex_at_birth: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | null
    place_of_birth: string | null
    civil_status: $Enums.CIVIL_STATUS_ENUM | null
    contact_number: string | null
    emergency_contact_name: string | null
    emergency_contact_number: string | null
    emergency_relationship: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    date_of_issuance: Date | null
  }

  export type Senior_citizen_detailsCountAggregateOutputType = {
    recno: number
    record_id: number
    id_number: number
    first_name: number
    middle_name: number
    last_name: number
    suffix: number
    age_upon_release: number
    full_address: number
    sex_at_birth: number
    date_of_birth: number
    place_of_birth: number
    civil_status: number
    contact_number: number
    emergency_contact_name: number
    emergency_contact_number: number
    emergency_relationship: number
    email: number
    created_at: number
    updated_at: number
    date_of_issuance: number
    _all: number
  }


  export type Senior_citizen_detailsAvgAggregateInputType = {
    recno?: true
    age_upon_release?: true
  }

  export type Senior_citizen_detailsSumAggregateInputType = {
    recno?: true
    age_upon_release?: true
  }

  export type Senior_citizen_detailsMinAggregateInputType = {
    recno?: true
    record_id?: true
    id_number?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    age_upon_release?: true
    full_address?: true
    sex_at_birth?: true
    date_of_birth?: true
    place_of_birth?: true
    civil_status?: true
    contact_number?: true
    emergency_contact_name?: true
    emergency_contact_number?: true
    emergency_relationship?: true
    email?: true
    created_at?: true
    updated_at?: true
    date_of_issuance?: true
  }

  export type Senior_citizen_detailsMaxAggregateInputType = {
    recno?: true
    record_id?: true
    id_number?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    age_upon_release?: true
    full_address?: true
    sex_at_birth?: true
    date_of_birth?: true
    place_of_birth?: true
    civil_status?: true
    contact_number?: true
    emergency_contact_name?: true
    emergency_contact_number?: true
    emergency_relationship?: true
    email?: true
    created_at?: true
    updated_at?: true
    date_of_issuance?: true
  }

  export type Senior_citizen_detailsCountAggregateInputType = {
    recno?: true
    record_id?: true
    id_number?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    age_upon_release?: true
    full_address?: true
    sex_at_birth?: true
    date_of_birth?: true
    place_of_birth?: true
    civil_status?: true
    contact_number?: true
    emergency_contact_name?: true
    emergency_contact_number?: true
    emergency_relationship?: true
    email?: true
    created_at?: true
    updated_at?: true
    date_of_issuance?: true
    _all?: true
  }

  export type Senior_citizen_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which senior_citizen_details to aggregate.
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of senior_citizen_details to fetch.
     */
    orderBy?: senior_citizen_detailsOrderByWithRelationInput | senior_citizen_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: senior_citizen_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` senior_citizen_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` senior_citizen_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned senior_citizen_details
    **/
    _count?: true | Senior_citizen_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Senior_citizen_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Senior_citizen_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Senior_citizen_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Senior_citizen_detailsMaxAggregateInputType
  }

  export type GetSenior_citizen_detailsAggregateType<T extends Senior_citizen_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSenior_citizen_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenior_citizen_details[P]>
      : GetScalarType<T[P], AggregateSenior_citizen_details[P]>
  }




  export type senior_citizen_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: senior_citizen_detailsWhereInput
    orderBy?: senior_citizen_detailsOrderByWithAggregationInput | senior_citizen_detailsOrderByWithAggregationInput[]
    by: Senior_citizen_detailsScalarFieldEnum[] | Senior_citizen_detailsScalarFieldEnum
    having?: senior_citizen_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Senior_citizen_detailsCountAggregateInputType | true
    _avg?: Senior_citizen_detailsAvgAggregateInputType
    _sum?: Senior_citizen_detailsSumAggregateInputType
    _min?: Senior_citizen_detailsMinAggregateInputType
    _max?: Senior_citizen_detailsMaxAggregateInputType
  }

  export type Senior_citizen_detailsGroupByOutputType = {
    recno: number
    record_id: string
    id_number: string
    first_name: string
    middle_name: string | null
    last_name: string
    suffix: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date
    place_of_birth: string | null
    civil_status: $Enums.CIVIL_STATUS_ENUM | null
    contact_number: string | null
    emergency_contact_name: string | null
    emergency_contact_number: string | null
    emergency_relationship: string | null
    email: string | null
    created_at: Date
    updated_at: Date
    date_of_issuance: Date
    _count: Senior_citizen_detailsCountAggregateOutputType | null
    _avg: Senior_citizen_detailsAvgAggregateOutputType | null
    _sum: Senior_citizen_detailsSumAggregateOutputType | null
    _min: Senior_citizen_detailsMinAggregateOutputType | null
    _max: Senior_citizen_detailsMaxAggregateOutputType | null
  }

  type GetSenior_citizen_detailsGroupByPayload<T extends senior_citizen_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Senior_citizen_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Senior_citizen_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Senior_citizen_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Senior_citizen_detailsGroupByOutputType[P]>
        }
      >
    >


  export type senior_citizen_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recno?: boolean
    record_id?: boolean
    id_number?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    suffix?: boolean
    age_upon_release?: boolean
    full_address?: boolean
    sex_at_birth?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    civil_status?: boolean
    contact_number?: boolean
    emergency_contact_name?: boolean
    emergency_contact_number?: boolean
    emergency_relationship?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    date_of_issuance?: boolean
    client_credential_assets?: boolean | senior_citizen_details$client_credential_assetsArgs<ExtArgs>
  }, ExtArgs["result"]["senior_citizen_details"]>



  export type senior_citizen_detailsSelectScalar = {
    recno?: boolean
    record_id?: boolean
    id_number?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    suffix?: boolean
    age_upon_release?: boolean
    full_address?: boolean
    sex_at_birth?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    civil_status?: boolean
    contact_number?: boolean
    emergency_contact_name?: boolean
    emergency_contact_number?: boolean
    emergency_relationship?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    date_of_issuance?: boolean
  }

  export type senior_citizen_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recno" | "record_id" | "id_number" | "first_name" | "middle_name" | "last_name" | "suffix" | "age_upon_release" | "full_address" | "sex_at_birth" | "date_of_birth" | "place_of_birth" | "civil_status" | "contact_number" | "emergency_contact_name" | "emergency_contact_number" | "emergency_relationship" | "email" | "created_at" | "updated_at" | "date_of_issuance", ExtArgs["result"]["senior_citizen_details"]>
  export type senior_citizen_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client_credential_assets?: boolean | senior_citizen_details$client_credential_assetsArgs<ExtArgs>
  }

  export type $senior_citizen_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "senior_citizen_details"
    objects: {
      client_credential_assets: Prisma.$client_credential_assetsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      recno: number
      record_id: string
      id_number: string
      first_name: string
      middle_name: string | null
      last_name: string
      suffix: string | null
      age_upon_release: number
      full_address: string
      sex_at_birth: $Enums.SEX_AT_BIRTH_ENUM | null
      date_of_birth: Date
      place_of_birth: string | null
      civil_status: $Enums.CIVIL_STATUS_ENUM | null
      contact_number: string | null
      emergency_contact_name: string | null
      emergency_contact_number: string | null
      emergency_relationship: string | null
      email: string | null
      created_at: Date
      updated_at: Date
      date_of_issuance: Date
    }, ExtArgs["result"]["senior_citizen_details"]>
    composites: {}
  }

  type senior_citizen_detailsGetPayload<S extends boolean | null | undefined | senior_citizen_detailsDefaultArgs> = $Result.GetResult<Prisma.$senior_citizen_detailsPayload, S>

  type senior_citizen_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<senior_citizen_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Senior_citizen_detailsCountAggregateInputType | true
    }

  export interface senior_citizen_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['senior_citizen_details'], meta: { name: 'senior_citizen_details' } }
    /**
     * Find zero or one Senior_citizen_details that matches the filter.
     * @param {senior_citizen_detailsFindUniqueArgs} args - Arguments to find a Senior_citizen_details
     * @example
     * // Get one Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends senior_citizen_detailsFindUniqueArgs>(args: SelectSubset<T, senior_citizen_detailsFindUniqueArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Senior_citizen_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {senior_citizen_detailsFindUniqueOrThrowArgs} args - Arguments to find a Senior_citizen_details
     * @example
     * // Get one Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends senior_citizen_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, senior_citizen_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senior_citizen_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsFindFirstArgs} args - Arguments to find a Senior_citizen_details
     * @example
     * // Get one Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends senior_citizen_detailsFindFirstArgs>(args?: SelectSubset<T, senior_citizen_detailsFindFirstArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senior_citizen_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsFindFirstOrThrowArgs} args - Arguments to find a Senior_citizen_details
     * @example
     * // Get one Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends senior_citizen_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, senior_citizen_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Senior_citizen_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findMany()
     * 
     * // Get first 10 Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.findMany({ take: 10 })
     * 
     * // Only select the `recno`
     * const senior_citizen_detailsWithRecnoOnly = await prisma.senior_citizen_details.findMany({ select: { recno: true } })
     * 
     */
    findMany<T extends senior_citizen_detailsFindManyArgs>(args?: SelectSubset<T, senior_citizen_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Senior_citizen_details.
     * @param {senior_citizen_detailsCreateArgs} args - Arguments to create a Senior_citizen_details.
     * @example
     * // Create one Senior_citizen_details
     * const Senior_citizen_details = await prisma.senior_citizen_details.create({
     *   data: {
     *     // ... data to create a Senior_citizen_details
     *   }
     * })
     * 
     */
    create<T extends senior_citizen_detailsCreateArgs>(args: SelectSubset<T, senior_citizen_detailsCreateArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Senior_citizen_details.
     * @param {senior_citizen_detailsCreateManyArgs} args - Arguments to create many Senior_citizen_details.
     * @example
     * // Create many Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends senior_citizen_detailsCreateManyArgs>(args?: SelectSubset<T, senior_citizen_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Senior_citizen_details.
     * @param {senior_citizen_detailsDeleteArgs} args - Arguments to delete one Senior_citizen_details.
     * @example
     * // Delete one Senior_citizen_details
     * const Senior_citizen_details = await prisma.senior_citizen_details.delete({
     *   where: {
     *     // ... filter to delete one Senior_citizen_details
     *   }
     * })
     * 
     */
    delete<T extends senior_citizen_detailsDeleteArgs>(args: SelectSubset<T, senior_citizen_detailsDeleteArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Senior_citizen_details.
     * @param {senior_citizen_detailsUpdateArgs} args - Arguments to update one Senior_citizen_details.
     * @example
     * // Update one Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends senior_citizen_detailsUpdateArgs>(args: SelectSubset<T, senior_citizen_detailsUpdateArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Senior_citizen_details.
     * @param {senior_citizen_detailsDeleteManyArgs} args - Arguments to filter Senior_citizen_details to delete.
     * @example
     * // Delete a few Senior_citizen_details
     * const { count } = await prisma.senior_citizen_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends senior_citizen_detailsDeleteManyArgs>(args?: SelectSubset<T, senior_citizen_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senior_citizen_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends senior_citizen_detailsUpdateManyArgs>(args: SelectSubset<T, senior_citizen_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Senior_citizen_details.
     * @param {senior_citizen_detailsUpsertArgs} args - Arguments to update or create a Senior_citizen_details.
     * @example
     * // Update or create a Senior_citizen_details
     * const senior_citizen_details = await prisma.senior_citizen_details.upsert({
     *   create: {
     *     // ... data to create a Senior_citizen_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Senior_citizen_details we want to update
     *   }
     * })
     */
    upsert<T extends senior_citizen_detailsUpsertArgs>(args: SelectSubset<T, senior_citizen_detailsUpsertArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Senior_citizen_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsCountArgs} args - Arguments to filter Senior_citizen_details to count.
     * @example
     * // Count the number of Senior_citizen_details
     * const count = await prisma.senior_citizen_details.count({
     *   where: {
     *     // ... the filter for the Senior_citizen_details we want to count
     *   }
     * })
    **/
    count<T extends senior_citizen_detailsCountArgs>(
      args?: Subset<T, senior_citizen_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Senior_citizen_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Senior_citizen_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Senior_citizen_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Senior_citizen_detailsAggregateArgs>(args: Subset<T, Senior_citizen_detailsAggregateArgs>): Prisma.PrismaPromise<GetSenior_citizen_detailsAggregateType<T>>

    /**
     * Group by Senior_citizen_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {senior_citizen_detailsGroupByArgs} args - Group by arguments.
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
      T extends senior_citizen_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: senior_citizen_detailsGroupByArgs['orderBy'] }
        : { orderBy?: senior_citizen_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, senior_citizen_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenior_citizen_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the senior_citizen_details model
   */
  readonly fields: senior_citizen_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for senior_citizen_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__senior_citizen_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client_credential_assets<T extends senior_citizen_details$client_credential_assetsArgs<ExtArgs> = {}>(args?: Subset<T, senior_citizen_details$client_credential_assetsArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the senior_citizen_details model
   */
  interface senior_citizen_detailsFieldRefs {
    readonly recno: FieldRef<"senior_citizen_details", 'Int'>
    readonly record_id: FieldRef<"senior_citizen_details", 'String'>
    readonly id_number: FieldRef<"senior_citizen_details", 'String'>
    readonly first_name: FieldRef<"senior_citizen_details", 'String'>
    readonly middle_name: FieldRef<"senior_citizen_details", 'String'>
    readonly last_name: FieldRef<"senior_citizen_details", 'String'>
    readonly suffix: FieldRef<"senior_citizen_details", 'String'>
    readonly age_upon_release: FieldRef<"senior_citizen_details", 'Int'>
    readonly full_address: FieldRef<"senior_citizen_details", 'String'>
    readonly sex_at_birth: FieldRef<"senior_citizen_details", 'SEX_AT_BIRTH_ENUM'>
    readonly date_of_birth: FieldRef<"senior_citizen_details", 'DateTime'>
    readonly place_of_birth: FieldRef<"senior_citizen_details", 'String'>
    readonly civil_status: FieldRef<"senior_citizen_details", 'CIVIL_STATUS_ENUM'>
    readonly contact_number: FieldRef<"senior_citizen_details", 'String'>
    readonly emergency_contact_name: FieldRef<"senior_citizen_details", 'String'>
    readonly emergency_contact_number: FieldRef<"senior_citizen_details", 'String'>
    readonly emergency_relationship: FieldRef<"senior_citizen_details", 'String'>
    readonly email: FieldRef<"senior_citizen_details", 'String'>
    readonly created_at: FieldRef<"senior_citizen_details", 'DateTime'>
    readonly updated_at: FieldRef<"senior_citizen_details", 'DateTime'>
    readonly date_of_issuance: FieldRef<"senior_citizen_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * senior_citizen_details findUnique
   */
  export type senior_citizen_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter, which senior_citizen_details to fetch.
     */
    where: senior_citizen_detailsWhereUniqueInput
  }

  /**
   * senior_citizen_details findUniqueOrThrow
   */
  export type senior_citizen_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter, which senior_citizen_details to fetch.
     */
    where: senior_citizen_detailsWhereUniqueInput
  }

  /**
   * senior_citizen_details findFirst
   */
  export type senior_citizen_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter, which senior_citizen_details to fetch.
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of senior_citizen_details to fetch.
     */
    orderBy?: senior_citizen_detailsOrderByWithRelationInput | senior_citizen_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for senior_citizen_details.
     */
    cursor?: senior_citizen_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` senior_citizen_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` senior_citizen_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of senior_citizen_details.
     */
    distinct?: Senior_citizen_detailsScalarFieldEnum | Senior_citizen_detailsScalarFieldEnum[]
  }

  /**
   * senior_citizen_details findFirstOrThrow
   */
  export type senior_citizen_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter, which senior_citizen_details to fetch.
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of senior_citizen_details to fetch.
     */
    orderBy?: senior_citizen_detailsOrderByWithRelationInput | senior_citizen_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for senior_citizen_details.
     */
    cursor?: senior_citizen_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` senior_citizen_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` senior_citizen_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of senior_citizen_details.
     */
    distinct?: Senior_citizen_detailsScalarFieldEnum | Senior_citizen_detailsScalarFieldEnum[]
  }

  /**
   * senior_citizen_details findMany
   */
  export type senior_citizen_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter, which senior_citizen_details to fetch.
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of senior_citizen_details to fetch.
     */
    orderBy?: senior_citizen_detailsOrderByWithRelationInput | senior_citizen_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing senior_citizen_details.
     */
    cursor?: senior_citizen_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` senior_citizen_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` senior_citizen_details.
     */
    skip?: number
    distinct?: Senior_citizen_detailsScalarFieldEnum | Senior_citizen_detailsScalarFieldEnum[]
  }

  /**
   * senior_citizen_details create
   */
  export type senior_citizen_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a senior_citizen_details.
     */
    data: XOR<senior_citizen_detailsCreateInput, senior_citizen_detailsUncheckedCreateInput>
  }

  /**
   * senior_citizen_details createMany
   */
  export type senior_citizen_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many senior_citizen_details.
     */
    data: senior_citizen_detailsCreateManyInput | senior_citizen_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * senior_citizen_details update
   */
  export type senior_citizen_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a senior_citizen_details.
     */
    data: XOR<senior_citizen_detailsUpdateInput, senior_citizen_detailsUncheckedUpdateInput>
    /**
     * Choose, which senior_citizen_details to update.
     */
    where: senior_citizen_detailsWhereUniqueInput
  }

  /**
   * senior_citizen_details updateMany
   */
  export type senior_citizen_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update senior_citizen_details.
     */
    data: XOR<senior_citizen_detailsUpdateManyMutationInput, senior_citizen_detailsUncheckedUpdateManyInput>
    /**
     * Filter which senior_citizen_details to update
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * Limit how many senior_citizen_details to update.
     */
    limit?: number
  }

  /**
   * senior_citizen_details upsert
   */
  export type senior_citizen_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the senior_citizen_details to update in case it exists.
     */
    where: senior_citizen_detailsWhereUniqueInput
    /**
     * In case the senior_citizen_details found by the `where` argument doesn't exist, create a new senior_citizen_details with this data.
     */
    create: XOR<senior_citizen_detailsCreateInput, senior_citizen_detailsUncheckedCreateInput>
    /**
     * In case the senior_citizen_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<senior_citizen_detailsUpdateInput, senior_citizen_detailsUncheckedUpdateInput>
  }

  /**
   * senior_citizen_details delete
   */
  export type senior_citizen_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    /**
     * Filter which senior_citizen_details to delete.
     */
    where: senior_citizen_detailsWhereUniqueInput
  }

  /**
   * senior_citizen_details deleteMany
   */
  export type senior_citizen_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which senior_citizen_details to delete
     */
    where?: senior_citizen_detailsWhereInput
    /**
     * Limit how many senior_citizen_details to delete.
     */
    limit?: number
  }

  /**
   * senior_citizen_details.client_credential_assets
   */
  export type senior_citizen_details$client_credential_assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    where?: client_credential_assetsWhereInput
  }

  /**
   * senior_citizen_details without action
   */
  export type senior_citizen_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
  }


  /**
   * Model client_credential_assets
   */

  export type AggregateClient_credential_assets = {
    _count: Client_credential_assetsCountAggregateOutputType | null
    _avg: Client_credential_assetsAvgAggregateOutputType | null
    _sum: Client_credential_assetsSumAggregateOutputType | null
    _min: Client_credential_assetsMinAggregateOutputType | null
    _max: Client_credential_assetsMaxAggregateOutputType | null
  }

  export type Client_credential_assetsAvgAggregateOutputType = {
    recno: number | null
  }

  export type Client_credential_assetsSumAggregateOutputType = {
    recno: number | null
  }

  export type Client_credential_assetsMinAggregateOutputType = {
    recno: number | null
    record_id: string | null
    profile_picture: string | null
    electronic_signature: string | null
    thumbprint: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Client_credential_assetsMaxAggregateOutputType = {
    recno: number | null
    record_id: string | null
    profile_picture: string | null
    electronic_signature: string | null
    thumbprint: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Client_credential_assetsCountAggregateOutputType = {
    recno: number
    record_id: number
    profile_picture: number
    electronic_signature: number
    thumbprint: number
    remarks: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Client_credential_assetsAvgAggregateInputType = {
    recno?: true
  }

  export type Client_credential_assetsSumAggregateInputType = {
    recno?: true
  }

  export type Client_credential_assetsMinAggregateInputType = {
    recno?: true
    record_id?: true
    profile_picture?: true
    electronic_signature?: true
    thumbprint?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type Client_credential_assetsMaxAggregateInputType = {
    recno?: true
    record_id?: true
    profile_picture?: true
    electronic_signature?: true
    thumbprint?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type Client_credential_assetsCountAggregateInputType = {
    recno?: true
    record_id?: true
    profile_picture?: true
    electronic_signature?: true
    thumbprint?: true
    remarks?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Client_credential_assetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_credential_assets to aggregate.
     */
    where?: client_credential_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_credential_assets to fetch.
     */
    orderBy?: client_credential_assetsOrderByWithRelationInput | client_credential_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_credential_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_credential_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_credential_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_credential_assets
    **/
    _count?: true | Client_credential_assetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_credential_assetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_credential_assetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_credential_assetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_credential_assetsMaxAggregateInputType
  }

  export type GetClient_credential_assetsAggregateType<T extends Client_credential_assetsAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_credential_assets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_credential_assets[P]>
      : GetScalarType<T[P], AggregateClient_credential_assets[P]>
  }




  export type client_credential_assetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_credential_assetsWhereInput
    orderBy?: client_credential_assetsOrderByWithAggregationInput | client_credential_assetsOrderByWithAggregationInput[]
    by: Client_credential_assetsScalarFieldEnum[] | Client_credential_assetsScalarFieldEnum
    having?: client_credential_assetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_credential_assetsCountAggregateInputType | true
    _avg?: Client_credential_assetsAvgAggregateInputType
    _sum?: Client_credential_assetsSumAggregateInputType
    _min?: Client_credential_assetsMinAggregateInputType
    _max?: Client_credential_assetsMaxAggregateInputType
  }

  export type Client_credential_assetsGroupByOutputType = {
    recno: number
    record_id: string
    profile_picture: string
    electronic_signature: string | null
    thumbprint: string | null
    remarks: string | null
    created_at: Date
    updated_at: Date
    _count: Client_credential_assetsCountAggregateOutputType | null
    _avg: Client_credential_assetsAvgAggregateOutputType | null
    _sum: Client_credential_assetsSumAggregateOutputType | null
    _min: Client_credential_assetsMinAggregateOutputType | null
    _max: Client_credential_assetsMaxAggregateOutputType | null
  }

  type GetClient_credential_assetsGroupByPayload<T extends client_credential_assetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Client_credential_assetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_credential_assetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_credential_assetsGroupByOutputType[P]>
            : GetScalarType<T[P], Client_credential_assetsGroupByOutputType[P]>
        }
      >
    >


  export type client_credential_assetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recno?: boolean
    record_id?: boolean
    profile_picture?: boolean
    electronic_signature?: boolean
    thumbprint?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
    senior_citizen_details?: boolean | client_credential_assets$senior_citizen_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["client_credential_assets"]>



  export type client_credential_assetsSelectScalar = {
    recno?: boolean
    record_id?: boolean
    profile_picture?: boolean
    electronic_signature?: boolean
    thumbprint?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type client_credential_assetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recno" | "record_id" | "profile_picture" | "electronic_signature" | "thumbprint" | "remarks" | "created_at" | "updated_at", ExtArgs["result"]["client_credential_assets"]>
  export type client_credential_assetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior_citizen_details?: boolean | client_credential_assets$senior_citizen_detailsArgs<ExtArgs>
  }

  export type $client_credential_assetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_credential_assets"
    objects: {
      senior_citizen_details: Prisma.$senior_citizen_detailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      recno: number
      record_id: string
      profile_picture: string
      electronic_signature: string | null
      thumbprint: string | null
      remarks: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["client_credential_assets"]>
    composites: {}
  }

  type client_credential_assetsGetPayload<S extends boolean | null | undefined | client_credential_assetsDefaultArgs> = $Result.GetResult<Prisma.$client_credential_assetsPayload, S>

  type client_credential_assetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<client_credential_assetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Client_credential_assetsCountAggregateInputType | true
    }

  export interface client_credential_assetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client_credential_assets'], meta: { name: 'client_credential_assets' } }
    /**
     * Find zero or one Client_credential_assets that matches the filter.
     * @param {client_credential_assetsFindUniqueArgs} args - Arguments to find a Client_credential_assets
     * @example
     * // Get one Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends client_credential_assetsFindUniqueArgs>(args: SelectSubset<T, client_credential_assetsFindUniqueArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client_credential_assets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {client_credential_assetsFindUniqueOrThrowArgs} args - Arguments to find a Client_credential_assets
     * @example
     * // Get one Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends client_credential_assetsFindUniqueOrThrowArgs>(args: SelectSubset<T, client_credential_assetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client_credential_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsFindFirstArgs} args - Arguments to find a Client_credential_assets
     * @example
     * // Get one Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends client_credential_assetsFindFirstArgs>(args?: SelectSubset<T, client_credential_assetsFindFirstArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client_credential_assets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsFindFirstOrThrowArgs} args - Arguments to find a Client_credential_assets
     * @example
     * // Get one Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends client_credential_assetsFindFirstOrThrowArgs>(args?: SelectSubset<T, client_credential_assetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Client_credential_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findMany()
     * 
     * // Get first 10 Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.findMany({ take: 10 })
     * 
     * // Only select the `recno`
     * const client_credential_assetsWithRecnoOnly = await prisma.client_credential_assets.findMany({ select: { recno: true } })
     * 
     */
    findMany<T extends client_credential_assetsFindManyArgs>(args?: SelectSubset<T, client_credential_assetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client_credential_assets.
     * @param {client_credential_assetsCreateArgs} args - Arguments to create a Client_credential_assets.
     * @example
     * // Create one Client_credential_assets
     * const Client_credential_assets = await prisma.client_credential_assets.create({
     *   data: {
     *     // ... data to create a Client_credential_assets
     *   }
     * })
     * 
     */
    create<T extends client_credential_assetsCreateArgs>(args: SelectSubset<T, client_credential_assetsCreateArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Client_credential_assets.
     * @param {client_credential_assetsCreateManyArgs} args - Arguments to create many Client_credential_assets.
     * @example
     * // Create many Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends client_credential_assetsCreateManyArgs>(args?: SelectSubset<T, client_credential_assetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client_credential_assets.
     * @param {client_credential_assetsDeleteArgs} args - Arguments to delete one Client_credential_assets.
     * @example
     * // Delete one Client_credential_assets
     * const Client_credential_assets = await prisma.client_credential_assets.delete({
     *   where: {
     *     // ... filter to delete one Client_credential_assets
     *   }
     * })
     * 
     */
    delete<T extends client_credential_assetsDeleteArgs>(args: SelectSubset<T, client_credential_assetsDeleteArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client_credential_assets.
     * @param {client_credential_assetsUpdateArgs} args - Arguments to update one Client_credential_assets.
     * @example
     * // Update one Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends client_credential_assetsUpdateArgs>(args: SelectSubset<T, client_credential_assetsUpdateArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Client_credential_assets.
     * @param {client_credential_assetsDeleteManyArgs} args - Arguments to filter Client_credential_assets to delete.
     * @example
     * // Delete a few Client_credential_assets
     * const { count } = await prisma.client_credential_assets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends client_credential_assetsDeleteManyArgs>(args?: SelectSubset<T, client_credential_assetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_credential_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends client_credential_assetsUpdateManyArgs>(args: SelectSubset<T, client_credential_assetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_credential_assets.
     * @param {client_credential_assetsUpsertArgs} args - Arguments to update or create a Client_credential_assets.
     * @example
     * // Update or create a Client_credential_assets
     * const client_credential_assets = await prisma.client_credential_assets.upsert({
     *   create: {
     *     // ... data to create a Client_credential_assets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_credential_assets we want to update
     *   }
     * })
     */
    upsert<T extends client_credential_assetsUpsertArgs>(args: SelectSubset<T, client_credential_assetsUpsertArgs<ExtArgs>>): Prisma__client_credential_assetsClient<$Result.GetResult<Prisma.$client_credential_assetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Client_credential_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsCountArgs} args - Arguments to filter Client_credential_assets to count.
     * @example
     * // Count the number of Client_credential_assets
     * const count = await prisma.client_credential_assets.count({
     *   where: {
     *     // ... the filter for the Client_credential_assets we want to count
     *   }
     * })
    **/
    count<T extends client_credential_assetsCountArgs>(
      args?: Subset<T, client_credential_assetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_credential_assetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_credential_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_credential_assetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_credential_assetsAggregateArgs>(args: Subset<T, Client_credential_assetsAggregateArgs>): Prisma.PrismaPromise<GetClient_credential_assetsAggregateType<T>>

    /**
     * Group by Client_credential_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_credential_assetsGroupByArgs} args - Group by arguments.
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
      T extends client_credential_assetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_credential_assetsGroupByArgs['orderBy'] }
        : { orderBy?: client_credential_assetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_credential_assetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_credential_assetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client_credential_assets model
   */
  readonly fields: client_credential_assetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_credential_assets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_credential_assetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senior_citizen_details<T extends client_credential_assets$senior_citizen_detailsArgs<ExtArgs> = {}>(args?: Subset<T, client_credential_assets$senior_citizen_detailsArgs<ExtArgs>>): Prisma__senior_citizen_detailsClient<$Result.GetResult<Prisma.$senior_citizen_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the client_credential_assets model
   */
  interface client_credential_assetsFieldRefs {
    readonly recno: FieldRef<"client_credential_assets", 'Int'>
    readonly record_id: FieldRef<"client_credential_assets", 'String'>
    readonly profile_picture: FieldRef<"client_credential_assets", 'String'>
    readonly electronic_signature: FieldRef<"client_credential_assets", 'String'>
    readonly thumbprint: FieldRef<"client_credential_assets", 'String'>
    readonly remarks: FieldRef<"client_credential_assets", 'String'>
    readonly created_at: FieldRef<"client_credential_assets", 'DateTime'>
    readonly updated_at: FieldRef<"client_credential_assets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * client_credential_assets findUnique
   */
  export type client_credential_assetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter, which client_credential_assets to fetch.
     */
    where: client_credential_assetsWhereUniqueInput
  }

  /**
   * client_credential_assets findUniqueOrThrow
   */
  export type client_credential_assetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter, which client_credential_assets to fetch.
     */
    where: client_credential_assetsWhereUniqueInput
  }

  /**
   * client_credential_assets findFirst
   */
  export type client_credential_assetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter, which client_credential_assets to fetch.
     */
    where?: client_credential_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_credential_assets to fetch.
     */
    orderBy?: client_credential_assetsOrderByWithRelationInput | client_credential_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_credential_assets.
     */
    cursor?: client_credential_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_credential_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_credential_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_credential_assets.
     */
    distinct?: Client_credential_assetsScalarFieldEnum | Client_credential_assetsScalarFieldEnum[]
  }

  /**
   * client_credential_assets findFirstOrThrow
   */
  export type client_credential_assetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter, which client_credential_assets to fetch.
     */
    where?: client_credential_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_credential_assets to fetch.
     */
    orderBy?: client_credential_assetsOrderByWithRelationInput | client_credential_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_credential_assets.
     */
    cursor?: client_credential_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_credential_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_credential_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_credential_assets.
     */
    distinct?: Client_credential_assetsScalarFieldEnum | Client_credential_assetsScalarFieldEnum[]
  }

  /**
   * client_credential_assets findMany
   */
  export type client_credential_assetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter, which client_credential_assets to fetch.
     */
    where?: client_credential_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_credential_assets to fetch.
     */
    orderBy?: client_credential_assetsOrderByWithRelationInput | client_credential_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_credential_assets.
     */
    cursor?: client_credential_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_credential_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_credential_assets.
     */
    skip?: number
    distinct?: Client_credential_assetsScalarFieldEnum | Client_credential_assetsScalarFieldEnum[]
  }

  /**
   * client_credential_assets create
   */
  export type client_credential_assetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * The data needed to create a client_credential_assets.
     */
    data: XOR<client_credential_assetsCreateInput, client_credential_assetsUncheckedCreateInput>
  }

  /**
   * client_credential_assets createMany
   */
  export type client_credential_assetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_credential_assets.
     */
    data: client_credential_assetsCreateManyInput | client_credential_assetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client_credential_assets update
   */
  export type client_credential_assetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * The data needed to update a client_credential_assets.
     */
    data: XOR<client_credential_assetsUpdateInput, client_credential_assetsUncheckedUpdateInput>
    /**
     * Choose, which client_credential_assets to update.
     */
    where: client_credential_assetsWhereUniqueInput
  }

  /**
   * client_credential_assets updateMany
   */
  export type client_credential_assetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_credential_assets.
     */
    data: XOR<client_credential_assetsUpdateManyMutationInput, client_credential_assetsUncheckedUpdateManyInput>
    /**
     * Filter which client_credential_assets to update
     */
    where?: client_credential_assetsWhereInput
    /**
     * Limit how many client_credential_assets to update.
     */
    limit?: number
  }

  /**
   * client_credential_assets upsert
   */
  export type client_credential_assetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * The filter to search for the client_credential_assets to update in case it exists.
     */
    where: client_credential_assetsWhereUniqueInput
    /**
     * In case the client_credential_assets found by the `where` argument doesn't exist, create a new client_credential_assets with this data.
     */
    create: XOR<client_credential_assetsCreateInput, client_credential_assetsUncheckedCreateInput>
    /**
     * In case the client_credential_assets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_credential_assetsUpdateInput, client_credential_assetsUncheckedUpdateInput>
  }

  /**
   * client_credential_assets delete
   */
  export type client_credential_assetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
    /**
     * Filter which client_credential_assets to delete.
     */
    where: client_credential_assetsWhereUniqueInput
  }

  /**
   * client_credential_assets deleteMany
   */
  export type client_credential_assetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_credential_assets to delete
     */
    where?: client_credential_assetsWhereInput
    /**
     * Limit how many client_credential_assets to delete.
     */
    limit?: number
  }

  /**
   * client_credential_assets.senior_citizen_details
   */
  export type client_credential_assets$senior_citizen_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the senior_citizen_details
     */
    select?: senior_citizen_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the senior_citizen_details
     */
    omit?: senior_citizen_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: senior_citizen_detailsInclude<ExtArgs> | null
    where?: senior_citizen_detailsWhereInput
  }

  /**
   * client_credential_assets without action
   */
  export type client_credential_assetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_credential_assets
     */
    select?: client_credential_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client_credential_assets
     */
    omit?: client_credential_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: client_credential_assetsInclude<ExtArgs> | null
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


  export const Senior_citizen_detailsScalarFieldEnum: {
    recno: 'recno',
    record_id: 'record_id',
    id_number: 'id_number',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    suffix: 'suffix',
    age_upon_release: 'age_upon_release',
    full_address: 'full_address',
    sex_at_birth: 'sex_at_birth',
    date_of_birth: 'date_of_birth',
    place_of_birth: 'place_of_birth',
    civil_status: 'civil_status',
    contact_number: 'contact_number',
    emergency_contact_name: 'emergency_contact_name',
    emergency_contact_number: 'emergency_contact_number',
    emergency_relationship: 'emergency_relationship',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at',
    date_of_issuance: 'date_of_issuance'
  };

  export type Senior_citizen_detailsScalarFieldEnum = (typeof Senior_citizen_detailsScalarFieldEnum)[keyof typeof Senior_citizen_detailsScalarFieldEnum]


  export const Client_credential_assetsScalarFieldEnum: {
    recno: 'recno',
    record_id: 'record_id',
    profile_picture: 'profile_picture',
    electronic_signature: 'electronic_signature',
    thumbprint: 'thumbprint',
    remarks: 'remarks',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Client_credential_assetsScalarFieldEnum = (typeof Client_credential_assetsScalarFieldEnum)[keyof typeof Client_credential_assetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const senior_citizen_detailsOrderByRelevanceFieldEnum: {
    record_id: 'record_id',
    id_number: 'id_number',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    suffix: 'suffix',
    full_address: 'full_address',
    place_of_birth: 'place_of_birth',
    contact_number: 'contact_number',
    emergency_contact_name: 'emergency_contact_name',
    emergency_contact_number: 'emergency_contact_number',
    emergency_relationship: 'emergency_relationship',
    email: 'email'
  };

  export type senior_citizen_detailsOrderByRelevanceFieldEnum = (typeof senior_citizen_detailsOrderByRelevanceFieldEnum)[keyof typeof senior_citizen_detailsOrderByRelevanceFieldEnum]


  export const client_credential_assetsOrderByRelevanceFieldEnum: {
    record_id: 'record_id',
    profile_picture: 'profile_picture',
    electronic_signature: 'electronic_signature',
    thumbprint: 'thumbprint',
    remarks: 'remarks'
  };

  export type client_credential_assetsOrderByRelevanceFieldEnum = (typeof client_credential_assetsOrderByRelevanceFieldEnum)[keyof typeof client_credential_assetsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'SEX_AT_BIRTH_ENUM'
   */
  export type EnumSEX_AT_BIRTH_ENUMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SEX_AT_BIRTH_ENUM'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'CIVIL_STATUS_ENUM'
   */
  export type EnumCIVIL_STATUS_ENUMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CIVIL_STATUS_ENUM'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type senior_citizen_detailsWhereInput = {
    AND?: senior_citizen_detailsWhereInput | senior_citizen_detailsWhereInput[]
    OR?: senior_citizen_detailsWhereInput[]
    NOT?: senior_citizen_detailsWhereInput | senior_citizen_detailsWhereInput[]
    recno?: IntFilter<"senior_citizen_details"> | number
    record_id?: StringFilter<"senior_citizen_details"> | string
    id_number?: StringFilter<"senior_citizen_details"> | string
    first_name?: StringFilter<"senior_citizen_details"> | string
    middle_name?: StringNullableFilter<"senior_citizen_details"> | string | null
    last_name?: StringFilter<"senior_citizen_details"> | string
    suffix?: StringNullableFilter<"senior_citizen_details"> | string | null
    age_upon_release?: IntFilter<"senior_citizen_details"> | number
    full_address?: StringFilter<"senior_citizen_details"> | string
    sex_at_birth?: EnumSEX_AT_BIRTH_ENUMNullableFilter<"senior_citizen_details"> | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFilter<"senior_citizen_details"> | Date | string
    place_of_birth?: StringNullableFilter<"senior_citizen_details"> | string | null
    civil_status?: EnumCIVIL_STATUS_ENUMNullableFilter<"senior_citizen_details"> | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_contact_name?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_contact_number?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_relationship?: StringNullableFilter<"senior_citizen_details"> | string | null
    email?: StringNullableFilter<"senior_citizen_details"> | string | null
    created_at?: DateTimeFilter<"senior_citizen_details"> | Date | string
    updated_at?: DateTimeFilter<"senior_citizen_details"> | Date | string
    date_of_issuance?: DateTimeFilter<"senior_citizen_details"> | Date | string
    client_credential_assets?: XOR<Client_credential_assetsNullableScalarRelationFilter, client_credential_assetsWhereInput> | null
  }

  export type senior_citizen_detailsOrderByWithRelationInput = {
    recno?: SortOrder
    record_id?: SortOrder
    id_number?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    suffix?: SortOrderInput | SortOrder
    age_upon_release?: SortOrder
    full_address?: SortOrder
    sex_at_birth?: SortOrderInput | SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrderInput | SortOrder
    civil_status?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    emergency_contact_name?: SortOrderInput | SortOrder
    emergency_contact_number?: SortOrderInput | SortOrder
    emergency_relationship?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    date_of_issuance?: SortOrder
    client_credential_assets?: client_credential_assetsOrderByWithRelationInput
    _relevance?: senior_citizen_detailsOrderByRelevanceInput
  }

  export type senior_citizen_detailsWhereUniqueInput = Prisma.AtLeast<{
    recno?: number
    record_id?: string
    id_number?: string
    AND?: senior_citizen_detailsWhereInput | senior_citizen_detailsWhereInput[]
    OR?: senior_citizen_detailsWhereInput[]
    NOT?: senior_citizen_detailsWhereInput | senior_citizen_detailsWhereInput[]
    first_name?: StringFilter<"senior_citizen_details"> | string
    middle_name?: StringNullableFilter<"senior_citizen_details"> | string | null
    last_name?: StringFilter<"senior_citizen_details"> | string
    suffix?: StringNullableFilter<"senior_citizen_details"> | string | null
    age_upon_release?: IntFilter<"senior_citizen_details"> | number
    full_address?: StringFilter<"senior_citizen_details"> | string
    sex_at_birth?: EnumSEX_AT_BIRTH_ENUMNullableFilter<"senior_citizen_details"> | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFilter<"senior_citizen_details"> | Date | string
    place_of_birth?: StringNullableFilter<"senior_citizen_details"> | string | null
    civil_status?: EnumCIVIL_STATUS_ENUMNullableFilter<"senior_citizen_details"> | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_contact_name?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_contact_number?: StringNullableFilter<"senior_citizen_details"> | string | null
    emergency_relationship?: StringNullableFilter<"senior_citizen_details"> | string | null
    email?: StringNullableFilter<"senior_citizen_details"> | string | null
    created_at?: DateTimeFilter<"senior_citizen_details"> | Date | string
    updated_at?: DateTimeFilter<"senior_citizen_details"> | Date | string
    date_of_issuance?: DateTimeFilter<"senior_citizen_details"> | Date | string
    client_credential_assets?: XOR<Client_credential_assetsNullableScalarRelationFilter, client_credential_assetsWhereInput> | null
  }, "recno" | "record_id" | "id_number">

  export type senior_citizen_detailsOrderByWithAggregationInput = {
    recno?: SortOrder
    record_id?: SortOrder
    id_number?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    suffix?: SortOrderInput | SortOrder
    age_upon_release?: SortOrder
    full_address?: SortOrder
    sex_at_birth?: SortOrderInput | SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrderInput | SortOrder
    civil_status?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    emergency_contact_name?: SortOrderInput | SortOrder
    emergency_contact_number?: SortOrderInput | SortOrder
    emergency_relationship?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    date_of_issuance?: SortOrder
    _count?: senior_citizen_detailsCountOrderByAggregateInput
    _avg?: senior_citizen_detailsAvgOrderByAggregateInput
    _max?: senior_citizen_detailsMaxOrderByAggregateInput
    _min?: senior_citizen_detailsMinOrderByAggregateInput
    _sum?: senior_citizen_detailsSumOrderByAggregateInput
  }

  export type senior_citizen_detailsScalarWhereWithAggregatesInput = {
    AND?: senior_citizen_detailsScalarWhereWithAggregatesInput | senior_citizen_detailsScalarWhereWithAggregatesInput[]
    OR?: senior_citizen_detailsScalarWhereWithAggregatesInput[]
    NOT?: senior_citizen_detailsScalarWhereWithAggregatesInput | senior_citizen_detailsScalarWhereWithAggregatesInput[]
    recno?: IntWithAggregatesFilter<"senior_citizen_details"> | number
    record_id?: StringWithAggregatesFilter<"senior_citizen_details"> | string
    id_number?: StringWithAggregatesFilter<"senior_citizen_details"> | string
    first_name?: StringWithAggregatesFilter<"senior_citizen_details"> | string
    middle_name?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    last_name?: StringWithAggregatesFilter<"senior_citizen_details"> | string
    suffix?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    age_upon_release?: IntWithAggregatesFilter<"senior_citizen_details"> | number
    full_address?: StringWithAggregatesFilter<"senior_citizen_details"> | string
    sex_at_birth?: EnumSEX_AT_BIRTH_ENUMNullableWithAggregatesFilter<"senior_citizen_details"> | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeWithAggregatesFilter<"senior_citizen_details"> | Date | string
    place_of_birth?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    civil_status?: EnumCIVIL_STATUS_ENUMNullableWithAggregatesFilter<"senior_citizen_details"> | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    emergency_contact_name?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    emergency_contact_number?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    emergency_relationship?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    email?: StringNullableWithAggregatesFilter<"senior_citizen_details"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"senior_citizen_details"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"senior_citizen_details"> | Date | string
    date_of_issuance?: DateTimeWithAggregatesFilter<"senior_citizen_details"> | Date | string
  }

  export type client_credential_assetsWhereInput = {
    AND?: client_credential_assetsWhereInput | client_credential_assetsWhereInput[]
    OR?: client_credential_assetsWhereInput[]
    NOT?: client_credential_assetsWhereInput | client_credential_assetsWhereInput[]
    recno?: IntFilter<"client_credential_assets"> | number
    record_id?: StringFilter<"client_credential_assets"> | string
    profile_picture?: StringFilter<"client_credential_assets"> | string
    electronic_signature?: StringNullableFilter<"client_credential_assets"> | string | null
    thumbprint?: StringNullableFilter<"client_credential_assets"> | string | null
    remarks?: StringNullableFilter<"client_credential_assets"> | string | null
    created_at?: DateTimeFilter<"client_credential_assets"> | Date | string
    updated_at?: DateTimeFilter<"client_credential_assets"> | Date | string
    senior_citizen_details?: XOR<Senior_citizen_detailsNullableScalarRelationFilter, senior_citizen_detailsWhereInput> | null
  }

  export type client_credential_assetsOrderByWithRelationInput = {
    recno?: SortOrder
    record_id?: SortOrder
    profile_picture?: SortOrder
    electronic_signature?: SortOrderInput | SortOrder
    thumbprint?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    senior_citizen_details?: senior_citizen_detailsOrderByWithRelationInput
    _relevance?: client_credential_assetsOrderByRelevanceInput
  }

  export type client_credential_assetsWhereUniqueInput = Prisma.AtLeast<{
    recno?: number
    record_id?: string
    AND?: client_credential_assetsWhereInput | client_credential_assetsWhereInput[]
    OR?: client_credential_assetsWhereInput[]
    NOT?: client_credential_assetsWhereInput | client_credential_assetsWhereInput[]
    profile_picture?: StringFilter<"client_credential_assets"> | string
    electronic_signature?: StringNullableFilter<"client_credential_assets"> | string | null
    thumbprint?: StringNullableFilter<"client_credential_assets"> | string | null
    remarks?: StringNullableFilter<"client_credential_assets"> | string | null
    created_at?: DateTimeFilter<"client_credential_assets"> | Date | string
    updated_at?: DateTimeFilter<"client_credential_assets"> | Date | string
    senior_citizen_details?: XOR<Senior_citizen_detailsNullableScalarRelationFilter, senior_citizen_detailsWhereInput> | null
  }, "recno" | "record_id">

  export type client_credential_assetsOrderByWithAggregationInput = {
    recno?: SortOrder
    record_id?: SortOrder
    profile_picture?: SortOrder
    electronic_signature?: SortOrderInput | SortOrder
    thumbprint?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: client_credential_assetsCountOrderByAggregateInput
    _avg?: client_credential_assetsAvgOrderByAggregateInput
    _max?: client_credential_assetsMaxOrderByAggregateInput
    _min?: client_credential_assetsMinOrderByAggregateInput
    _sum?: client_credential_assetsSumOrderByAggregateInput
  }

  export type client_credential_assetsScalarWhereWithAggregatesInput = {
    AND?: client_credential_assetsScalarWhereWithAggregatesInput | client_credential_assetsScalarWhereWithAggregatesInput[]
    OR?: client_credential_assetsScalarWhereWithAggregatesInput[]
    NOT?: client_credential_assetsScalarWhereWithAggregatesInput | client_credential_assetsScalarWhereWithAggregatesInput[]
    recno?: IntWithAggregatesFilter<"client_credential_assets"> | number
    record_id?: StringWithAggregatesFilter<"client_credential_assets"> | string
    profile_picture?: StringWithAggregatesFilter<"client_credential_assets"> | string
    electronic_signature?: StringNullableWithAggregatesFilter<"client_credential_assets"> | string | null
    thumbprint?: StringNullableWithAggregatesFilter<"client_credential_assets"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"client_credential_assets"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"client_credential_assets"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"client_credential_assets"> | Date | string
  }

  export type senior_citizen_detailsCreateInput = {
    record_id?: string
    id_number: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth?: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | string
    place_of_birth?: string | null
    civil_status?: $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: string | null
    emergency_contact_name?: string | null
    emergency_contact_number?: string | null
    emergency_relationship?: string | null
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    date_of_issuance: Date | string
    client_credential_assets?: client_credential_assetsCreateNestedOneWithoutSenior_citizen_detailsInput
  }

  export type senior_citizen_detailsUncheckedCreateInput = {
    recno?: number
    record_id?: string
    id_number: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth?: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | string
    place_of_birth?: string | null
    civil_status?: $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: string | null
    emergency_contact_name?: string | null
    emergency_contact_number?: string | null
    emergency_relationship?: string | null
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    date_of_issuance: Date | string
    client_credential_assets?: client_credential_assetsUncheckedCreateNestedOneWithoutSenior_citizen_detailsInput
  }

  export type senior_citizen_detailsUpdateInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
    client_credential_assets?: client_credential_assetsUpdateOneWithoutSenior_citizen_detailsNestedInput
  }

  export type senior_citizen_detailsUncheckedUpdateInput = {
    recno?: IntFieldUpdateOperationsInput | number
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
    client_credential_assets?: client_credential_assetsUncheckedUpdateOneWithoutSenior_citizen_detailsNestedInput
  }

  export type senior_citizen_detailsCreateManyInput = {
    recno?: number
    record_id?: string
    id_number: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth?: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | string
    place_of_birth?: string | null
    civil_status?: $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: string | null
    emergency_contact_name?: string | null
    emergency_contact_number?: string | null
    emergency_relationship?: string | null
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    date_of_issuance: Date | string
  }

  export type senior_citizen_detailsUpdateManyMutationInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type senior_citizen_detailsUncheckedUpdateManyInput = {
    recno?: IntFieldUpdateOperationsInput | number
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type client_credential_assetsCreateInput = {
    profile_picture: string
    electronic_signature?: string | null
    thumbprint?: string | null
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    senior_citizen_details?: senior_citizen_detailsCreateNestedOneWithoutClient_credential_assetsInput
  }

  export type client_credential_assetsUncheckedCreateInput = {
    recno?: number
    record_id?: string
    profile_picture: string
    electronic_signature?: string | null
    thumbprint?: string | null
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type client_credential_assetsUpdateInput = {
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    senior_citizen_details?: senior_citizen_detailsUpdateOneWithoutClient_credential_assetsNestedInput
  }

  export type client_credential_assetsUncheckedUpdateInput = {
    recno?: IntFieldUpdateOperationsInput | number
    record_id?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type client_credential_assetsCreateManyInput = {
    recno?: number
    record_id?: string
    profile_picture: string
    electronic_signature?: string | null
    thumbprint?: string | null
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type client_credential_assetsUpdateManyMutationInput = {
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type client_credential_assetsUncheckedUpdateManyInput = {
    recno?: IntFieldUpdateOperationsInput | number
    record_id?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SEX_AT_BIRTH_ENUM | EnumSEX_AT_BIRTH_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    notIn?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    not?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel> | $Enums.SEX_AT_BIRTH_ENUM | null
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

  export type EnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CIVIL_STATUS_ENUM | EnumCIVIL_STATUS_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.CIVIL_STATUS_ENUM[] | null
    notIn?: $Enums.CIVIL_STATUS_ENUM[] | null
    not?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel> | $Enums.CIVIL_STATUS_ENUM | null
  }

  export type Client_credential_assetsNullableScalarRelationFilter = {
    is?: client_credential_assetsWhereInput | null
    isNot?: client_credential_assetsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type senior_citizen_detailsOrderByRelevanceInput = {
    fields: senior_citizen_detailsOrderByRelevanceFieldEnum | senior_citizen_detailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type senior_citizen_detailsCountOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    id_number?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    age_upon_release?: SortOrder
    full_address?: SortOrder
    sex_at_birth?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    civil_status?: SortOrder
    contact_number?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_number?: SortOrder
    emergency_relationship?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    date_of_issuance?: SortOrder
  }

  export type senior_citizen_detailsAvgOrderByAggregateInput = {
    recno?: SortOrder
    age_upon_release?: SortOrder
  }

  export type senior_citizen_detailsMaxOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    id_number?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    age_upon_release?: SortOrder
    full_address?: SortOrder
    sex_at_birth?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    civil_status?: SortOrder
    contact_number?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_number?: SortOrder
    emergency_relationship?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    date_of_issuance?: SortOrder
  }

  export type senior_citizen_detailsMinOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    id_number?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    age_upon_release?: SortOrder
    full_address?: SortOrder
    sex_at_birth?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    civil_status?: SortOrder
    contact_number?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_number?: SortOrder
    emergency_relationship?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    date_of_issuance?: SortOrder
  }

  export type senior_citizen_detailsSumOrderByAggregateInput = {
    recno?: SortOrder
    age_upon_release?: SortOrder
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

  export type EnumSEX_AT_BIRTH_ENUMNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SEX_AT_BIRTH_ENUM | EnumSEX_AT_BIRTH_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    notIn?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    not?: NestedEnumSEX_AT_BIRTH_ENUMNullableWithAggregatesFilter<$PrismaModel> | $Enums.SEX_AT_BIRTH_ENUM | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel>
    _max?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel>
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

  export type EnumCIVIL_STATUS_ENUMNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CIVIL_STATUS_ENUM | EnumCIVIL_STATUS_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.CIVIL_STATUS_ENUM[] | null
    notIn?: $Enums.CIVIL_STATUS_ENUM[] | null
    not?: NestedEnumCIVIL_STATUS_ENUMNullableWithAggregatesFilter<$PrismaModel> | $Enums.CIVIL_STATUS_ENUM | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel>
    _max?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel>
  }

  export type Senior_citizen_detailsNullableScalarRelationFilter = {
    is?: senior_citizen_detailsWhereInput | null
    isNot?: senior_citizen_detailsWhereInput | null
  }

  export type client_credential_assetsOrderByRelevanceInput = {
    fields: client_credential_assetsOrderByRelevanceFieldEnum | client_credential_assetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type client_credential_assetsCountOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    profile_picture?: SortOrder
    electronic_signature?: SortOrder
    thumbprint?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type client_credential_assetsAvgOrderByAggregateInput = {
    recno?: SortOrder
  }

  export type client_credential_assetsMaxOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    profile_picture?: SortOrder
    electronic_signature?: SortOrder
    thumbprint?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type client_credential_assetsMinOrderByAggregateInput = {
    recno?: SortOrder
    record_id?: SortOrder
    profile_picture?: SortOrder
    electronic_signature?: SortOrder
    thumbprint?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type client_credential_assetsSumOrderByAggregateInput = {
    recno?: SortOrder
  }

  export type client_credential_assetsCreateNestedOneWithoutSenior_citizen_detailsInput = {
    create?: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
    connectOrCreate?: client_credential_assetsCreateOrConnectWithoutSenior_citizen_detailsInput
    connect?: client_credential_assetsWhereUniqueInput
  }

  export type client_credential_assetsUncheckedCreateNestedOneWithoutSenior_citizen_detailsInput = {
    create?: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
    connectOrCreate?: client_credential_assetsCreateOrConnectWithoutSenior_citizen_detailsInput
    connect?: client_credential_assetsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput = {
    set?: $Enums.SEX_AT_BIRTH_ENUM | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput = {
    set?: $Enums.CIVIL_STATUS_ENUM | null
  }

  export type client_credential_assetsUpdateOneWithoutSenior_citizen_detailsNestedInput = {
    create?: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
    connectOrCreate?: client_credential_assetsCreateOrConnectWithoutSenior_citizen_detailsInput
    upsert?: client_credential_assetsUpsertWithoutSenior_citizen_detailsInput
    disconnect?: client_credential_assetsWhereInput | boolean
    delete?: client_credential_assetsWhereInput | boolean
    connect?: client_credential_assetsWhereUniqueInput
    update?: XOR<XOR<client_credential_assetsUpdateToOneWithWhereWithoutSenior_citizen_detailsInput, client_credential_assetsUpdateWithoutSenior_citizen_detailsInput>, client_credential_assetsUncheckedUpdateWithoutSenior_citizen_detailsInput>
  }

  export type client_credential_assetsUncheckedUpdateOneWithoutSenior_citizen_detailsNestedInput = {
    create?: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
    connectOrCreate?: client_credential_assetsCreateOrConnectWithoutSenior_citizen_detailsInput
    upsert?: client_credential_assetsUpsertWithoutSenior_citizen_detailsInput
    disconnect?: client_credential_assetsWhereInput | boolean
    delete?: client_credential_assetsWhereInput | boolean
    connect?: client_credential_assetsWhereUniqueInput
    update?: XOR<XOR<client_credential_assetsUpdateToOneWithWhereWithoutSenior_citizen_detailsInput, client_credential_assetsUpdateWithoutSenior_citizen_detailsInput>, client_credential_assetsUncheckedUpdateWithoutSenior_citizen_detailsInput>
  }

  export type senior_citizen_detailsCreateNestedOneWithoutClient_credential_assetsInput = {
    create?: XOR<senior_citizen_detailsCreateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedCreateWithoutClient_credential_assetsInput>
    connectOrCreate?: senior_citizen_detailsCreateOrConnectWithoutClient_credential_assetsInput
    connect?: senior_citizen_detailsWhereUniqueInput
  }

  export type senior_citizen_detailsUpdateOneWithoutClient_credential_assetsNestedInput = {
    create?: XOR<senior_citizen_detailsCreateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedCreateWithoutClient_credential_assetsInput>
    connectOrCreate?: senior_citizen_detailsCreateOrConnectWithoutClient_credential_assetsInput
    upsert?: senior_citizen_detailsUpsertWithoutClient_credential_assetsInput
    disconnect?: senior_citizen_detailsWhereInput | boolean
    delete?: senior_citizen_detailsWhereInput | boolean
    connect?: senior_citizen_detailsWhereUniqueInput
    update?: XOR<XOR<senior_citizen_detailsUpdateToOneWithWhereWithoutClient_credential_assetsInput, senior_citizen_detailsUpdateWithoutClient_credential_assetsInput>, senior_citizen_detailsUncheckedUpdateWithoutClient_credential_assetsInput>
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

  export type NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SEX_AT_BIRTH_ENUM | EnumSEX_AT_BIRTH_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    notIn?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    not?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel> | $Enums.SEX_AT_BIRTH_ENUM | null
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

  export type NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CIVIL_STATUS_ENUM | EnumCIVIL_STATUS_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.CIVIL_STATUS_ENUM[] | null
    notIn?: $Enums.CIVIL_STATUS_ENUM[] | null
    not?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel> | $Enums.CIVIL_STATUS_ENUM | null
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

  export type NestedEnumSEX_AT_BIRTH_ENUMNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SEX_AT_BIRTH_ENUM | EnumSEX_AT_BIRTH_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    notIn?: $Enums.SEX_AT_BIRTH_ENUM[] | null
    not?: NestedEnumSEX_AT_BIRTH_ENUMNullableWithAggregatesFilter<$PrismaModel> | $Enums.SEX_AT_BIRTH_ENUM | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel>
    _max?: NestedEnumSEX_AT_BIRTH_ENUMNullableFilter<$PrismaModel>
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

  export type NestedEnumCIVIL_STATUS_ENUMNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CIVIL_STATUS_ENUM | EnumCIVIL_STATUS_ENUMFieldRefInput<$PrismaModel> | null
    in?: $Enums.CIVIL_STATUS_ENUM[] | null
    notIn?: $Enums.CIVIL_STATUS_ENUM[] | null
    not?: NestedEnumCIVIL_STATUS_ENUMNullableWithAggregatesFilter<$PrismaModel> | $Enums.CIVIL_STATUS_ENUM | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel>
    _max?: NestedEnumCIVIL_STATUS_ENUMNullableFilter<$PrismaModel>
  }

  export type client_credential_assetsCreateWithoutSenior_citizen_detailsInput = {
    profile_picture: string
    electronic_signature?: string | null
    thumbprint?: string | null
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput = {
    recno?: number
    profile_picture: string
    electronic_signature?: string | null
    thumbprint?: string | null
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type client_credential_assetsCreateOrConnectWithoutSenior_citizen_detailsInput = {
    where: client_credential_assetsWhereUniqueInput
    create: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
  }

  export type client_credential_assetsUpsertWithoutSenior_citizen_detailsInput = {
    update: XOR<client_credential_assetsUpdateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedUpdateWithoutSenior_citizen_detailsInput>
    create: XOR<client_credential_assetsCreateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedCreateWithoutSenior_citizen_detailsInput>
    where?: client_credential_assetsWhereInput
  }

  export type client_credential_assetsUpdateToOneWithWhereWithoutSenior_citizen_detailsInput = {
    where?: client_credential_assetsWhereInput
    data: XOR<client_credential_assetsUpdateWithoutSenior_citizen_detailsInput, client_credential_assetsUncheckedUpdateWithoutSenior_citizen_detailsInput>
  }

  export type client_credential_assetsUpdateWithoutSenior_citizen_detailsInput = {
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type client_credential_assetsUncheckedUpdateWithoutSenior_citizen_detailsInput = {
    recno?: IntFieldUpdateOperationsInput | number
    profile_picture?: StringFieldUpdateOperationsInput | string
    electronic_signature?: NullableStringFieldUpdateOperationsInput | string | null
    thumbprint?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type senior_citizen_detailsCreateWithoutClient_credential_assetsInput = {
    record_id?: string
    id_number: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth?: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | string
    place_of_birth?: string | null
    civil_status?: $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: string | null
    emergency_contact_name?: string | null
    emergency_contact_number?: string | null
    emergency_relationship?: string | null
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    date_of_issuance: Date | string
  }

  export type senior_citizen_detailsUncheckedCreateWithoutClient_credential_assetsInput = {
    recno?: number
    record_id?: string
    id_number: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: string | null
    age_upon_release: number
    full_address: string
    sex_at_birth?: $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth: Date | string
    place_of_birth?: string | null
    civil_status?: $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: string | null
    emergency_contact_name?: string | null
    emergency_contact_number?: string | null
    emergency_relationship?: string | null
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    date_of_issuance: Date | string
  }

  export type senior_citizen_detailsCreateOrConnectWithoutClient_credential_assetsInput = {
    where: senior_citizen_detailsWhereUniqueInput
    create: XOR<senior_citizen_detailsCreateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedCreateWithoutClient_credential_assetsInput>
  }

  export type senior_citizen_detailsUpsertWithoutClient_credential_assetsInput = {
    update: XOR<senior_citizen_detailsUpdateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedUpdateWithoutClient_credential_assetsInput>
    create: XOR<senior_citizen_detailsCreateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedCreateWithoutClient_credential_assetsInput>
    where?: senior_citizen_detailsWhereInput
  }

  export type senior_citizen_detailsUpdateToOneWithWhereWithoutClient_credential_assetsInput = {
    where?: senior_citizen_detailsWhereInput
    data: XOR<senior_citizen_detailsUpdateWithoutClient_credential_assetsInput, senior_citizen_detailsUncheckedUpdateWithoutClient_credential_assetsInput>
  }

  export type senior_citizen_detailsUpdateWithoutClient_credential_assetsInput = {
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type senior_citizen_detailsUncheckedUpdateWithoutClient_credential_assetsInput = {
    recno?: IntFieldUpdateOperationsInput | number
    record_id?: StringFieldUpdateOperationsInput | string
    id_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    age_upon_release?: IntFieldUpdateOperationsInput | number
    full_address?: StringFieldUpdateOperationsInput | string
    sex_at_birth?: NullableEnumSEX_AT_BIRTH_ENUMFieldUpdateOperationsInput | $Enums.SEX_AT_BIRTH_ENUM | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    civil_status?: NullableEnumCIVIL_STATUS_ENUMFieldUpdateOperationsInput | $Enums.CIVIL_STATUS_ENUM | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_issuance?: DateTimeFieldUpdateOperationsInput | Date | string
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