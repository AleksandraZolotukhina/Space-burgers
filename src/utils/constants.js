import PropTypes from 'prop-types';

export const modalRoot = document.querySelector("#react-modals");
export const menuItemPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
});

export const url = "https://norma.nomoreparties.space/api";
export const soketUrl = "wss://norma.nomoreparties.space/orders";
export const orderStatus = {
    done: "Выполнен",
    created: "Создано",
    pending: "В ожидании"
}