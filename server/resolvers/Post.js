const Post = {
	author: (parent, args, { db }, info) => {
		return db.Users.find(user => {
			return user.id === parent.author;
		});
	},
	comments: (parent, args, { db }, info) => {
		return db.Comments.filter(comment => {
			return comment.postId === parent.id;
		});
	},
};

export default Post;
