import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const AddItemModal = ({ isOpen, onAddItem, onClose, handleContentClick }) => {
  const { values, errors, isValid, resetForm, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(values, resetForm);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      handleContentClick={handleContentClick}
      title="New garment"
      buttonText="Add garment"
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        <div className="modal__label-title">
          Name
          {errors.name && (
            <span className="modal__error-msg">({errors.name})</span>
          )}
        </div>
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          minLength={2}
          maxLength={28}
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        <div className="modal__label-title">
          Image
          {errors.imageUrl && (
            <span className="modal__error-msg">({errors.imageUrl})</span>
          )}
        </div>
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__radio-legend">
          Select the weather type:
        </legend>
        <label htmlFor="hot" className="modal__radio-label">
          <input
            id="hot"
            type="radio"
            name="weather"
            checked={values.weather === "hot"}
            value={"hot"}
            onChange={handleChange}
            className="modal__radio-input"
            required
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__radio-label">
          <input
            id="warm"
            type="radio"
            name="weather"
            checked={values.weather === "warm"}
            value={"warm"}
            onChange={handleChange}
            className="modal__radio-input"
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__radio-label">
          <input
            id="cold"
            type="radio"
            name="weather"
            checked={values.weather === "cold"}
            value={"cold"}
            onChange={handleChange}
            className="modal__radio-input"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
