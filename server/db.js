const Posts = [{
        id: '1',
        title: 'B.U.S.T.E.D (Everybody Loves Sunshine) (Busted)',
        content: 'which is not supported and may encounter bugs or unexpected behavior',
        createdAt: '9/13/2018',
        author: '1',
        published: true,
    },
    {
        id: '2',
        title: 'Legend of Lizzie Borden, The',
        content: ' Yarn supports the following semver rang',
        createdAt: '4/11/2018',
        author: '1',
        published: true,
    },
    {
        id: '3',
        title: 'Treasure of the Sierra Madre, The',
        content: ' Yarn supports the following semver rang',
        createdAt: '3/3/2018',
        author: '1',
        published: true,
    },
    {
        id: '4',
        title: 'Citizen Koch',
        content: 'which is not supported and may encounter bugs or unexpected behavior',
        createdAt: '6/7/2018',
        author: '2',
        published: true,
    },
    {
        id: '5',
        title: 'Eye of the Dolphin',
        content: 'which is not supported and may encounter bugs or unexpected behavior',
        createdAt: '11/25/2018',
        author: '3',
        published: true,
    },
];

const Users = [{
        id: '1',
        name: 'lucas',
        email: 'lucas@gmail.com',
        age: 22,
    },
    {
        id: '2',
        name: 'Rocky',
        email: 'rocky@gmail.com',
        age: 24,
    },
    {
        id: '3',
        name: 'Lynda',
        email: 'lynda@gmail.com',
        age: 26,
    },
];

const Comments = [{
        id: '1',
        text: 'lorem is lorem',
        authorId: '1',
        postId: '1',
    },
    {
        id: '2',
        text: '2 lorem is lorem',
        authorId: '2',
        postId: '2',
    },
    {
        id: '3',
        text: '3 lorem is lorem',
        authorId: '3',
        postId: '3',
    },
    {
        id: '4',
        text: '4 lorem is lorem',
        authorId: '1',
        postId: '3',
    },
    {
        id: '5',
        text: 'lorem is lorem',
        authorId: '3',
        postId: '4',
    },
    {
        id: '6',
        text: 'lorem is lorem',
        authorId: '2',
        postId: '1',
    },
];

const db = {
    Posts,
    Users,
    Comments
}

export default db;