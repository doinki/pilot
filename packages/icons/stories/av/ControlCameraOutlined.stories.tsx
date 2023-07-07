import type { Meta, StoryObj } from '@storybook/react';

import ControlCameraOutlined from '../../lib/av/ControlCameraOutlined';

const meta: Meta<typeof ControlCameraOutlined> = {
  component: ControlCameraOutlined,
  tags: ['autodocs'],
  title: 'av/ControlCameraOutlined',
};

export default meta;
type Story = StoryObj<typeof ControlCameraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
