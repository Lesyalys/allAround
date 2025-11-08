import { useState } from "react";

export const SacsessBtn = () => {

  const [isSubscruded, setIsSubscruded] = useState(flase);
  const [isAccepted, setIsAccepted] = useState(flase);
  return (
    <ul>
      <li>
        <label>Subscribe to the latest updates of site materials</label>
        <button type="check" className={` ${isSubscruded ? 'active' : ''} checkBtn`} onClick={() => setIsSubscruded(!isSubscruded)}></button>
      </li>
      <li>
        <label>
          I accept the terms of the "Personal Data Processing Policy" and, for
          the purpose of establishing feedback with me, I consent to the
          processing of my personal data.
        </label>
        <button type="check" className={`${isAccepted ? 'active' : ''} checkBtn`} onClick={() => setIsAccepted(!isAccepted)}></button>
      </li>
    </ul>
  );
};
