import React, { useState } from 'react';
import { Card, Box, Grid, Button, Typography } from '@mui/material';
import { ReactComponent as Logo } from "assets/logo.svg";
import { useStyles } from './utils/styles';
import { useAuth } from "hooks/useAuth";

import TextField from 'components/Fields/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export default function LoginForm() {
    const navigate = useNavigate();
    const classes = useStyles();
    const { hasAuth, handleLogin } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            handleLogin(values)
        },
    });

    // const [form, setForm] = useState({
    //     email:"",
    //     password:"",
    // });

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Box component="form" className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                    <Grid container id="container" className={classes.container}>
                        <Grid item align="center" xs={12}>
                            <Logo/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align='center' variant='h6'>
                                Welcome to Fire I.O
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                fullWidth
                                type="submit"
                                size="large"
                                variant="contained"
                                className={classes.loginBtn}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </div>
    );
}