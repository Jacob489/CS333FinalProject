
/**
 * Renders an input field for a todo item.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the todo item.
 * @param {function} props.handleInputChange - The event handler for input change.
 * @returns {JSX.Element} The rendered input field.
 */
export function TodoInput({ title, time, handleInputChange, handleTimeChange }) {

  /**
   * Handles the onFocus event for the input element.
   * Selects the text in the input element.ss
   *
   * @param {Event} e - The onFocus event object.
   * @returns {void}
   */
  const handleOnFocus = (e) => {
    e.target.select();
  }
  
  //adds a secondary input for the time input

  return (
    <div> 
    <input 
      autoFocus
      type="text" 
      value={title} 
      onChange={handleInputChange} 
      onFocus={handleOnFocus} 
      placeholder="Enter title"
    />
  
  
    <input 
    autoFocus
    type="text"
    value={time}
    onChange={handleTimeChange}
    placeholder="Enter time"
    />
    </div>
  );
  
}