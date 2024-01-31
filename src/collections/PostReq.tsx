import { CollectionConfig } from "payload/types";

const Post: CollectionConfig = {
  slug: "posts", // Collection slug
  // auth: true,
  admin: {
    useAsTitle: "post",
  },

  fields: [
    {
      name: "title", // Field name
      label: "Title", // Field label (optional)
      type: "text", // Field type
      required: true, // Whether the field is required or not
    },
    {
      name: "content", // Field name
      label: "Content", // Field label (optional)
      type: "richText", // Field type
      required: true, // Whether the field is required or not
    },
  ],
};

export default Post;
