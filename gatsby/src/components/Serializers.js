/* eslint-disable react/display-name */
import React from 'react';

const BlockContent = require('@sanity/block-content-to-react');

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export const Serializer = {
  types: { block: BlockRenderer },
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          <span>{children}</span>
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};
