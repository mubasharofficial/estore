import React, {useState} from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';
import {commerce}  from '../../lib/commerce';
const AddressForm = ()  => 
{
  const methods = useForm();

  [shippingCountries, setShippingCountries] = useState([]);
  [shippingCountry, setShippingCountry] = useState('');
  [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  [shippingSubdivision, setShippingSubdivision] = useState('');
  [shippingOptions, setShippingOptions] = useState([]);
  [shippingOption, setShippingOption] = useState('');

  fetchShippingCounteries = async (checkoutTokenId)=>{
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
  }

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
                      <Select value={1} fullWidth onChange={}>
                        <MenuItem key={0} value={0}>
                          Select Me
                        </MenuItem>
                      </Select>
                    </Grid>

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
                    </Grid>
          </Grid>
        </form>


       </FormProvider> 
    </>
  )
}

export default AddressForm