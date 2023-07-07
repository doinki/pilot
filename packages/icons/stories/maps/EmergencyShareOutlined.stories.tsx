import type { Meta, StoryObj } from '@storybook/react';

import EmergencyShareOutlined from '../../lib/maps/EmergencyShareOutlined';

const meta: Meta<typeof EmergencyShareOutlined> = {
  component: EmergencyShareOutlined,
  tags: ['autodocs'],
  title: 'maps/EmergencyShareOutlined',
};

export default meta;
type Story = StoryObj<typeof EmergencyShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
