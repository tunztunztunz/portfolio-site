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
          <span
            style={{
              textDecoration: 'underline !important',
              color: '#A05C7B',
            }}
          >
            {children}
          </span>
        </a>
      ) : (
        <a
          href={href}
          style={{
            textDecoration: 'underline !important',
            color: '#A05C7B',
          }}
        >
          {children}
        </a>
      );
    },
  },
};
