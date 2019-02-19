const Query = {
    usersList: (parent, args, {db}, info) => {
        return db.Users;
    },

    user: (parent, args, {db}, info) => {
        console.log('args.name', args.name);
        return db.Users.filter(user => {
            return user.name.toLowerCase().includes(args.name.toLowerCase());
        });
    },

    posts: (parent, args, {db}, info) => {
        let result = db.Posts.filter(post => {
            let isTitleMatch = post.title.toLowerCase().includes(args.txtSearch.toLowerCase());
            let isContentMatch = post.content.toLowerCase().includes(args.txtSearch.toLowerCase());
            return isTitleMatch || isContentMatch;
        });

        return result;
    },

    greeting: (parent, args, {db}, info) => {
        return 'hello' + args.name;
    },
};

export default Query;

