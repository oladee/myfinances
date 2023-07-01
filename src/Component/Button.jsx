import React from 'react'

const Button = ({type, children, onclick}) => {
  switch (type.toLowerCase()) {
    case 'primary':
        return <button className='border border-1 bg-[#333] border-[#E0E0E0] px-[2rem] py-2 rounded-3xl text-[#fcfcfc] flex items-center gap-3' onClick={onclick}>{children}</button>
    case 'default':
        return <button className='border border-1 border-[#E0E0E0] px-[2rem] py-1 rounded-3xl' onClick={onclick}>{children}</button>
    default:
        return
  }
}

export default Button
