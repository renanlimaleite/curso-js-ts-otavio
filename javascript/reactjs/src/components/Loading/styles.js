import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;

  div {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  span {
    z-index: 2;
  }
`
