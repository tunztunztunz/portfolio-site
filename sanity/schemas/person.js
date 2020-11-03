import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'people',
  title: 'People',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of person',
      type: 'string',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
