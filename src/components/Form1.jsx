import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
// import { logDOM } from "@testing-library/react";

export default function Form1({addContact, editContact, updateData}){
    let {register, handleSubmit,setValue, reset, formState: {errors,isDirty}} = useForm({
        defaultValues : {
            id: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            eMail: ""
        }
    });
    
    useEffect(()=>{
      if(editContact.firstName){
        reset();
        setValue("id",editContact.id);
        setValue("firstName",editContact.firstName);
        setValue("lastName",editContact.lastName);
        setValue("phoneNumber",editContact.phoneNumber);
        setValue("eMail",editContact.eMail);       
      }
    },[editContact]);
        // setValue("id",editContact.id);
        // setValue("firstName",editContact.firstName);
        // setValue("lastName",editContact.lastName);
        // setValue("phoneNumber",editContact.phoneNumber);
        // setValue("eMail",editContact.eMail); 

    const onSubmit = (data) => {
      
      isDirty && editContact.firstName?updateData(editContact.id,data):addContact(data);
      };

    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >

        <Box onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <Grid item xs={12}>          
        <TextField {...register("id", {required :"This is required."})} id="outlined-basic" label="ID" variant="outlined" />
        </Grid>
        <p>{errors.id?.message}</p>
        <Grid item xs={12}>          
        <TextField {...register("firstName", {required :"This is required."})} id="outlined-basic" label="First Name" variant="outlined" />
        </Grid>
        <p>{errors.firstName?.message}</p>
        <Grid item xs={12}>          
        <TextField {...register("lastName", {required :"This is required."})} id="outlined-basic" label="Last Name" variant="outlined" />
        </Grid>
        <p>{errors.lastName?.message}</p>
        <Grid item xs={12}>          
        <TextField 
        {...register("phoneNumber", { onChange: (e) => 
          { if (e.target.value.length > 10) {
            e.target.value = e.target.value.slice(0, 10);
         }
          },
        required :"This is required.", 
        minLength: {
            value: 10,
            message: "Enter 10 digits"
        }
        })} 
        id="filled-basic" label="Phone Number" variant="filled" type="number"/>
        </Grid>
        <p>{errors.phoneNumber?.message}</p>
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
            <Button
            type="submit"
            label="Submit"
            primary={true}
            variant={"contained"}
            >
            {isDirty && editContact.firstName ?"Update":"Submit"}
            </Button>
            </Grid>
        </Box>
        
        </Grid>
      );
}



