import type { Meta, StoryObj } from '@storybook/react';

import VideoCameraBackOutlined from '../../lib/image/VideoCameraBackOutlined';

const meta: Meta<typeof VideoCameraBackOutlined> = {
  component: VideoCameraBackOutlined,
  tags: ['autodocs'],
  title: 'image/VideoCameraBackOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoCameraBackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
