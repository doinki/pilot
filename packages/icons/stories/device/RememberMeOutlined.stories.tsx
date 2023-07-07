import type { Meta, StoryObj } from '@storybook/react';

import RememberMeOutlined from '../../lib/device/RememberMeOutlined';

const meta: Meta<typeof RememberMeOutlined> = {
  component: RememberMeOutlined,
  tags: ['autodocs'],
  title: 'device/RememberMeOutlined',
};

export default meta;
type Story = StoryObj<typeof RememberMeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
