/* eslint-disable @typescript-eslint/no-explicit-any */

export const teamMembers = {
  name: "teamMembers",
  title: "Team Members",
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
      validation: (Rule: any) => Rule.required().error("Role is required"),
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
