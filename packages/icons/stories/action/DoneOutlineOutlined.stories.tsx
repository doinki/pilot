import type { Meta, StoryObj } from '@storybook/react';

import DoneOutlineOutlined from '../../lib/action/DoneOutlineOutlined';

const meta: Meta<typeof DoneOutlineOutlined> = {
  component: DoneOutlineOutlined,
  tags: ['autodocs'],
  title: 'action/DoneOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof DoneOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
