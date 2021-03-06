import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		desc: post.custom_excerpt,
		createdAt: post.createdAt,
		html: post.html,
		tag: post.tag,
		image: post.image,
		id: post.id
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}