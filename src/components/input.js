import React from "react";
import './input.css'
import { nanoid } from 'nanoid';

// key for Put Cursor focus at End of Input
export default function Value(props) {

    const id = nanoid()
    return (
        <input autoFocus key={id} id="display" type="text" value={props.value} readOnly />
    )
}
