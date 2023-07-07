import type { Meta, StoryObj } from '@storybook/react';

import SubscriptionsOutlined from '../../lib/av/SubscriptionsOutlined';

const meta: Meta<typeof SubscriptionsOutlined> = {
  component: SubscriptionsOutlined,
  tags: ['autodocs'],
  title: 'av/SubscriptionsOutlined',
};

export default meta;
type Story = StoryObj<typeof SubscriptionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
