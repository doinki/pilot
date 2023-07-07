import type { Meta, StoryObj } from '@storybook/react';

import PaidOutlined from '../../lib/action/PaidOutlined';

const meta: Meta<typeof PaidOutlined> = {
  component: PaidOutlined,
  tags: ['autodocs'],
  title: 'action/PaidOutlined',
};

export default meta;
type Story = StoryObj<typeof PaidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
