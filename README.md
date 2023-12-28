# Multi Scribe - Google Docs Clone

## Overview

Multi Scribe is a feature-rich web application built from scratch using ReactJS, Express, Socket.io, MongoDB, and QuillJS. This project aims to provide users with a collaborative document-editing experience similar to Google Docs. With real-time synchronization, robust text editing capabilities, and a user-friendly interface, Multi Scribe empowers teams to work seamlessly on documents in the cloud.

![Screenshot (1472)](https://github.com/HIMU-2001/Multi_Scribe/assets/100105826/70d02bbf-c3c9-4fb8-833b-9a7bfbb8264f)

## Features

- **Real-time Collaboration:** Collaborate with team members in real-time on shared documents.
- **Multi-User Editing:** Multiple users can simultaneously edit the same document.
- **Rich Text Editing:** Utilizes QuillJS to offer a rich and intuitive text editing experience.
- **Persistent Storage:** Documents are stored and retrieved from a MongoDB database.

## Tech Stack

- **Frontend:** ReactJS
- **Real-time Communication:** Socket.io
- **Database:** MongoDB
- **Text Editing:** QuillJS

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/multi-scribe.git
   ```

2. Install dependencies:

   ```bash
   cd multi-scribe
   cd client
   npm install
   cd ..
   cd server
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   URL=YOUR_MONGODB_URI
   ```

4. Run the application:

   ```bash
   npm start
   ```

   Visit `http://localhost:3000` in your browser.

## Contributing

We welcome contributions from the community. If you'd like to contribute to Multi Scribe, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

Feel free to customize the README to include more specific details, instructions, or any additional features you may have implemented in your own Multi Scribe.
