import type { Meta, StoryObj } from '@storybook/react';

import EmergencyRecordingOutlined from '../../lib/maps/EmergencyRecordingOutlined';

const meta: Meta<typeof EmergencyRecordingOutlined> = {
  component: EmergencyRecordingOutlined,
  tags: ['autodocs'],
  title: 'maps/EmergencyRecordingOutlined',
};

export default meta;
type Story = StoryObj<typeof EmergencyRecordingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
