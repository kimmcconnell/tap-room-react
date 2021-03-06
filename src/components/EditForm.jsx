import React from 'react';
import PropTypes from 'prop-types';

function EditForm(props){
  let _name = props.name;
  let _brand = props.brand;
  let _price = props.price;
  let _alcoholContent = props.alcoholContent;
  let _type = props.type;
  let _fill = props.fill;

  async function handleEditKegSubmission(event){
    event.preventDefault();
    let newname = _name.value ? _name.value : props.kegList[props.selectedKeg].name;
    let newbrand = _brand.value ? _brand.value : props.kegList[props.selectedKeg].brand;
    let newprice = _price.value ? parseInt(_price.value) : props.kegList[props.selectedKeg].price;
    let newalcoholContent = _alcoholContent.value ? parseInt(_alcoholContent.value) : props.kegList[props.selectedKeg].alcoholContent;
    let newtype = _type.value ? _type.value : props.kegList[props.selectedKeg].type;
    let newfill = _fill.value ? parseInt(_fill.value) : props.kegList[props.selectedKeg].fill;
    props.onEditKeg(
      newname,
      newbrand,
      newprice,
      newalcoholContent, 
      newtype,
      newfill,
    );
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _type.value = '';
    props.onShowEditForm();
  }
  return(
    <div>
      <h2>Edit {props.kegList[props.selectedKeg].name}</h2>
      <form onSubmit={handleEditKegSubmission}>
        <div className='inner-form'>
          <label> Name<br/>
            <input
              type="text"
              id="name"
              placeholder={props.kegList[props.selectedKeg].name}
              ref={(input) => {_name = input;}}/></label>
          <label>Brand<br/>
            <input
              type="text"
              id="brand"
              placeholder={props.kegList[props.selectedKeg].brand}
              ref={(input) => {_brand = input;}}/></label>
          <label>Price<br/>
            <input
              type="number"
              id="price"
              placeholder={props.kegList[props.selectedKeg].price}
              ref={(input) => {_price = input;}}/></label>
          <label>ABV<br/>
            <input
              type="text"
              id="alcoholContent"
              placeholder={props.kegList[props.selectedKeg].alcoholContent}
              ref={(input) => {_alcoholContent = input;}}/></label>
          <label>Type<br/>
            <input
              type="text"
              id="type"
              placeholder={props.kegList[props.selectedKeg].type}
              ref={(input) => {_type = input;}}/></label>
          <label>Fill<br/>
            <input
              type="number"
              id="type"
              placeholder={props.kegList[props.selectedKeg].fill}
              ref={(input) => {_fill = input;}}/></label> <br/>
        </div>
        <button type="submit">Submit Edit</button>
      </form>
      <style jsx>{`
        .inner-form {
          display: flex;
          flex-direction: row; 
          justify-content: center;
        }
        label {
          text-align: left;
          margin: 10px;
        }
        input {
          width: 110px;
          border-radius: 5px;
          line-height: 16px;
          margin-left: -5px;
        }
        button {
          font-size: 14px;
          width: 100px;
          height: 30px;
          border-radius: 20px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}

EditForm.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  type: PropTypes.string,
  fill: PropTypes.number,
  id: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default EditForm;