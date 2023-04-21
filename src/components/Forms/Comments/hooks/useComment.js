import { useState, useEffect } from 'react';
import { customAlphabet } from 'nanoid'

const LOCAL_STORAGE_KEY = "todoApp.comments";

export default function useComment() {
    const nanoid = customAlphabet('1234567890abcdef', 10)
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [commentIndex, setCommentIndex] = useState(-1);

    useEffect(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTasks) {
            setComments(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        if(comments?.length > 0){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments));
        }
    }, [comments]);

    const handleSetText = text => setCommentText(text);
    
    const handleAddComment = () => {
        if (commentText) {
            if(commentIndex > -1){
                const refreshList = comments.map((d, i)=>{
                    if(commentIndex === i){
                        return {
                            text: commentText,
                            id: d.id
                        }
                    } else {
                        return d;
                    }
                });

                setCommentText("");
                setComments(refreshList);
                setCommentIndex(-1);
            } else {
                const newTask = {
                    text: commentText,
                    id:nanoid(),
                };
                setComments([...comments, newTask]);
                setCommentText("");
            }
        }
    };

    const handleEditComment = (id) => {
        let index = comments.findIndex(item => item.id === id)
        let _newArr = comments.filter(item => item.id === id)[0];
        setCommentIndex(index);
        setCommentText(_newArr?.text);
    };

    const handleDeleteComment = (id) => {
        let _newArr = comments.filter(item => item.id !== id);
        setComments(_newArr);
        localStorage.setItem(LOCAL_STORAGE_KEY, _newArr);
    };

    return {
        comments,
        commentText,
        commentIndex,
        handleSetText,
        handleAddComment,
        handleEditComment,
        handleDeleteComment
    }
}