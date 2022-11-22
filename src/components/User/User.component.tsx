import React from 'react'

interface Props {
  name: string,
  email: string,
  image?: string | undefined,
  logout: () => void
}

const User = ({}: Props) => {
  return (
    <div>

    </div>
  )
}

export default User