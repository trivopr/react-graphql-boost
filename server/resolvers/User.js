const User = {
	posts: (parent, args, { db }, info) => {
		return db.Posts.filter(post => {
			return post.author === parent.id;
		});
	},
	comments: (parent, args, { db }, info) => {
		return db.Comments.filter(comment => {
			return comment.authorId === parent.id;
		});
	},
};

export default User;
