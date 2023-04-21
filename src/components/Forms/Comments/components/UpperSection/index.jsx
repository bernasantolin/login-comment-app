import React from 'react';
import { Box }from "@mui/material"; 
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function UpperContent() {

    return (
        <Box component="header">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="CNN News"
                subheader="April 21, 2023"
            />
            <CardMedia
                component="img"
                height="250"
                image="https://www.gov.bm/sites/default/files/styles/article_image/public/field/image/new%20covid%20update%20graphic.jpg?itok=8uDcMH5l"
                alt="Paella dish"
            />
            <CardContent sx={{ backgroundColor:"lightgray", py:3 }}>
                <Box fontWeight="bold">
                    Corona Virus Update
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Box>
    );
}