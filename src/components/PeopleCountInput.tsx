import InputBox from './InputBox';
import PersonIcon from '@mui/icons-material/Person';

function PeopleCountInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: string) => void;
}) {
  return (
    <InputBox
      label="Number of People"
      icon={PersonIcon}
      value={value}
      onChange={onChange}
    />
  );
}

export default PeopleCountInput;
