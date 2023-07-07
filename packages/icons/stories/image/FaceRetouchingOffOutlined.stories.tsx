import type { Meta, StoryObj } from '@storybook/react';

import FaceRetouchingOffOutlined from '../../lib/image/FaceRetouchingOffOutlined';

const meta: Meta<typeof FaceRetouchingOffOutlined> = {
  component: FaceRetouchingOffOutlined,
  tags: ['autodocs'],
  title: 'image/FaceRetouchingOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FaceRetouchingOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
