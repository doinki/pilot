import type { Meta, StoryObj } from '@storybook/react';

import EditOutlined from '../../lib/image/EditOutlined';

const meta: Meta<typeof EditOutlined> = {
  component: EditOutlined,
  tags: ['autodocs'],
  title: 'image/EditOutlined',
};

export default meta;
type Story = StoryObj<typeof EditOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
