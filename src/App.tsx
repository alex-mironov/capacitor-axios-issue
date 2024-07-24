import axios from 'axios'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const fileFirst = files?.item(0);

    if (!fileFirst) return

    console.log('name:', fileFirst.name); 
    console.log('size:', fileFirst.size);
    console.log('type:', fileFirst.type);

    const formData = new FormData();
    formData.append('file', fileFirst);

    try {
      const response = await axios.post('https://upload.imagekit.io/api/v1/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log('File uploaded successfully:', response.status);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          title="Attach files"
          type="file"
          accept="image/*"
          id="file"
          multiple
          onChange={handleChange}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
