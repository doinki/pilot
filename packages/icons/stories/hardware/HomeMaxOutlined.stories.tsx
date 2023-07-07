import type { Meta, StoryObj } from '@storybook/react';

import HomeMaxOutlined from '../../lib/hardware/HomeMaxOutlined';

const meta: Meta<typeof HomeMaxOutlined> = {
  component: HomeMaxOutlined,
  tags: ['autodocs'],
  title: 'hardware/HomeMaxOutlined',
};

export default meta;
type Story = StoryObj<typeof HomeMaxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
