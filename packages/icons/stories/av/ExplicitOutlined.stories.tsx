import type { Meta, StoryObj } from '@storybook/react';

import ExplicitOutlined from '../../lib/av/ExplicitOutlined';

const meta: Meta<typeof ExplicitOutlined> = {
  component: ExplicitOutlined,
  tags: ['autodocs'],
  title: 'av/ExplicitOutlined',
};

export default meta;
type Story = StoryObj<typeof ExplicitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
