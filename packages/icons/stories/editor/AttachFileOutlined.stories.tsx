import type { Meta, StoryObj } from '@storybook/react';

import AttachFileOutlined from '../../lib/editor/AttachFileOutlined';

const meta: Meta<typeof AttachFileOutlined> = {
  component: AttachFileOutlined,
  tags: ['autodocs'],
  title: 'editor/AttachFileOutlined',
};

export default meta;
type Story = StoryObj<typeof AttachFileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
