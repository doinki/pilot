import type { Meta, StoryObj } from '@storybook/react';

import BorderHorizontalOutlined from '../../lib/editor/BorderHorizontalOutlined';

const meta: Meta<typeof BorderHorizontalOutlined> = {
  component: BorderHorizontalOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderHorizontalOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderHorizontalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
