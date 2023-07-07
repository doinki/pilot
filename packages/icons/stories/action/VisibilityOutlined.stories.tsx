import type { Meta, StoryObj } from '@storybook/react';

import VisibilityOutlined from '../../lib/action/VisibilityOutlined';

const meta: Meta<typeof VisibilityOutlined> = {
  component: VisibilityOutlined,
  tags: ['autodocs'],
  title: 'action/VisibilityOutlined',
};

export default meta;
type Story = StoryObj<typeof VisibilityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
