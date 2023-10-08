import React from 'react'

export default function ToolTip({ text, direction }) {
  switch (direction) {
    case 'top': direction = 'bottom-[150%]'
      break;
    case 'right': direction = 'left-[150%]'
      break;
    case 'bottom': direction = 'top-[150%]'
      break;
    case 'left': direction = 'right-[150%]'
      break;
    case 'top-left': direction = 'bottom-[150%] right-[150%]'
      break;
    case 'top-right': direction = 'bottom-[150%] left-[150%]'
      break;
    case 'bottom-left': direction = 'top-[150%] right-[150%]'
      break;
    case 'bottom-right': direction = 'top-[150%] left-[150%]'
      break;
    default: direction = 'bottom-[150%]';
  }
  // direction = direction === 'top' ? 'bottom-[150%]' : direction === 'right' ? 'left-[150%]' : direction === 'bottom' ? 'top-[150%]' : direction === 'left' ? 'right-[150%]' : direction === 'top-left' ? 'bottom-[150%] right-[150%]' : 'bottom-[150%]';
  // console.log({direction})
  return (
    <span className={`text-xs bg-slate-800 z-[90] text-white/50 dark:text-dark-700 px-3 py-1 rounded-xl scale-0 absolute ${direction} left-1/2 -translate-x-1/2 group-hover:scale-100`}>
      {text}
    </span>
  )
}
