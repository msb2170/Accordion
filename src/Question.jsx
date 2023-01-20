import React, {useState} from "react";

export default function Question(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? 'open' : 'closed'}>
            <h4>{props.title}</h4>
            <span className='btn' onClick={() => setOpen(!open)}>{open ? '-' : '+'}</span>
            {open && <p>{props.info}</p>}
        </div>
    )
}