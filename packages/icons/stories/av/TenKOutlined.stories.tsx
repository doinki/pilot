import type { Meta, StoryObj } from '@storybook/react';

import TenKOutlined from '../../lib/av/TenKOutlined';

const meta: Meta<typeof TenKOutlined> = {
  component: TenKOutlined,
  tags: ['autodocs'],
  title: 'av/TenKOutlined',
};

export default meta;
type Story = StoryObj<typeof TenKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
