import type { Meta, StoryObj } from '@storybook/react';

import SchemaOutlined from '../../lib/editor/SchemaOutlined';

const meta: Meta<typeof SchemaOutlined> = {
  component: SchemaOutlined,
  tags: ['autodocs'],
  title: 'editor/SchemaOutlined',
};

export default meta;
type Story = StoryObj<typeof SchemaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
