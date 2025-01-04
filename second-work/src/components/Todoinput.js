import React, { Component } from 'react'

export default class Todoinput extends Component {
  render() {
    const {item,handleChange,handleSubmit,editItem} = this.props;
    return (<div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
  <div className="input-group">
  <div className="input-group-prepend">
    <div className="input-group-text bg-primary text-white"><i className="fas fa-book"></i></div>
  </div>
  <input 
  type="text" 
  className='form-control text-capitalize' 
  placeholder='add todo item' 
  value={item} 
  onChange={handleChange}
  />
  <button type='submit' 
    disabled={item ? false : true}

  className={editItem? 'btn btn-block btn-success text-uppercase':'btn btn-block btn-primary text-uppercase ' }>{editItem?'edit item':'add item'}</button>
</div>
{/* <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase ' >add item</button> */}
      </form>
  

    </div>
    );
  }
}
