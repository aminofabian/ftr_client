import SignOut from '@/components/SignOut'
import React from 'react';
import { Modal } from '@/components/Modal';


const SignOutPageIntercepted = () => {
  return (
    <div className='container'>
    <Modal className='w-full'>
    <SignOut />
    </Modal>
    </div>
    )
  }
  
  export default SignOutPageIntercepted;