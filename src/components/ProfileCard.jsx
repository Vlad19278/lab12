import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Avatar } from "@mui/material";
import { Box } from "@mui/system";

const ProfileCard = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", mx: "auto", mt: 5, p: 2 }}>
      <Box display="flex" justifyContent="center" mt={2}>
        
        <Avatar
          sx={{ width: 80, height: 80 }}
          src={image || "/avatar.jpg"} 
          alt="Profile Picture"
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          Влад
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
          Опис профілю користувача. Тут можна додати коротку інформацію про себе.
        </Typography>
        
        {/* Кнопка для вибору фото */}
        <Button variant="contained" component="label" sx={{ mt: 1 }}>
          Завантажити фото
          <input
            type="file"
            hidden
            onChange={handleImageChange}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
