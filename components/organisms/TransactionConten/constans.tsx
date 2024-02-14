type TypePath = {
    title: String,
    path: String
}

export const pathStatus: TypePath[] = [
    {
        title: "All Trx",
        path: "/members/transactions"
    },
    {
        title: "Success",
        path: "/members/transactions/success"
    },
    {
        title: "Pending",
        path: "/members/transactions/pending"
    },
    {
        title: "Failed",
        path: "/members/transactions/failed"
    },
]