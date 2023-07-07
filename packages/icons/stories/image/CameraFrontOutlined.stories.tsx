import type { Meta, StoryObj } from '@storybook/react';

import CameraFrontOutlined from '../../lib/image/CameraFrontOutlined';

const meta: Meta<typeof CameraFrontOutlined> = {
  component: CameraFrontOutlined,
  tags: ['autodocs'],
  title: 'image/CameraFrontOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraFrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
