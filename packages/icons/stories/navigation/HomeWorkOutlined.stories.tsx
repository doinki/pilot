import type { Meta, StoryObj } from '@storybook/react';

import HomeWorkOutlined from '../../lib/navigation/HomeWorkOutlined';

const meta: Meta<typeof HomeWorkOutlined> = {
  component: HomeWorkOutlined,
  tags: ['autodocs'],
  title: 'navigation/HomeWorkOutlined',
};

export default meta;
type Story = StoryObj<typeof HomeWorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
