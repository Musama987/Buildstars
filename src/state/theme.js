// export default {
//   color: "#ffffffff"
// };
// Yahan apne sab colors ke naam aur code likhein
const palette = {
  lightOrange: "#ffc526",  // Yeh aapka purana color tha
  darkOrange: "#F57C00",    // Yeh naya dark orange hai
  white: "#FFFFFF",
  black: "#000000",
};

// Ab yahan se poori website ka main color control hoga
export default {
  // --- YEH AAPKA MAIN COLOR HAI ---
  // Isko change karne se poori website ka color change ho jayega
  color: palette.darkOrange,

  // Baaki colors ko is tarah access kar sakte hain
  palette: palette
};