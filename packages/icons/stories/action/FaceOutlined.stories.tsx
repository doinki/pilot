import type { Meta, StoryObj } from '@storybook/react';

import FaceOutlined from '../../lib/action/FaceOutlined';

const meta: Meta<typeof FaceOutlined> = {
  component: FaceOutlined,
  tags: ['autodocs'],
  title: 'action/FaceOutlined',
};

export default meta;
type Story = StoryObj<typeof FaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
