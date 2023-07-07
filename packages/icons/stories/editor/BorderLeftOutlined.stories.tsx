import type { Meta, StoryObj } from '@storybook/react';

import BorderLeftOutlined from '../../lib/editor/BorderLeftOutlined';

const meta: Meta<typeof BorderLeftOutlined> = {
  component: BorderLeftOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
