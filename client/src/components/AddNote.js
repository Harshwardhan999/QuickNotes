import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotesContext } from '../Contexts/NotesContextProvider';

const AddNote = () => {
  
  const Navigate = useNavigate();
  const { addNote } = useContext(NotesContext);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    addNote(e.target.title.value, e.target.tag.value, e.target.description.value);
    Navigate('/home');
  }
  
  return (
    <div className='mx-4 my-4'>
      
      <h3 className=' text-center'>Quick Notes</h3>
      
      <form onSubmit={onSubmit}>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label jiji"><b>Title</b></label>
          <input type="text" className="form-control bgyelo" id="title" name="title" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="tag" className="form-label jiji"><b>Tag</b></label>
          <input type="text" className="form-control bgyelo" id="tag" name="tag" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label jiji" style={{ display: "block" }}><b>Description</b></label>
          <textarea name="description" id="description" className='bgyelo' style={{ width: '100%' }} rows="10" required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary addbutton">Add This Note</button>

      </form>

    </div>
  )
}

export default AddNote