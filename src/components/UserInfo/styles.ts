import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);

  &::after {
    background-color: var(--notification);
    width: 12px;
    height: 12px;

    position: absolute;
    bottom: -3px;
    right: -3px;

    border-radius: 50%;
    border: 1px solid var(--quaternary);

    text-align: right;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);

    content: '';
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  /* & svg + svg { */
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
