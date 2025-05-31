
// 🛡️ Authentication middleware (simple for now)
function authMiddleware(req, res, next) {
    const userId = req.headers['x-user-id'];
    if (!userId) return res.status(401).json({ error: "Missing X-User-Id header" });
    req.userId = userId;
    next();
}

module.exports = authMiddleware;
// This middleware checks for a custom header 'X-User-Id' to identify the user.