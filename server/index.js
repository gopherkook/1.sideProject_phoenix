import app from './app.js';
import express from 'express';
const router = express.Router();

// 사용자 관련 라우트
// 사용자 목록 조회
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

// 특정 사용자 조회
router.get('/:id', (req, res) => {
  res.json({ message: `Get user with id ${req.params.id}` });
});

// 사용자 생성
router.post('/', (req, res) => {
  res.json({ message: 'Create new user' });
});

// 사용자 정보 수정
router.put('/:id', (req, res) => {
  res.json({ message: `Update user with id ${req.params.id}` });
});

// 사용자 삭제
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user with id ${req.params.id}` });
});

// API 라우트 설정
app.use('/api/users', router);

// 서버 포트 설정
const PORT = process.env.PORT || 5000;

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
