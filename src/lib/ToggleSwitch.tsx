import './toggleswitch.css';
import { forwardRef, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ToggleSwitchProps {
  value: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  onStyle?: string;
  offStyle?: string;
  onLabel?: string;
  offLabel?: string;
  width?: string;
  name?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (props, ref) => {
    const {
      value,
      checked = false,
      size = 'sm',
      onStyle = 'success',
      offStyle = 'danger',
      onLabel = 'In Use',
      offLabel = 'Not in Use',
      width: toggleWidth = '100px',
      name: toggleName = 'toggle',
      disabled = false,
      onChange,
    } = props;

    const labelOn = useRef(null);
    const labelOff = useRef(null);
    const handle = useRef(null);
    const uniqueId = uuidv4();
    const [toggleCheck, setToggleCheck] = useState(value || checked);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setToggleCheck((prevState) => !prevState);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div
        className={`toggle btn btn-${
          toggleCheck ? onStyle : offStyle
        } btn-${size} ${toggleCheck ? 'on' : 'off'} ${disabled && 'disabled'}`}
        role="button"
        style={{ width: toggleWidth }}
      >
        <input
          id={`toggle-${uniqueId}`}
          type="checkbox"
          defaultChecked={toggleCheck}
          onChange={handleOnChange}
          ref={ref}
          name={toggleName}
          disabled={disabled}
        />
        <div className="toggle-group">
          <label
            htmlFor={`toggle-${uniqueId}`}
            className={`btn btn-${onStyle} btn-${size} toggle-on`}
            ref={labelOn}
          >
            {onLabel || 'In Use'}
          </label>
          <label
            htmlFor={`toggle-${uniqueId}`}
            className={`btn btn-${offStyle} btn-${size} toggle-off`}
            ref={labelOff}
          >
            {offLabel}
          </label>
          <span
            className={`toggle-handle btn btn-light btn-${size}`}
            ref={handle}
          />
        </div>
      </div>
    );
  }
);
