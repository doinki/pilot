import type { Meta, StoryObj } from '@storybook/react';

import VolumeDownOutlined from '../../lib/av/VolumeDownOutlined';

const meta: Meta<typeof VolumeDownOutlined> = {
  component: VolumeDownOutlined,
  tags: ['autodocs'],
  title: 'av/VolumeDownOutlined',
};

export default meta;
type Story = StoryObj<typeof VolumeDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
