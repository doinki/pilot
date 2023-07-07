import type { Meta, StoryObj } from '@storybook/react';

import AddToHomeScreenOutlined from '../../lib/device/AddToHomeScreenOutlined';

const meta: Meta<typeof AddToHomeScreenOutlined> = {
  component: AddToHomeScreenOutlined,
  tags: ['autodocs'],
  title: 'device/AddToHomeScreenOutlined',
};

export default meta;
type Story = StoryObj<typeof AddToHomeScreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
