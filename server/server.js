const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routes/userRouter');
const eventRouter = require('./routes/eventRouter');
const categoryShopRouter = require('./routes/categoryShopRouter')
const shopRouter = require('./routes/shopRouter')
const commentRouter = require('./routes/commentRouter')
const holidayRouter = require('./routes/holidayRouter');
const productRouter = require('./routes/productRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: false,
    },
  }),
);

app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/categories', categoryShopRouter);
app.use('/shops', shopRouter)
app.use('/comments', commentRouter)
app.use('/holidays', holidayRouter)
app.use('/products', productRouter)

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));