import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-size: 14px;
  color: #666;
`;

export const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4444;
  }
`;
