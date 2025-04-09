# Healthcare Project

## Overview
This project is designed to manage and streamline healthcare operations, providing a digital solution for patient management, appointment scheduling, medical records, and healthcare analytics.

## Features
- Patient registration and management
- Appointment scheduling and reminders
- Electronic Health Records (EHR) management
- Prescription management
- Healthcare analytics and reporting
- Secure authentication and authorization

## Technologies Used
- Frontend: React, Next
- Backend: Node.js
- Database: MongoDB, appwrite
- Authentication: appwrite, sentry

## Installation

### Setup Steps
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/healthcare-project.git
   cd healthcare-project
   ```

2. Install dependencies:
   ```
   npm install
   ```
   
3. Set up environment variables: 
  make .env file in root folder
   ```
    PROJECT_ID=
    API_KEY=
    DATABASE_ID=
    PATIENT_COLLECTION_ID=
    DOCTOR_COLLECTION_ID=
    APPOINTMENT_COLLECTION_ID=
    NEXT_PUBLIC_BUCKET_ID=
    NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_ADMIN_PASSKEY=111111
   ```
   Edit the `.env` file with your configuration.

4. Start the development server:
   ```
   npm run dev
   ```


## Project Structure
```
healthcare/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.js
├── public/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
└── README.md
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Contact
- Your Name - mihirpatel6075@gmail.com
- Project Link: https://github.com/MihirPatel204/Healthify
