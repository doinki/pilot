import type { Meta, StoryObj } from '@storybook/react';

import CameraRollOutlined from '../../lib/image/CameraRollOutlined';

const meta: Meta<typeof CameraRollOutlined> = {
  component: CameraRollOutlined,
  tags: ['autodocs'],
  title: 'image/CameraRollOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraRollOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
