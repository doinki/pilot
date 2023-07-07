import type { Meta, StoryObj } from '@storybook/react';

import CameraOutlined from '../../lib/image/CameraOutlined';

const meta: Meta<typeof CameraOutlined> = {
  component: CameraOutlined,
  tags: ['autodocs'],
  title: 'image/CameraOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
