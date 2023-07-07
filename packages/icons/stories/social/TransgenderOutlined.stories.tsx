import type { Meta, StoryObj } from '@storybook/react';

import TransgenderOutlined from '../../lib/social/TransgenderOutlined';

const meta: Meta<typeof TransgenderOutlined> = {
  component: TransgenderOutlined,
  tags: ['autodocs'],
  title: 'social/TransgenderOutlined',
};

export default meta;
type Story = StoryObj<typeof TransgenderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
