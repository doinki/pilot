import type { Meta, StoryObj } from '@storybook/react';

import BorderTopOutlined from '../../lib/editor/BorderTopOutlined';

const meta: Meta<typeof BorderTopOutlined> = {
  component: BorderTopOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderTopOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderTopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
