/**
 *
 * TextInput
 *
 */

import React, { memo } from 'react';
// import styled from 'styled-components';

function TextInput(type, value, handleChange, placeHolder) {
  return (
    <div>
      <input
        required
        type={type}
        value={value}
        onChange={event => handleChange(event.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default memo(TextInput);
