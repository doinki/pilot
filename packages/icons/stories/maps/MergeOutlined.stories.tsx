import type { Meta, StoryObj } from '@storybook/react';

import MergeOutlined from '../../lib/maps/MergeOutlined';

const meta: Meta<typeof MergeOutlined> = {
  component: MergeOutlined,
  tags: ['autodocs'],
  title: 'maps/MergeOutlined',
};

export default meta;
type Story = StoryObj<typeof MergeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
