import type { Meta, StoryObj } from '@storybook/react';

import CameraAltOutlined from '../../lib/image/CameraAltOutlined';

const meta: Meta<typeof CameraAltOutlined> = {
  component: CameraAltOutlined,
  tags: ['autodocs'],
  title: 'image/CameraAltOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
