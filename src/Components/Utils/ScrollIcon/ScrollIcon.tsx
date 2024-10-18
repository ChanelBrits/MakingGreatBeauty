import React from 'react';
import styled from 'styled-components';
import COLORS from '../../../constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mouse = styled.div`
  width: 50px;
  height: 5.2rem;
  border: 3px solid ${COLORS.outline};
  border-radius: 60px;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${COLORS.outline};
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }
`;

export const ScrollIcon: React.FC = () => (
  <Container>
      <Mouse />
  </Container>
);

