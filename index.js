import dotenv from 'dotenv';
import { app } from './src/app.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('kruger 서버입니다. CI/CD가 적용 되었는지 테스트!');
});

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
