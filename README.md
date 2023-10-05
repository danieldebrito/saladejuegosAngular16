In node_modules>rxfire>firestore>lite>interface.d.ts

I changed

export type CountSnapshot = lite.AggregateQuerySnapshot<{
    count: lite.AggregateField<number>;
}, any, DocumentData>;
to

export type CountSnapshot = lite.AggregateQuerySnapshot<{
    count: lite.AggregateField<number>;
}>;
