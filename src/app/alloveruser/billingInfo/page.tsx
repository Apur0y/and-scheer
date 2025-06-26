'use client'
import Container from '@/components/Container'
import React, { useState } from 'react'
import PaymentInfo from './PaymentInfo'
import UserBillingInfo from './UserBillingInfo'


export interface UserBillingType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  additionalInfo: string;
}


export interface PaymentInfoType{
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  nameOnCard: string;
  country: string;
  postalCode: string;


}


export default function page() {

  const [userBillingInfo, setUserBillingInfo] = useState<UserBillingType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    additionalInfo: ''
  })


  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoType>({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    nameOnCard: '',
    country: '',
    postalCode: ''
  })


  const handlePayment=(paymentInfo:PaymentInfoType)=>{
 
     console.log(userBillingInfo,paymentInfo,"Hr is user info")
  }

  return (
    <div>

      <Container>

        <h1 className="text-3xl md:text-5xl font-semibold mb-12">Billing Information</h1>
        <div className='flex flex-col md:flex-row '>
          <UserBillingInfo userBillingInfo={userBillingInfo} setUserBillingInfo={setUserBillingInfo}/>
          <PaymentInfo handlePayment={handlePayment} />

        </div>


      </Container>
    </div>
  )
}
