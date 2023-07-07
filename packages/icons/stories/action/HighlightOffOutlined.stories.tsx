import type { Meta, StoryObj } from '@storybook/react';

import HighlightOffOutlined from '../../lib/action/HighlightOffOutlined';

const meta: Meta<typeof HighlightOffOutlined> = {
  component: HighlightOffOutlined,
  tags: ['autodocs'],
  title: 'action/HighlightOffOutlined',
};

export default meta;
type Story = StoryObj<typeof HighlightOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
