import type { Meta, StoryObj } from '@storybook/react';

import CheckOutlined from '../../lib/navigation/CheckOutlined';

const meta: Meta<typeof CheckOutlined> = {
  component: CheckOutlined,
  tags: ['autodocs'],
  title: 'navigation/CheckOutlined',
};

export default meta;
type Story = StoryObj<typeof CheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
