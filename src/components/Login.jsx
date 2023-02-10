import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link}  from 'react-router-dom';

export default function Login(){
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues : {
            firstName: "",
            eMail: ""
        }
    });

    // console.log(errors);
    return (

        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        
        <Grid item xs={12}>       
            <h1>LOGIN</h1>
        </Grid>

        <Box
          onSubmit={handleSubmit((data) => {
              console.log(data);
          })}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <Grid item xs={12}>          
        <TextField {...register("firstName", {required :"This is required."})} id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <p>{errors.firstName?.message}</p>
        {/* <Grid item xs={12}>          
        <TextField {...register("phoneNumber", {required :"This is required.", 
        minLength: {
            value: 10,
            message: "Enter 10 digits"
        }
        })} id="filled-basic" label="Phone Number" variant="filled" type="number"/>
        </Grid>
        <p>{errors.phoneNumber?.message}</p> */}
        <Grid item xs={12}>          
        <TextField {...register("eMail", {required :"This is required.",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Enter a valid e-mail address',
      }
      })} id="standard-basic" label="Email" variant="standard" />
        <p>{errors.eMail?.message}</p>
        </Grid>
            <Grid xs={12}>
            <Link to="/home">
            <Button
            type="submit"
            label="Submit"
            primary={true}
            variant={"contained"}
            >
            Submit
            </Button>
            </Link>
            </Grid>
        </Box>
        </Grid>
      );
}



