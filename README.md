# AI-Powered Image Captioning Web Application


An interactive web application that generates descriptive captions for uploaded images using state-of-the-art AI models. 

---
## Features

- **Image Upload**: Upload images via drag-and-drop or file selection.
- **AI-Powered Captioning**: Generates captions using a pre-trained image captioning model.
- **Interactive UI**: Enhanced user interface with Material-UI and responsive design.
- **Theme Switching**: Toggle between light and dark modes.
- **History**: View a list of previously captioned images within the session.
- **Social Sharing**: Share images and captions on Facebook and Twitter.
- **Loading Indicators**: Visual feedback during caption generation.
- **Error Handling**: User-friendly error messages and validation.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **Python** (3.7 or later)
- **pip** (Python package installer)
- **Virtual Environment** (optional but recommended)

### Installation

#### Clone the Repository

```bash
git clone https://github.com/wp043/image-captioning-app.git
cd image-captioning-app
```

#### Setup the Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask app:

   ```bash
   python app.py
   ```

   The backend server will start on `http://localhost:5000`.

#### Setup the Frontend

1. Open a new terminal and navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

   The frontend will open in your browser at `http://localhost:3000`.

---

## Usage

1. **Upload an Image**: Use the drag-and-drop area or click to select an image file.

2. **Generate Caption**: Click the "Generate Caption" button.

3. **View Results**: The generated caption will appear below the image.

4. **Share**: Use the Facebook and Twitter buttons to share the image and caption.

5. **Toggle Theme**: Use the theme toggle button in the top-right corner to switch between light and dark modes.

6. **View History**: Scroll down to see a list of previously captioned images in the current session.