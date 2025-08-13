# Unit Converter App (Client & Server)

This is a **full-stack unit converter application** built using **React (frontend)** and **Node.js/Express (backend)**.  
It allows users to convert values between different measurement units via API calls.



## 📂 Project Structure

- **`client/`** – React-based frontend (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).
- **`server/`** – Node.js + Express backend that handles API requests.


## 🌐 Live Demo

### **Frontend**
Deployed on **Vercel**:  
🔗 [Unit Converter Frontend](https://sreenihaar-unit-converter.vercel.app/)

### **Backend (API)**
Deployed on **Render**:  
🔗 [Unit Converter API](https://sreenihaar-unit-converter.onrender.com/)



## 📡 Example API Call

```javascript
axios.get(
  "https://sreenihaar-unit-converter.onrender.com/api/convert",
  {
    params: {
      value: 12,
      fromUnit: "meter",
      toUnit: "kilometer"
    }
  }
)
```

**Sample Response:**

```json
{
  "fromValue": 12,
  "toValue": 0.012,
  "fromUnit": "m",
  "toUnit": "km"
}
```

## ⏳ Note on Server Startup
The backend is hosted on Render’s free tier, which automatically suspends the server after 15 minutes of inactivity.

When accessed after a pause, the first request may take ~1 minute to respond while the server restarts.

## 🚀 Running Locally
In the project root directory:

Start the Client
```bash
cd client
npm install
npm start
```
Runs the app in development mode at http://localhost:3000

## Start the Server
``` bash
cd server
npm install
npm start
```

Runs the backend API at http://localhost:5000 (or configured port).

## 🏗 Build for Production
### Frontend
``` bash
cd client
npm run build
```
Builds the app for production in the build folder.
Optimized for performance with minified files and hashed filenames.

## 💡 Feedback & Suggestions
If you have ideas or improvements, feel free to reach out!
Your feedback is always welcome. 🙌