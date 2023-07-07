import type { Meta, StoryObj } from '@storybook/react';

import RouterOutlined from '../../lib/hardware/RouterOutlined';

const meta: Meta<typeof RouterOutlined> = {
  component: RouterOutlined,
  tags: ['autodocs'],
  title: 'hardware/RouterOutlined',
};

export default meta;
type Story = StoryObj<typeof RouterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
