/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled/macro'
import {Link as RouterLink} from 'react-router-dom'

const Link = styled(RouterLink)({
  width: '100px',
  height: '30px',
  background: 'rgba(43, 15, 90, 0.9)',
  border: '1px solid #FFFFFF',
  borderRadius: '40px',
  fontFamily: 'Prosto One',
  fontSize: '12px',
  lineHeight: '29px',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  textAlign: 'center',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  textDecoration: 'none'
})

export {Link}
