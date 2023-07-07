import type { Meta, StoryObj } from '@storybook/react';

import WorkOutlined from '../../lib/action/WorkOutlined';

const meta: Meta<typeof WorkOutlined> = {
  component: WorkOutlined,
  tags: ['autodocs'],
  title: 'action/WorkOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
