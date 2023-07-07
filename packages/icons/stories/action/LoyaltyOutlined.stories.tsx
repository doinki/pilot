import type { Meta, StoryObj } from '@storybook/react';

import LoyaltyOutlined from '../../lib/action/LoyaltyOutlined';

const meta: Meta<typeof LoyaltyOutlined> = {
  component: LoyaltyOutlined,
  tags: ['autodocs'],
  title: 'action/LoyaltyOutlined',
};

export default meta;
type Story = StoryObj<typeof LoyaltyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
