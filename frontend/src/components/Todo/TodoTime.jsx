
/**
 * Renders the time of a todo.
 *
 * @param {Object} props - The component props.
 * @param {string} props.time - The time of the todo.
 * @returns {JSX.Element} The rendered time component.
 */
export function TodoTime({ time='' }) {
    return (
      <div className='todo__items__time'>{time}</div>
    )
  }
  