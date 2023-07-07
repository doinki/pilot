import type { Meta, StoryObj } from '@storybook/react';

import WorkOffOutlined from '../../lib/action/WorkOffOutlined';

const meta: Meta<typeof WorkOffOutlined> = {
  component: WorkOffOutlined,
  tags: ['autodocs'],
  title: 'action/WorkOffOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
