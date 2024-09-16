import { Form, Formik } from "formik";
import React from "react";

const ContactForm = () => {
  const initialValues = {};

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <Field></Field>
        <Field></Field>
      </Form>
    </Formik>
  );
};

export default ContactForm;
