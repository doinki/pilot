import type { Meta, StoryObj } from '@storybook/react';

import WorkOutlineOutlined from '../../lib/action/WorkOutlineOutlined';

const meta: Meta<typeof WorkOutlineOutlined> = {
  component: WorkOutlineOutlined,
  tags: ['autodocs'],
  title: 'action/WorkOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
