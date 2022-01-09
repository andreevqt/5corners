import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import styledProduct from './product.module.css';
import Plus from '../../icons/plus';
import Minus from '../../icons/minus';
import { decrementItem, incrementItem, removeItem } from '../../services/actions/cart';

const productProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number
});

const Product = ({ product }) => {
  const {
    id,
    img,
    name,
    price,
    amount
  } = product;

  const dispatch = useDispatch();

  const onPlusClick = () => dispatch(incrementItem(id));
  const onMinusClick = () => dispatch(decrementItem(id));

  const onRemoveClick = () => {
    if (window.confirm('Действительно хотите удалить?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styledProduct['card']}>
      <img
        src={img}
        alt={name}
        className={styledProduct['image']}
      />
      <div className={styledProduct['inner']}>
        <div className={styledProduct['col']}>
          <h5 className="text-headings text-headings--default">
            {name}
          </h5>
          <div className={styledProduct['buttons']}>
            <div className={classNames(styledProduct['dec'], 'no-select')} onClick={onMinusClick}>
              <Minus />
            </div>
            <div className={classNames('text-headings text-headings--default', styledProduct['amount'])}>
              {amount}
            </div>
            <div className={classNames(styledProduct['inc'], 'no-select')} onClick={onPlusClick}>
              <Plus />
            </div>
          </div>
        </div>
        <div className={classNames(styledProduct['col'], styledProduct['last'])}>
          <h5 className="text-headings text-headings--default">
            {price}
            &nbsp;руб
          </h5>
          <button
            className={classNames(styledProduct['remove'], 'text-regular text-regular--small')}
            onClick={onRemoveClick}
            type="button"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: productProps.isRequired
};

export default Product;
