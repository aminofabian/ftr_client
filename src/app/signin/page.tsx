import Login from '@/components/Login';
import React from 'react'


type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>
  
}
const SignInPage = (props: Props) => {
  return (
    <div className=''>
    <Login className='' error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl} />
    </div>
    )
  }
  
  
  export default SignInPage;