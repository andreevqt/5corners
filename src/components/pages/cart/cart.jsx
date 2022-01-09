import React, {
  useState,
  useEffect,
  useRef,
  useMemo
} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import Base from '../../layouts/base/base';
import Row from '../../grid/row/row';
import Col from '../../grid/col/col';
import Select from '../../form/select/select';
import { getItems } from '../../../services/actions/cart';
import Product from '../../product/product';
import TextField from '../../form/text-field/text-field';
import Button from '../../button/button';
import cartStyles from './cart.module.css';

const validationSchema = Yup.object({
  address: Yup.string().required('Требуемое поле'),
  phone: Yup.string().required('Требуемое поле'),
  comment: Yup.string(),
  name: Yup.string().required('Требуемое поле'),
  type: Yup.object().required('Требуемое поле')
});

const options = [
  { label: 'Без упаковки', value: 1 },
  { label: 'Стандартная', value: 2 },
  { label: 'Подарочная', value: 3 }
];

const Cart = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);

  const [ymaps, setYmaps] = useState(null);
  const [placemarkCoords, setPlacemarkCoords] = useState([55.75, 37.57]);

  const formik = useFormik({
    validationSchema,
    initialValues: {
      address: '',
      phone: '',
      comment: '',
      name: '',
      type: options[0]
    },
    onSubmit: ({
      address,
      phone,
      comment,
      name,
      type
    }) => {
      const toSubmit = {
        address: {
          address,
          coords: placemarkCoords
        },
        phone,
        name,
        type: type.value,
        ...(comment && { comment })
      };
      alert(JSON.stringify(toSubmit));
    }
  });

  const products = useSelector((store) => store.cart.items);

  const totalAmount = useMemo(
    () => products.reduce((acc, product) => acc + product.price * product.amount, 0),
    [products]
  );

  const decodeCoords = async (coords) => {
    const decoded = await ymaps.geocode(coords);
    const geoObject = decoded.geoObjects.get(0);
    if (geoObject) {
      return geoObject.properties.getAll().text;
    }
    return null;
  };

  const decodeAddress = async (addr) => {
    const decoded = await ymaps.geocode(addr);
    const geoObject = decoded.geoObjects.get(0);
    if (geoObject) {
      return geoObject.geometry.getCoordinates();
    }
    return null;
  };

  const handleDragEnd = async (e) => {
    const coords = e.get('target').geometry.getCoordinates();
    const addr = await decodeCoords(coords);
    if (addr) {
      formik.setFieldValue('address', addr);
    }
    setPlacemarkCoords(coords);
  };

  const onAddressBlur = async (e) => {
    const { value } = e.target;
    if (!value) {
      return;
    }

    const coords = await decodeAddress(value);
    if (coords) {
      setPlacemarkCoords(coords);
      mapRef.current.setCenter(coords);
    }

    formik.handleBlur(e);
  };

  const onTypeChange = (option) => {
    formik.setFieldValue('type', option);
  };

  const onMapClick = async (e) => {
    const coords = e.get('coords');
    const address = await decodeCoords(coords);
    if (address) {
      formik.setFieldValue('address', address);
    }
    setPlacemarkCoords(coords);
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Base>
      <h2 className="text-headings text-headings--big mb-15">Корзина</h2>
      <p className="text-regular text-regular--default mb-30">
        Есть аккаунт?&nbsp;
        <a href="#" className="text-regular text-regular--default link">Войти</a>
      </p>
      <Row reverse>
        <Col mod="md-6">
          <form onSubmit={formik.handleSubmit} className="mb-70">
            <TextField
              className="mb-30"
              id="address"
              name="address"
              label="Адрес"
              value={formik.values.address}
              onBlur={onAddressBlur}
              onChange={formik.handleChange}
              error={formik.errors.address && formik.touched.address}
              errorMsg={formik.errors.address}
            />
            <Row>
              <Col mod="md-6">
                <TextField
                  name="name"
                  label="Ваше имя"
                  className="mb-30"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.name && formik.touched.name}
                  errorMsg={formik.errors.name}
                />
              </Col>
              <Col mod="md-6">
                <TextField
                  name="phone"
                  htmlType="phone"
                  mask="+7 (000)-000-00-00"
                  label="Ваш телефон"
                  className="mb-30"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.phone && formik.touched.phone}
                  errorMsg={formik.errors.phone}
                />
              </Col>
            </Row>
            <Select
              defaultValue={formik.values.type}
              options={options}
              onChange={onTypeChange}
              placeholder="Тип упаковки"
              className="mb-30"
            />
            <TextField
              name="comment"
              className="mb-30"
              label="Введите комментарий"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.comment && formik.touched.comment}
              errorMsg={formik.errors.comment}
            />
            {
              products.length > 0 && (
                <>
                  <h3 className="text-headings text-headings--medium mb-15">Выбранные товары: </h3>
                  {
                    products.map((product) => (
                      <Product key={product.id} product={product} />
                    ))
                  }
                  <Button htmlType="submit">Купить</Button>
                </>
              )
            }
          </form>
        </Col>
        <Col mod="md-6">
          <YMaps query={{ apikey: process.env.REACT_APP_YA_API_KEY }}>
            <div className={cartStyles['map-container']}>
              <Map
                className={classNames(cartStyles['map'], 'mb-30')}
                defaultState={{ center: [55.75, 37.57], zoom: 15 }}
                instanceRef={mapRef}
                modules={['geocode']}
                onLoad={(instance) => setYmaps(instance)}
                onClick={onMapClick}
              >
                <Placemark
                  geometry={placemarkCoords}
                  options={{ draggable: true }}
                  onDragend={handleDragEnd}
                />
              </Map>
              <div className={classNames(cartStyles['amount'], 'text-headings text-headings--big')}>
                <div className={cartStyles['amount-label']}>Итог:</div>
                <div className={cartStyles['amount-value']}>
                  {totalAmount}
                  &nbsp;Руб
                </div>
              </div>
            </div>
          </YMaps>
        </Col>
      </Row>
    </Base>
  );
};

export default Cart;
