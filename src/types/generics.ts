// Generic Functions
export type Ttype<Ttype> = {
    readonly type: Ttype;
}
export type TSuccess<Ttype, TData> = {
    readonly type: Ttype;
    readonly data: TData;
}
export type TError<Ttype> = {
    readonly type: Ttype;
    readonly error: string;
}
export type TArrayObjects<TObject> = ReadonlyArray<{ [fw in keyof Readonly<TObject>]: TObject[fw] }>