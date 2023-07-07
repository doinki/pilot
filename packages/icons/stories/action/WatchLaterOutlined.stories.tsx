import type { Meta, StoryObj } from '@storybook/react';

import WatchLaterOutlined from '../../lib/action/WatchLaterOutlined';

const meta: Meta<typeof WatchLaterOutlined> = {
  component: WatchLaterOutlined,
  tags: ['autodocs'],
  title: 'action/WatchLaterOutlined',
};

export default meta;
type Story = StoryObj<typeof WatchLaterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
