export const styleMerger = (desktopOptions, mobileOptions) => {
  // Merges the desktop and mobile styles,
  const stylesObject = {};

  // DO AN IF CHECK FOR existing options objects
  for (const key in desktopOptions) {
    // Check for nested Objects
    if (typeof desktopOptions[key] === "object") {
      const nestedObjectKey = Object.keys(desktopOptions[key]);
      const nestedObject = {};
      nestedObjectKey.forEach((nestedKey) => {
        const value = desktopOptions[key][nestedKey];
        // Check for any value in mobile styles
        const mobileValue = mobileOptions[key][nestedKey];
        if (mobileValue !== undefined) {
          nestedObject[nestedKey] = mobileValue;
        } else {
          nestedObject[nestedKey] = value;
        }
      });
      stylesObject[key] = nestedObject;

      // If not a nested object
    } else {
      if (mobileOptions[key] !== undefined) {
        stylesObject[key] = mobileOptions[key];
      } else {
        stylesObject[key] = desktopOptions[key];
      }
    }
  }

  return stylesObject;
};
