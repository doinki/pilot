import type { Meta, StoryObj } from '@storybook/react';

import RadarOutlined from '../../lib/device/RadarOutlined';

const meta: Meta<typeof RadarOutlined> = {
  component: RadarOutlined,
  tags: ['autodocs'],
  title: 'device/RadarOutlined',
};

export default meta;
type Story = StoryObj<typeof RadarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
