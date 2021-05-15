import "./TextInput.css";
import { useState } from "react";

const TextInput = (props) => {
  const [valid, setValid] = useState(true);
  const {
    value,
    setValue,
    type,
    limit,
    finalRegex,
    allowedRegex,
    errorMsg,
    placeholder,
  } = props;
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          type="text"
          placeholder={placeholder}
          rows={limit / 50}
          className={valid ? "text-input text-textarea" : "text-input-invalid"}
          value={value}
          onChange={(e) => {
            if (
              e.target.value.length <= limit &&
              e.target.value.match(allowedRegex)
            )
              setValue(e.target.value);
          }}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className={valid ? "text-input" : "text-input-invalid"}
          value={value}
          onChange={(e) => {
            if (
              e.target.value.length <= limit &&
              e.target.value.match(allowedRegex)
            )
              setValue(e.target.value);
          }}
        />
      )}
      <div className="info-box">
        <div className="error-msg">
          {!value.match(finalRegex) && value.length != 0 && errorMsg}
        </div>
        <div className="word-count">
          {value.length} / {limit}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
