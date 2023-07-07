import type { Meta, StoryObj } from '@storybook/react';

import DrawOutlined from '../../lib/editor/DrawOutlined';

const meta: Meta<typeof DrawOutlined> = {
  component: DrawOutlined,
  tags: ['autodocs'],
  title: 'editor/DrawOutlined',
};

export default meta;
type Story = StoryObj<typeof DrawOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
