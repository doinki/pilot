import type { Meta, StoryObj } from '@storybook/react';

import StoreOutlined from '../../lib/action/StoreOutlined';

const meta: Meta<typeof StoreOutlined> = {
  component: StoreOutlined,
  tags: ['autodocs'],
  title: 'action/StoreOutlined',
};

export default meta;
type Story = StoryObj<typeof StoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
