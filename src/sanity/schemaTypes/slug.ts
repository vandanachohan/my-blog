export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'This will be used to create the post URL',
        options: {
          source: 'title',  // Slug will automatically be generated from the title
          maxLength: 96,  // Limit the length of the slug
        },
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main Image',
      },
      {
        name: 'categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'content',
        type: 'blockContent',
        title: 'Content',
      },
    ],
  };
  