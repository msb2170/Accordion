import React, {useState} from "react";

export default function Question(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? 'open' : 'closed'}>
            <h4>{props.title}</h4>
            <span onClick={() => setOpen(!open)}>{open ? '-' : '+'}</span>
        </div>
    )
}