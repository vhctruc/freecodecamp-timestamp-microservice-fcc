# 🕐 Timestamp Microservice

FreeCodeCamp Back End Development and APIs Project - Timestamp Microservice

## 📋 Project Description

A microservice that converts date strings and Unix timestamps between different formats.

## 🚀 Live Demo

- **Frontend Interface**: [Your deployed URL here]
- **API Endpoint**: [Your deployed URL]/api/

## 📋 API Documentation

### Endpoint
```
GET /api/:date?
```

### Parameters
- `date` (optional): A date string or Unix timestamp

### Response Format
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### Error Response
```json
{
  "error": "Invalid Date"
}
```

## 🧪 Test Cases

1. **Valid Date String**: `/api/2015-12-25`
   ```json
   {"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}
   ```

2. **Unix Timestamp**: `/api/1451001600000`
   ```json
   {"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}
   ```

3. **Current Time**: `/api/`
   ```json
   {"unix": 1532389200000, "utc": "Mon, 23 Jul 2018 21:00:00 GMT"}
   ```

4. **Invalid Date**: `/api/invalid-date`
   ```json
   {"error": "Invalid Date"}
   ```

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/timestamp-microservice-fcc.git
   cd timestamp-microservice-fcc
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Development mode:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

This project can be deployed on:
- Vercel
- Railway
- Render
- Heroku
- Netlify

## 📦 Dependencies

- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development server (dev dependency)

## ✅ FreeCodeCamp Requirements

- [x] Valid date returns JSON with unix and utc keys
- [x] Unix timestamp input is handled correctly
- [x] Test case /api/1451001600000 returns expected result
- [x] Handles dates parseable by new Date()
- [x] Invalid dates return error object
- [x] Empty date parameter returns current time
- [x] Current time has both unix and utc keys

## 📝 Author

**trucvhc** - Data Engineer  
- GitHub: [@trucvhc](https://github.com/vhcvhc)

Created for FreeCodeCamp Back End Development and APIs Certification

## 📄 License

MIT License
