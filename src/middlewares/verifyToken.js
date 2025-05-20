import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized', error: err.message });

    req.user = decoded; // هنا خزنا بيانات اليوزر عشان نستخدمها بعدين
    next();
  });
};

export default verifyToken