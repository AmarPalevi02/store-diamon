type typeSideBar = {
    title: String,
    path: String,
    icon: String,
    active: Boolean
}

export const menuSideBar: typeSideBar[] = [
    {
        title: "Overview",
        path: "/members",
        icon: "block",
        active: false
    },
    {
        title: "Transactions",
        path: "/members/transactions",
        icon: "transaction",
        active: false
    },
    {
        title: "Messages",
        path: "/message",
        icon: "message",
        active: false
    },
    {
        title: "Card",
        path: "/card",
        icon: "card",
        active: false
    },
    {
        title: "Rewards",
        path: "/rewards",
        icon: "reward",
        active: false
    },
    {
        title: "Settings",
        path: "/members/edit-profile",
        icon: "setting",
        active: false
    },
    {
        title: "Log Out",
        path: "/logout",
        icon: "logout",
        active: false
    },
]