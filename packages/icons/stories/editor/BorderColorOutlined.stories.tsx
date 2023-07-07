import type { Meta, StoryObj } from '@storybook/react';

import BorderColorOutlined from '../../lib/editor/BorderColorOutlined';

const meta: Meta<typeof BorderColorOutlined> = {
  component: BorderColorOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderColorOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderColorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
