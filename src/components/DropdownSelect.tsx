import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SelectLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #667085;
`;

const Select = styled.select`
  background: #f9fbfc;
  border: 1px solid #eaeced;
  border-radius: 7px;
  padding: 15px;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;

  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: 100%;
  background-repeat: no-repeat;

  &:focus {
    outline: 1px solid #7d5fff;
  }
`;
const Option = styled.option`
  padding: 15px;
`;

interface Props {
  label: string;
  register: object;
}

const DropdownSelect = ({ label, register }: Props) => {
  const options = ['student', 'teacher'];
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <Select {...register}>
        <Option></Option>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};
export default DropdownSelect;
