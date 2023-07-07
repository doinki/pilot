import type { Meta, StoryObj } from '@storybook/react';

import SwitchCameraOutlined from '../../lib/image/SwitchCameraOutlined';

const meta: Meta<typeof SwitchCameraOutlined> = {
  component: SwitchCameraOutlined,
  tags: ['autodocs'],
  title: 'image/SwitchCameraOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchCameraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
