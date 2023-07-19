// import { TextField } from "@mui/material";
// import React from "react";

// const RenderField = (field) => {
//   const { type, name, values } = field;

//   switch (type) {
//     case "TextField":
//       return (
//         <TextField
//           key={field}
//           fullWidth
//           id={field}
//           sx={{ marginBottom: 1 }}
//           size="small"
//           name={field}
//           label={field.charAt(0).toUpperCase() + field.slice(1)}
//           value={values[field]}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           error={touched[field] && Boolean(errors[field])}
//           helperText={touched[field] && errors[field]}
//         />
//       );
//     case "select":
//       return (
//         <Select key={name} label={name}>
//           {values.map((value) => (
//             <option key={value} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>
//       );
//     default:
//       return null;
//   }
// };

// export default RenderField;
