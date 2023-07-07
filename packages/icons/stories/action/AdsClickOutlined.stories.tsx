import type { Meta, StoryObj } from '@storybook/react';

import AdsClickOutlined from '../../lib/action/AdsClickOutlined';

const meta: Meta<typeof AdsClickOutlined> = {
  component: AdsClickOutlined,
  tags: ['autodocs'],
  title: 'action/AdsClickOutlined',
};

export default meta;
type Story = StoryObj<typeof AdsClickOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
