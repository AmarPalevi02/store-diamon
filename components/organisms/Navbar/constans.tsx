type Menu = {
    title: String;
    path: String;
    active : Boolean
}

export const menuItems: Menu[] = [
    {
        title: "Home",
        path: "/",
        active: false,
    },
    {
        title: "Games",
        path: "/games",
        active: false,
    },
    {
        title: "Reward",
        path: "/reward",
        active: false,
    },
    {
        title: "Discover",
        path: "/discover",
        active: false,
    },
    {
        title: "Global Rank",
        path: "/global-rank",
        active: false,
    },
]