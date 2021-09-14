import React, { useRef, useState } from 'react'
import './index.css'
export default () => {
    const [open, setOpen] = useState(false)
    const divRef = useRef()
    const data = new Array(50).fill(' ')
    
    return (
        <div className="flex justify-between p-8 items-end">
            <div
            ref={divRef}
            className={
                `flex flex-wrap gap-x-4 overflow-hidden w-11/12 transition-all duration-1000
                ${open ? 'max-h-n' : 'max-h-16'}`
            }>
                {
                    data.map((_, key) => (
                        <div className="h-8 flex items-center" key={key}>OOOOOOOOOOOOOO</div>
                    ))
                }
            </div>
            <div className="h-8 leading-8 cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? '收起' : '展开'}
            </div>
        </div>
    )
}