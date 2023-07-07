import type { Meta, StoryObj } from '@storybook/react';

import VerticalSplitOutlined from '../../lib/action/VerticalSplitOutlined';

const meta: Meta<typeof VerticalSplitOutlined> = {
  component: VerticalSplitOutlined,
  tags: ['autodocs'],
  title: 'action/VerticalSplitOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalSplitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
