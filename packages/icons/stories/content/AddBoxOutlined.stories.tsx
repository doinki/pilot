import type { Meta, StoryObj } from '@storybook/react';

import AddBoxOutlined from '../../lib/content/AddBoxOutlined';

const meta: Meta<typeof AddBoxOutlined> = {
  component: AddBoxOutlined,
  tags: ['autodocs'],
  title: 'content/AddBoxOutlined',
};

export default meta;
type Story = StoryObj<typeof AddBoxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
