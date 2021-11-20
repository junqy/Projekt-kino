export const movies = [
    {
        id:1,
        title: "asdasdtrreewqqas",
        duration: 120
    },
    {
        id:2,
        title: "asdawwqhjkhgkjss",
        duration: 100
    },
    {
        id:3,
        title: "kjhkjlhjhklkjhls",
        duration: 90
    },
];

export const halls = [
    {
        id:1,
        capacity: 50
    },
    {
        id:2,
        capacity: 80
    },
    {
        id:3,
        capacity: 100
    }

]


export const seances = [
    {
        id:1,
        date: new Date().getFullYear(),
        hour: "18:30",
        movie: movies[0],
        hall: halls[0],
        sold: 12,
        avalivable: halls[0].capacity - 12,
        takenSeat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        id:2,
        date: new Date().getFullYear(),
        hour: "20:30",
        movie: movies[1],
        hall: halls[1],
        sold: 8,
        avalivable: halls[1].capacity - 8,
        takenSeat: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        id:3,
        date: new Date().getFullYear(),
        hour: "18:30",
        movie: movies[2],
        hall: halls[2],
        sold: 3,
        avalivable: halls[2].capacity - 3,
        takenSeat: [1, 2, 3]
    },
]