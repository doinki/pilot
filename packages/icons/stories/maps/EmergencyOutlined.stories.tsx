import type { Meta, StoryObj } from '@storybook/react';

import EmergencyOutlined from '../../lib/maps/EmergencyOutlined';

const meta: Meta<typeof EmergencyOutlined> = {
  component: EmergencyOutlined,
  tags: ['autodocs'],
  title: 'maps/EmergencyOutlined',
};

export default meta;
type Story = StoryObj<typeof EmergencyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
