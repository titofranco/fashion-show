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
  textAlign: 'center',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  textDecoration: 'none'
})

const OptionButton = styled.button({
  backgroundSize: 'cover',
  height: '30px',
  width: '30px',
  backgroundColor: 'transparent',
  border: 'none',
  margin: '0 auto',
  opacity: '0.5'
  },
  props => ({backgroundImage: `url(${props.backgroundImage})`})
)

export {Link, OptionButton}
