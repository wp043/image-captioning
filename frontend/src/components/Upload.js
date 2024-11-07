import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  LinearProgress,
  Alert,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import Caption from './Caption';
import History from './History';
import { motion } from 'framer-motion';

const Dropzone = styled('div')(({ theme }) => ({
  border: '2px dashed',
  borderColor: theme.palette.divider,
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  marginBottom: '20px',
}));

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setError('');
    setCaption('');
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setSelectedImage(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    setError('');
    setCaption('');
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setError('Please select an image first.');
      return;
    }
    setLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = () => {
      axios
        .post('http://localhost:5000/caption', {
          image: reader.result,
        })
        .then((response) => {
          setCaption(response.data.caption);
          setHistory([
            { image: selectedImage, caption: response.data.caption },
            ...history,
          ]);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to generate caption. Please try again.');
          setLoading(false);
        });
    };
  };

  return (
    <Box>
      <Dropzone
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('imageInput').click()}
      >
        {selectedImage ? (
          <Typography variant="body1">{selectedImage.name}</Typography>
        ) : (
          <Typography variant="body1">
            Drag & drop an image here, or click to select one
          </Typography>
        )}
      </Dropzone>
      <input
        type="file"
        id="imageInput"
        hidden
        onChange={handleImageChange}
        accept="image/*"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        disabled={loading}
      >
        Generate Caption
      </Button>
      {loading && <LinearProgress sx={{ marginTop: '20px' }} />}
      {error && (
        <Alert severity="error" sx={{ marginTop: '20px' }}>
          {error}
        </Alert>
      )}
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Caption caption={caption} image={selectedImage} />
        </motion.div>
      )}
      {history.length > 0 && <History history={history} />}
    </Box>
  );
}

export default Upload;