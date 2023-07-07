import type { Meta, StoryObj } from '@storybook/react';

import UpdateOutlined from '../../lib/action/UpdateOutlined';

const meta: Meta<typeof UpdateOutlined> = {
  component: UpdateOutlined,
  tags: ['autodocs'],
  title: 'action/UpdateOutlined',
};

export default meta;
type Story = StoryObj<typeof UpdateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
