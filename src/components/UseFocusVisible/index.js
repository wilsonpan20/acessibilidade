import React from 'react';
import {useFocusVisible} from '@react-aria/interactions';

function UseFocusVisible() {
  let {isFocusVisible} = useFocusVisible({isTextInput: true});

  return (
    <>
      <div>Focus visible: {String(isFocusVisible)}</div>
      <label style={{display: 'block'}}>
        First Name: <input />
      </label>
      <label style={{display: 'block'}}>
        Last Name: <input />
      </label>
    </>
  );
}

export default UseFocusVisible;

