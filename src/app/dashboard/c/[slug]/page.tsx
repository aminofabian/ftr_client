

import React from 'react'
import { FC } from 'react';

interface PageProps {
  params: {
    slug: string
  }
}

const page = ({params}: PageProps) => {
  return (
    <div>page</div>
  )
}

page.propTypes = {}

export default page