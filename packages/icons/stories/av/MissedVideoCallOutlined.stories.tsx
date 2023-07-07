import type { Meta, StoryObj } from '@storybook/react';

import MissedVideoCallOutlined from '../../lib/av/MissedVideoCallOutlined';

const meta: Meta<typeof MissedVideoCallOutlined> = {
  component: MissedVideoCallOutlined,
  tags: ['autodocs'],
  title: 'av/MissedVideoCallOutlined',
};

export default meta;
type Story = StoryObj<typeof MissedVideoCallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
