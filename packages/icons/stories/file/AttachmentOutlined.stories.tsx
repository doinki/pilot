import type { Meta, StoryObj } from '@storybook/react';

import AttachmentOutlined from '../../lib/file/AttachmentOutlined';

const meta: Meta<typeof AttachmentOutlined> = {
  component: AttachmentOutlined,
  tags: ['autodocs'],
  title: 'file/AttachmentOutlined',
};

export default meta;
type Story = StoryObj<typeof AttachmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
