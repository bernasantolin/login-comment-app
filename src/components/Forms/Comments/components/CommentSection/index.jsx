import React, { useState }  from 'react';
import { Box } from '@mui/material';
import { useStyles } from './utils/styles';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function CommentSection(props) {
    const {
        commentList,
        commentIndex,
        editComment,
        deleteComment
    } = props;
    const [showAllComments, setShowAllComments] = useState(false);
    const classes = useStyles();

    const visibleComments = showAllComments ? commentList : commentList.slice(0, 3);
    const hiddenComments = showAllComments ? [] : commentList.slice(3);

    const renderComments = () => {
        if (comments.length === 0) {
          return (
            <Typography align="center" color="text.secondary" mt={2}>
              No comments yet.
            </Typography>
          );
        }
      
      
        return (
          <>
            {visibleComments.map((comment) => (
              <Typography key={comment.id} paragraph>
                <strong>{comment.name}: </strong>
                {comment.body}
              </Typography>
            ))}
            
          </>
        );
      };

    return (
        <Box component="main">
            <Box id="comments" component="section" my={2}>
                {visibleComments?.map((comment, index)=>{
                        if(commentIndex !== index){
                            return (
                                <Box id="comment" key={`comment-${comment.id}`}>
                                    <Box sx={{ fontWeight: 'medium' }}>
                                        Juan Delacruz               
                                    </Box>
                                    <Typography  className={classes.comment}>
                                        {comment.text}               
                                    </Typography>
                                    <Button size="small" onClick={()=>editComment(comment.id)}>
                                        Edit
                                    </Button>
                                    <Button size="small" onClick={()=>deleteComment(comment.id)}>
                                        Delete
                                    </Button>
                                </Box>
                            )
                        }
                    }
                )}
            </Box>
            {commentList.length === 0 && (
                <Typography align="center" color="text.secondary" mt={2}>
                    No comments.
                </Typography>
            )}
            {hiddenComments.length > 0 && (
                <Box textAlign="left" fontWeight="bold">
                    <Button color="primary" onClick={() => setShowAllComments(true)}>
                        View more
                    </Button>
                </Box>
            )}
        </Box>
    );
}