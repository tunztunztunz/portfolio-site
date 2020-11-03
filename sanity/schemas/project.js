import { MdWork as icon } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of the project',
      type: 'string',
      description: 'What is the project called?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Describe what you did on the project',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
