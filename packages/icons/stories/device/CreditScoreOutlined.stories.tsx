import type { Meta, StoryObj } from '@storybook/react';

import CreditScoreOutlined from '../../lib/device/CreditScoreOutlined';

const meta: Meta<typeof CreditScoreOutlined> = {
  component: CreditScoreOutlined,
  tags: ['autodocs'],
  title: 'device/CreditScoreOutlined',
};

export default meta;
type Story = StoryObj<typeof CreditScoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
