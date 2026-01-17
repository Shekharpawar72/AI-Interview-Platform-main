# 🚀 AI Interview Preparation Platform

A comprehensive full-stack application designed to help job seekers excel in interviews and optimize their resumes using AI-powered assistance.

## 🔄 Project Updates

This repository represents the **latest and improved version** of the AI Interview & ATS Platform.

👉 For **older versions, previous features, implementations**, visit:  
🔗 https://github.com/Shekharpawar72/score-checker


---

## 📌 Project Overview

This platform combines two powerful tools for job seekers:

| Feature | Description |
|---------|------------|
| 🎤 **AI Mock Interview Engine** | Practice realistic interviews with AI-generated questions tailored to your desired role |
| 📊 **ATS Resume Analyzer** | Optimize your resume against job descriptions with AI-powered scoring and recommendations |
| 📧 **Contact & Support System** | Seamless communication and feedback channels |
| 🔐 **User Authentication** | Secure login with email verification |

---

## ✨ Key Features

### 🎤 AI Interview Platform
- **AI-Powered Questions:** Generate realistic interview questions using Google Gemini API
- **Multiple Job Roles:** Support for diverse technical and non-technical positions
- **Interactive Interview Interface:** Clean, distraction-free interview environment
- **Real-Time Feedback:** Get instant scoring and detailed suggestions for improvement
- **Resume Integration:** Upload and reference your resume during mock interviews
- **Performance Tracking:** Monitor your interview scores and progress

### 📊 Resume ATS Scoring
- **File Upload Support:** Upload PDF and DOCX resumes
- **Job Description Matching:** Compare your resume against specific job postings
- **ATS Compatibility Score:** Get a detailed ATS score with breakdowns
- **Actionable Recommendations:** Receive suggestions to improve resume for better ATS compatibility
- **Skills Analysis:** Identify missing skills and keywords
- **Optimization Tips:** Learn how to tailor your resume effectively

### 🔐 User Management
- Email-based authentication with verification
- Password reset functionality
- User profile management
- Session management with JWT tokens

### 💬 Additional Features
- Contact Us form for user inquiries
- Feedback system for continuous improvement
- FAQ section
- Terms and Conditions
- Team information page

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js with Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Build Tool:** Vite

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Nodemailer
- **File Upload:** Cloudinary
- **AI Integration:** Google Gemini API

---

## 📁 Project Structure

```
AI-Interview-Platform/
├── Backend/
│   ├── config/              # Configuration files
│   │   ├── cloudinary.js    # Cloudinary setup
│   │   ├── mongodb.js       # MongoDB connection
│   │   └── nodemailer.js    # Email configuration
│   ├── controllers/         # Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── interviewController.js
│   │   ├── feedbackController.js
│   │   └── contactUs.js
│   ├── models/              # Database schemas
│   │   ├── userModel.js
│   │   ├── interviewFormModel.js
│   │   └── feedbackModel.js
│   ├── routes/              # API routes
│   │   ├── authroutes.js
│   │   ├── userRoutes.js
│   │   ├── interviewroutes.js
│   │   ├── feedbackroutes.js
│   │   └── contactUs.js
│   ├── middlewares/         # Custom middleware
│   │   └── userAuth.js
│   ├── utils/               # Utility functions
│   │   └── geminiai.js      # Gemini API integration
│   ├── uploads/             # File uploads storage
│   ├── server.js            # Main server file
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── AI-InterviewForm.jsx
│   │   │   ├── AI-InterviewRules.jsx
│   │   │   ├── InterviewPanel.jsx
│   │   │   ├── ResumeScoreChecker.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   ├── JobDescriptionInput.jsx
│   │   │   ├── ScoreDisplay.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ResumeOptimizationTip.jsx
│   │   │   ├── GetSuggestionsCard.jsx
│   │   │   ├── DemoMode.jsx
│   │   │   └── custom/      # Custom UI components
│   │   │       ├── Navbar.jsx
│   │   │       ├── Footer.jsx
│   │   │       ├── Button.jsx
│   │   │       ├── Dashboard.jsx
│   │   │       └── ...
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AuthContainer.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── EmailVerify.jsx
│   │   │   ├── Resumechecker.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Supportpage.jsx
│   │   │   └── ...
│   │   ├── routers/         # Route configuration
│   │   │   └── Router.jsx
│   │   ├── services/        # API services
│   │   │   └── geminiService.js
│   │   ├── context/         # Context API
│   │   │   └── AppContext.jsx
│   │   ├── utils/           # Utility functions
│   │   │   └── fileUtils.jsx
│   │   ├── assets/          # Images and static files
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/              # Public assets
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Google Gemini API key
- Cloudinary account (for file uploads)

### Backend Setup

1. **Navigate to Backend Directory**
```bash
cd Backend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Create .env File**
```bash
# Backend/.env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

4. **Start Backend Server**
```bash
node server.js
# or with nodemon for development
npm install -g nodemon
nodemon server.js
```

Server runs at: `http://localhost:5000`

### Frontend Setup

1. **Navigate to Frontend Directory**
```bash
cd Frontend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Create .env File**
```bash
# Frontend/.env
VITE_API_URL=http://localhost:5000
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. **Start Frontend Development Server**
```bash
npm run dev
```

App launches at: `http://localhost:5173`

---

## 🧠 How to Use

### AI Mock Interview
1. Log in or sign up to your account
2. Navigate to the Interview section
3. Select desired job role/domain
4. Review interview rules and guidelines
5. Start the mock interview
6. Answer AI-generated questions
7. Receive feedback and score after completion
8. Review performance metrics

### Resume ATS Scoring
1. Go to Resume Checker section
2. Upload your resume (PDF, DOCX, or TXT)
3. Paste or input the job description
4. Click "Analyze Resume"
5. View your ATS compatibility score
6. Read recommendations for improvement
7. Implement suggestions to optimize your resume

### Contact & Support
1. Visit Contact Us page for inquiries
2. Submit feedback through Feedback form
3. Check FAQ section for common questions
4. Review Terms & Conditions

---

## 🛡️ Supported File Types

| Format | Status | Support |
|--------|--------|---------|
| .txt | ✅ Full | Complete parsing |
| .pdf | ⚠️ Partial | Basic extraction |
| .doc | ⚠️ Partial | Basic extraction |
| .docx | ⚠️ Partial | Basic extraction |

**Note:** Best results come from .txt or directly pasted text.

---

## 🔐 Security Features

- **JWT Authentication:** Secure token-based authentication
- **Email Verification:** User email verification on signup
- **Password Reset:** Secure password reset via email
- **Input Validation:** Server-side validation of all inputs
- **Middleware Protection:** Protected routes with authentication middleware
- **Cloudinary Integration:** Secure file upload and storage

---

## 🚀 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/verify-email` - Email verification
- `POST /api/auth/reset-password` - Password reset

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Interview
- `POST /api/interview/generate-questions` - Generate interview questions
- `POST /api/interview/submit-answers` - Submit interview answers
- `GET /api/interview/history` - Get interview history

### Resume Analysis
- `POST /api/resume/analyze` - Analyze resume

### Feedback
- `POST /api/feedback/submit` - Submit feedback
- `GET /api/feedback/list` - Get feedback list

### Contact
- `POST /api/contact/send` - Send contact message

---

## 🛠️ Customization

### Modify Interview Questions
Edit `Backend/utils/geminiai.js` to customize AI prompt for questions

### Update Scoring Algorithm
Modify scoring logic in `Frontend/services/geminiService.js`

### Customize UI Theme
Update Tailwind CSS classes in component files

### Add New File Type Support
Extend `Frontend/utils/fileUtils.jsx` with new parsing logic

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| API connection fails | Check VITE_API_URL in .env |
| Gemini API errors | Verify API key is valid and has quota |
| File upload fails | Check Cloudinary credentials |
| Email not sending | Verify Nodemailer configuration |
| MongoDB connection error | Check connection string in .env |

---

## 🤝 Contributing

1. **Fork the Repository**
   ```bash
   git clone <your-fork-url>
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make Changes & Commit**
   ```bash
   git add .
   git commit -m "Add feature description"
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open Pull Request**
   - Describe your changes clearly
   - Link any related issues
   - Wait for review

---

## 🗺️ Roadmap

- [ ] Enhanced PDF parsing with advanced text extraction
- [ ] Video-based mock interviews with recording
- [ ] Interview performance analytics dashboard
- [ ] Multiple language support
- [ ] Mobile app version
- [ ] LinkedIn integration
- [ ] Interview history and progress tracking
- [ ] Personalized learning recommendations
- [ ] Exportable interview reports
- [ ] Real-time collaboration features

---

## 📜 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👥 Authors

**Developed by:** Shekhar & Team  
**GitHub:** [Shekharpawar72](https://github.com/shekharpawar72)

---

## ❓ Support & Feedback

- 📧 **Email:** Send us feedback via the Contact Us form
- 🐛 **Bug Reports:** Open an issue on GitHub
- 💡 **Feature Requests:** Submit through Feedback form
- 📚 **FAQ:** Check the FAQ section in the app

---

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Cloudinary for file storage
- MongoDB for database
- React and Vite community
- All contributors and supporters

---

**Happy Learning! Best of luck with your interviews! 🎯**
