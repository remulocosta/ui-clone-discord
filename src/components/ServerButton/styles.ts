import styled, { css } from 'styled-components';

import { IProps } from '.';

export const Button = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    left: -22px !important;
    border-radius: 0 4px 4px 0;
    content: '';
    transition: all 0.1s 0.1s;
  }


  ${(props) =>
    props.selected &&
    css`
      &::before {
        width: 9px;
        height: 40px !important;

        top: calc(50% - 20px) !important;

        background-color: var(--white);
        transform: translate(5px, 0px);

        content: '';
      }
    `}

  ${(props) =>
    props.hasNotifications &&
    css`
      &::before {
        width: 9px;
        height: 9px;

        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;
        transform: translate(5px, 0px);

        content: '';
      }
    `}

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);

  content: '${(props) => props.mentions && props.mentions}';
  display: ${(props) =>
    props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};

    &::before {
        width: 9px;
        height: 20px;

        top: calc(50% - 10px);

        background-color: var(--white);
        border-radius: 0 4px 4px 0;
        transform: translate(5px, 0px);

        content: '';
      }

      > svg {
      color: var(--white);
     }
  }

  > svg {
    color: var(--green);
  }
`;
