import './toggleswitch.css';
import React, { forwardRef, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

type ToggleSwitchProps = {
  value: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onStyle?: string;
  offStyle?: string;
  onLabel?: string;
  offLabel?: string;
  checked?: boolean;
  width?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (props, ref) => {
    const {
      value,
      checked = false,
      size = 'sm',
      onStyle = 'success',
      offStyle = 'danger',
      onLabel = 'On',
      offLabel = 'Off',
      width: toggleWidth = '150px',
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

    const ToggleSwitchContainer = styled.div`
      width: ${toggleWidth};
    `;

    return (
      <ToggleSwitchContainer
        className={`toggle btn btn-${
          toggleCheck ? onStyle : offStyle
        } btn-${size} ${toggleCheck ? 'on' : 'off'} ${disabled && 'disabled'}`}
        role="button"
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
            {onLabel}
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
      </ToggleSwitchContainer>
    );
  }
);
