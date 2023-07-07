import type { Meta, StoryObj } from '@storybook/react';

import OpacityOutlined from '../../lib/action/OpacityOutlined';

const meta: Meta<typeof OpacityOutlined> = {
  component: OpacityOutlined,
  tags: ['autodocs'],
  title: 'action/OpacityOutlined',
};

export default meta;
type Story = StoryObj<typeof OpacityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
