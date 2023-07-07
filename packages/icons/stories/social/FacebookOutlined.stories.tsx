import type { Meta, StoryObj } from '@storybook/react';

import FacebookOutlined from '../../lib/social/FacebookOutlined';

const meta: Meta<typeof FacebookOutlined> = {
  component: FacebookOutlined,
  tags: ['autodocs'],
  title: 'social/FacebookOutlined',
};

export default meta;
type Story = StoryObj<typeof FacebookOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
