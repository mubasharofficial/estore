import React, { useState, useEffect } from 'react';
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';
import {commerce}  from '../../lib/commerce';
const AddressForm = ({checkoutToken})  => 
{

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();
 const countries = Object.entries(shippingCountries).map(([code, name])=>({id: code,label: name}));
 const fetchShippingCounteries = async (checkoutTokenId)=>{
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);

  }

  useEffect(()=>{
    fetchShippingCounteries(checkoutToken.id);
  },[])

  return (
    <>
       <Typography variant='h6' gutterBottom>Shipping Address</Typography>
       <FormProvider {...methods}>
       
        <form onSubmit=''>
          <Grid container spacing={3} >
          <FormInput required name='firstName' label='First Name' />
          <FormInput required name='lastName' label='Last Name' />
          <FormInput required name='Address1' label='Address' />
          <FormInput required name='email' label='Email' />
          <FormInput required name='city' label='City' />
          <FormInput required name='zipCode' label='ZIP / Postal Code' />

                     <Grid item xs={12} sm={6} >
                      <InputLabel>Shipping Countery </InputLabel>
                      <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                        
                          {countries.map((country)=> (
                            <MenuItem key={country.id} value={country.id}>
                               {country.label}
                            </MenuItem>
                          ))}
                         
                      </Select>
                    </Grid>
                
                {/*
                    <Grid item xs={12} sm={6} >
                      <InputLabel>Shipping Subdivision </InputLabel>
                      <Select value={1} fullWidth onChange={}>
                        <MenuItem key={0} value={0}>
                          Select Me
                        </MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                      <InputLabel>Shipping Options </InputLabel>
                      <Select value={1} fullWidth onChange={}>
                        <MenuItem key={0} value={0}>
                          Select Me
                        </MenuItem>
                      </Select>
                    </Grid> */}

                    
          </Grid>
        </form>


       </FormProvider> 
    </>
  )
}

export default AddressForm