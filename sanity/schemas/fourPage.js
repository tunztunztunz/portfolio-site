import { MdWork as icon } from 'react-icons/md';

export default {
  name: 'fourPage',
  title: '404 Page',
  type: 'document',
  icon,
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      rows: 3,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
};
