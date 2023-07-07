import type { Meta, StoryObj } from '@storybook/react';

import HorizontalSplitOutlined from '../../lib/action/HorizontalSplitOutlined';

const meta: Meta<typeof HorizontalSplitOutlined> = {
  component: HorizontalSplitOutlined,
  tags: ['autodocs'],
  title: 'action/HorizontalSplitOutlined',
};

export default meta;
type Story = StoryObj<typeof HorizontalSplitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
