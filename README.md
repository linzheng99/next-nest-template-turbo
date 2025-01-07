# next-nest-template-turbo

## Start

```bash
npm install
npm run dev
```

tip: secret key generate by `openssl rand -base64 32`

### Nest
create `.env` file
```
# Database
DATABASE_URL="mysql://root:xxx@localhost:xxx/xxx"

# JWT
JWT_SECRET=
JWT_EXPIRES_IN="2d"

# JWT Refresh Token
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES_IN="7d"

# ?Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=

# ?internet http agent ip
HTTP_PROXY=
```

### Next
create `.env` file
```
NEXT_PUBLIC_API_URL=http://localhost:8000

SESSION_SECRET_KEY=
```

### prisma
```prisma

model User {
  id                 String         @id @default(uuid())
  email              String         @unique
  password           String
  name               String
  hashedRefreshToken String?
  isActive           Boolean        @default(true)
  role               Role           @default(USER)
  createdAt          DateTime       @default(now())
  updatedAt          DateTime       @updatedAt
}

enum Role {
  ADMIN
  USER
}

```

