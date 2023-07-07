import type { Meta, StoryObj } from '@storybook/react';

import VisibilityOffOutlined from '../../lib/action/VisibilityOffOutlined';

const meta: Meta<typeof VisibilityOffOutlined> = {
  component: VisibilityOffOutlined,
  tags: ['autodocs'],
  title: 'action/VisibilityOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VisibilityOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
