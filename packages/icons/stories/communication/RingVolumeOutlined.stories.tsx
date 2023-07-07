import type { Meta, StoryObj } from '@storybook/react';

import RingVolumeOutlined from '../../lib/communication/RingVolumeOutlined';

const meta: Meta<typeof RingVolumeOutlined> = {
  component: RingVolumeOutlined,
  tags: ['autodocs'],
  title: 'communication/RingVolumeOutlined',
};

export default meta;
type Story = StoryObj<typeof RingVolumeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
