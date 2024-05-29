import React, { useState, useEffect, useRef } from "react";

const Autocomplete = ({
  callback,
  options,
  register,
  onValueChange,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const clearButtonRef = useRef(null);
  let currentPromiseReject = useRef(null);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current.contains(e.target)) {
        closeDropDownList();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchAutocompleteData = async (query) => {
    const apiKey = "afa901301d814d4bade02390df862287";
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
      query
    )}&limit=5&apiKey=${apiKey}`;

    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onValueChange(value);
    closeDropDownList();

    if (currentPromiseReject.current) {
      currentPromiseReject.current({ canceled: true });
    }

    if (!value) {
      clearButtonRef.current.classList.remove("visible");
      return;
    }

    clearButtonRef.current.classList.add("visible");

    const promise = new Promise((resolve, reject) => {
      currentPromiseReject.current = reject;
      fetchAutocompleteData(value).then(resolve).catch(reject);
    });

    promise
      .then((data) => {
        setCurrentItems(data.features);
      })
      .catch((err) => {
        if (!err.canceled) {
          console.error(err);
        }
      });
  };

  const handleItemClick = (index) => {
    const selectedFeature = currentItems[index];
    const formattedValue = selectedFeature.properties.formatted;
    setInputValue(formattedValue);
    onValueChange(formattedValue);
    callback(selectedFeature);
    closeDropDownList();
  };

  const closeDropDownList = () => {
    setCurrentItems([]);
    setFocusedItemIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (currentItems.length === 0) return;

    if (e.keyCode === 40) {
      // arrow down
      e.preventDefault();
      setFocusedItemIndex((prevIndex) =>
        prevIndex !== currentItems.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.keyCode === 38) {
      // arrow up
      e.preventDefault();
      setFocusedItemIndex((prevIndex) =>
        prevIndex !== 0 ? prevIndex - 1 : currentItems.length - 1
      );
    } else if (e.keyCode === 13) {
      // enter
      e.preventDefault();
      if (focusedItemIndex > -1) {
        handleItemClick(focusedItemIndex);
      }
    }
  };

  useEffect(() => {
    if (focusedItemIndex > -1 && currentItems.length > 0) {
      const selectedItem = currentItems[focusedItemIndex];
      const formattedValue = selectedItem.properties.formatted;
      setInputValue(formattedValue);
      onValueChange(formattedValue);
      callback(selectedItem);
    }
  }, [focusedItemIndex]);

  const addIcon = () => (
    <svg viewBox="0 0 24 24" height="24">
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div ref={containerRef} className="autocomplete-container">
      <input
        required
        ref={inputRef}
        type="text"
        placeholder={options.placeholder}
        value={inputValue}
        {...register}
        className="geoapify-autocomplete-input"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <div
        ref={clearButtonRef}
        className="geoapify-close-button"
        onClick={(e) => {
          e.stopPropagation();
          setInputValue("");
          onValueChange("");
          callback(null);
          clearButtonRef.current.classList.remove("visible");
          closeDropDownList();
        }}
      >
        {addIcon()}
      </div>
      {currentItems.length > 0 && (
        <div className="geoapify-autocomplete-items">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`geoapify-autocomplete-item ${
                index === focusedItemIndex ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.properties.formatted}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;

// Usage example:
// <Autocomplete
//   callback={(data) => console.log("Selected option: ", data)}
//   options={{ placeholder: "Enter an address here" }}
// />
