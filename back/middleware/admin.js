module.exports = function admin(req, res, next) {
	// 401 -> unauthenticated
	// 403 -> forbidden
	console.log('req.user = ', req.user)
	if (!req.user.isAdmin) return res.status(403).send('Access Denied.')
	next()
}
