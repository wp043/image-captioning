import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import { useTheme } from '@mui/material/styles';

function Caption({ caption, image }) {
  const imageUrl = URL.createObjectURL(image);
  const theme = useTheme();

  return (
    <Card sx={{ marginTop: '20px' }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt="Uploaded"
      />
      <CardContent>
        <Typography variant="h6">Caption:</Typography>
        <Typography variant="body1">{caption}</Typography>
        <Box sx={{ marginTop: '10px' }}>
          <Stack direction="row" spacing={1}>
            <FacebookShareButton
              url={imageUrl}
              quote={caption}
              hashtag="#ImageCaptioning"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={imageUrl} title={caption}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Caption;