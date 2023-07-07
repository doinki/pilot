import type { Meta, StoryObj } from '@storybook/react';

import RemoveDoneOutlined from '../../lib/action/RemoveDoneOutlined';

const meta: Meta<typeof RemoveDoneOutlined> = {
  component: RemoveDoneOutlined,
  tags: ['autodocs'],
  title: 'action/RemoveDoneOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveDoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
