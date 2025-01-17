import CommonInput from "../common-input";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
export default function CommonForm({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  function renderFormElement(getCurrentFormControls, formData) {
    let element = null;
    switch (getCurrentFormControls.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormControls.type}
            placeholder={getCurrentFormControls.placeholder}
            value={formData[getCurrentFormControls.name]}
            name={getCurrentFormControls.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                [getCurrentFormControls.name]: event.target.value,
              });
            }}
          />
        );
        break;
      default:
        element = (
          <CommonInput
            type={getCurrentFormControls.type}
            placeholder={getCurrentFormControls.placeholder}
            value={formData[getCurrentFormControls.name]}
            name={getCurrentFormControls.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                [getCurrentFormControls.name]: event.target.value,
              });
            }}
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControl) =>
        renderFormElement(singleFormControl, formData)
      )}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}
