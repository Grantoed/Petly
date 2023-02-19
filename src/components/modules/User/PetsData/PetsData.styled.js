import styled from 'styled-components';
import { theme } from 'theme/theme';

export const TitleBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  margin-top: 46px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: none;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 821px;
    margin: 0 0 12px 0;
  }
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
`;
export const TitleSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
`;
export const PetBlcok = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 80px;
`;
export const PetCard = styled.div`
  max-width: 280px;
  position: relative;
  background-color: ${theme.colors.wt};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 16px 20px 20px 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: none;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 821px;
  }
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
  @media (min-width: 1280px) {
  }
`;
export const ListItem = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Img = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
  }
`;

export const ListItemInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
  }
`;

export const Icon = styled.div`
  position: absolute;
  margin-top: 280px;
  margin-left: 227.5px;
  top: 0;
  bottom: 0;
  width: 12.5px;
  height: 12.5px;
  background-color: salmon;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-left: 650px;
  }
  @media (min-width: 1280px) {
    margin-top: 20px;
    margin-left: 738px;
    width: 44px;
    height: 44px;
  }
`;

export const PhotoBlock = styled.div``;

export const AddPetBlock = styled.div`
  display: flex;
  align-items: center;
`;
