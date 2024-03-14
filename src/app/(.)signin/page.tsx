import React from 'react';
import Login from '@/components/Login';
import { Modal } from '@/components/Modal';


type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>
  
}
const SignInPageIntercepted = (props: Props) => {
  return (
    <Modal>
    <Login className='' error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl} />
    </Modal>
    )
  }
  
  
  export default SignInPageIntercepted;