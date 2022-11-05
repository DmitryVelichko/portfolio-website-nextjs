import React from 'react'
import {SocialIcon} from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
    <SocialIcon url='https://www.youtube.com/channel/UCMoXZFDHxWvNQHYfTo2nyPA/videos' fgColor='gray' bgColor='transparent'/>
        </div>
    </header>
  )
}