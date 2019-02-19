const Mutation = {
	createUser: (parent, args, { db }, info) => {
		let { email, name, age } = args.data;
		let emailTaken = db.Users.some(user => user.email === email);

		if (emailTaken) {
			throw new Error('Email is registered');
		}

		let newUser = {
			id: uuidv4(),
			name,
			email,
			age,
		};
		db.Users.push(newUser);

		return newUser;
	},

	deleteUser: (parent, args, { db }, info) => {
		let { userId } = args;

		let indexUser = db.Users.findIndex(user => user.id === userId);

		if (indexUser === -1) {
			throw new Error('User not found');
		}

		let UserDeleted = db.Users[indexUser];

		db.Users = [...db.Users.slice(0, indexUser), ...db.Users.slice(indexUser + 1)];

		console.log('New User', db.Users);

		return UserDeleted;
	},

	updateUser: (parent, args, { db }, info) => {
		const { userId, data } = args;

		const currentUser = db.Users.find(user => user.id === userId);

		if (!currentUser) {
			throw new Error('User is not Exist');
		}

		if (data.email) {
			const emailExisted = db.Users.some(user => user.email === data.email);

			if (emailExisted) {
				throw new Error('This Email is registered');
			}

			currentUser.email = data.email;
		}

		if (data.name) {
			currentUser.name = data.name;
		}

		if (data.age) {
			currentUser.age = data.age;
		}

		return currentUser;
	},

	createPost: (parent, args, { db }, info) => {
		let { title, content, authorId, published } = args.data;
		let isValidUser = db.Users.some(user => user.id == authorId);

		if (!isValidUser) {
			throw new Error('User is not existed');
		}

		let newPost = {
			id: uuidv4(),
			title,
			content,
			author: authorId,
			published,
			createdAt: new Date(),
		};

		db.Posts.push(newPost);

		return newPost;
	},

	updatePost: (parent, args, { db }, info) => {
		const { id, data } = args;

		const postUpdate = db.Posts.find(post => post.id === id);

		if (!postUpdate) {
			throw new Error('This post is not Exist');
		}

		if (data.title) {
			postUpdate.title = data.title;
		}

		if (data.content) {
			postUpdate.content = data.content;
		}

		if (data.published !== postUpdate.published) {
			postUpdate.published = data.published;
		}

		return postUpdate;
	},

	deletePost: (parent, args, { db }, info) => {
		let { postId } = args;

		let indexPost = db.Posts.findIndex(post => post.id === postId);

		if (indexPost === -1) {
			throw new Error('Post not found');
		}

		let postDeleted = db.Posts[indexPost];

		db.Posts = [...db.Posts.slice(0, indexPost), ...db.Posts.slice(indexPost + 1)];

		console.log('New User', db.Posts);

		return postDeleted;
	},

	createComment: (parent, args, { db }, info) => {
		const { text, authorId, postId } = args.data;

		if (!authorId) {
			throw new Error('Must Register to comment');
		}

		if (!postId) {
			throw new Error('Must have Post to comment');
		}

		let newComment = {
			id: uuidv4(),
			text,
			authorId,
			postId,
		};

		db.Comments = [...db.Comments, newComment];
		return newComment;
	},

	updateComment: (parent, args, { db }, info) => {
		const { id, data } = args;

		const commentUpdate = db.Comments.find(comment => comment.id === id);

		if (!commentUpdate) {
			throw new Error('This post is not Exist');
		}

		if (data.text) {
			commentUpdate.text = data.text;
		}

		return commentUpdate;
	},

	deleteComment: (parent, args, { db }, info) => {
		let { commentId, postId } = args;

		let existedPost = db.Posts.some(post => post.id == postId);

		if (!existedPost) {
			throw new Error('Post has not Existed');
		}

		let indexComment = db.Comments.findIndex(comment => comment.id === commentId);
		let commentDeleted = db.Comments[indexComment];

		db.Comments = [...db.Comments.slice(0, indexComment), ...db.Comments.slice(indexComment + 1)];

		return commentDeleted;
	},
};

export default Mutation;
