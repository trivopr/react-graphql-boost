const Comment = {
	author: (parent, args, { db }, info) => {
		return db.Users.find(user => {
			return user.id == parent.authorId;
		});
	},
};

export default Comment;
