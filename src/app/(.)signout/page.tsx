import SignOut from '@/components/SignOut'
import React from 'react';
import { Modal } from '@/components/Modal';


const SignOutPageIntercepted = () => {
  return (
    <div>
    <Modal>
    <SignOut />
    </Modal>
    </div>
    )
  }
  
  export default SignOutPageIntercepted;