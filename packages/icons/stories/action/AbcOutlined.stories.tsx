import type { Meta, StoryObj } from '@storybook/react';

import AbcOutlined from '../../lib/action/AbcOutlined';

const meta: Meta<typeof AbcOutlined> = {
  component: AbcOutlined,
  tags: ['autodocs'],
  title: 'action/AbcOutlined',
};

export default meta;
type Story = StoryObj<typeof AbcOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
