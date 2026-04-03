const defaultTemplates = {
  welcome: "Welcome to Textio! Start sending messages today.",
  support: "Need help? Contact our support team.",
};

const customTemplates = {
  promo: "Limited time offer! Sign up now.",
  support: "Reach out to us for exclusive deals.",
};

const mergeTemplates = (defaultTemplates, customTemplates) => {
  return { ...defaultTemplates, ...customTemplates };
};

console.log(mergeTemplates(defaultTemplates, customTemplates));

// don't touch below this line

export { mergeTemplates };
