import "./ModalWithForm.css";

function ModalWithForm({ name }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button"></button>
        <h2 className="modal__title">{name}</h2>
        <form className={`modal__form modal__form_type_${name}`} name={name}>
          {/* Form content goes here */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
