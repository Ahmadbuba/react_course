import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();

    resetMailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const mailInputClasses = mailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Mail</label>
        <input
          type="mail"
          id="email"
          value={enteredMail}
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
        />
        {mailInputHasError && (
          <p className="error-text">Please enter a valid mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
