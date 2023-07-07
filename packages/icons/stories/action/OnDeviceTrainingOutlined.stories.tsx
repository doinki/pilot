import type { Meta, StoryObj } from '@storybook/react';

import OnDeviceTrainingOutlined from '../../lib/action/OnDeviceTrainingOutlined';

const meta: Meta<typeof OnDeviceTrainingOutlined> = {
  component: OnDeviceTrainingOutlined,
  tags: ['autodocs'],
  title: 'action/OnDeviceTrainingOutlined',
};

export default meta;
type Story = StoryObj<typeof OnDeviceTrainingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
