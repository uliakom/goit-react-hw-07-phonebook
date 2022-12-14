import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 20px;
  }

  button {
    margin-right: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    background: background: #FFA17F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #00223E, #FFA17F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #00223E, #FFA17F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.2);
    }
  }
`;

export const Wrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
