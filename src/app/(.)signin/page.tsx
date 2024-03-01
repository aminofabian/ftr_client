import React from 'react';
import Login from '@/components/Login';
import { Modal } from '@/components/Modal';


type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>
  
}
const SignInPageIntercepted = (props: Props) => {
  return (
    <div>
    <Modal>
    <Login className='' error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl} />
    </Modal>
    </div>
    )
  }
  
  
  export default SignInPageIntercepted;