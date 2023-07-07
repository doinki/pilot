import type { Meta, StoryObj } from '@storybook/react';

import VideoCameraFrontOutlined from '../../lib/image/VideoCameraFrontOutlined';

const meta: Meta<typeof VideoCameraFrontOutlined> = {
  component: VideoCameraFrontOutlined,
  tags: ['autodocs'],
  title: 'image/VideoCameraFrontOutlined',
};

export default meta;
type Story = StoryObj<typeof VideoCameraFrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
