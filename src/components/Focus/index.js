import React from 'react';
import {useFocus} from '@react-aria/interactions';

function Focus() {
  let [events, setEvents] = React.useState([]);
  let {focusProps} = useFocus({
    onFocus: e => setEvents(
      events => [...events, 'focus']
    ),
    onBlur: e => setEvents(
      events => [...events, 'blur']
    ),
    onFocusChange: isFocused => setEvents(
      events => [...events, `focus change: ${isFocused}`]
    )
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input
        {...focusProps}
        id="example" />
      <ul
        style={{
          maxHeight: '200px',
          overflow: 'auto'
        }}>
        {events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </>
  );
}

export default Focus;