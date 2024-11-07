import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
} from '@mui/material';

function History({ history }) {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '20px' }}>
        Previous Captions
      </Typography>
      <List>
        {history.map((item, index) => (
          <div key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  src={URL.createObjectURL(item.image)}
                />
              </ListItemAvatar>
              <ListItemText primary={item.caption} />
            </ListItem>
            {index < history.length - 1 && <Divider component="li" />}
          </div>
        ))}
      </List>
    </div>
  );
}

export default History;
