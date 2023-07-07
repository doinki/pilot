import type { Meta, StoryObj } from '@storybook/react';

import AttachEmailOutlined from '../../lib/file/AttachEmailOutlined';

const meta: Meta<typeof AttachEmailOutlined> = {
  component: AttachEmailOutlined,
  tags: ['autodocs'],
  title: 'file/AttachEmailOutlined',
};

export default meta;
type Story = StoryObj<typeof AttachEmailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
