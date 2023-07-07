import type { Meta, StoryObj } from '@storybook/react';

import WatchOutlined from '../../lib/hardware/WatchOutlined';

const meta: Meta<typeof WatchOutlined> = {
  component: WatchOutlined,
  tags: ['autodocs'],
  title: 'hardware/WatchOutlined',
};

export default meta;
type Story = StoryObj<typeof WatchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
