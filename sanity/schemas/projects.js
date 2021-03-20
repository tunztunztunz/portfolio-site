import { MdWork as icon } from 'react-icons/md';

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon,
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [{ type: 'project' }],
    },
  ],
  preview: {
    select: {
      title: 'Projects List',
      media: 'projects[0].image',
    },
  },
};
