import type { Meta, StoryObj } from '@storybook/react';

import AddCardOutlined from '../../lib/action/AddCardOutlined';

const meta: Meta<typeof AddCardOutlined> = {
  component: AddCardOutlined,
  tags: ['autodocs'],
  title: 'action/AddCardOutlined',
};

export default meta;
type Story = StoryObj<typeof AddCardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
