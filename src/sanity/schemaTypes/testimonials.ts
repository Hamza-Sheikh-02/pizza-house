/* eslint-disable @typescript-eslint/no-explicit-any */

export const testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      validation: (Rule: any) =>
        Rule.required()
          .positive()
          .integer()
          .error("ID is required and must be a positive integer"),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required().error("Name is required"),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "text",
      validation: (Rule: any) => Rule.required().error("Review is required"),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) =>
        Rule.min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error("Image is required"),
    },
  ],
};
