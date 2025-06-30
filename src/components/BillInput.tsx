import InputBox from './InputBox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BillInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: string) => void;
}) {
  return (
    <InputBox
      label="Bill"
      icon={AttachMoneyIcon}
      value={value}
      onChange={onChange}
    />
  );
}

export default BillInput;
