import { ButtonSend } from "./ButtonSend";

export const FormBody = () => {
  return (
    <form className="registration-form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="form-input" placeholder="Thomas" />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-input" placeholder="Edison" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="email@email.ru"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input type="text" className="form-input" placeholder="DD.MM.YYYY" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="************"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Repeat Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="************"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label className="form-label">Select your favourite genre</label>
          <input
            type="text"
            className="form-input"
            placeholder="Favorite genre"
          />
        </div>
      </div>

      <div className="form-checkboxes">
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Subscribe to the latest updates of site materials
        </label>

        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>I accept the terms of the "Personal
          Data Processing Policy" and, for the purpose of establishing feedback
          with me, I consent to the processing of my personal data.
        </label>
      </div>
      <ButtonSend />
    </form>
  );
};
