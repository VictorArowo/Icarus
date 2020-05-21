import React, { useState, useRef, useEffect } from "react";

interface Props {
  text: string;
  handleSubmit: (name: "title" | "description", value: string) => void;
  name: "title" | "description";
  className?: string;
}

const Editable: React.FC<Props> = ({ text, handleSubmit, className, name }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
    handleSubmit(name, value);
  };

  const handleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing ? (
        <input
          value={value}
          ref={inputRef}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-auto ml-10 text-white bg-transparent form-input"
        />
      ) : (
        <div className={className} onClick={handleClick}>
          <span>{value}</span>
        </div>
      )}
    </div>
  );
};

export default Editable;
