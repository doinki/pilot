import type { Meta, StoryObj } from '@storybook/react';

import AddHomeOutlined from '../../lib/action/AddHomeOutlined';

const meta: Meta<typeof AddHomeOutlined> = {
  component: AddHomeOutlined,
  tags: ['autodocs'],
  title: 'action/AddHomeOutlined',
};

export default meta;
type Story = StoryObj<typeof AddHomeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
