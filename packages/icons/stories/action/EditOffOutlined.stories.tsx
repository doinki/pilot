import type { Meta, StoryObj } from '@storybook/react';

import EditOffOutlined from '../../lib/action/EditOffOutlined';

const meta: Meta<typeof EditOffOutlined> = {
  component: EditOffOutlined,
  tags: ['autodocs'],
  title: 'action/EditOffOutlined',
};

export default meta;
type Story = StoryObj<typeof EditOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
