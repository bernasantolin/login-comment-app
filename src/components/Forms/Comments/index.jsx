import React from 'react';
import { Box } from "@mui/material"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from 'components/Fields/TextField';

import CommentSection from './components/CommentSection';
import UpperSection from './components/UpperSection';

import useComment from './hooks/useComment';
import { useStyles } from './utils/styles';

export default function RecipeReviewCard() {
    const classes = useStyles();

    const {
        comments,
        commentText,
        commentIndex,
        handleSetText,
        handleAddComment,
        handleEditComment,
        handleDeleteComment
    } = useComment();

    return (
        <Box component="main" display="flex" justifyContent="center" alignItems="center" py={4}>
            <Card sx={{ width: 675 }} className={classes.card}>
                <UpperSection/>
                <CardContent>
                    <TextField
                        label="Comment"
                        value={commentText}
                        onChange={(e) => handleSetText(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                handleAddComment();
                            }
                        }}
                    /> 
                    <CommentSection
                        commentList={comments}
                        commentIndex={commentIndex}
                        editComment={handleEditComment}
                        deleteComment={handleDeleteComment}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}