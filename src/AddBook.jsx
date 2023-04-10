import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  imageLink: yup.string().required("Enter a valid url"),
  title: yup.string().required(),
  author: yup.string().required(),
  language: yup.string().required(),
  country: yup.string().required(),
  year: yup.string().required(),
});

export function AddBook() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        imageLink: "",
        title: "",
        author: "",
        language: "",
        country: "",
        year: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newbook) => {
        newBook(newbook);
      },
    });
  const newBook = async (newbook) => {
    await fetch("https://642dbbffbf8cbecdb40db560.mockapi.io/library", {
      method: "POST",
      body: JSON.stringify(newbook),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/booklist");
  };
  return (
    <div>
      <form className="book-submit" onSubmit={handleSubmit}>
        <div className="add-book">
          <h1>Add Book Details 😊</h1>
          <TextField
            name="imageLink"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.imageLink}
            label="ImageLink"
            variant="outlined"
            error={touched.imageLink && errors.imageLink}
            helperText={touched.imageLink && errors.imageLink ? errors.imageLink : null}
           
          />
          <TextField
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            label="Title"
            variant="outlined"
            error={touched.title && errors.title}
            helperText={touched.title && errors.title ? errors.title : null}
          />
          <TextField
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            label="Author"
            variant="outlined"
            error={touched.author && errors.author}
            helperText={touched.author && errors.author ? errors.author : null}
          />
          <TextField
           name="language"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.language}
           label="Language"
           variant="outlined"
           error={touched.language && errors.language}
           helperText={touched.language && errors.language ? errors.language : null}
          />
          <TextField
            name="country"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            label="Country"
            variant="outlined"
            error={touched.country && errors.country}
            helperText={touched.country && errors.country ? errors.country : null}
          />
          <TextField
            name="year"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.year}
            label="Year"
            variant="outlined"
            error={touched.year && errors.year}
            helperText={touched.year && errors.year ? errors.year : null}
          />
          <Button variant="contained" type="submit">
            Add book
          </Button>
        </div>
      </form>
    </div>
  );
}
