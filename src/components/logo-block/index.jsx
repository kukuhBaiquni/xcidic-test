import Image from 'next/image'
import logo from '../../../public/images/logo.png'

export default function LogoBlock() {
  return (
    <Image
      alt='Main-Logo'
      height={51}
      src={logo}
      width={261}
    />
  )
}
