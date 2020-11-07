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
      name: 'githubLink',
      title: 'Github Link',
      type: 'string',
      description: "Link to the project's github repo",
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'string',
      description: 'Link to the project live on the internet',
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
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
