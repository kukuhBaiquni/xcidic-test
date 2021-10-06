/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import Link from 'next/link'
import theme from '../../theme'

export default function Navbar() {
  return (
    <nav
      css={css`
        max-width: 100%;
        margin-top: 24px;
        background: linear-gradient(to right, #21409a 50%, #007cbd 100%);
        border-radius: 3px;
      `}
    >
      <ul
        css={css`
          list-style: none;
          padding: 0;
          display: flex;
          align-items: center;
          li {
            padding: 10px 10px;
          }
        `}
      >
        {menuList.map((item, index) => (
          <li key={index}>
            <Typography
              css={css`
              font-weight: 700;
              color: ${theme.palette.common.white};
              transition: 0.4s;
              &:hover {
                color: ${theme.palette.linkHover.main};
              };
            `}
              variant='body1'
            >
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const menuList = [
  'detikNews',
  'detikFinance',
  'detikHot',
  'detikInet',
  'detikSport',
  'detikOto',
  'detikTravel',
  'detikFood',
  'detikHealth',
  'Wolipop',
  '20Detik',
]
